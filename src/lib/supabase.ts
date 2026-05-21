import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yglmxkiizgoulzkovcgw.supabase.co";

const supabaseAnonKey = "sb_publishable_10ijss6hRq-zDfIBubDfwQ_36h6jxth";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);