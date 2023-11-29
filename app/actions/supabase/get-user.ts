"use server";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export async function getUser(): Promise<any> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
