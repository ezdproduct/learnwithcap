import React, { useState, useEffect } from "react";
import { MOCK_HERO } from "@/lib/mock-data";

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
        <section className="pt-0 pb-0 container mx-auto px-4 md:px-8">
            <div className="relative h-[550px] rounded-[32px] overflow-hidden group hero-container">
                {heroImages.map((image: string, index: number) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-[1]" : "opacity-0 z-0"
                            }`}
                    >
                        <img
                            src={image}
                            alt={`Hero slide ${index + 1}`}
                            className="w-full h-full object-cover animate-zoom-in"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b4d]/90 via-[#0b2b4d]/40 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2b4d]/80 via-transparent to-transparent"></div>
                    </div>
                ))}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16 max-w-4xl hero-content text-left">
                    <h1 className="text-[40px] font-extrabold leading-tight text-white mb-6 drop-shadow-lg tracking-tight whitespace-pre-line">
                        {title}
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;
