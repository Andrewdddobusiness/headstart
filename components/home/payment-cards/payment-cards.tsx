import React from "react";

import { strings, TItem } from "./strings";
import PaymentCard from "./payment-card";

export default function PaymentCards() {
  return (
    <div>
      <div className="mb-12">
        <p className="md:text-3xl text-xl text-center font-bold">
          the best part? it's free.
        </p>
        <p className="md:text-xl text-sm text-center text-secondary-500">
          yeah, i'm not kidding...
        </p>
      </div>

      <div className="w-2/3 flex flex-col items-center mx-auto">
        <div className="w-full gap-4 grid grid-cols-12 grid-rows-1">
          {strings.items.map((item: TItem) => (
            <PaymentCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
