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
    return (
        <section className="bg-white py-8 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="reveal-piano">
                    <div className="mb-8 items-start text-left">
                        <span className="bg-[#58b2e3] text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
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

                <div className="reveal-piano mt-20">
                    <div className="mb-8 items-start text-left">
                        <span className="bg-[#58b2e3] text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
                            {difficultiesHeader?.badge || "BẠN ĐANG"}
                        </span>
                        <h2 className="text-4xl font-bold text-[#0b2b4d] mt-4">
                            {difficultiesHeader?.title || "Gặp những khó khăn"}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {difficulties.map((item, idx) => (
                            <div key={idx} className="piano-item">
                                <FeatureCard
                                    {...item}
                                    icon={typeof item.icon === 'string' ? getIcon(item.icon, { size: 32 }) : item.icon}
                                    bg="bg-[#0b2b4d]"
                                    textColor="text-white"
                                    iconColor="text-white"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Insights;
