import Link from "next/link";
import type { Metadata } from "next";
import { collections } from "./collection-data";

export const metadata: Metadata = {
  title: "Collections",
  description: "Collections",
};

export default function Collections() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">
        Collections <span className="text-base font-normal">from The Wild Mind</span>
      </h1>
      <div>
        {collections.map((collection, index) => (
          <Link
            key={index}
            href={collection.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{collection.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                {collection.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
