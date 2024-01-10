import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";

import AuthButton from "@/components/auth/auth-button";
import ThemeSwitcher from "@/components/nav-bar/theme-switcher";
import { Session } from "@supabase/supabase-js";

type Props = {
  session: Session | null;
};

export default function NavBar({ session }: Props) {
  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <Link
          className="font-bold hover:text-primary focus:text-primary transition-transform duration-300 transform hover:scale-110"
          href="/"
        >
          headstart
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <div className="flex gap-4">
            <ThemeSwitcher />
            <AuthButton session={session} />
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
