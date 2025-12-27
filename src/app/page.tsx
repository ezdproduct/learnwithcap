"use client";
import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import {
  ArrowRight, ArrowLeft, Mail, Phone, MessageSquare,
  Plus, Briefcase, RefreshCcw, Globe, Frown, Mic,
  CheckCircle, MicOff, GraduationCap, Hammer, Ruler,
  Clock, Ear, Rocket, Menu, Facebook, Youtube, Send,
  CircleArrowDown, Package, CircleDot
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCarousel from '@/components/ServiceCarousel';

// Helper to map icon string names to components
const getIcon = (name: string, props: any = {}) => {
  const icons: any = {
    ArrowRight, ArrowLeft, Mail, Phone, MessageSquare,
    Plus, Briefcase, RefreshCcw, Globe, Frown, Mic,
    CheckCircle, MicOff, GraduationCap, Hammer, Ruler,
    Clock, Ear, Rocket, Menu, Facebook, Youtube, Send,
    CircleArrowDown, Package, CircleDot
  };
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent {...props} /> : null;
};

const FeatureCard = ({ icon, text, bg, textColor = "text-[#0b2b4d]", iconColor = "text-[#0b2b4d]", height = "h-full" }: any) => (
  <div className={`${bg} ${textColor} p-6 rounded-xl ${height} min-h-[180px] flex flex-col justify-between group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:z-10`}>
    <div className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ${iconColor} mb-4`}>
      <div className="opacity-80 group-hover:opacity-100 transition-opacity">
        {icon}
      </div>
    </div>
    <p className="text-[15px] font-medium leading-relaxed">{text}</p>
  </div>
);

gsap.registerPlugin(ScrollTrigger);

const LearnWithCapClone = () => {
  const mainRef = useRef(null);
  const clientCarouselRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (clientCarouselRef.current) {
      const container = clientCarouselRef.current;
      const itemWidth = container.offsetWidth / 2;

      if (container.scrollLeft <= 5) {
        container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -itemWidth, behavior: 'smooth' });
      }
    }
  };

  const scrollNext = () => {
    if (clientCarouselRef.current) {
      const container = clientCarouselRef.current;
      const itemWidth = container.offsetWidth / 2;

      // Check if we are at the end (with small tolerance)
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: itemWidth, behavior: 'smooth' });
      }
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Entrance
      gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5
      });

      // 2. Section Headers Reveal
      const headers = gsap.utils.toArray('.section-header');
      headers.forEach((header: any) => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        });
      });

      // 3. Card/Item Staggered reveal
      const staggeredContainers = gsap.utils.toArray('.reveal-staggered');
      staggeredContainers.forEach((container: any) => {
        gsap.from(container.children, {
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out"
        });
      });

      // 4. Scale Staggered reveal (Left to Right, Small to Large)
      const scaleStaggeredContainers = gsap.utils.toArray('.reveal-scale-staggered');
      scaleStaggeredContainers.forEach((container: any) => {
        gsap.from(container.children, {
          scrollTrigger: {
            trigger: container,
            start: "top 85%", // Trigger a bit earlier/later as needed
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out"
        });
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);
  // --- Colors based on provided HTML ---
  // primary: "#002855"
  // secondary: "#3da9fc"
  // accent: "#90b4ce"

  // State for dynamic content
  const [courses, setCourses] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [solutions, setSolutions] = useState<any[]>([]);
  const [serviceItems, setServiceItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchPageContent = async () => {
      // Fetch sections from 'page_sections' (courses, testimonials, solutions, services)
      const { data: sectionsData, error: sectionsError } = await supabase
        .from('page_sections')
        .select('*');

      if (sectionsData) {
        sectionsData.forEach((section: any) => {
          if (section.section_key === 'courses') setCourses(section.data);
          if (section.section_key === 'testimonials') setTestimonials(section.data);
          if (section.section_key === 'services') setServiceItems(section.data);
          if (section.section_key === 'solutions') {
            // Map icons for solutions
            const mappedSolutions = section.data.map((item: any) => ({
              ...item,
              iconComponent: getIcon(item.icon, { size: 20 })
            }));
            setSolutions(mappedSolutions);
          }
        });
      }
    };

    fetchPageContent();
  }, []);

  const [clients, setClients] = useState<any[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      const { data, error } = await supabase
        .from('homepage_clients')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) {
        console.error('Error fetching clients:', error);
      } else if (data) {
        const sensitiveData = data.map(item => ({
          ...item,
          img: item.image_url,
          logo: item.logo_text,
          sub: item.subtitle,
          desc: item.description
        }));
        setClients(sensitiveData);
      }
    };

    fetchClients();
  }, []);



  const [wants, setWants] = useState<any[]>([]);
  const [difficulties, setDifficulties] = useState<any[]>([]);

  useEffect(() => {
    const fetchInsights = async () => {
      const { data, error } = await supabase
        .from('homepage_insights')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) {
        console.error('Error fetching insights:', error);
      } else if (data) {
        const wantsData = data
          .filter((item: any) => item.section === 'wants')
          .map((item: any) => ({
            icon: getIcon(item.icon_name, { size: 32, strokeWidth: 1.2 }),
            text: item.text,
            bg: item.bg_color
          }));

        const difficultiesData = data
          .filter((item: any) => item.section === 'difficulties')
          .map((item: any) => ({
            icon: getIcon(item.icon_name, { size: 32 }),
            text: item.text,
            highlight: item.is_highlighted
          }));

        setWants(wantsData);
        setDifficulties(difficultiesData);
      }
    };

    fetchInsights();
  }, []);





  return (
    <div ref={mainRef} className="text-[#0b2b4d] bg-white">
      {/* 1. Header / Navbar - Updated to match cap FE */}
      <header className="w-full bg-white transition-all duration-300">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="https://learnwithcap.com/wp-content/uploads/2025/06/cap-logo-1.png"
              alt="CAP Logo"
              className="h-8 w-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-1 bg-gray-100 p-1 rounded-full group">
            <a href="/shop" className="rounded-full px-4 py-1.5 text-base font-medium transition-colors text-[#0b2b4d] group-hover:text-gray-400 hover:!text-[#0b2b4d]">
              Khóa học
            </a>
            <a href="#solutions" className="rounded-full px-4 py-1.5 text-base font-medium transition-colors text-[#0b2b4d] group-hover:text-gray-400 hover:!text-[#0b2b4d]">
              Giải Pháp
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <button className="bg-[#002A4C] hover:bg-[#671D9D] text-white rounded-md transition-all text-base px-6 py-2 font-medium shadow-sm">
                Đăng nhập
              </button>
            </div>

            <button className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section - Updated Design */}
      <section className="pt-0 pb-4 container mx-auto px-4 md:px-8">
        <div className="relative h-[600px] rounded-[32px] overflow-hidden group">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMURFziLh10NsWXUt3sXvUYRGfh_KHSFU73tSwFcIvuQVNnjTHINIPoDWk9ofMQ8fp6baSiIKloW36RFirhd-RCQyk-qoblC3fASM1tJ24HbxhU8fqMQEIvchHUVNUV5FqHG2IjAhTjAaji5dp5cXJ1Nr00xriHPGr9v5YVwp20okgv_GsW2nmoB-b_V7FNia7I20iNtSJDqqspuRTKiMMhajHG6doETgiaQJuV6mdA5tVH5vQWCqLnltNMnnQTznBpP-RjIMMVXg"
              alt="Cityscape"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b4d]/90 via-[#0b2b4d]/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b2b4d]/80 via-transparent to-transparent"></div>
          </div>

          {/* Content Content - Bottom Left */}
          <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16 max-w-4xl hero-content">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6 drop-shadow-lg tracking-tight">
              Tiếng Anh giao tiếp <br />
              chuyên ngành xây dựng
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mb-8 leading-relaxed">
              Nâng tầm sự nghiệp với khóa học được thiết kế chuyên biệt cho Kỹ sư, Kiến trúc sư và Quản lý dự án.
            </p>
          </div>

        </div>
      </section >

      {/* 3. Section: "Bạn là..." (Who are you) - Replaced with new Carousel */}
      <ServiceCarousel items={serviceItems} />

      <section className="bg-[#f4faff] py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">

          <div className="mb-12 reveal-staggered">
            <div className="mb-8">
              <span className="bg-[#58b2e3] text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider">BẠN MUỐN</span>
              <h2 className="text-4xl font-bold text-[#0b2b4d] mt-4">Mong muốn của bạn</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {wants.map((item, idx) => (
                <FeatureCard key={idx} {...item} />
              ))}
            </div>
          </div>

          <div className="reveal-staggered">
            <div className="mb-8">
              <span className="bg-[#58b2e3] text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider">BẠN ĐANG</span>
              <h2 className="text-4xl font-bold text-[#0b2b4d] mt-4">Gặp những khó khăn</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {difficulties.map((item, idx) => (
                <FeatureCard
                  key={idx}
                  {...item}
                  bg="bg-[#0b2b4d]"
                  textColor="text-white"
                  iconColor="text-white"
                />
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* 5. Section: Giải Pháp (Solution) */}
      {/* 5. Section: Giải Pháp (Solution) */}
      <section id="solutions" className="bg-[#002A4C] text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 items-center">
            {/* Left: Title Block */}
            <div className="flex flex-col gap-6 items-start text-left">
              <span className="inline-block bg-[#59B4E9]/10 text-[#59B4E9] border border-[#59B4E9]/20 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
                GIẢI PHÁP
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Giải pháp của CAP <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59B4E9] to-white">dành cho bạn</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                Chúng tôi cung cấp lộ trình học tập được cá nhân hóa, giúp bạn làm chủ tiếng Anh và tự tin trong môi trường làm việc quốc tế.
              </p>
            </div>

            {/* Right: Image Block */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full max-w-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#671D9D]/20 to-transparent z-10 mix-blend-overlay pointer-events-none"></div>
                <img
                  src="https://course.learnwithcap.com/wp-content/uploads/2025/10/danist-soh-8Gg2Ne_uTcM-unsplash-scaled-1.webp"
                  alt="Team collaboration"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section: Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {solutions.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0a3253] border border-white/10 hover:border-white/20 transition-colors duration-300 h-full flex flex-col items-start text-left group">
                <div className="flex-shrink-0 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors overflow-hidden text-[#59B4E9]">
                    {item.iconComponent}
                  </div>
                </div>
                <p className="text-base text-gray-200 flex-grow leading-relaxed font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6, 7, 8. Courses Loop */}
      {
        courses.map((course, idx) => (
          <section key={idx} className={`${idx === 1 ? 'bg-[#001e3d]' : (idx === 2 ? 'bg-[#0f2d4a]' : 'bg-[#0b2b4d]')} py-20 text-white`}>
            <div className="container mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="section-header reveal-staggered">
                  <span className="bg-[#3da9fc] text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">KHÓA HỌC</span>
                  <h2 className="text-4xl font-bold mb-2 whitespace-pre-line">{course.type}</h2>

                  <div className="flex gap-12 mt-6 mb-8 border-b border-white/10 pb-6">
                    <div>
                      <span className="text-3xl font-bold block">{course.stats.left}</span>
                      <span className="text-xs text-white/60 uppercase">{course.stats.leftLabel}</span>
                    </div>
                    <div>
                      <span className="text-3xl font-bold block">{course.stats.right}</span>
                      <span className="text-xs text-white/60 uppercase">{course.stats.rightLabel}</span>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-8">
                    <button className="px-6 py-2 bg-white text-[#0b2b4d] font-bold rounded text-sm hover:bg-gray-100 transition">
                      Tư Vấn Ngay
                    </button>
                    <button className="px-6 py-2 border border-white text-white font-bold rounded text-sm hover:bg-white/10 transition">
                      Xem Chi Tiết
                    </button>
                  </div>
                </div>

                <div className="text-sm text-white/80 space-y-4">
                  <p dangerouslySetInnerHTML={{ __html: course.desc1 }} />
                  <p dangerouslySetInnerHTML={{ __html: course.desc2 }} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 reveal-staggered">
                {course.modules.map((mod, mIdx) => (
                  <div key={mIdx} className="group cursor-pointer">
                    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative mb-3">
                      <img src={mod.img} alt={mod.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <p className="text-xs font-bold uppercase text-white/60 text-center">{mod.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))
      }

      {/* 9. Section: Khách hàng (Clients) - Updated with Horizontal Scroll */}
      {/* 9. Section: Khách hàng (Clients) - Updated with Horizontal Scroll */}
      <section className="bg-[#001e3d] h-screen flex flex-col justify-center text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
          <div className="flex flex-col md:flex-row gap-8 items-start h-full">
            <div className="md:w-[30%] flex-shrink-0 section-header z-10 pt-10">
              <span className="bg-[#3da9fc] text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">CASE STUDIES</span>
              <h2 className="text-4xl font-bold text-white leading-tight">Khách hàng của CAP</h2>
              <div className="mt-8 flex gap-4">
                <button
                  onClick={scrollPrev}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#0b2b4d] transition-all">
                  <ArrowLeft size={20} />
                </button>
                <button
                  onClick={scrollNext}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#0b2b4d] transition-all">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* CHANGED: removed flex-col for mobile to ensure scroll behavior on all screens */}
            <div
              ref={clientCarouselRef}
              className="flex-1 min-w-0 flex overflow-x-auto scrollbar-hide flex-nowrap snap-x snap-mandatory reveal-scale-staggered items-center h-full">
              {clients.map((client, idx) => (
                <div key={idx} className="min-w-[300px] md:w-[50%] h-full bg-cover bg-center overflow-hidden relative flex-shrink-0 snap-start" style={{ backgroundImage: `url('${client.img}')` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="w-12 h-12 bg-white rounded mb-4 flex items-center justify-center text-black font-bold text-xs">{client.logo}</div>
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

      {/* 10. Section: Testimonials - Updated to scroll on mobile */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 section-header">
            <h2 className="text-3xl font-bold text-[#0b2b4d] mb-2">Lắng nghe học viên nói về CAP</h2>
            <div className="flex justify-center gap-16 mt-6">
              <div>
                <span className="text-4xl font-bold text-[#3da9fc]">4+</span>
                <p className="text-xs uppercase font-bold text-gray-500 mt-1">Năm Kinh Nghiệm</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-[#3da9fc]">18k+</span>
                <p className="text-xs uppercase font-bold text-gray-500 mt-1">Học Viên Đã Học</p>
              </div>
            </div>
          </div>

          {/* CHANGED: Horizontal scroll on mobile, Grid on desktop */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible scrollbar-hide pb-4 snap-x reveal-staggered">
            {testimonials.map((item, i) => (
              <div key={i} className={`min-w-[300px] md:min-w-0 flex-shrink-0 md:flex-shrink bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm snap-center ${i === 2 ? 'md:row-span-2' : ''}`}>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-300 bg-cover" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div>
                    <p className="text-xs font-bold text-[#0b2b4d]">{item.handle}</p>
                    <p className="text-[10px] text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Footer */}
      {/* 11. Footer - Ported from cap FE */}
      <ScrollToTop />
      <Footer />
    </div >
  );
};

export default LearnWithCapClone;
