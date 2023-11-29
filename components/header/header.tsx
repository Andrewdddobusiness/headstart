import React from "react";
import Logo from "@/components/header/logo";
import AuthButton from "@/components/auth/auth-button";
import ThemeSwitcher from "@/components/header/theme-switcher";

export default function Header() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-screen-2xl flex justify-between items-center p-3 text-sm">
        <Logo />
        <div className="flex gap-4">
          <ThemeSwitcher />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}
