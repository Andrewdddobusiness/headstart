"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import strings from "./strings";

import { useTheme } from "next-themes";

export default function HighlightCards() {
  const theme = useTheme();
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-4">
        {strings.items.map((item) => (
          <Card
            key={item.key}
            className={`mb-4 bg-background border ${
              theme.theme === "dark" ? "border-zinc-900" : "border-zinc-300"
            }`}
          >
            <CardBody>
              <div className="flex items-center space-x-4">
                <item.startContent className="text-primary" />
                <div>
                  <h2 className="text-medium">{item.title}</h2>
                  <span className="text-sm text-zinc-500">
                    {item.description}
                  </span>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
