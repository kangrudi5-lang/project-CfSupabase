/**
 * Shared Supabase client configuration.
 *
 * Replace SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY with values from:
 * Supabase Dashboard → Project Settings → API.
 *
 * Only use the project's publishable/anon key in browser code.
 * Never put a service_role or secret key here.
 */
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://sbuhyrktdqnsrsrxemmu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_T3fAG_LYNI4aoaoM0vvDUQ_HI5MqFce";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
