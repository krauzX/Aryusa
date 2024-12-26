import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPA_URL,
  process.env.NEXT_PUBLIC_SUPA_ANON
);

console.log(process.env.NODE_ENV);
