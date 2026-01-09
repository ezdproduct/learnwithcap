"use client";
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2, PlayCircle, Layers, MessageSquare, Presentation, MonitorPlay } from 'lucide-react';

export default function ELearningCoursePage() {
    return (
        <div className="bg-white min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="bg-[#0b2b4d] text-white overflow-hidden pt-[84px]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row items-center py-12 lg:py-20 gap-12">
                        <div className="lg:w-1/2 space-y-8 hero-text">
                            <span className="bg-[#59B4E9] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                SELF-STUDY
                            </span>
                            <h1 className="text-[40px] font-bold leading-tight">
                                E-Learning
                            </h1>
                            <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                                Hệ thống đào tạo trực tuyến hiện đại, cho phép học viên tiếp cận bài giảng mọi lúc, mọi nơi. Khóa học được thiết kế theo dạng video bài giảng sinh động, kết hợp với các bài tập tương tác ngay trên nền tảng.
                                <br /><br />
                                Phù hợp cho những người bận rộn muốn chủ động hoàn toàn về lộ trình học tập nhưng vẫn đảm bảo được chất lượng đào tạo chuẩn quốc tế của CAP.
                            </p>

                            <div className="flex gap-12 items-center">
                                <div>
                                    <span className="text-4xl font-bold block">10</span>
                                    <span className="text-xs text-white/60 uppercase font-bold">Modules</span>
                                </div>
                                <div>
                                    <span className="text-4xl font-bold block">150+</span>
                                    <span className="text-xs text-white/60 uppercase font-bold">Videos</span>
                                </div>
                                <button className="bg-white text-[#0b2b4d] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
                                    Học Thử
                                </button>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative hero-image">
                            <div className="rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                                    alt="E-Learning Platform"
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
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
                                    alt="Digital Learning"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#59B4E9]/20 to-transparent"></div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 space-y-10 features-container">
                            <p className="text-[#0b2b4d]/70 italic leading-relaxed text-lg border-l-4 border-[#59B4E9] pl-6">
                                "CAP's E-Learning platform provides a seamless and flexible way to master professional English. 
                                Our digital ecosystem is built for modern professionals who value efficiency and quality."
                            </p>

                            <div className="space-y-8">
                                {[
                                    {
                                        title: "HỆ THỐNG VIDEO BÀI GIẢNG 4K",
                                        desc: "Trải nghiệm học tập sắc nét với đội ngũ giảng viên chuyên nghiệp",
                                        icon: <MonitorPlay className="text-[#59B4E9]" size={32} />
                                    },
                                    {
                                        title: "TƯƠNG TÁC QUA GAME VÀ QUIZ",
                                        desc: "Học mà chơi, chơi mà học giúp ghi nhớ kiến thức tốt hơn",
                                        icon: <PlayCircle className="text-[#59B4E9]" size={32} />
                                    },
                                    {
                                        title: "THEO DÕI TIẾN ĐỘ HỌC TẬP",
                                        desc: "Hệ thống tự động ghi lại quá trình và đánh giá năng lực định kỳ",
                                        icon: <Layers className="text-[#59B4E9]" size={32} />
                                    },
                                    {
                                        title: "HỖ TRỢ GIẢI ĐÁP 24/7",
                                        desc: "Cộng đồng học tập và đội ngũ support luôn sẵn sàng hỗ trợ",
                                        icon: <MessageSquare className="text-[#59B4E9]" size={32} />
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
                    <h2 className="text-[40px] font-bold text-[#0b2b4d] mb-16">Cấu trúc bài giảng E-Learning</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 structure-grid">
                        {[
                            { id: "01", title: "Phát Âm Chuẩn", tag: "Nền tảng giao tiếp" },
                            { id: "02", title: "Từ Vựng Chuyên Ngành", tag: "Xây dựng - Nội thất" },
                            { id: "03", title: "Đàm Phán Dự Án", tag: "Kỹ năng chuyên sâu" }
                        ].map((mod, i) => (
                            <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center structure-card">
                                <h3 className="text-2xl font-bold text-[#0b2b4d] mb-2">{mod.title}</h3>
                                <p className="text-[#59B4E9] font-medium text-sm mb-8 uppercase">{mod.tag}</p>

                                <ul className="space-y-4 mb-10 text-left w-full text-gray-600 font-medium">
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                        <span>Video bài giảng chi tiết</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                        <span>Tài liệu PDF đi kèm</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                        <span>Bài kiểm tra trắc nghiệm</span>
                                    </li>
                                </ul>

                                <button className="w-full py-4 bg-[#0b2b4d] text-white rounded-xl font-bold hover:bg-[#671D9D] transition-colors">
                                    Đăng Ký Học
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#0b2b4d] py-20 text-center text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Bắt đầu học ngay hôm nay</h2>
                    <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                        Sở hữu tài khoản học tập trọn đời và làm chủ tiếng Anh chuyên ngành theo cách linh hoạt nhất.
                    </p>
                    <button className="bg-[#59B4E9] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#0b2b4d] transition-all">
                        Khám phá lộ trình
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
