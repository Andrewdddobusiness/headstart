"use client";
import React from "react";
import { Tooltip, Button } from "@nextui-org/react";
import strings from "./strings";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function StackIcons() {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-wrap justify-center mb-12">
      {strings.items.map((item) => (
        <div key={item.key} className="mb-2 mr-2 animate-in">
          <Tooltip
            className={`${
              theme.theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"
            }`}
            content={
              <div className="px-3 py-2">
                <p
                  className={`text-base font-bold ${
                    theme.theme === "dark" ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {item.title}
                </p>
                <p className="text-sm">{item.description}</p>
              </div>
            }
          >
            <Button
              isIconOnly
              variant="light"
              size="lg"
              className={`w-20 h-20 transition-transform duration-300 transform hover:scale-110 font-bold ${
                theme.theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"
              }`}
            >
              <item.logo
                className={`${
                  theme.theme === "dark" ? "text-white" : "text-zinc-500"
                }`}
                size="2.5em"
              />
            </Button>
          </Tooltip>
        </div>
      ))}
    </div>
  );
}
