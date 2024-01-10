"use client";
import React, { useState } from "react";
import ItemCards from "@/components/kit-builder/item-cards/item-cards";
import {
  frameworks,
  databases,
  payments,
} from "@/components/kit-builder/item-cards/strings";
import { Button } from "@nextui-org/react";
import options from "@/config/build/options.json";
import Link from "next/link";
import { IconType } from "react-icons";
import PageLayout from "@/components/layouts/page-layout";

import { useRouter } from "next/navigation";

export type ItemType = {
  category: string;
  key: string;
  icon?: IconType;
  option?: string | null;
};

export default function KitBuilder() {
  const [selectedOptions, setSelectedOptions] = useState({
    framework: null,
    database: null,
    payment: null,
  });

  const [isMatchingCombination, setIsMatchingCombination] =
    useState<boolean>(true); // Added state for tracking matching combination

  const router = useRouter();

  const handleSelect = (selectedItem: ItemType | null) => {
    setSelectedOptions((prev: any) => ({
      ...prev,
      [selectedItem?.category || ""]: selectedItem?.option || null,
    }));
  };

  const createBuild = () => {
    // Match selected options to the correct combination in options.json
    const matchingCombination = options.find((combination) => {
      return (
        combination.framework === selectedOptions.framework &&
        combination.database === selectedOptions.database &&
        combination.payment === selectedOptions.payment
      );
    });

    // If a matching combination is found, navigate to the URL
    if (matchingCombination) {
      console.log(
        `URL for the selected combination: ${matchingCombination.url}`
      );
      router.push(matchingCombination.url);
    } else {
      console.log("No matching combination found.");
      setIsMatchingCombination(false);
    }
  };

  return (
    <PageLayout>
      <div className="space-y-8 mb-12">
        <div>
          <p className="flex justify-center text-4xl font-bold mb-2">
            Select Your Custom Build
          </p>
          <p className="flex justify-center text-md mb-12">
            Select your preferred services to integrate into your custom build.
          </p>
        </div>
        <div className="sm:flex sm:justify-center">
          <div className="space-y-8">
            <ItemCards
              items={frameworks}
              onSelect={(selectedItem: ItemType | null) =>
                handleSelect(selectedItem)
              }
            />

            <ItemCards
              items={databases}
              onSelect={(selectedItem: ItemType | null) =>
                handleSelect(selectedItem)
              }
            />
            <ItemCards
              items={payments}
              onSelect={(selectedItem: ItemType | null) =>
                handleSelect(selectedItem)
              }
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            color="primary"
            variant="solid"
            radius="full"
            style={{ width: "150px" }}
            className="transition-transform duration-300 transform hover:scale-110 font-bold"
            onClick={createBuild}
          >
            Create Build
          </Button>
        </div>

        {!isMatchingCombination && (
          <p className="text-red-500 text-center mt-4">
            No matching combination found.
          </p>
        )}
      </div>
    </PageLayout>
  );
}
