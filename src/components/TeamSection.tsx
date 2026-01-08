import React from 'react';
import Image from 'next/image';

interface TeamMember {
    name: string;
    englishName: string;
    img: string;
    points: string[];
}

interface TeamSectionProps {
    team: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ team }) => {
    return (
        <div className="relative w-full bg-[#002855] pb-24 pt-32 px-4 sm:px-6 lg:px-8">
            {/* Background pattern decoration if needed */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <svg className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-white opacity-5" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="50" />
                </svg>
            </div>

            <div className="max-w-[1248px] mx-auto z-10 relative"> {/* Standard max-width from other components usually */}

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-full transform transition-transform hover:-translate-y-2 duration-300">
                            {/* Image Container */}
                            <div className="relative w-full h-64 bg-gray-200">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-[#002855]">
                                        {member.name}
                                    </h3>
                                    <p className="text-[#59B4E9] font-medium text-sm">
                                        {member.englishName}
                                    </p>
                                </div>

                                <ul className="space-y-2 flex-1">
                                    {member.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-700">
                                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-[#0b2b4d] rounded-full flex-shrink-0"></span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
