import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ClientsProps {
    clients: any[];
    clientsHeader: any;
}

const Clients = ({ clients, clientsHeader }: ClientsProps) => {
    const clientCarouselRef = useRef<HTMLDivElement>(null);

    const scrollPrev = () => {
        if (clientCarouselRef.current) {
            const container = clientCarouselRef.current;
            const itemWidth = container.offsetWidth * 0.5; // Scroll by 50% (one company)

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
            const itemWidth = container.offsetWidth * 0.5; // Scroll by 50% (one company)

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
        <section className="bg-[#001e3d] h-screen flex items-center text-white overflow-hidden">
            <div className="w-full h-full flex flex-col md:flex-row">
                {/* Left Section - Text Content */}
                <div className="md:w-[40%] lg:w-[35%] flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 md:py-0">
                    <span className="bg-[#3da9fc] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase mb-6 inline-block w-fit">
                        {clientsHeader?.badge || "CASE STUDIES"}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-12">
                        {clientsHeader?.title || "Khách hàng của CAP"}
                    </h2>
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
                <div
                    ref={clientCarouselRef}
                    className="flex-1 flex overflow-x-auto scrollbar-hide snap-x snap-mandatory h-full"
                >
                    {clients.map((client, idx) => (
                        <div
                            key={idx}
                            className="min-w-[50%] h-full bg-cover bg-center relative flex-shrink-0 snap-start"
                            style={{ backgroundImage: `url('${client.img}')` }}
                        >
                            {/* Dark overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#001e3d]/95 via-[#001e3d]/40 to-transparent"></div>

                            {/* Logo badge at top-left */}
                            <div className="absolute top-8 left-8 md:top-12 md:left-12">
                                <div className="bg-white px-4 py-2 rounded shadow-lg">
                                    <span className="text-[#001e3d] font-bold text-sm uppercase tracking-wide">
                                        {client.logo}
                                    </span>
                                </div>
                            </div>

                            {/* Content at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
                                <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3 text-white">
                                    {client.name}
                                </h3>
                                <p className="font-semibold text-lg md:text-xl mb-6 text-white">
                                    {client.sub}
                                </p>
                                <div
                                    className="text-sm md:text-base leading-relaxed max-w-3xl text-white/90 client-description"
                                    dangerouslySetInnerHTML={{ __html: client.desc }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
