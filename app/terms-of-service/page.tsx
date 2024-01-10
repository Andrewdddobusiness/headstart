"use client";

import { strings } from "./strings";

const lastUpdatedDate = "December 6th, 2023";

export default function TermsOfServicePage() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <h3 className="text-sm text-gray-500 mb-6">
          Last updated: {lastUpdatedDate}
        </h3>

        {Object.keys(strings).map((key) => (
          <section key={key as keyof typeof strings} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              {strings[key as keyof typeof strings].title}
            </h2>
            <p className="text-gray-500">
              {strings[key as keyof typeof strings].body}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
