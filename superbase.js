"use strict";

const SUPABASE_URL = "https://bjgeilzbblbktvzkwlra.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_JO6cLoy0DokgJspW9ktjLg_klpelJhy";

if (!window.supabase) {
  throw new Error("Supabase is not loaded. Add the Supabase browser SDK before superbase.js.");
}

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
