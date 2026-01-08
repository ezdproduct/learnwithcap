import React from "react";
import FeatureCard from "@/components/ui/FeatureCard";
import { getIcon } from "@/components/ui/IconHelper";

interface InsightItem {
    icon: string | React.ReactNode;
    text: string;
    bg?: string;
    highlight?: boolean;
}

interface InsightsProps {
    wants: InsightItem[];
    difficulties: InsightItem[];
    wantsHeader: any;
    difficultiesHeader: any;
}

const Insights = ({ wants, difficulties, wantsHeader, difficultiesHeader }: InsightsProps) => {
    const wantsRef = React.useRef<HTMLDivElement>(null);
    const diffRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    } else {
                        entry.target.classList.remove("in-view");
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -30% 0px"
            }
        );

        if (wantsRef.current) observer.observe(wantsRef.current);
        if (diffRef.current) observer.observe(diffRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="bg-gradient-to-b from-white to-[#f0f9ff] pt-6 pb-12 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div ref={wantsRef} className="reveal-piano">
                    <div className="mb-8 items-start text-left">
                        <span className="bg-[#59B4E9] text-white text-[12px] font-bold px-3 py-1.5 rounded-[8px] uppercase tracking-[0.1em]">
                            {wantsHeader?.badge || "BẠN MUỐN"}
                        </span>
                        <h2 className="text-4xl font-bold text-[#0b2b4d] mt-4">
                            {wantsHeader?.title || "Mong muốn của bạn"}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {wants.map((item, idx) => (
                            <div key={idx} className="piano-item">
                                <FeatureCard
                                    {...item}
                                    icon={typeof item.icon === 'string' ? getIcon(item.icon, { size: 32, strokeWidth: 1.2 }) : item.icon}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div ref={diffRef} className="reveal-piano mt-10">
                    <div className="mb-8 items-start text-left">
                        <span className="bg-[#59B4E9] text-white text-[12px] font-bold px-3 py-1.5 rounded-[8px] uppercase tracking-[0.1em]">
                            {difficultiesHeader?.badge || "BẠN ĐANG"}
                        </span>
                        <h2 className="text-4xl font-bold text-[#0b2b4d] mt-4">
                            {difficultiesHeader?.title || "Gặp những khó khăn"}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {difficulties.map((item, idx) => {
                            // Gradient colors from lighter blue to dark navy
                            const gradientColors = [
                                "bg-[#5c7ca0]",
                                "bg-[#4c6c8f]",
                                "bg-[#3d5c7e]",
                                "bg-[#2d4c6d]",
                                "bg-[#1e3c5c]",
                                "bg-[#0b2b4d]"
                            ];
                            const bgColor = gradientColors[idx % gradientColors.length]; // cycle if more than 6 items

                            return (
                                <div key={idx} className="piano-item">
                                    <FeatureCard
                                        {...item}
                                        icon={typeof item.icon === 'string' ? getIcon(item.icon, { size: 32 }) : item.icon}
                                        bg={bgColor}
                                        textColor="text-white"
                                        iconColor="text-white"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Insights;
