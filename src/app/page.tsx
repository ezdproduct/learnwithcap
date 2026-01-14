"use client";
import { useRef } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import Solutions from "@/components/Solutions";
import Courses from "@/components/Courses";
import { usePageData } from "@/hooks/usePageData";
import ServiceCarousel from "@/components/ServiceCarousel";
import {
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
    serviceItems,
    servicesHeader,

    solutions,
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
    ctaSection,
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

      <LazyClients
        clients={clients}
        clientsHeader={clientsHeader}
      />

      <LazyTestimonials
        testimonials={testimonials}
        testimonialsHeader={testimonialsHeader}
      />

      <LazyCTASection
        title={ctaSection?.title}
        buttonText={ctaSection?.buttonText}
        buttonLink={ctaSection?.buttonLink}
        videoUrl={ctaSection?.videoUrl}
      />

      <LazyScrollToTop />
      <Footer footerData={footer} />
    </div>
  );
};

export default LearnWithCapClone;
