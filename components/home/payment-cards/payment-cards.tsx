import React from "react";

import { strings, TItem } from "./strings";
import PaymentCard from "./payment-card";

export default function PaymentCards() {
  return (
    <div>
      <div className="mb-12">
        <p className="md:text-3xl text-xl text-center font-bold">
          the best part? it's <span className="text-primary">free.</span>
        </p>
        <p className="md:text-xl text-sm text-center text-zinc-500">
          yeah, i'm not kidding...
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {strings.items.map((item: TItem) => (
          <PaymentCard key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
}
