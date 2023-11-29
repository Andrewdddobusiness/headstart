export type TItem = {
  key: string;
  option: string;
  price: string;
  description: string;
  includes: string[];
  button: string;
  route: string;
};

export type TItems = {
  items: TItem[];
};

export const strings = {
  items: [
    {
      key: "1",
      option: "free",
      price: "$0",
      description: "things you get:",
      includes: [
        "authentication",
        "build tools",
        "image uploads",
        "payments",
        "ui components",
        "feature flags",
        "database migrations",
      ],
      button: "get started",
      route: "/login",
    },
    {
      key: "2",
      option: '"premium" free',
      price: "$1*",
      description: "everything in free, plus:",
      includes: [
        "lifetime updates",
        "access to new features",
        "future projects early access",
      ],
      button: "make a donation",
      route: "/login",
    },
  ],
};
