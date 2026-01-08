import React from "react";

interface FeatureCardProps {
    icon: React.ReactNode;
    text: string;
    bg?: string;
    textColor?: string;
    iconColor?: string;
    height?: string;
}

const FeatureCard = ({
    icon,
    text,
    bg,
    textColor = "text-[#0b2b4d]",
    iconColor = "text-[#0b2b4d]",
    height = "h-full",
}: FeatureCardProps) => {
    const isHex = bg?.startsWith("bg-[#");
    const style = isHex && bg ? { backgroundColor: bg.match(/\[(.*?)\]/)?.[1] } : {};
    const bgClass = isHex ? "" : bg;

    return (
        <div
            className={`${bgClass} ${textColor} p-6 rounded-xl ${height} min-h-[180px] flex flex-col justify-between group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:z-10`}
            style={style}
        >
            <div
                className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ${iconColor} mb-4`}
            >
                <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                    {icon}
                </div>
            </div>
            <p className="text-[15px] font-medium leading-relaxed">{text}</p>
        </div>
    );
};

export default FeatureCard;
