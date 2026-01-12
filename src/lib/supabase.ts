import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://rpctxztitobzcorolcqt.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwY3R4enRpdG9iemNvcm9sY3F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2OTE2ODMsImV4cCI6MjA4MzI2NzY4M30.FqTrYqkYg2ZOuoIXPVZbc_iYs73LK_2mDVYUzu81edg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
