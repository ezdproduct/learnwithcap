import React from "react";
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
    children: React.ReactNode;
    className?: string; // Allow override if absolutely necessary
}

const SectionBadge: React.FC<SectionBadgeProps> = ({ children, className }) => {
    return (
        <span className={cn(
            "bg-[#59B4E9] !text-white text-badge font-bold px-3 py-1.5 rounded-full uppercase mb-2 inline-block w-fit tracking-[0.1em]",
            className
        )}>
            {children}
        </span>
    );
};

export default SectionBadge;
