"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button isIconOnly color="primary" variant="flat" onClick={toggleTheme}>
      {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
}
