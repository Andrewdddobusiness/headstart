"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import logoLightMode from "@/public/images/starter-build-logo-lightmode.png";
import logoDarkMode from "@/public/images/starter-build-logo-darkmode.png";
import logoGifLightMode from "@/public/images/starter-build-logo-lightmode.gif";
import logoGifDarkMode from "@/public/images/starter-build-logo-darkmode.gif";

export default function Logo() {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const logoSource = theme === "light" ? logoLightMode : logoDarkMode;
  const logoGifSource = theme === "light" ? logoGifLightMode : logoGifDarkMode;

  return (
    <div
      className="flex items-center justify-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? logoGifSource : logoSource}
        alt="Logo"
        width={50}
        height={50}
        className="transition-transform duration-300 transform hover:scale-110"
      />
    </div>
  );
}
