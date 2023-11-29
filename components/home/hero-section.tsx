"use client";
import React from "react";
import { Chip } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import gif from "@/public/images/haze-open-laptop.png";

export default function HeroSection() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Chip variant="bordered" className={"mb-6"}>
          starterbuild
        </Chip>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center mb-12">
        {/* Left Column: Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-3xl lg:text-5xl font-bold">
            start your{" "}
            <span className="italic text-secondary-500 animate-in drop-shadow ">
              next build
            </span>
          </p>
          <p className="text-3xl lg:text-5xl font-bold">
            with{" "}
            <span className="text-primary animate-in drop-shadow ">
              starterbuild
            </span>
          </p>
        </div>

        {/* Right Column: Image */}

        <div className="animate-in flex items-center justify-center w-full lg:w-1/2 text-center lg:text-left">
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Image src={gif} alt="coder" width={300} height={300} />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col items-center mb-12 text-secondary-500">
        <p className="text-md lg:text-xl ">
          a starter project for{" "}
          <span className="italic font-bold ">"newbie devs"</span>
        </p>
        <p className="text-md lg:text-xl">
          to focus on building the{" "}
          <span className="italic font-bold">cool stuff!</span>
        </p>
      </div>

      <div className="flex flex-col items-center mb-12">
        <Link href="/login">
          <Button
            color="primary"
            variant="solid"
            radius="full"
            style={{ width: "150px" }}
            className="transition-transform duration-300 transform hover:scale-110"
          >
            get started
          </Button>
        </Link>
      </div>
    </div>
  );
}
