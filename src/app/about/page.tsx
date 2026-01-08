"use client";
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import TeamSection from "@/components/TeamSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import { usePageData } from "@/hooks/usePageData";

const AboutPage = () => {
    const {
        navbar,
        footer,
        team,
        visionMission
    } = usePageData();

    return (
        <div className="text-[#0b2b4d] bg-white text-base">
            <Header navbar={navbar} />

            <main>
                <TeamSection team={team} />
                {visionMission && <VisionMissionSection data={visionMission} />}
            </main>

            <ScrollToTop />
            <Footer footerData={footer} />
        </div>
    );
};

export default AboutPage;
