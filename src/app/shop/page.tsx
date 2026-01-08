"use client";
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { TABLES } from '@/lib/constants';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ShopPage() {
    const [courses, setCourses] = useState<any[]>([]);
    const [testimonials, setTestimonials] = useState<any[]>([]);
    const [testimonialsHeader, setTestimonialsHeader] = useState<any>(null);

    useEffect(() => {
        const fetchContent = async () => {
            const { data: sectionsData } = await supabase
                .from(TABLES.PAGE_SECTIONS)
                .select('*');

            if (sectionsData) {
                sectionsData.forEach((section: any) => {
                    if (section.section_key === 'courses' && Array.isArray(section.data)) setCourses(section.data);
                    if (section.section_key === 'testimonials' && section.data) {
                        setTestimonials(section.data.items || []);
                        setTestimonialsHeader(section.data.header);
                    }
                });
            }
        };
        fetchContent();
    }, []);

    return (
        <div className="bg-[#f4faff] min-h-screen">
            <Header />

            <div className="bg-[#0b2b4d] py-16 text-white text-center">
                <h1 className="text-[40px] font-bold mb-4">Các Khóa Học Của Chúng Tôi</h1>
                {/* <p className="text-white/80 max-w-2xl mx-auto px-4">
                    Nâng cao năng lực chuyên môn và kỹ năng giao tiếp với các khóa học được thiết kế chuyên biệt cho ngành xây dựng.
                </p> */}
            </div>

            <div className="container mx-auto px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.length > 0 ? (
                        courses.map((course, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                                {/* Modules Preview as a conceptual image if no main image */}
                                <div className="h-48 bg-[#001e3d] relative overflow-hidden flex items-center justify-center p-4">
                                    {course.modules && course.modules[0] ? (
                                        <img src={course.modules[0].img} alt={course.type} className="w-full h-full object-cover opacity-80" />
                                    ) : (
                                        <div className="text-white/20 text-6xl font-black">CAP</div>
                                    )}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-[#59B4E9] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                                            ONLINE / OFFLINE
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-[#0b2b4d] mb-3 line-clamp-2 min-h-[56px]">{course.type}</h3>
                                    <div className="text-sm text-gray-600 mb-6 line-clamp-3" dangerouslySetInnerHTML={{ __html: course.desc1 }}></div>

                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="text-center">
                                                <span className="block text-xl font-bold text-[#0b2b4d]">{course.stats?.left}</span>
                                                <span className="text-[10px] text-gray-400 uppercase">{course.stats?.leftLabel}</span>
                                            </div>
                                            <div className="h-8 w-[1px] bg-gray-200"></div>
                                            <div className="text-center">
                                                <span className="block text-xl font-bold text-[#0b2b4d]">{course.stats?.right}</span>
                                                <span className="text-[10px] text-gray-400 uppercase">{course.stats?.rightLabel}</span>
                                            </div>
                                        </div>
                                        <Link href="/course-detail" className="w-full py-3 bg-[#0b2b4d] text-white rounded-lg font-bold hover:bg-[#671D9D] transition-colors block text-center">
                                            Xem Chi Tiết
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        [1, 2, 3].map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl h-[450px] animate-pulse">
                                <div className="h-48 bg-gray-200"></div>
                                <div className="p-6 space-y-4">
                                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Testimonials section from homepage for consistency */}
            <section className="bg-white py-20 border-t border-gray-100">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0b2b4d] mb-2">
                            {testimonialsHeader?.title || "Lắng nghe học viên nói về CAP"}
                        </h2>
                    </div>

                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible scrollbar-hide pb-4 snap-x">
                        {Array.isArray(testimonials) && testimonials.map((item, i) => (
                            <div key={i} className={`min-w-[300px] md:min-w-0 flex-shrink-0 md:flex-shrink bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm snap-center`}>
                                <p className="text-xs text-gray-600 mb-4 leading-relaxed">"{item.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-300 bg-cover" style={{ backgroundImage: `url('${item.img}')` }}></div>
                                    <div>
                                        <p className="text-xs font-bold text-[#0b2b4d]">{item.handle}</p>
                                        <p className="text-[10px] text-gray-400">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
