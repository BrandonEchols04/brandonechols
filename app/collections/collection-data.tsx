export interface Collection {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const collections: Collection[] = [
  {
    title: "A Corpus of Poetry",
    year: 2025,
    description: "All my poetry",
    url: "/poetry",
  },
];