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
      startContent: Settings2,
      title: "conventions",
      description: "subjective code, directory layout & typing",
    },
    {
      key: "2",
      startContent: KeyIcon,
      title: "authentication",
      description: "user sign-up, login & profiles",
    },

    {
      key: "4",
      startContent: DatabaseZap,
      title: "database",
      description: "database schemas, migrations, relations",
    },
    {
      key: "6",
      startContent: Banknote,
      title: "payments",
      description: "one time payment + reoccuring billing",
    },
  ],
};

export default strings;
