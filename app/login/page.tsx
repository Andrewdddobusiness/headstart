"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import SignIn from "@/app/actions/supabase/sign-in";
import SignUp from "@/app/actions/supabase/sign-up";

import { ChevronLeft } from "lucide-react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

import { CircularProgress } from "@nextui-org/react";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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
      // Handle error, if needed
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
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

      <div className="flex justify-center items-center mt-12">
        {loading && <CircularProgress className="text-primary" />}
      </div>

      {!loading && (
        <>
          <Button
            color="primary"
            onClick={() => handleAction("signIn")}
            disabled={loading}
          >
            Sign In
          </Button>
          <Button
            color="primary"
            variant="bordered"
            onClick={() => handleAction("signUp")}
            disabled={loading}
          >
            Sign Up
          </Button>
        </>
      )}

      {searchParams?.message && (
        <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
          {searchParams.message}
        </p>
      )}
    </div>
  );
}
