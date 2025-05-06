export interface Poetry {
  title: string;
  date: string;
  url: string;
}

// Format dates like 'Jan 1, 2025'
export const poetry: Poetry[] = [
  {
    title: "Just For Me",
    date: "March 5, 2025",
    url: "/poetry/just-for-me",
  },
];