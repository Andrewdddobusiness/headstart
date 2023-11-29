"use client";
import React from "react";
import { Tooltip, Button } from "@nextui-org/react";
import strings from "./strings";

export default function StackSection() {
  return (
    <div>
      <div className="flex justify-center mb-12">
        <p className="md:text-xl text-md text-center text-secondary-500">
          powered by top-notch services & open-source tools
        </p>
      </div>
      <div className="flex flex-wrap justify-center mb-12">
        {strings.items.map((item, index) => (
          <div key={item.key} className="mb-4 mr-4">
            <Tooltip
              content={
                <div className="px-3 py-2">
                  <div className="text-base font-bold">{item.title}</div>
                  <div className="text-sm">{item.description}</div>
                </div>
              }
            >
              <Button
                isIconOnly
                variant="light"
                size="lg"
                className="w-16 h-16 text-secondary-500"
              >
                {React.createElement(item.logo, { size: "2em" })}
              </Button>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
}
