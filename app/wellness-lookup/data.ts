// app/wellness-lookup/data.ts

export type WellnessTopic = {
  title: string;
  slug: string;
  summary: string;
  tags?: string[];
};

export const TOPICS: WellnessTopic[] = [
  {
    title: "Digestion Support",
    slug: "digestion-support",
    summary:
      "Traditional routines and herbs often used for post-meal comfort and gentle digestive support.",
    tags: ["digestion", "gut", "comfort", "after meals"],
  },
  {
    title: "Sleep & Calm",
    slug: "sleep-calm",
    summary:
      "Gentle, traditional calming routines and herbs commonly used to support rest and relaxation.",
    tags: ["sleep", "calm", "relaxation", "stress"],
  },
  {
    title: "Seasonal Wellness",
    slug: "seasonal-wellness",
    summary:
      "Traditional herbs and routines commonly used during seasonal transitions for everyday wellness support.",
    tags: ["seasonal", "immunity", "change of season"],
  },
];
