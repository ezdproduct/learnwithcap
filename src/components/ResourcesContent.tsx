import React, { useState } from 'react';
import Link from 'next/link';

interface Resource {
    id: number;
    type: string;
    title: string;
    image: string;
    readTime: string;
    link: string;
}

interface ResourcesContentProps {
    resources: Resource[];
}

const ResourcesContent: React.FC<ResourcesContentProps> = ({ resources }) => {
    const [activeTab, setActiveTab] = useState<'articles' | 'links'>('articles');

    return (
        <div className="w-full bg-white pb-20">
            {/* Tabs Filter */}
            <div className="container mx-auto px-4 md:px-8 py-10">
                <div className="flex space-x-4 mb-8">
                    <button
                        onClick={() => setActiveTab('articles')}
                        className={`px-6 py-2 rounded-md font-medium text-sm transition-all duration-300 ${activeTab === 'articles'
                            ? 'bg-[#002855] text-white shadow-md'
                            : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        Bài Viết
                    </button>
                    <button
                        onClick={() => setActiveTab('links')}
                        className={`px-6 py-2 rounded-md font-medium text-sm transition-all duration-300 ${activeTab === 'links'
                            ? 'bg-[#002855] text-white shadow-md'
                            : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        Links
                    </button>
                </div>

                {/* Grid Content */}
                {activeTab === 'articles' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-6">
                        {resources.map((item) => (
                            <div key={item.id} className="group cursor-pointer flex flex-col h-full">
                                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4 bg-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <span className="text-xs text-gray-400 mb-2 font-medium">{item.readTime}</span>
                                    <h3 className="text-xl font-bold text-[#0b2b4d] group-hover:text-[#3da9fc] transition-colors leading-snug line-clamp-2">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center text-gray-500">
                        <p>Chưa có liên kết nào.</p>
                    </div>
                )}
            </div>
            {/* Floating Action Button (Scroll to top or Chat) - Optional, mimicking the blue circle in the content if implied */}
        </div>
    );
};

export default ResourcesContent;
