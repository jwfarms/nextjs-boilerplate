// app/wellness-lookup/data.ts

export type WellnessTopic = {
  title: string;
  slug: string;
  summary: string;
};

export const TOPICS: WellnessTopic[] = [
  {
    title: "Digestion Support",
    slug: "digestion-support",
    summary:
      "Traditional routines and herbs often used for post-meal comfort and gentle digestive support.",
  },
  {
    title: "Sleep & Calm",
    slug: "sleep-calm",
    summary:
      "Gentle, traditional calming routines and herbs commonly used to support rest and relaxation.",
  },
  {
    title: "Seasonal Wellness",
    slug: "seasonal-wellness",
    summary:
      "Traditional herbs and routines commonly used during seasonal transitions for everyday wellness support.",
  },
];
