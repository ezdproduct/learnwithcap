import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yvsbrspvwovaocbbkmqg.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_bvoPyoH7Um87HFDf2du5pw_1zsDWC-O';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
