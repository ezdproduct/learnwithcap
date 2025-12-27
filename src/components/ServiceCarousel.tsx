"use client";
import React, { useRef, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCard from './ServiceCard';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface ServiceItem {
    title: string;
    image: string;
    href?: string;
}

interface ServiceCarouselProps {
    items: ServiceItem[];
    subtitle?: string;
    titlePrefix?: string;
    titleSuffix?: string;
    description?: string;
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({
    items,
    subtitle = "BẠN LÀ",
    titlePrefix = "Cá nhân",
    titleSuffix = "Doanh nghiệp",
    description = "Hoạt động trong lĩnh vực"
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalPaginationSteps, setTotalPaginationSteps] = useState(1);
    const sectionRef = useRef<HTMLElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);

    // Initial Animation
    useEffect(() => {
        if (!cardsContainerRef.current) return;
        const cards = cardsContainerRef.current.children;

        gsap.fromTo(cards,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    }, []);

    // Handle steps calculation
    useEffect(() => {
        const calculateSteps = () => {
            if (!scrollRef.current) return;
            const clientWidth = scrollRef.current.clientWidth;
            let visibleCount = 1;
            if (clientWidth >= 1024) visibleCount = 3;
            else if (clientWidth >= 768) visibleCount = 2;

            // Total steps = Total items - initial visible items + 1
            const steps = Math.max(1, items.length - visibleCount + 1);
            setTotalPaginationSteps(steps);
        };

        calculateSteps();
        window.addEventListener('resize', calculateSteps);
        return () => window.removeEventListener('resize', calculateSteps);
    }, [items.length]);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth } = scrollRef.current;
        const cardWidth = scrollWidth / items.length;
        const index = Math.round(scrollLeft / cardWidth);
        const cappedIndex = Math.min(index, totalPaginationSteps - 1);
        if (cappedIndex !== currentIndex) {
            setCurrentIndex(Math.max(0, cappedIndex));
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const { scrollWidth } = scrollRef.current;
        const cardWidth = scrollWidth / items.length;

        let newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;

        // Loop behavior
        if (newIndex < 0) newIndex = totalPaginationSteps - 1;
        if (newIndex >= totalPaginationSteps) newIndex = 0;

        scrollRef.current.scrollTo({
            left: newIndex * cardWidth,
            behavior: 'smooth'
        });
    };

    return (
        <section ref={sectionRef} className="bg-white py-12 overflow-hidden flex flex-col justify-center min-h-[700px]">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="section-header mb-6">
                    <div className="mb-2">
                        <span className="bg-[#58b2f6] text-white text-[10px] font-bold px-3 py-1.5 rounded-[8px] uppercase tracking-wider">
                            {subtitle}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0b2b4d] mb-2">
                        {titlePrefix} <span className="text-gray-200 font-light mx-2">|</span> {titleSuffix}
                    </h2>
                    <p className="text-gray-400 text-lg font-medium">{description}</p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide snap-x snap-mandatory px-4 md:px-0"
                    >
                        <div ref={cardsContainerRef} className="flex gap-3 w-full">
                            {items.map((item, index) => (
                                <ServiceCard
                                    key={index}
                                    title={item.title}
                                    image={item.image}
                                    href={item.href}
                                    className="snap-start"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Numeric Pagination */}
                    <div className="mt-1 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[#5c5c96] font-bold text-xl">
                            <div className="w-8 h-8 overflow-hidden relative flex justify-center items-center">
                                <div
                                    className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                                    style={{ transform: `translateY(-${currentIndex * 32}px)` }}
                                >
                                    {Array.from({ length: totalPaginationSteps }).map((_, i) => (
                                        <span key={i} className="h-8 flex items-center justify-center">
                                            {i + 1}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="w-10 h-[1.5px] bg-gray-100 relative overflow-hidden rounded-full">
                                <div
                                    className="absolute left-0 top-0 h-full bg-[#5c5c96] transition-all duration-500 rounded-full"
                                    style={{ width: `${((currentIndex + 1) / totalPaginationSteps) * 100}%` }}
                                />
                            </div>

                            <span className="text-gray-300">{totalPaginationSteps}</span>
                        </div>

                        {/* Navigation */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => scroll('left')}
                                className="w-11 h-11 rounded-full border border-gray-100 flex items-center justify-center text-[#0b2b4d] hover:bg-[#0b2b4d] hover:text-white transition-all duration-300"
                            >
                                <ArrowLeft size={18} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-11 h-11 rounded-full border border-gray-100 flex items-center justify-center text-[#0b2b4d] hover:bg-[#0b2b4d] hover:text-white transition-all duration-300"
                            >
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceCarousel;
