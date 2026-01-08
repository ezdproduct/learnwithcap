"use client";
import React, { useRef, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ServiceCard from './ServiceCard';

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
    subtitle = "BẠN LÀ NHIỀU HƠN",
    titlePrefix = "Cá nhân",
    titleSuffix = "Doanh nghiệp",
    description = "Hoạt động trong lĩnh vực"
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const isScrollingRef = useRef(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = () => {
        if (!scrollRef.current || isScrollingRef.current) return;
        const container = scrollRef.current;
        const { scrollLeft } = container;

        const cards = container.querySelectorAll('.snap-start');
        if (cards.length === 0) return;

        // Calculate card width from actual DOM positions for maximum accuracy
        const firstCard = cards[0] as HTMLElement;
        const secondCard = cards[1] as HTMLElement;
        const cardWidth = secondCard
            ? secondCard.offsetLeft - firstCard.offsetLeft
            : firstCard.offsetWidth + 12;

        // Calculate index based on how many card widths we have scrolled
        // We use Math.round to switch to the next index when we've scrolled 50% of the way to it
        const index = Math.round(scrollLeft / cardWidth);
        const cappedIndex = Math.max(0, Math.min(index, items.length - 1));

        if (cappedIndex !== currentIndex) {
            setCurrentIndex(cappedIndex);
        }
    };

    // Add useEffect to handle initial state and resize
    useEffect(() => {
        const timer = setTimeout(() => handleScroll(), 100);
        window.addEventListener('resize', handleScroll);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleScroll);
        };
    }, [items.length]);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;

        const cards = container.querySelectorAll('.snap-start');
        if (cards.length === 0) return;

        const firstCard = cards[0] as HTMLElement;
        const secondCard = cards[1] as HTMLElement;
        const cardWidth = secondCard
            ? secondCard.offsetLeft - firstCard.offsetLeft
            : firstCard.offsetWidth + 12;

        let newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;

        // Loop behavior
        if (newIndex < 0) newIndex = items.length - 1;
        if (newIndex >= items.length) newIndex = 0;

        // Update state immediately for snapier UI
        setCurrentIndex(newIndex);
        isScrollingRef.current = true;

        container.scrollTo({
            left: newIndex * cardWidth,
            behavior: 'smooth'
        });

        // Reset the scroll flag after the transition is roughly finished
        setTimeout(() => {
            isScrollingRef.current = false;
        }, 600);
    };

    return (
        <section className="bg-white pt-20 pb-0 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="section-header mb-5">
                    <div className="mb-5">
                        <span className="bg-[#58b2f6] text-white text-[10px] font-bold px-3 py-1.5 rounded-[8px] uppercase tracking-[0.1em]">
                            {subtitle}
                        </span>
                    </div>
                    <h2 className="text-[40px] font-bold text-[#0b2b4d] mb-1 leading-snug">
                        {titlePrefix} <span className="text-[#0b2b4d] font-light mx-1.5">|</span> {titleSuffix}
                    </h2>
                    <h2 className="text-[28px] font-normal text-[#0b2b4d] leading-snug mb-8">{description}</h2>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide snap-x snap-mandatory px-4 md:px-0"
                    >
                        <div className="flex gap-3 w-full">
                            {Array.isArray(items) && items.map((item, index) => (
                                <ServiceCard
                                    key={index}
                                    title={item.title}
                                    image={item.image}
                                    href={item.href}
                                    className="snap-start"
                                />
                            ))}
                            {/* Universal Spacer: Ensures the last card can always reach the left edge for accurate counter */}
                            <div className="flex-none w-[calc(100vw-120px)] md:w-[calc(100%-320px)] lg:w-[66.666%]" />
                        </div>
                    </div>

                    {/* Numeric Pagination */}
                    <div className="mt-2 flex items-center justify-between">
                        {/* Navigation */}
                        <div className="flex gap-4 ml-auto">
                            <button
                                onClick={() => scroll('left')}
                                className="w-12 h-12 rounded-full border border-[#7c3aed] flex items-center justify-center text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white transition-all duration-300"
                            >
                                <ArrowLeft size={24} strokeWidth={1.5} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-12 h-12 rounded-full border border-[#7c3aed] flex items-center justify-center text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white transition-all duration-300"
                            >
                                <ArrowRight size={24} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceCarousel;
