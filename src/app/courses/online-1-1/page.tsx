"use client";
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2, PlayCircle, Layers, MessageSquare, Presentation } from 'lucide-react';

export default function OnlineCoursePage() {
    return (
        <div className="bg-white min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="bg-[#0b2b4d] text-white overflow-hidden pt-[84px]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row items-center py-12 lg:py-20 gap-12">
                        <div className="lg:w-1/2 space-y-8 hero-text">
                            <span className="bg-[#59B4E9] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                ONLINE
                            </span>
                            <h1 className="text-[40px] font-bold leading-tight">
                                Online 1:1
                            </h1>
                            <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                                Khóa học Tiếng Anh Giao Tiếp Chuyên Ngành Xây Dựng, Kiến Trúc và Nội Thất thiết kế riêng cho từng học viên. Học viên được chủ động về cả nội dung và thời gian tương tác trực tiếp với giảng viên. 
                                <br /><br />
                                Lộ trình riêng biệt giúp tối ưu hóa khả năng ứng dụng thực tế ngay trong công việc. Ngoài ra, bạn còn được hỗ trợ sửa các báo cáo chuyên sâu, xây dựng tư duy bằng tiếng Anh thông qua phương pháp "mô phỏng tình huống" chất lượng cao.
                            </p>

                            <div className="flex gap-12 items-center">
                                <div>
                                    <span className="text-4xl font-bold block">3</span>
                                    <span className="text-xs text-white/60 uppercase font-bold">Modules</span>
                                </div>
                                <div>
                                    <span className="text-4xl font-bold block">12</span>
                                    <span className="text-xs text-white/60 uppercase font-bold">Lessons</span>
                                </div>
                                <button className="bg-white text-[#0b2b4d] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
                                    Chi tiết
                                </button>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative hero-image">
                            <div className="rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1541888941259-7927394602db?auto=format&fit=crop&q=80"
                                    alt="Online Learning"
                                    className="w-full h-auto object-cover max-h-[500px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square max-w-md mx-auto lg:mx-0">
                                <img
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                                    alt="Learning Experience"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#59B4E9]/20 to-transparent"></div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 space-y-10 features-container">
                            <p className="text-[#0b2b4d]/70 italic leading-relaxed text-lg border-l-4 border-[#59B4E9] pl-6">
                                "Opt for us and experience the highest standard of dedication and quality. 
                                Our specialized team is committed to excellence, ensuring your specific needs are met with exceptional results."
                            </p>

                            <div className="space-y-8">
                                {[
                                    {
                                        title: "SỬ DỤNG HÌNH ẢNH, ÂM THANH, GAME / QUIZ",
                                        desc: "CAP offers customized courses to improve your English skill",
                                        icon: <PlayCircle className="text-[#59B4E9]" size={32} />
                                    },
                                    {
                                        title: "ÔN TẬP VÀ KIỂM TRA MỔI MODULE (MINI - FINAL TEST)",
                                        desc: "CAP offers customized courses to improve your English skill",
                                        icon: <CheckCircle2 className="text-[#59B4E9]" size={32} />
                                    },
                                    {
                                        title: "CÁC TỪ VỰNG ĐƯỢC LẶP LẠI Ở CÁC BÀI HỌC",
                                        desc: "CAP offers customized courses to improve your English skill",
                                        icon: <Layers className="text-[#59B4E9]" size={32} />
                                    },
                                    {
                                        title: "ROLE PLAY (ĐÓNG VAI TÌNH HUỐNG)",
                                        desc: "CAP offers customized courses to improve your English skill",
                                        icon: <MessageSquare className="text-[#59B4E9]" size={32} />
                                    },
                                    {
                                        title: "THUYẾT TRÌNH CHỦ ĐỀ YÊU THÍCH (HỌC VIÊN VÀ BẠN BÈ TRONG LỚP)",
                                        desc: "CAP offers customized courses to improve your English skill",
                                        icon: <Presentation className="text-[#59B4E9]" size={32} />
                                    },
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-6 items-start group feature-item">
                                        <div className="bg-[#f0f9ff] p-4 rounded-2xl group-hover:bg-[#59B4E9] group-hover:text-white transition-all duration-300">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#0b2b4d] text-lg mb-1">{feature.title}</h3>
                                            <p className="text-gray-400 text-sm">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Structure Section */}
            <section className="py-24 bg-[#f4faff]">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-[40px] font-bold text-[#0b2b4d] mb-16">Câu trúc khóa học</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 structure-grid">
                        {[
                            { id: "05", title: "Module 05", tag: "Tiếng anh xây dựng chuyên sâu" },
                            { id: "06", title: "Module 06", tag: "Tiếng anh xây dựng chuyên sâu" },
                            { id: "01", title: "Module 01", tag: "Tiếng anh xây dựng chuyên sâu" }
                        ].map((mod, i) => (
                            <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center structure-card">
                                <h3 className="text-2xl font-bold text-[#0b2b4d] mb-2">{mod.title}</h3>
                                <p className="text-[#59B4E9] font-medium text-sm mb-8 uppercase">{mod.tag}</p>

                                <ul className="space-y-4 mb-10 text-left w-full text-gray-600 font-medium">
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                        <span>Mẫu câu cơ bản</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                        <span>Giao tiếp cơ bản</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                        <span>Trao đổi quan hệ</span>
                                    </li>
                                </ul>

                                <button className="w-full py-4 bg-[#0b2b4d] text-white rounded-xl font-bold hover:bg-[#671D9D] transition-colors">
                                    Tư Vấn
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center items-center gap-6">
                        <div className="flex items-center gap-2 text-[#5c5c96] font-bold text-lg">
                            <span>0</span>
                            <div className="w-12 h-[2px] bg-gray-200 relative">
                                <div className="absolute left-0 top-0 h-full w-1/2 bg-[#0b2b4d]"></div>
                            </div>
                            <span className="text-gray-300">6</span>
                        </div>
                        <div className="flex gap-2">
                            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#0b2b4d] hover:text-white transition-all">
                                <span className="text-xl">←</span>
                            </button>
                            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#0b2b4d] hover:text-white transition-all">
                                <span className="text-xl">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Evaluation Section */}
            <section className="relative h-[600px] flex items-center overflow-hidden bg-[#001e3d] eval-section">
                <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                        alt="Methodology"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-12 bg-white/95 m-12 rounded-2xl shadow-xl">
                        <p className="text-[#0b2b4d] font-bold text-lg mb-4">
                            Học viên học và tương tác trực tiếp 1:1 với giảng viên, giúp tối ưu hóa khả năng tiếp thu và phản xạ trong công việc.
                        </p>
                        <p className="text-gray-500 text-sm italic">
                            Chương trình đã được "Customized" hóa phù hợp theo năng lực cá nhân từng học viên.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10 eval-content">
                    <div className="lg:w-1/2 text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Phương pháp đánh giá</h2>
                        <p className="text-white/60 text-lg mb-12 max-w-lg">
                            Opt for us and experience the highest standard of dedication and quality. 
                            Our specialized team is committed to excellence, ensuring your specific needs are met.
                        </p>

                        <ul className="space-y-6">
                            <li className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#59B4E9]"></div>
                                <span className="text-lg font-medium uppercase">Đánh giá đầu vào</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#59B4E9]"></div>
                                <span className="text-lg font-medium uppercase">ĐÁNH GIÁ TRONG QUÁ TRÌNH HỌC</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
