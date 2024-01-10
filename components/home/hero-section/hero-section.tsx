"use client";
import React from "react";
import { Suspense } from "react";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import FloatingIcons from "@/components/home/hero-section/floating-icons";

export default function HeroSection() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-left items-center mb-12">
        <div className="w-full lg:w-2/3 lg:text-left text-center tracking-tighter ">
          <p className="text-5xl lg:text-9xl font-bold">
            starting a new project?
          </p>
          <p className="text-xl lg:text-5xl font-bold">
            give yourself a{" "}
            <span className="text-primary animate-in drop-shadow font-black">
              headstart
            </span>
          </p>
        </div>
        <Suspense fallback={<p>Loading </p>}>
          <FloatingIcons />
        </Suspense>
      </div>

      <div className="flex flex-col text-center items-center mb-12">
        <p className="text-md lg:text-lg">
          <span className="font-bold">headstart </span>
          <span className="text-zinc-500">
            is a customisable starter kit for developers...
          </span>
        </p>
        <p className="text-md lg:text-lg">
          <span className="text-zinc-500">
            choose what you need and start building the
          </span>

          <span className="italic font-bold"> fun stuff!</span>
        </p>
      </div>

      <div className="flex flex-col items-center mb-12">
        <Link href="/login">
          <Button
            color="primary"
            variant="solid"
            radius="full"
            style={{ width: "150px" }}
            className="transition-transform duration-300 transform hover:scale-110 font-bold"
          >
            get started
          </Button>
        </Link>
      </div>
    </div>
  );
}
