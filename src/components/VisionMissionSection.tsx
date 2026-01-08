import React from 'react';

interface VisionMissionData {
    title: string;
    content: string;
}

interface VisionMissionProps {
    data: {
        vision: VisionMissionData;
        mission: VisionMissionData;
    };
}

const VisionMissionSection: React.FC<VisionMissionProps> = ({ data }) => {
    return (
        <div className="relative w-full py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80"
                    alt="City Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#002855]/85 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-black/30"></div> {/* Additional darkening */}
            </div>

            <div className="max-w-[1248px] mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Vision */}
                    <div className="flex flex-col">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                            {data.vision.title}
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#3da9fc]"></span>
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-200">
                            {data.vision.content}
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="flex flex-col">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                            {data.mission.title}
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#3da9fc]"></span>
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-200">
                            {data.mission.content}
                        </p>
                    </div>
                </div>
            </div>

            {/* Optional decorative arrow on the right side as seen in the mockup (faintly) */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block opacity-20">
                <svg width="40" height="100" viewBox="0 0 40 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0V100" stroke="white" strokeWidth="2" />
                    <path d="M0 20L20 0L40 20" stroke="white" strokeWidth="2" />
                </svg>
            </div>
        </div>
    );
};

export default VisionMissionSection;
