import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase URL or API key is missing in the environment variables."
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
