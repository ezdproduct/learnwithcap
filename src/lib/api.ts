import { supabase } from './supabase';
import { FooterItem, FooterSettings } from './types';

export async function getFooterItems(): Promise<FooterItem[]> {
    const { data } = await supabase
        .from('main_hp_footer_items')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });
    return (data || []) as FooterItem[];
}

export async function getFooterSettings(): Promise<FooterSettings | null> {
    const { data } = await supabase
        .from('main_hp_footer')
        .select('*')
        .limit(1)
        .single();
    return data as FooterSettings;
}
