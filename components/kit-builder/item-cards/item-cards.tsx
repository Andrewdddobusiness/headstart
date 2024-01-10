import React, { useState, useEffect } from "react";
import ItemCard from "./item-card";
import { IconType } from "react-icons";

import SkeletonCard from "./skeleton-card";

export type ItemType = {
  category: string;
  key: string;
  icon?: IconType;
  option?: string | null;
};

type ItemCardsProps = {
  items: ItemType[];
  onSelect: (selectedItem: ItemType | null) => void;
};

export default function ItemCards({ items, onSelect }: ItemCardsProps) {
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);

  const handleSelect = (clickedItem: ItemType) => {
    // Check if the clicked item is the same as the currently selected one
    if (selectedItem && clickedItem.key === selectedItem.key) {
      setSelectedItem(null); // Deselect the card
      onSelect({
        category: clickedItem.category,
        key: clickedItem.key,
        option: null,
      });
    } else {
      setSelectedItem(clickedItem);
      onSelect(clickedItem);
    }
  };

  return (
    <div>
      <p className="flex justify-left text-2xl font-bold mb-2">
        {items[0].category}
      </p>
      <div className="flex overflow-x-auto">
        <div className="flex space-x-4">
          {items.map((item) => (
            <div key={item.key}>
              <ItemCard
                Icon={item.icon || undefined}
                onSelect={() => handleSelect(item)}
                isSelected={selectedItem && item.key === selectedItem.key}
              />
            </div>
          ))}
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </div>
  );
}
