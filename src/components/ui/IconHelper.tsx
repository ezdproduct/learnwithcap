import React from "react";
import {
    ArrowRight,
    ArrowLeft,
    Mail,
    Phone,
    MessageSquare,
    Plus,
    Briefcase,
    RefreshCcw,
    Globe,
    Frown,
    Mic,
    CheckCircle,
    MicOff,
    GraduationCap,
    Hammer,
    Ruler,
    Clock,
    Ear,
    Rocket,
    Menu,
    Facebook,
    Youtube,
    Send,
    CircleArrowDown,
    Package,
    CircleDot,
    LucideProps
} from "lucide-react";

export const icons: Record<string, React.ComponentType<LucideProps>> = {
    ArrowRight,
    ArrowLeft,
    Mail,
    Phone,
    MessageSquare,
    Plus,
    Briefcase,
    RefreshCcw,
    Globe,
    Frown,
    Mic,
    CheckCircle,
    MicOff,
    GraduationCap,
    Hammer,
    Ruler,
    Clock,
    Ear,
    Rocket,
    Menu,
    Facebook,
    Youtube,
    Send,
    CircleArrowDown,
    Package,
    CircleDot,
};

export const getIcon = (name: string, props: LucideProps = {}) => {
    const IconComponent = icons[name];
    return IconComponent ? <IconComponent {...props} /> : null;
};
