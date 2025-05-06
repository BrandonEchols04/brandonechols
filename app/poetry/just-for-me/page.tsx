import Link from "next/link";
import type { Metadata } from "next";
import { poetry } from "../poetry-data";

export const metadata: Metadata = {
  title: "Poetry",
  description: "Poetry",
};

export default function Poetry() {
  return (
    <section>
      <h1 className="title mb-3 font-medium text-2xl">
        {poetry[0].title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-medium">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {poetry[0].date}
        </p>
      </div>
        <p className="whitespace-pre-line">
            {`
            I see the clouds nigh everyday,
            They paint the bright blue sky.
            Today I fly above the clouds,
            Soaring way up high.

            I wonder at the beauty,
            Clouds as vast as the open sea.
            I marvel at the fact that God made
            These clouds just for me.
            `.trim()}
          </p>
    </section>
  );
}