import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Photos from the Wild Mind</h1>
      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/photo13.jpg", alt: "Shark-fin shaped rock jetting out of ocean" },
          { src: "/photos/photo12.jpg", alt: "Color-pop mushroom close up" },
          { src: "/photos/photo11.jpg", alt: "Mushroom close up" },
          { src: "/photos/photo10.jpg", alt: "Mini forest path" },
          { src: "/photos/photo9.jpg", alt: "Layered foliage, trees, and sky" },
          { src: "/photos/photo8.jpg", alt: "Teenager biking on forest road" },
          { src: "/photos/photo7.jpg", alt: "Sunset and tree silhouette" },
          { src: "/photos/photo6.jpg", alt: "Medford Oregon Temple" },
          { src: "/photos/photo5.jpg", alt: "Cloudy sky" },
          { src: "/photos/photo4.jpg", alt: "Tree skyline" },
          { src: "/photos/photo3.jpg", alt: "Milky way galaxy" },
          { src: "/photos/photo2.jpg", alt: "Brown eyed susan" },
          { src: "/photos/photo1.jpg", alt: "Yellow poppy" },
        ]}
      />
    </section>
  );
}