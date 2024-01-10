import React from "react";
import StackIcons from "./stack-icons";

export default function StackSection() {
  return (
    <div>
      <div className="flex justify-center mb-12">
        <p className="md:text-xl text-md text-center text-zinc-500">
          choose the tools & services you need... more to come!
        </p>
      </div>
      <StackIcons />
    </div>
  );
}
