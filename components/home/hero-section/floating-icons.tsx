"use client";
import React from "react";

import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

import { SiNextdotjs } from "react-icons/si";
import { SiNextui } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SiSupabase } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaStripe } from "react-icons/fa";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function FloatingIcons() {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative">
      <div className="w-full lg:w-1/3 lg:text-left text-center items-center justify-center animate-in hidden lg:flex">
        <motion.div
          className="absolute"
          style={{ top: "-4vw", left: "0vw" }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <Button
            isIconOnly
            variant="shadow"
            className={`w-32 h-32 dark ${
              theme.theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"
            }`}
          >
            <SiNextdotjs
              className={`${
                theme.theme === "dark" ? "text-white" : "text-black"
              }`}
              size={"5rem"}
            />
          </Button>
        </motion.div>

        <motion.div
          className="absolute"
          style={{ bottom: "4vh", left: "8vw" }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <Button
            isIconOnly
            variant="shadow"
            className={`w-20 h-20 ${
              theme.theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"
            }`}
          >
            <SiNextui
              className={`${
                theme.theme === "dark" ? "text-white" : "text-black"
              }`}
              size={"3rem"}
            />
          </Button>
        </motion.div>

        <motion.div
          className="absolute"
          style={{ top: "6vh", left: "20vw" }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <Button
            isIconOnly
            variant="shadow"
            className={`w-20 h-20 ${
              theme.theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"
            }`}
          >
            <BiLogoTypescript className="fill-blue-500" size={"4rem"} />
          </Button>
        </motion.div>

        <motion.div
          className="absolute"
          style={{ bottom: "8vh", left: "22vw" }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <Button
            isIconOnly
            variant="shadow"
            className={`w-20 h-20 ${
              theme.theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"
            }`}
          >
            <SiSupabase className={"fill-emerald-500"} size={"3rem"} />
          </Button>
        </motion.div>

        <motion.div
          className="absolute"
          style={{ left: "14vw" }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <Button
            isIconOnly
            variant="shadow"
            className={`w-24 h-24 ${
              theme.theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"
            }`}
          >
            <SiGithub
              className={`${
                theme.theme === "dark" ? "text-white" : "text-black"
              }`}
              size={"4rem"}
            />
          </Button>
        </motion.div>

        <motion.div
          className="absolute"
          style={{ top: "8vh", left: "6vw" }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <Button
            isIconOnly
            variant="shadow"
            className={`w-40 h-30 ${
              theme.theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"
            }`}
          >
            <FaStripe className={"fill-secondary"} size={"6rem"} />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
