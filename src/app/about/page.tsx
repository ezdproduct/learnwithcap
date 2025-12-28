"use client";
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';
import ServiceCarousel from '@/components/ServiceCarousel';
export default function AboutPage() {
    const [serviceItems, setServiceItems] = useState<any[]>([]);
    const [servicesHeader, setServicesHeader] = useState<any>(null);
    const [testimonialsHeader, setTestimonialsHeader] = useState<any>(null);

    useEffect(() => {
        const fetchContent = async () => {
            const { data: sectionsData } = await supabase
                .from('page_sections')
                .select('*');

            if (sectionsData) {
                sectionsData.forEach((section: any) => {
                    if (section.section_key === 'services' && section.data) {
                        setServiceItems(section.data.items || []);
                        setServicesHeader(section.data.header);
                    }
                    if (section.section_key === 'testimonials' && section.data) {
                        setTestimonialsHeader(section.data.header);
                    }
                });
            }
        };
        fetchContent();
    }, []);


    return (
        <div className="bg-white min-h-screen">
            <Header />

            <div className="bg-[#0b2b4d] py-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5 9.5 9.75 12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                    </svg>
                </div>
                <div className="container mx-auto px-4 md:px-8 relative z-10 hero-content">
                    <span className="text-[#3da9fc] font-bold tracking-wider text-sm uppercase mb-2 block">Về Chúng Tôi</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">CAP English Training</h1>
                    <p className="text-white/80 text-lg max-w-3xl leading-relaxed">
                        Đơn vị tiên phong trong đào tạo tiếng Anh chuyên ngành Xây dựng - Kiến trúc.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20 about-story">
                    <div>
                        <h2 className="text-3xl font-bold text-[#0b2b4d] mb-6">Câu Chuyện Của Chúng Tôi</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                            <p>
                                Được thành lập với sứ mệnh nâng cao năng lực ngôn ngữ cho đội ngũ kỹ sư và kiến trúc sư Việt Nam, CAP (Construction And Professional English) đã khẳng định vị thế là đơn vị đào tạo hàng đầu trong lĩnh vực này.
                            </p>
                            <p>
                                Chúng tôi hiểu rằng, trong môi trường xây dựng quốc tế, Tiếng Anh không chỉ là công cụ giao tiếp mà còn là chìa khóa mở ra những cơ hội nghề nghiệp và dự án tầm cỡ. Tuy nhiên, tiếng Anh tổng quát là chưa đủ. Các kỹ sư cần một vốn từ vựng chuyên sâu, khả năng đọc hiểu bản vẽ, hợp đồng và kỹ năng đàm phán thi công chính xác.
                            </p>
                            <p>
                                Đó chính là lý do CAP ra đời - để lấp đầy khoảng trống giữa tiếng Anh học thuật và thực tế công trường.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl skew-y-3 transform transition-transform hover:skew-y-0 duration-500">
                            <img src="https://course.learnwithcap.com/wp-content/uploads/2025/10/danist-soh-8Gg2Ne_uTcM-unsplash-scaled-1.webp" alt="About CAP" className="w-full h-auto" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 stats-grid">
                    {/* Dynamic Stats if available, otherwise fallback */}
                    {(testimonialsHeader?.stats || [
                        { value: "4+", label: "Năm Kinh Nghiệm" },
                        { value: "18k+", label: "Học Viên Đã Học" },
                        { value: "20+", label: "Giảng Viên Chuyên Gia" }
                    ]).map((stat: any, sIdx: number) => (
                        <div key={sIdx} className="bg-[#0b2b4d] p-8 rounded-xl text-center text-white stat-card">
                            <span className="text-4xl font-bold text-[#3da9fc] block mb-2">{stat.value}</span>
                            <p className="text-xs uppercase font-bold text-white/60 tracking-wider font-montserrat">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reuse ServiceCarousel for consistency */}
            <div className="bg-[#f8fafc]">
                <ServiceCarousel
                    items={serviceItems}
                    subtitle={servicesHeader?.subtitle}
                    titlePrefix={servicesHeader?.titlePrefix}
                    titleSuffix={servicesHeader?.titleSuffix}
                    description={servicesHeader?.description}
                />
            </div>

            <Footer />
        </div>
    );
}
