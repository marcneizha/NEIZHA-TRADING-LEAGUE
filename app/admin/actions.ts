"use server";
import{redirect}from"next/navigation";import{createSupabaseServerClient}from"@/lib/supabase/server";
export async function signOut(){const s=await createSupabaseServerClient();await s.auth.signOut();redirect("/")}
