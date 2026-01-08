import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { getIcon } from "@/components/ui/IconHelper";
import {
    MOCK_HERO,
    MOCK_SERVICES,
    MOCK_WANTS,
    MOCK_DIFFICULTIES,
    MOCK_SOLUTIONS,
    MOCK_COURSES,
    MOCK_CLIENTS,
    MOCK_TESTIMONIALS,
} from "@/lib/mock-data";

export const usePageData = () => {
    const [courses, setCourses] = useState<any[]>(MOCK_COURSES);
    const [testimonials, setTestimonials] = useState<any[]>(MOCK_TESTIMONIALS);
    const [testimonialsHeader, setTestimonialsHeader] = useState<any>(null);
    const [solutions, setSolutions] = useState<any[]>(MOCK_SOLUTIONS);
    const [serviceItems, setServiceItems] = useState<any[]>(MOCK_SERVICES);
    const [servicesHeader, setServicesHeader] = useState<any>(null);
    const [clients, setClients] = useState<any[]>(MOCK_CLIENTS);
    const [clientsHeader, setClientsHeader] = useState<any>(null);
    const [hero, setHero] = useState<any>(MOCK_HERO);
    const [navbar, setNavbar] = useState<any>(null);
    const [footer, setFooter] = useState<any>(null);
    const [solutionsHeader, setSolutionsHeader] = useState<any>(null);
    const [wantsHeader, setWantsHeader] = useState<any>(null);
    const [difficultiesHeader, setDifficultiesHeader] = useState<any>(null);
    const [wants, setWants] = useState<any[]>(MOCK_WANTS);
    const [difficulties, setDifficulties] = useState<any[]>(MOCK_DIFFICULTIES);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            setLoading(true);
            try {
                // Fetch page_sections
                const { data: sectionsData } = await supabase.from("page_sections").select("*");
                if (sectionsData) {
                    sectionsData.forEach((section: any) => {
                        if (section.section_key === "courses") {
                            if (section.data?.length > 0) {
                                setCourses(section.data);
                            }
                            // If no data from Supabase, MOCK_COURSES (3 courses) will be used
                        }
                        if (section.section_key === "testimonials" && section.data?.items?.length > 0) {
                            setTestimonials(section.data.items);
                            setTestimonialsHeader(section.data.header);
                        }
                        if (section.section_key === "services" && section.data?.items?.length > 0) {
                            setServiceItems(section.data.items);
                            setServicesHeader(section.data.header);
                        }
                        if (section.section_key === "clients" && section.data?.items?.length > 0) {
                            setClients(section.data.items);
                            setClientsHeader(section.data.header);
                        }
                        if (section.section_key === "hero" && section.data) setHero(section.data);
                        if (section.section_key === "navbar" && section.data) setNavbar(section.data);
                        if (section.section_key === "solutions_header") setSolutionsHeader(section.data);
                        if (section.section_key === "wants_header") setWantsHeader(section.data);
                        if (section.section_key === "difficulties_header") setDifficultiesHeader(section.data);
                        if (section.section_key === "solutions" && section.data?.length > 0) {
                            setSolutions(section.data);
                        }
                    });
                }

                // Fetch footer
                const { data: footerData } = await supabase
                    .from('homepage_footer')
                    .select('*')
                    .single();
                if (footerData) setFooter(footerData);

                // Fetch homepage_insights
                const { data: insightsData } = await supabase
                    .from("homepage_insights")
                    .select("*")
                    .order("display_order", { ascending: true });

                if (insightsData && insightsData.length > 0) {
                    const wantsData = insightsData
                        .filter((item: any) => item.section === "wants")
                        .map((item: any) => ({
                            icon: item.icon_name,
                            text: item.text,
                            bg: item.bg_color,
                        }));

                    const difficultiesData = insightsData
                        .filter((item: any) => item.section === "difficulties")
                        .map((item: any) => ({
                            icon: item.icon_name,
                            text: item.text,
                            highlight: item.is_highlighted,
                        }));

                    if (wantsData.length > 0) setWants(wantsData);
                    if (difficultiesData.length > 0) setDifficulties(difficultiesData);
                }
            } catch (error) {
                console.error("Error fetching page data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);

    return {
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
        loading
    };
};
