export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

// Format dates like 'Jan 11, 2025'
export const projects: Project[] = [
  {
    title: "Gospel Encyclopedia",
    year: 2025,
    description: "Last updated May 5, 2025",
    url: "https://docs.google.com/document/d/18vfrlADPLz5144r5mVEEEeZdcxdNeEk2/",
  },
  {
    title: "The positive impacts of digital resources on reading and...",
    year: 2025,
    description: "Research paper",
    url: "https://osf.io/preprints/osf/2q5zg_v1",
  },
];