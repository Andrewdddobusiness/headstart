"use client";
import React from "react";
import { Link } from "@nextui-org/react";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer
      className={`w-full border-t p-4 flex justify-center text-center text-sm gap-4 ${
        theme.theme === "dark" ? "border-zinc-900" : "border-zinc-200"
      }`}
    >
      <Link href="/terms-of-service" className="text-sm">
        Terms of Service
      </Link>

      <Link href="/privacy" className="text-sm">
        Privacy Policy
      </Link>
    </footer>
  );
}
