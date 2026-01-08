// Database table names
export const TABLES = {
    PAGE_SECTIONS: 'LD_page_sections',
    HOMEPAGE_FOOTER: 'LD_homepage_footer',
    HOMEPAGE_INSIGHTS: 'LD_homepage_insights',
    MAIN_HP_FOOTER_ITEMS: 'LD_main_hp_footer_items',
    MAIN_HP_FOOTER: 'LD_main_hp_footer',
    TEAM: 'LD_team',
    VISION_MISSION: 'LD_vision_mission',
    RESOURCES: 'LD_resources',
} as const;

// Section keys
export const SECTION_KEYS = {
    COURSES: 'courses',
    TESTIMONIALS: 'testimonials',
    SERVICES: 'services',
    CLIENTS: 'clients',
    HERO: 'hero',
    NAVBAR: 'navbar',
    SOLUTIONS_HEADER: 'solutions_header',
    WANTS_HEADER: 'wants_header',
    DIFFICULTIES_HEADER: 'difficulties_header',
    SOLUTIONS: 'solutions',
} as const;

// Insight sections
export const INSIGHT_SECTIONS = {
    WANTS: 'wants',
    DIFFICULTIES: 'difficulties',
} as const;

// Default navbar links
export const DEFAULT_NAVBAR_LINKS = [
    { label: "Khóa Học", href: "/shop" },
    { label: "Tài Nguyên", href: "/resources" },
    { label: "Về Chúng Tôi", href: "/about" }
] as const;
