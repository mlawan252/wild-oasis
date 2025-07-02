import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gumnnxfnheeegikgktum.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1bW5ueGZuaGVlZWdpa2drdHVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NDU5ODEsImV4cCI6MjA2NjQyMTk4MX0.uaqhdX0DnlGCEkUVVR2Bj12cDW3npDjUhRUFKkUvKv8";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
