"use client";
import { useState } from "react";
import axios from "axios";
import supabaseClient from "@/supabase/client";

const AuthPage = () => {
  const [email, setEmail] = useState("");

  async function handleSignIn() {
    const { data, error } = await supabaseClient.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "http://localhost:3000",
      },
    });
  }

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign Up</button>
    </div>
  );
};

export default AuthPage;
