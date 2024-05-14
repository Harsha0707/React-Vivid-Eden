import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xphtsejcnjyfjbmuhmxg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwaHRzZWpjbmp5ZmpibXVobXhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3Mjg5MTYsImV4cCI6MjAyNTMwNDkxNn0.8VBv589oBAhtjmRpFV94jIcFgR1ejLNGWVgAM3-QaA8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
