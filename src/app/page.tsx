"use client";
import { useRef } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import Solutions from "@/components/Solutions";
import Courses from "@/components/Courses";
import { usePageData } from "@/hooks/usePageData";
import {
  LazyServiceCarousel,
  LazyClients,
  LazyTestimonials,
  LazyCTASection,
  LazyScrollToTop,
} from "@/lib/lazy-components";

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

      <LazyServiceCarousel
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

      <LazyClients
        clients={clients}
        clientsHeader={clientsHeader}
      />

      <LazyTestimonials
        testimonials={testimonials}
        testimonialsHeader={testimonialsHeader}
      />

      <LazyCTASection />

      <LazyScrollToTop />
      <Footer footerData={footer} />
    </div>
  );
};

export default LearnWithCapClone;
