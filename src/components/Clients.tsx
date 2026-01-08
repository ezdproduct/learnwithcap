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
            const itemWidth = container.offsetWidth / 2;

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
            const itemWidth = container.offsetWidth / 2;

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
        <section className="bg-[#001e3d] h-screen flex flex-col justify-center text-white overflow-hidden">
            <div className="w-full h-full flex flex-col justify-center pl-4 md:pl-16">
                <div className="flex flex-col md:flex-row gap-8 items-start h-full">
                    <div className="md:w-[25%] flex-shrink-0 section-header z-10 pt-10">
                        <span className="bg-[#3da9fc] text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">
                            {clientsHeader?.badge || "CASE STUDIES"}
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight split-heading">
                            {clientsHeader?.title || "Khách hàng của CAP"}
                        </h2>
                        <div className="mt-8 flex gap-4">
                            <button
                                onClick={scrollPrev}
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#0b2b4d] transition-all"
                            >
                                <ArrowLeft size={20} />
                            </button>
                            <button
                                onClick={scrollNext}
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#0b2b4d] transition-all"
                            >
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                    <div
                        ref={clientCarouselRef}
                        className="flex-1 min-w-0 flex overflow-x-auto scrollbar-hide flex-nowrap snap-x snap-mandatory reveal-scale-staggered items-center h-full"
                    >
                        {clients.map((client, idx) => (
                            <div
                                key={idx}
                                className="min-w-[300px] md:w-[50%] h-full bg-cover bg-center overflow-hidden relative flex-shrink-0 snap-start"
                                style={{ backgroundImage: `url('${client.img}')` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b4d]/90 via-[#0b2b4d]/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <div className="w-12 h-12 bg-white rounded mb-4 flex items-center justify-center text-black font-bold text-xs">
                                        {client.logo}
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">{client.name}</h3>
                                    <p className="font-bold text-lg mb-4 text-[#3da9fc]">{client.sub}</p>
                                    <p className="text-xs line-clamp-4 opacity-80">{client.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
