// AuthButton.tsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import SignOutButton from "./sign-out-button";
import { Session } from "@supabase/supabase-js";

type Props = {
  session: Session | null;
};

export default function AuthButton({ session }: Props) {
  return session ? (
    <div className="flex items-center gap-4">
      {/* <Button
        radius="full"
        onClick={() => handleAction()}
        className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover text-blue-500"
      >
        Logout
      </Button> */}
      <SignOutButton />
    </div>
  ) : (
    <>
      <Link href="/login">
        <Button color="primary" variant="ghost" radius="full">
          Login
        </Button>
      </Link>
    </>
  );
}
