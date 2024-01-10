"use client";
import { useState } from "react";
import Link from "next/link";

import { Button } from "@nextui-org/react";
import GithubSignIn from "@/actions/supabase/social-login/github-sign-in";

import { ChevronLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function Login() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAction = async () => {
    setLoading(true);

    await GithubSignIn();
  };

  return (
    <div>
      <div className="flex justify-start">
        <Link href="/" className="top-16 py-2 text-sm">
          <Button
            color="primary"
            variant="light"
            startContent={
              <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            }
          >
            Back
          </Button>
        </Link>
      </div>

      <div className="flex justify-center mt-56 ">
        <div className="flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 ">
          <Button
            color="primary"
            variant="bordered"
            onClick={() => {
              handleAction();
            }}
            isLoading={isLoading}
          >
            <FaGithub size="1.5em" /> Sign In
          </Button>

          {error && <p className="mt-2 p-2 text-danger text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
}
