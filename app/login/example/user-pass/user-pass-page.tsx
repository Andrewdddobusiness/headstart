"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import SignIn from "@/actions/supabase/user-pass-login/sign-in";
import SignUp from "@/actions/supabase/user-pass-login/sign-up";

import { ChevronLeft } from "lucide-react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateEmail = (email: any) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const handleAction = async (action: "signIn" | "signUp") => {
    setLoading(true);
    try {
      if (action === "signIn") {
        await SignIn(email, password);
      } else if (action === "signUp") {
        await SignUp(email, password);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
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
      <div className="flex justify-center mt-56">
        <div className="flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
          <Input
            name="email"
            type="email"
            label="Email"
            labelPlacement={"outside"}
            placeholder="you@example.com"
            variant="bordered"
            required
            isClearable
            value={email}
            onValueChange={setEmail}
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "primary"}
            errorMessage={isInvalid && "Please enter a valid email"}
          />

          <Input
            name="password"
            color="primary"
            label="Password"
            labelPlacement={"outside"}
            placeholder="••••••••"
            variant="bordered"
            required
            value={password}
            onValueChange={setPassword}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <Eye className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />

          <Button
            color="primary"
            onClick={() => handleAction("signIn")}
            disabled={isLoading}
            isLoading={isLoading}
          >
            Sign In
          </Button>
          <Button
            color="primary"
            variant="bordered"
            onClick={() => handleAction("signUp")}
            disabled={isLoading}
            isLoading={isLoading}
          >
            Sign Up
          </Button>

          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
