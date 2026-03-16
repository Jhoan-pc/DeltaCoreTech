import { createClient } from '@supabase/supabase-js';

const getSupabaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) return process.env.NEXT_PUBLIC_SUPABASE_URL;
  return 'https://x.supabase.co'; // Fallback válido HTTP/S para SSR
};

const getSupabaseKey = () => {
  if (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return 'dummy-key';
};

const supabaseUrl = getSupabaseUrl();
const supabaseAnonKey = getSupabaseKey();

if (supabaseUrl === 'https://x.supabase.co' && typeof window !== 'undefined') {
  console.warn('Supabase credentials missing in browser. Using dummy data for UI preview.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

