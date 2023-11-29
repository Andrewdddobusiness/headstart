"use server";
import Link from "next/link";
import { signOut } from "@/app/actions/supabase/sign-out";
import { getUser } from "@/app/actions/supabase/get-user";

import { Button } from "@nextui-org/react";

export default async function AuthButton() {
  const user = await getUser();

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOut}>
        <Button
          radius="full"
          className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
          Logout
        </Button>
      </form>
    </div>
  ) : (
    <Link href="/login">
      <Button color="primary" variant="ghost" radius="full" href="/login">
        Login
      </Button>
    </Link>
  );
}
