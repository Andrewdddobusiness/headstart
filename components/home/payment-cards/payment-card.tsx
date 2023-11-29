import React from "react";
import { Card, CardHeader } from "@nextui-org/react";
import { Checkbox, Button, Link } from "@nextui-org/react";
import { TItem } from "./strings";

export default function PaymentCard({ item }: { item: TItem }) {
  return (
    <Card
      key={item.key}
      shadow="none"
      className="col-span-12 sm:col-span-6 justify-between bg-background border border-primary"
    >
      <CardHeader className="flex flex-col items-center justify-center mt-4">
        <p className="text-md font-bold">{item.option}</p>
        <h4 className="text-3xl font-bold">{item.price}</h4>
        <p className="text-sm text-secondary font-bold mb-4">
          {item.description}
        </p>

        <div>
          {item.includes.map((include: string) => (
            <div key={include} className="flex flex-row mb-4 items-center">
              <Checkbox isSelected />
              <p className="text-sm text-secondary">{include}</p>
            </div>
          ))}
        </div>
      </CardHeader>

      <div className="flex justify-center mb-8">
        <Link href={item.route}>
          <Button
            color="primary"
            variant="solid"
            radius="full"
            style={{ width: "150px" }}
            className="transition-transform duration-300 transform hover:scale-110"
          >
            {item.button}
          </Button>
        </Link>
      </div>
    </Card>
  );
}
