import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

interface ClientsProps {
    clients: any[];
    clientsHeader: any;
}

const Clients = ({ clients, clientsHeader }: ClientsProps) => {
    const clientCarouselRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleScroll = () => {
        if (clientCarouselRef.current) {
            const container = clientCarouselRef.current;
            const scrollLeft = container.scrollLeft;
            const firstItem = container.firstElementChild as HTMLElement;
            const itemWidth = firstItem?.offsetWidth || container.offsetWidth;
            const newIndex = Math.round(scrollLeft / itemWidth);
            if (newIndex !== currentIndex) {
                setCurrentIndex(newIndex);
            }
        }
    };

    const scrollPrev = () => {
        if (clientCarouselRef.current) {
            const container = clientCarouselRef.current;
            const firstItem = container.firstElementChild as HTMLElement;
            const itemWidth = firstItem?.offsetWidth || container.offsetWidth;

            if (container.scrollLeft <= 5) {
                container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
            } else {
                container.scrollBy({ left: -itemWidth, behavior: "smooth" });
            }
        }
    };

    const scrollNext = () => {
        if (clientCarouselRef.current) {
            const container = clientCarouselRef.current;
            const firstItem = container.firstElementChild as HTMLElement;
            const itemWidth = firstItem?.offsetWidth || container.offsetWidth;

            if (
                container.scrollLeft + container.clientWidth >=
                container.scrollWidth - 5
            ) {
                container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                container.scrollBy({ left: itemWidth, behavior: "smooth" });
            }
        }
    };

    return (
        <section className="bg-[#002a4c] min-h-[500px] md:h-screen flex items-center text-white overflow-hidden">
            <div className="w-full h-full flex flex-col md:flex-row">
                {/* Left Section - Text Content */}
                <div className="md:w-[40%] lg:w-[35%] flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 md:py-0">
                    <span className="bg-[#59B4E9] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase mb-2 inline-block w-fit">
                        {clientsHeader?.badge || "CASE STUDIES"}
                    </span>
                    <div className="font-bold leading-tight mb-8 md:mb-12">
                        <AnimatedHeading
                            text={clientsHeader?.title || "Khách hàng tiêu biểu của CAP"}
                            tag="h2"
                            className="text-sub-h2 text-white"
                            fillColor="#ffffff"
                            ghostColor="rgba(255, 255, 255, 0.2)"
                        />
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={scrollPrev}
                            className="w-12 h-12 rounded-full border border-[#7c3aed] flex items-center justify-center text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white transition-all duration-300"
                            aria-label="Previous client"
                        >
                            <ArrowLeft size={24} strokeWidth={1.5} />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-12 h-12 rounded-full border border-[#7c3aed] flex items-center justify-center text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white transition-all duration-300"
                            aria-label="Next client"
                        >
                            <ArrowRight size={24} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                {/* Right Section - Image Carousel */}
                <div className="relative flex-1 overflow-hidden group">
                    <div
                        ref={clientCarouselRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory h-[60vh] md:h-full"
                    >
                        {clients.map((client, idx) => (
                            <div
                                key={idx}
                                className="min-w-full md:min-w-[50%] h-full bg-cover bg-center relative flex-shrink-0 snap-start"
                                style={{ backgroundImage: `url('${client.img}')` }}
                            >
                                {/* Dark overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002a4c]/95 via-[#002a4c]/40 to-transparent"></div>

                                {/* Logo badge at top-left */}
                                <div className="absolute top-8 left-8 md:top-12 md:left-12">
                                    <div className="bg-white px-4 py-2 rounded shadow-lg">
                                        <span className="text-[#002a4c] font-bold text-sm uppercase tracking-wide">
                                            {client.logo}
                                        </span>
                                    </div>
                                </div>

                                {/* Content positioned at 40% height */}
                                <div className="absolute top-[35%] md:top-[40%] left-0 right-0 p-8 md:p-12 lg:p-16">
                                    <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3 text-white">
                                        {client.name}
                                    </h3>
                                    <p className="font-semibold text-lg md:text-xl mb-6 text-white">
                                        {client.sub}
                                    </p>
                                    <div
                                        className="text-sm md:text-base leading-relaxed max-w-xl text-white/90 client-description"
                                        dangerouslySetInnerHTML={{ __html: client.desc }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Vertical Progress Indicator (Visible on Mobile/Tablet) */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none md:hidden">
                        <ArrowUp size={14} className="text-[#59B4E9] mb-1" />
                        <div className="w-[2px] h-24 bg-white/20 relative rounded-full overflow-hidden">
                            <div
                                className="absolute top-0 left-0 w-full bg-[#59B4E9] transition-all duration-500 rounded-full"
                                style={{
                                    height: `${100 / clients.length}%`,
                                    transform: `translateY(${currentIndex * 100}%)`
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
