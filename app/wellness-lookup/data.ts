// app/wellness-lookup/data.ts

export type WellnessTopic = {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  herbs: string[];  // herb slugs (must match /herbs/[slug])
  blends: string[]; // blend slugs (we'll build pages later)
};

export const TOPICS: WellnessTopic[] = [
  {
    title: "Digestion Support",
    slug: "digestion-support",
    summary:
      "Traditional routines and herbs often used for post-meal comfort and gentle digestive support.",
    tags: ["digestion", "gut", "comfort", "after meals"],
    herbs: ["peppermint", "ginger", "chamomile", "fennel"],
    blends: ["after-meal-tea", "gentle-digest-blend"],
  },
  {
    title: "Sleep & Calm",
    slug: "sleep-calm",
    summary:
      "Gentle, traditional calming routines and herbs commonly used to support rest and relaxation.",
    tags: ["sleep", "calm", "relaxation", "stress"],
    herbs: ["lavender", "lemon-balm", "chamomile", "passionflower"],
    blends: ["evening-calm-tea", "bedtime-blend"],
  },
  {
    title: "Seasonal Wellness",
    slug: "seasonal-wellness",
    summary:
      "Traditional herbs and routines commonly used during seasonal transitions for everyday wellness support.",
    tags: ["seasonal", "immunity", "change of season"],
    herbs: ["elderberry", "echinacea", "ginger", "thyme"],
    blends: ["seasonal-support-tea", "cold-weather-blend"],
  },
];
