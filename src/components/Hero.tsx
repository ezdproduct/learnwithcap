"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MOCK_HERO } from "@/lib/mock-data";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

interface HeroProps {
    hero: {
        title?: string;
        images?: string[];
    } | null;
}

const Hero = ({ hero }: HeroProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroImages = hero?.images || MOCK_HERO.images;
    const title = hero?.title || MOCK_HERO.title;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <section className="h-[80vh] md:h-screen w-full bg-white pt-[84px] pb-4 px-4 md:pb-8 md:px-8 overflow-hidden">
            <div className="relative h-full w-full rounded-[24px] md:rounded-[32px] overflow-hidden group hero-container">
                {heroImages.map((image: string, index: number) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-[1]" : "opacity-0 z-0"
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`Hero slide ${index + 1}`}
                            fill
                            priority={index === 0}
                            quality={85}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                            className="object-cover animate-zoom-in"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#002A4C]/90 via-[#002A4C]/40 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#002A4C]/80 via-transparent to-transparent"></div>
                    </div>
                ))}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-16 max-w-4xl hero-content text-left">
                    <div className="font-extrabold leading-tight text-white mb-6 drop-shadow-lg tracking-tight whitespace-pre-line">
                        <AnimatedHeading
                            text={title}
                            tag="h1"
                            fillColor="#ffffff"
                            ghostColor="rgba(255, 255, 255, 0.2)"
                            className="text-white"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
