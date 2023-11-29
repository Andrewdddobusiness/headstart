import {
  Settings2,
  KeyIcon,
  Pen,
  DatabaseZap,
  Image,
  Banknote,
  Sailboat,
  FlagTriangleRight,
} from "lucide-react";

const strings = {
  items: [
    {
      key: "1",
      ariaLabel: "Connected devices",
      startContent: Settings2,
      subtitle: "2 issues to fix now",
      title: "Connected devices",
    },
    {
      key: "2",
      ariaLabel: "Apps Permissions",
      startContent: KeyIcon,
      subtitle: "3 apps have read permissions",
      title: "Apps Permissions",
    },
    {
      key: "3",
      ariaLabel: "Pending tasks",
      startContent: Pen,
      subtitle: "Complete your profile",
      title: "Pending tasks",
    },
    {
      key: "4",
      ariaLabel: "Card expired",
      startContent: DatabaseZap,
      subtitle: "Please, update now",
      title: "Card expired",
    },
    {
      key: "5",
      ariaLabel: "Image",
      startContent: Image,
      subtitle: "Subtitle for Image",
      title: "Image",
    },
    {
      key: "6",
      ariaLabel: "Banknote",
      startContent: Banknote,
      subtitle: "Subtitle for Banknote",
      title: "Banknote",
    },
    {
      key: "7",
      ariaLabel: "Sailboat",
      startContent: Sailboat,
      subtitle: "Subtitle for Sailboat",
      title: "Sailboat",
    },
    {
      key: "8",
      ariaLabel: "Flag Triangle Right",
      startContent: FlagTriangleRight,
      subtitle: "Subtitle for Flag Triangle Right",
      title: "Flag Triangle Right",
    },
  ],
};

export default strings;
