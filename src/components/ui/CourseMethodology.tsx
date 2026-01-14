import React, { useEffect, useRef } from 'react';
import SectionBadge from './SectionBadge';
import AnimatedHeading from './AnimatedHeading';

interface MethodologyItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface CourseMethodologyProps {
    badge?: string;
    title: string;
    intro: string;
    items: MethodologyItem[];
    image: string;
}

const CourseMethodology: React.FC<CourseMethodologyProps> = ({
    badge,
    title,
    intro,
    items,
    image
}) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="min-h-screen py-24 bg-white overflow-hidden reveal-piano flex items-center">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    {/* Left Side: Image with Decoration */}
                    <div className="lg:w-[45%] relative animate-fade-up">
                        <div className="absolute -top-10 -left-10 w-full h-full bg-[#59B4E9]/10 rounded-[40px] -z-10 transform rotate-3"></div>
                        <div className="relative rounded-[40px] overflow-hidden shadow-2xl z-10 aspect-[4/5] lg:aspect-auto lg:h-[600px]">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                            {/* Decorative blue bar as seen in image */}
                            <div className="absolute top-1/2 -left-4 w-8 h-32 bg-[#59B4E9] rounded-full transform -translate-y-1/2 hidden lg:block"></div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:w-[55%] space-y-12">
                        <div className="space-y-6 flex flex-col items-start piano-item">
                            {badge && <SectionBadge className="mb-2">{badge}</SectionBadge>}
                            <AnimatedHeading
                                text={title}
                                tag="h2"
                                fillColor="#002A4C"
                                ghostColor="rgba(0, 42, 76, 0.2)"
                                className="font-bold text-[#002A4C] text-sub-h2"
                            />
                            <p className="text-gray-400 text-base leading-relaxed max-w-2xl font-light">
                                "{intro}"
                            </p>
                        </div>

                        <div className="space-y-10">
                            {items.map((item, index) => (
                                <div key={index} className="flex gap-6 group piano-item">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#f0f9ff] flex items-center justify-center text-[#59B4E9] group-hover:bg-[#59B4E9] group-hover:text-white transition-all duration-300 shadow-sm border border-blue-50">
                                        {React.isValidElement(item.icon) ? React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 }) : item.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-[#002A4C] group-hover:text-[#59B4E9] transition-colors leading-tight">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-400 text-[13px] leading-relaxed font-light">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseMethodology;
