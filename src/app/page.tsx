"use client";
import React, { useRef } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ServiceCarousel from "@/components/ServiceCarousel";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import Solutions from "@/components/Solutions";
import Courses from "@/components/Courses";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import { usePageData } from "@/hooks/usePageData";

const LearnWithCapClone = () => {
  const mainRef = useRef(null);
  const {
    courses,
    testimonials,
    testimonialsHeader,
    solutions,
    serviceItems,
    servicesHeader,
    clients,
    clientsHeader,
    hero,
    navbar,
    footer,
    solutionsHeader,
    wantsHeader,
    difficultiesHeader,
    wants,
    difficulties,
  } = usePageData();

  return (
    <div ref={mainRef} className="text-[#0b2b4d] bg-white">
      <Header navbar={navbar} />

      <Hero hero={hero} />

      <ServiceCarousel
        items={serviceItems}
        subtitle={servicesHeader?.subtitle}
        titlePrefix={servicesHeader?.titlePrefix}
        titleSuffix={servicesHeader?.titleSuffix}
        description={servicesHeader?.description}
      />

      <Insights
        wants={wants}
        difficulties={difficulties}
        wantsHeader={wantsHeader}
        difficultiesHeader={difficultiesHeader}
      />

      <Solutions
        solutions={solutions}
        solutionsHeader={solutionsHeader}
      />

      <Courses courses={courses} />

      <Clients
        clients={clients}
        clientsHeader={clientsHeader}
      />

      <Testimonials
        testimonials={testimonials}
        testimonialsHeader={testimonialsHeader}
      />

      <CTASection />

      <ScrollToTop />
      <Footer footerData={footer} />
    </div>
  );
};

export default LearnWithCapClone;
