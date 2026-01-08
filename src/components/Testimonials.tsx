import React from "react";

interface TestimonialsProps {
    testimonials: any[];
    testimonialsHeader: any;
}

const Testimonials = ({ testimonials, testimonialsHeader }: TestimonialsProps) => {
    return (
        <section className="bg-white py-20 border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12 section-header">
                    <h2 className="text-3xl font-bold text-[#0b2b4d] mb-2">
                        {testimonialsHeader?.title || "Lắng nghe học viên nói về CAP"}
                    </h2>
                    <div className="flex justify-center gap-16 mt-6">
                        {(testimonialsHeader?.stats || [
                            { value: "4+", label: "Năm Kinh Nghiệm" },
                            { value: "18k+", label: "Học Viên Đã Học" },
                        ]).map((stat: any, sIdx: number) => (
                            <div key={sIdx}>
                                <span className="text-4xl font-bold text-[#7c3aed]">{stat.value}</span>
                                <p className="text-xs uppercase font-bold text-gray-500 mt-1">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible scrollbar-hide pb-4 snap-x reveal-staggered">
                    {testimonials.map((item, i) => (
                        <div
                            key={i}
                            className={`min-w-[300px] md:min-w-0 flex-shrink-0 md:flex-shrink bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm snap-center ${i === 2 ? "md:row-span-2" : ""
                                }`}
                        >
                            <p className="text-xs text-gray-600 mb-4 leading-relaxed line-clamp-6">
                                "{item.text}"
                            </p>
                            <div className="items-center flex gap-3">
                                <div
                                    className="w-8 h-8 rounded-full bg-gray-300 bg-cover"
                                    style={{ backgroundImage: `url('${item.img}')` }}
                                ></div>
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
    );
};

export default Testimonials;
