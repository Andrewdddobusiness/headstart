import React, { useState, useEffect } from "react";
import { Card } from "@nextui-org/react";
import { IconType } from "react-icons";
import { useTheme } from "next-themes";

function SkeletonCard() {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Card
      radius="lg"
      shadow="none"
      className={`border-none flex items-center bg-zinc-900 w-32 h-32 ${
        theme.theme === "dark" ? "bg-zinc-900 " : "bg-zinc-100 "
      }`}
    />
  );
}

export default SkeletonCard;
