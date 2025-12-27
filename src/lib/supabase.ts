import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yvsbrspvwovaocbbkmqg.supabase.co';
const supabaseAnonKey = 'sb_publishable_bvoPyoH7Um87HFDf2du5pw_1zsDWC-O';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
