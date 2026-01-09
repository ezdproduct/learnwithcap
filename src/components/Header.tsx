"use client";
import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { Menu } from 'lucide-react';

interface HeaderProps {
    navbar?: any;
}

const Header: React.FC<HeaderProps> = ({ navbar }) => {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 w-full bg-white transition-all duration-300 py-[10px] px-[0px] md:px-[75px]">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                <div className="flex items-center space-x-2 cursor-pointer">
                    <Link href="/">
                        <NextImage
                            src={navbar?.logo_url || "https://learnwithcap.com/wp-content/uploads/2025/06/cap-logo-1.png"}
                            alt="CAP Logo"
                            width={160}
                            height={40}
                            className="h-10 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                <nav className="hidden md:flex items-center space-x-1 bg-gray-100 p-1 rounded-full group/nav">
                    {(navbar?.links || [
                        { label: "Khóa Học", href: "/shop" },
                        { label: "Tài Nguyên", href: "/resources" },
                        { label: "Về Chúng Tôi", href: "/about" }
                    ]).map((link: any, lIdx: number) => {
                        const isKhowaHoc = link.label === "Khóa Học";
                        return (
                            <div key={lIdx} className="relative group/item">
                                <Link
                                    href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                                    className="rounded-full px-4 py-1.5 text-[15px] font-medium transition-colors text-[#0b2b4d] group-hover/nav:text-gray-400 hover:!text-[#0b2b4d] block"
                                >
                                    {link.label}
                                </Link>
                                
                                {isKhowaHoc && (
                                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 z-[60] py-2 border border-gray-100 overflow-hidden">
                                        <Link href="/courses/enterprise" className="block px-5 py-3 text-[15px] font-medium text-[#0b2b4d] hover:bg-gray-50 transition-colors">
                                            Trực tiếp tại Doanh Nghiệp
                                        </Link>
                                        <Link href="/courses/online-1-1" className="block px-5 py-3 text-[15px] font-medium text-[#0b2b4d] hover:bg-gray-50 transition-colors">
                                            Online 1:1
                                        </Link>
                                        <Link href="/courses/e-learning" className="block px-5 py-3 text-[15px] font-medium text-[#0b2b4d] hover:bg-gray-50 transition-colors">
                                            E-Learning
                                        </Link>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>

                <div className="flex items-center space-x-4">
                    <div className="hidden md:block">
                        <button className="bg-[#0b2b4d] hover:bg-[#671D9D] text-white rounded-md transition-all text-[15px] px-6 py-2 font-medium">
                            {navbar?.login_label || "Đăng nhập"}
                        </button>
                    </div>

                    <button className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
