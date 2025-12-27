"use client";
import React, { useState, useLayoutEffect, useRef } from 'react';
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

    }, mainRef);

    return () => ctx.revert();
  }, []);
  // --- Colors based on provided HTML ---
  // primary: "#002855"
  // secondary: "#3da9fc"
  // accent: "#90b4ce"

  // Mock data for courses
  const courses = [
    {
      type: "Trực tiếp tại Doanh Nghiệp",
      stats: { left: "3", leftLabel: "Modules", right: "36", rightLabel: "Bài học" },
      desc1: <>Khóa học Tiếng Anh giao tiếp chuyên ngành Xây dựng, Kiến trúc và Nội thất được <span className="text-[#3da9fc] font-semibold">thiết kế riêng cho đội ngũ nhân viên của Quý doanh nghiệp</span>, nhằm nâng cao kỹ năng giao tiếp thông qua việc bổ sung từ vựng chuyên ngành và mẫu câu giao tiếp thông dụng trong tình huống công việc thực tế.</>,
      desc2: <>Với lộ trình học tập bài bản, học viên sẽ được đánh giá năng lực đầu vào, <span className="text-[#3da9fc] font-semibold">xây dựng tư duy dùng về việc học ngoại ngữ</span>, được <span className="text-[#3da9fc] font-semibold">"bắt đúng bệnh"</span> và tư vấn phương pháp tự học phù hợp với từng cá nhân.</>,
      modules: [
        { title: "Module 01", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Module 02", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Module 03", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
      ]
    },
    {
      type: "Online 1:1",
      stats: { left: "3", leftLabel: "Modules", right: "36", rightLabel: "Bài học" },
      desc1: <>Khóa học Tiếng Anh Giao Tiếp Chuyên Ngành Xây Dựng, Kiến Trúc và Nội Thất áp dụng hình thức học 1 kèm 1 trực tuyến, đảm bảo học viên nhận được sự hỗ trợ và thời gian <span className="text-[#3da9fc] font-semibold">tương tác tối đa với giáo viên</span>, đồng thời <span className="text-[#3da9fc] font-semibold">linh hoạt về thời gian và địa điểm học tập</span>.</>,
      desc2: <>Khóa học phù hợp với những <span className="text-[#3da9fc] font-semibold">học viên cần nâng cao trình độ ngoại ngữ trong thời gian ngắn</span>, với mức độ <span className="text-[#3da9fc] font-semibold">tập trung cao</span>. Dưới sự đồng hành sát sao của giáo viên, học viên sẽ được đánh giá năng lực đầu vào để "bắt đúng bệnh".</>,
      modules: [
        { title: "Module 01", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Module 02", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Module 03", img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
      ]
    },
    {
      type: "E-Learning",
      stats: { left: "15", leftLabel: "Phút", right: "7", rightLabel: "Ngày" },
      desc1: <>Chỉ với <span className="text-[#3da9fc] font-semibold">15 phút học và luyện tập mỗi ngày</span>, khóa học E-learning tiếng Anh giao tiếp chuyên ngành Xây dựng, Kiến trúc và Nội thất sẽ giúp học viên tiếp thu kiến thức dễ dàng mà không cảm thấy quá tải. Bên cạnh <span className="text-[#3da9fc] font-semibold">lộ trình, thời gian và địa điểm học linh hoạt</span>, học viên còn được lựa chọn chủ đề và gói học phù hợp.</>,
      desc2: <>Thông qua <span className="text-[#3da9fc] font-semibold">hệ thống video bài học tương tác thú vị</span>, bài kiểm tra ngắn cuối mỗi buổi học, học viên được ôn luyện và ghi nhớ kiến thức dễ dàng.</>,
      modules: [
        { title: "Module 01", img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Module 02", img: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Module 03", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
      ]
    }
  ];

  const clients = [
    {
      name: "Công Ty TNHH BOHO",
      sub: "Thiết kế, sản xuất và thi công hoàn thiện Nội thất",
      desc: <>Theo yêu cầu từ ban lãnh đạo Công ty về việc nâng cao kỹ năng giao tiếp trong công việc đặc biệt là mảng tiếng Anh chuyên ngành hoàn thiện nội thất. Như sự tin tưởng đã chọn CAP làm đối tác đồng hành...</>,
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      logo: "LOGO"
    },
    {
      name: "CÔNG TY TNHH DKO ARCHITECTURE VIỆT NAM",
      sub: "Thiết kế Kiến trúc và Nội thất",
      desc: <>Theo yêu cầu từ công ty DKO về việc nâng cao khả năng giao tiếp Tiếng Anh cho đội ngũ chuyên viên phòng thiết kế, CAP đã xây dựng chương trình đào tạo 'English for Interior Design & Architecture'...</>,
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      logo: "DKO"
    },
    {
      name: "TẬP ĐOÀN XÂY DỰNG HÒA BÌNH",
      sub: "Xây dựng dân dụng & Công nghiệp",
      desc: <>Chương trình đào tạo tiếng Anh chuyên biệt cho kỹ sư công trường, tập trung vào từ vựng an toàn lao động và kỹ thuật thi công...</>,
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      logo: "HBC"
    },
    {
      name: "COTECCONS GROUP",
      sub: "Tổng thầu thiết kế và thi công",
      desc: <>Khóa học giao tiếp nâng cao dành cho cấp quản lý, mục tiêu đàm phán và làm việc với các chủ đầu tư nước ngoài...</>,
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      logo: "CTC"
    },
    {
      name: "RICONS CONSTRUCTION",
      sub: "Hệ sinh thái đầu tư xây dựng",
      desc: <>Đào tạo tiếng Anh doanh nghiệp với lộ trình riêng biệt, giúp nhân viên tự tin trao đổi email và báo cáo tiến độ...</>,
      img: "https://images.unsplash.com/photo-1590644365607-1c5a38fcbc2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      logo: "RICONS"
    }
  ];

  const testimonials = [
    { name: "kadkab", handle: "@kadkab", role: "Design Quality", text: "Used a lot of themes, this one so far so best - options, design, everything. Only downside is very simple documentation, basically a never found solution to my problem in documentation. Still 5/5 for me. Good job.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" },
    { name: "chakfacepros", handle: "@chakfacepros", role: "Customer Support", text: "Awesome theme and absolutely top-notch support! One of the best I have experienced!", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" },
    { name: "ccw17", handle: "@ccw17", role: "Customer Support", text: "The template itself is well-designed and user-friendly. What stands out even more is the excellent customer support they provide. They've been responsive and helpful whenever I've had questions or needed assistance. It's been a great experience overall!", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" },
    { name: "isoto8", handle: "@isoto8", role: "Design Quality", text: "Fine and modern theme. Also I'm giving a five star rating for the excellent customer support. They're always there for you.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" },
    { name: "Tomek", handle: "@Tomek", role: "Other", text: "I've been searched for a long time for a suitable theme, and my choice fell on the above that one. I'm 100% satisfied after a month of implementation. VERY helpful support.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" },
    { name: "KodakBaer", handle: "@KodakBaer", role: "Code Quality", text: "I am using this theme on two different websites already and aside from the great design, which can be easily customized, it just works great with pretty much no issues.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" },
    { name: "MinhLong", handle: "@minhlong_arch", role: "Architect", text: "Khóa học rất sát thực tế, tôi đã áp dụng được ngay vào công việc hàng ngày. Rất đề xuất cho các bạn cùng ngành.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" },
    { name: "SarahNguyen", handle: "@sarah_des", role: "Interior Designer", text: "Giáo trình bài bản, giảng viên nhiệt tình hỗ trợ sửa lỗi phát âm rất kỹ. Tôi cảm thấy tự tin hơn hẳn.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" }
  ];

  const wants = [
    { icon: <CircleArrowDown size={32} strokeWidth={1.2} />, text: "Giao tiếp tự tin bằng tiếng Anh trong công việc", bg: "bg-[#eff6ff]" },
    { icon: <Package size={32} strokeWidth={1.2} />, text: "Nghe hiểu và thảo luận bằng tiếng Anh trong cuộc họp", bg: "bg-[#add7ff]" },
    { icon: <CircleArrowDown size={32} strokeWidth={1.2} />, text: "Soạn thảo Email, báo cáo, văn bản bằng tiếng Anh hiệu quả", bg: "bg-[#94bbe9]" },
    { icon: <CircleDot size={32} strokeWidth={1.2} />, text: "Trình bày năng lực bằng tiếng Anh trong công việc, phỏng vấn", bg: "bg-[#6b92b9]" },
  ];

  const difficulties = [
    { icon: <Globe size={32} />, text: "Không thể nghe, hiểu và trao đổi tiếng Anh trong các tình huống cuộc họp, phối hợp công trường" },
    { icon: <Frown size={32} />, text: "Lúng túng khi giao tiếp tiếng Anh với đồng nghiệp và đối tác nước ngoài vì vốn từ và kỹ năng hạn chế..." },
    { icon: <Mic size={32} />, text: "Mặc dù có vốn từ vựng tiếng Anh chuyên ngành nhưng vẫn gặp khó khăn về nghe hiểu và giao tiếp", highlight: true },
    { icon: <CheckCircle size={32} />, text: "Lệ thuộc vào các công cụ hỗ trợ và mất nhiều thời gian khi soạn thảo Email và văn bản tiếng Anh" },
    { icon: <MicOff size={32} />, text: "Bỏ lỡ cơ hội thăng tiến trong sự nghiệp vì không đáp ứng được yêu cầu về ngoại ngữ" },
    { icon: <GraduationCap size={32} />, text: "Có thể giao tiếp tiếng Anh cơ bản, nhưng vẫn cần cải thiện kỹ năng thuyết trình thương thảo" },
  ];

  const solutions = [
    { icon: <Hammer size={20} />, text: "Được học và thực hành giao tiếp tiếng Anh sát mẫu câu, từ vựng chuyên ngành theo sát tình huống thực tế công việc" },
    { icon: <Ruler size={20} />, text: "Được xây dựng nền tảng phát âm và ngữ pháp căn bản thông qua lồng ghép và lập lại trong mỗi bài học" },
    { icon: <Clock size={20} />, text: "Được tiếp cận bài học với lộ trình, tốc độ và khối lượng kiến thức phù hợp cho người đi làm" },
    { icon: <Ear size={20} />, text: "Được phát triển đầy đủ kỹ năng ngoại ngữ trong công việc, tập trung rèn luyện nghe nói, thuyết trình, thương thảo và soạn thảo Email, báo cáo" },
    { icon: <Rocket size={20} />, text: "Được xây dựng thói quen, khả năng tự học thông qua bài tập thực hành sau giờ học, kết hợp thuyết trình và đóng vai theo tình huống thực tế" },
  ];

  const serviceItems = [
    {
      title: "Tư vấn thiết kế kiến trúc, nội thất, kết cấu, MEPF...",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      href: "#"
    },
    {
      title: "Quản lý dự án; Quản lý vận hành",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      href: "#"
    },
    {
      title: "Nhà cung cấp; Sales và Marketing BĐS",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      href: "#"
    },
    {
      title: "Tư vấn khối lượng; Đấu thầu và hợp đồng",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      href: "#"
    },
    {
      title: "Thi công và giám sát công trình",
      image: "https://images.unsplash.com/photo-1503387762-592dee58c460?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      href: "#"
    },
    {
      title: "Tư vấn môi trường & Phát triển bền vững",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      href: "#"
    },
    {
      title: "Số hóa công trình (BIM/VDC)",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      href: "#"
    }
  ];

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
      <section className="pt-4 pb-4 container mx-auto px-4 md:px-8">
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
      < section className="bg-[#0b2b4d] py-16 text-white relative overflow-hidden" >
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 hidden lg:block bg-contain bg-right bg-no-repeat z-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4I6KueNMbkpUA8FQLObgtNUciqZR4LfxiqUSPDlvqbqEYbGSkxZLYEuWO5ipTPbxuNn5NelyY9eE7wjl-7YFH95K9p_-8EctfUnb-y_A5lxsT1b0qdtzrRjrTN0AIIJog88IMWAbstyXhZKgggQdAgbc7a_MeAxY7F346mw9FLG7YFpzd2Yx71v2tjGiVv5mTe3mB-iWIUWetoTnXXODUwNrIaDrpejIlGn747hb7cJAGE1VbZzqV1IBW2daPq94aDkMvs04lDHk')", mixBlendMode: 'overlay' }}></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="mb-8 section-header">
                <span className="bg-[#3da9fc] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">GIẢI PHÁP</span>
                <h2 className="text-4xl font-bold mt-3 mb-10">CAP thiết kế cho bạn</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 reveal-staggered">
                {solutions.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbdmKKDIn16lt7hT34vHfGPep73DhmWu_M_d_nR5QodX7vVybTSxWElOruGFrKDSPzGX0OphPkcCXKYPvR-b8QPztrWauE48DUjCrzo1-uuDBUUaVBPF-D1gKSlA2QAFvnMeYKgLxjC-XkR9HGL5NYWouPpMgTumSM5j8FBd4vGfufTeZjYg8ZudDMKTrxR4AvbXxwj7MjR1auODAsPrKE6TvzXgfhd7Tcl4PY3dMRzr77QE-k25hEm5FbOltqLTwoWxNRiHJzVfU"
                  alt="Solution"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section >

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
                  <p>{course.desc1}</p>
                  <p>{course.desc2}</p>
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
      <section className="bg-[#0b2b4d] py-20 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4 flex-shrink-0 section-header">
              <span className="bg-[#3da9fc] text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">CASE STUDIES</span>
              <h2 className="text-4xl font-bold text-white leading-tight">Khách hàng của CAP</h2>
              <div className="mt-8 flex gap-4">
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#0b2b4d] transition-all">
                  <ArrowLeft size={20} />
                </button>
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#0b2b4d] transition-all">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* CHANGED: removed flex-col for mobile to ensure scroll behavior on all screens */}
            <div className="md:w-3/4 flex gap-6 overflow-x-auto scrollbar-hide pb-4 flex-nowrap snap-x reveal-staggered">
              {clients.map((client, idx) => (
                <div key={idx} className="min-w-[300px] md:min-w-[400px] bg-cover bg-center rounded-xl overflow-hidden relative aspect-[3/4] flex-shrink-0 snap-center" style={{ backgroundImage: `url('${client.img}')` }}>
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
