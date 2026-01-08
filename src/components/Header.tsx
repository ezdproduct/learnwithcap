"use client";
import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

interface HeaderProps {
    navbar?: any;
}

const Header: React.FC<HeaderProps> = ({ navbar }) => {
    return (
        <header className="w-full bg-white transition-all duration-300 py-[15px] px-[0px] md:px-[75px]">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                <div className="flex items-center space-x-2 cursor-pointer">
                    <Link href="/">
                        <img
                            src={navbar?.logo_url || "https://learnwithcap.com/wp-content/uploads/2025/06/cap-logo-1.png"}
                            alt="CAP Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </Link>
                </div>

                <nav className="hidden md:flex items-center space-x-1 bg-gray-100 p-1 rounded-full group">
                    {(navbar?.links || [
                        { label: "Khóa Học", href: "/shop" },
                        { label: "Tài Nguyên", href: "/resources" },
                        { label: "Về Chúng Tôi", href: "/about" }
                    ]).map((link: any, lIdx: number) => (
                        <Link
                            key={lIdx}
                            href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                            className="rounded-full px-4 py-1.5 text-[15px] font-medium transition-colors text-[#0b2b4d] group-hover:text-gray-400 hover:!text-[#0b2b4d]"
                        >
                            {link.label}
                        </Link>
                    ))}
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
