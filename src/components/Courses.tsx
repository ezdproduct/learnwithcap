import React from "react";
import Link from "next/link";

interface CoursesProps {
    courses: any[];
}

const Courses = ({ courses }: CoursesProps) => {
    return (
        <>
            {courses.map((course, idx) => (
                <section
                    key={idx}
                    className={`${idx === 1 ? "bg-[#001e3d]" : idx === 2 ? "bg-[#0f2d4a]" : "bg-[#0b2b4d]"
                        } py-20 text-white`}
                >
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            <div className="section-header reveal-staggered">
                                <span className="bg-[#3da9fc] text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">
                                    KHÓA HỌC
                                </span>
                                <h2 className="text-4xl font-bold mb-2 whitespace-pre-line">
                                    {course.type}
                                </h2>
                                <div className="flex gap-12 mt-6 mb-8 border-b border-white/10 pb-6">
                                    <div>
                                        <span className="text-3xl font-bold block">{course.stats?.left}</span>
                                        <span className="text-xs text-white/60 uppercase">
                                            {course.stats?.leftLabel}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-3xl font-bold block">{course.stats?.right}</span>
                                        <span className="text-xs text-white/60 uppercase">
                                            {course.stats?.rightLabel}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-4 mb-8">
                                    <button className="px-6 py-2 bg-white text-[#0b2b4d] font-bold rounded text-sm hover:bg-gray-100 transition">
                                        {course.cta1_label || "Tư Vấn Ngay"}
                                    </button>
                                    <Link
                                        href="/course-detail"
                                        className="px-6 py-2 border border-white text-white font-bold rounded text-sm hover:bg-white/10 transition block"
                                    >
                                        {course.cta2_label || "Xem Chi Tiết"}
                                    </Link>
                                </div>
                            </div>
                            <div className="text-sm text-white/80 space-y-4">
                                <p dangerouslySetInnerHTML={{ __html: course.desc1 }} />
                                <p dangerouslySetInnerHTML={{ __html: course.desc2 }} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-12 reveal-piano">
                            {course.modules?.map((mod: any, mIdx: number) => (
                                <div key={mIdx} className="group cursor-pointer piano-item">
                                    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative mb-3">
                                        <img
                                            src={mod.img}
                                            alt={mod.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <p className="text-xs font-bold uppercase text-white/60 text-center">
                                        {mod.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

export default Courses;
