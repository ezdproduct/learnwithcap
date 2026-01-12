import React from "react";
import { Headset } from "lucide-react";

interface CTASectionProps {
    title?: string;
    buttonText?: string;
    buttonLink?: string;
    videoUrl?: string;
}

const CTASection = ({
    title = "Với mục tiêu cung cấp giải pháp học tiếng Anh hiệu quả, từ xây dựng nền tảng đến phát triển sự tự tin trong giao tiếp công việc và cuộc sống, CAP sẽ luôn đồng hành cùng bạn trên hành trình chinh phục tiếng Anh trong lĩnh vực xây dựng, kiến trúc và nội thất.",
    buttonText = "Tư Vấn Ngay",
    buttonLink = "#contact",
    videoUrl = "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
}: CTASectionProps) => {
    return (
        <section className="relative h-[380px] md:h-[450px] lg:h-[320px] overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={videoUrl} type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#002A4C]/85"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="max-w-4xl">
                        <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed mb-8">
                            {title}
                        </p>
                        <a
                            href={buttonLink}
                            className="inline-flex items-center gap-2 bg-white text-[#0b2b4d] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <Headset size={20} />
                            <span>{buttonText}</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
