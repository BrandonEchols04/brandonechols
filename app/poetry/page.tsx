import Link from "next/link";
import type { Metadata } from "next";
import { poetry } from "./poetry-data";

export const metadata: Metadata = {
  title: "Poetry",
  description: "Poetry",
};

export default function Poetry() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">
      A Corpus of Poetry <span className="text-base font-normal">from The Wild Mind</span>
      </h1>
      <div>
        {poetry.map((poetry, index) => (
          <Link
            key={index}
            href={poetry.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{poetry.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                {poetry.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}