"use client";
import { SiNextdotjs } from "react-icons/si";
import { SiNextui } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SiSupabase } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaStripe } from "react-icons/fa";

const strings = {
  items: [
    {
      key: "1",
      title: "Connected devices",
      description: "2 issues to fix now",
      logo: SiNextdotjs,
    },
    {
      key: "2",
      title: "Next UI",
      description: "Another description here",
      logo: SiNextui,
    },
    {
      key: "3",
      title: "TypeScript",
      description: "Description for TypeScript",
      logo: BiLogoTypescript,
    },
    {
      key: "4",
      title: "Supabase",
      description: "Description for Supabase",
      logo: SiSupabase,
    },
    {
      key: "5",
      title: "GitHub",
      description: "Description for GitHub",
      logo: SiGithub,
    },
    {
      key: "6",
      title: "Stripe",
      description: "Description for Stripe",
      logo: FaStripe,
    },
    // Add more items as needed
  ],
};

export default strings;
