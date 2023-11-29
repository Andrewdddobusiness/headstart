"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import strings from "./strings";

export default function HighlightAccordion() {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger: "px-2 py-0 rounded-lg h-14 flex items-center ",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="flex flex-col items-center">
      <Accordion
        showDivider={true}
        className="p-2 flex flex-col gap-1 w-full max-w-md bg-background "
        variant="shadow"
        itemClasses={itemClasses}
      >
        {strings.items.map((item) => (
          <AccordionItem
            key={item.key}
            aria-label={item.ariaLabel}
            startContent={React.createElement(item.startContent, {
              className: "text-primary",
            })}
            subtitle={item.subtitle}
            title={item.title}
          >
            {defaultContent}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
