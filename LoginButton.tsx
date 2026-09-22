"use client";
import {useState} from "react";import {createSupabaseBrowserClient} from "@/lib/supabase/client";
export function LoginButton(){const[loading,setLoading]=useState(false);async function signIn(){setLoading(true);const supabase=createSupabaseBrowserClient();await supabase.auth.signInWithOAuth({provider:"google",options:{redirectTo:`${window.location.origin}/auth/callback`}});setLoading(false)}return <button className="google-button" onClick={signIn} disabled={loading}><b>G</b>{loading?"Opening Google…":"Continue with Google"}</button>}
