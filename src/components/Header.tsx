"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavbarData, NavbarLink } from '@/lib/types';

interface HeaderProps {
    navbar?: NavbarData | null;
}

const Header: React.FC<HeaderProps> = ({ navbar }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleDropdown = (index: number) => setOpenDropdownIndex(openDropdownIndex === index ? null : index);

    const links = navbar?.links || [
        {
            label: "Khóa Học",
            href: "#",
            dropdown: [
                { label: "Trực tiếp tại Doanh Nghiệp", href: "/course-detail" },
                { label: "Online 1:1", href: "/online-1-1" },
                { label: "E-Learning", href: "/e-learning" }
            ]
        },
        { label: "Tài Nguyên", href: "/resources" },
        { label: "Về Chúng Tôi", href: "/about" }
    ];

    return (
        <>
            <header className="absolute top-0 left-0 right-0 z-50 w-full bg-white transition-all duration-300 py-[10px] px-[0px] md:px-[75px]">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                    <div className="flex items-center space-x-2 cursor-pointer z-50">
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

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1 bg-gray-100 p-1 rounded-full group/nav">
                        {links.map((link: NavbarLink, lIdx: number) => {
                            const hasDropdown = link.dropdown && link.dropdown.length > 0;
                            return (
                                <div key={lIdx} className="relative group/item">
                                    <Link
                                        href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                                        className="rounded-full px-6 py-2 text-[15px] font-medium transition-all text-[#002A4C] group-hover/nav:text-gray-400 hover:!text-[#002A4C] hover:bg-white group-hover/item:bg-white group-hover/item:!text-[#002A4C] group-hover/item:shadow-sm block"
                                    >
                                        {link.label}
                                    </Link>

                                    {hasDropdown && (
                                        <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible translate-y-2 group-hover/item:translate-y-0 transition-all duration-300 z-[60] py-3 border border-gray-50 overflow-hidden">
                                            {link.dropdown?.map((dropLink: NavbarLink, dIdx: number) => (
                                                <Link
                                                    key={dIdx}
                                                    href={dropLink.href}
                                                    className="block px-6 py-3.5 text-[15px] font-medium text-[#002A4C] hover:bg-gray-50 hover:text-[#7E4FD3] transition-colors"
                                                >
                                                    {dropLink.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <div className="hidden md:block">
                            <Link
                                href="/login"
                                className="bg-[#002A4C] hover:bg-purple-600 text-white rounded-full transition-all text-[15px] px-8 py-2.5 font-bold shadow-lg shadow-[#002A4C]/20 hover:shadow-purple-600/40 transform hover:-translate-y-0.5"
                            >
                                {navbar?.cta_label || "ĐĂNG NHẬP"}
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg z-50"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden pt-24 px-6 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="flex flex-col space-y-6">
                    {links.map((link: NavbarLink, i: number) => {
                        const hasDropdown = link.dropdown && link.dropdown.length > 0;
                        return (
                            <div key={i} className="border-b border-gray-100 pb-4">
                                <div className="flex justify-between items-center">
                                    <Link
                                        href={link.href}
                                        className="text-xl font-bold text-[#002A4C]"
                                        onClick={() => !hasDropdown && setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                    {hasDropdown && (
                                        <button onClick={() => toggleDropdown(i)} className="p-2">
                                            <ChevronDown className={`w-5 h-5 transition-transform ${openDropdownIndex === i ? 'rotate-180' : ''}`} />
                                        </button>
                                    )}
                                </div>

                                {hasDropdown && openDropdownIndex === i && (
                                    <div className="mt-4 pl-4 flex flex-col space-y-3 bg-gray-50 p-4 rounded-xl">
                                        {link.dropdown?.map((dropLink: NavbarLink, dIdx: number) => (
                                            <Link
                                                key={dIdx}
                                                href={dropLink.href}
                                                className="text-gray-600 font-medium hover:text-[#002A4C]"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {dropLink.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    <Link
                        href="/login"
                        className="bg-[#002A4C] hover:bg-purple-600 text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg"
                    >
                        {navbar?.cta_label || "ĐĂNG NHẬP"}
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default Header;
