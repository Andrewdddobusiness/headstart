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
        "payments",
        "ui components",
        "conventions",
        "database migrations",
      ],
      button: "get started",
      route: "/login",
    },
  ],
};
