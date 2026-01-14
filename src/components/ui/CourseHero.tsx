import SectionBadge from './SectionBadge';
import AnimatedHeading from './AnimatedHeading';

interface CourseHeroProps {
    badge?: string;
    title: string; // Changed from string | React.ReactNode to string for AnimatedHeading
    description: string;
    modules: string | number;
    lessons: string | number;
    image: string;
}

const CourseHero: React.FC<CourseHeroProps> = ({
    badge = "KHÓA HỌC",
    title,
    description,
    modules,
    lessons,
    image
}) => {
    return (
        <section className="bg-[#002A4C] text-white overflow-hidden pt-16 flex flex-col md:flex-row min-h-screen">
            <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center gap-8">
                <div>
                    <SectionBadge>{badge}</SectionBadge>
                </div>
                <div className="font-bold leading-tight">
                    <AnimatedHeading
                        text={title}
                        tag="h1"
                        fillColor="#ffffff"
                        ghostColor="rgba(255, 255, 255, 0.2)"
                    />
                </div>
                <p className="text-white/80 text-base leading-relaxed max-w-xl">
                    {description}
                </p>
                <div className="flex gap-16 items-center">
                    <div>
                        <span className="text-4xl font-bold block mb-1">{modules}</span>
                        <span className="text-xs text-[#59B4E9] uppercase font-bold tracking-widest">Modules</span>
                    </div>
                    <div>
                        <span className="text-4xl font-bold block mb-1">{lessons}</span>
                        <span className="text-xs text-[#59B4E9] uppercase font-bold tracking-widest">Lessons</span>
                    </div>
                </div>
                <div className="mt-4">
                    <button className="bg-white text-[#002A4C] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all flex items-center gap-3 group shadow-lg">
                        <span className="flex flex-col items-center">
                            <span className="h-3 w-[1.5px] bg-[#002A4C]/30 mb-0.5 group-hover:bg-[#002A4C]"></span>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="group-hover:translate-y-0.5 transition-transform">
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        Chi Tiết
                    </button>
                </div>
            </div>
            <div className="w-full md:w-1/2 relative min-h-[400px]">
                <img
                    src={image}
                    alt={typeof title === 'string' ? title : 'Course Hero'}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#002A4C]/20 to-transparent"></div>
            </div>
        </section>
    );
};

export default CourseHero;
