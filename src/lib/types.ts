export interface FooterItem {
    id: string; // uuid
    section_id: string; // 'col_1', 'col_2', etc.
    icon_type?: string;
    icon_image_url?: string;
    title: string;
    link_url?: string;
    sort_order: number;
    is_active: boolean;
}

export interface FooterSettings {
    description: string;
    facebook_url: string;
    youtube_url: string;
    instagram_url?: string;
    twitter_url?: string;
    newsletter_title: string;
    newsletter_description: string;
    contact_email: string;
    contact_phone: string;
    copyright_text: string;
}
