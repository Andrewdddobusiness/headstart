import React, { useState, useEffect } from "react";
import { Card } from "@nextui-org/react";
import { IconType } from "react-icons";
import { useTheme } from "next-themes";

type ItemCardProps = {
  Icon?: IconType | undefined;
  placeholder?: boolean;
  onSelect?: (selected: boolean | null) => void; // Updated prop type
  isSelected?: boolean | null; // Updated prop type
};

function ItemCard({ Icon, onSelect, isSelected }: ItemCardProps) {
  const [localSelected, setLocalSelected] = useState<boolean | null>(false);

  useEffect(() => {
    if (isSelected !== undefined) {
      setLocalSelected(isSelected);
    }
  }, [isSelected]);

  const handleClick = () => {
    console.log(localSelected);
    // Toggle between true, false, and null
    if (localSelected === true) {
      setLocalSelected(null);
      // Pass the isSelected state to the parent component
      onSelect && onSelect(null);
    } else {
      setLocalSelected(!localSelected);
      // Pass the isSelected state to the parent component
      onSelect && onSelect(!localSelected);
    }

    console.log(1);
  };

  const theme = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Card
      isPressable
      radius="lg"
      shadow="none"
      className={`border-none flex items-center 
      ${
        localSelected === true
          ? "bg-primary"
          : theme.theme === "dark"
          ? " "
          : "bg-zinc-200 "
      }
    `}
      onClick={handleClick}
    >
      {Icon && (
        <Icon
          size="4em"
          className={`m-8 ${
            theme.theme === "dark" ? "text-white " : "text-black "
          }`}
        />
      )}
    </Card>
  );
}

export default ItemCard;
