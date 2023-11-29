"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import strings from "./strings";

export default function FaqAccordian() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="w-3/4 flex flex-col items-center mx-auto">
      <div className="mb-12">
        <p className="md:text-3xl text-xl text-center font-bold">questions?</p>
        <p className="md:text-xl text-sm text-center text-secondary-500">
          figured you had some...
        </p>
      </div>

      <Accordion
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 1,
                },
                opacity: {
                  easings: "ease",
                  duration: 1,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.25,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.3,
                },
              },
            },
          },
        }}
      >
        {strings.items.map((item) => (
          <AccordionItem
            key={item.key}
            aria-label={item.ariaLabel}
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
