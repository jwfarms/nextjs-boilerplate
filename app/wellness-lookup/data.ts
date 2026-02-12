// app/wellness-lookup/data.ts

export type WellnessTopic = {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  herbs: string[]; // herb slugs (must match /herbs/[slug])
  blends: string[]; // blend slugs (we'll build pages later)
};

export const TOPICS: WellnessTopic[] = [
  {
    title: "Sleep & Calm",
    slug: "sleep-calm",
    summary:
      "Gentle, traditional calming routines and herbs commonly used to support rest and relaxation.",
    tags: ["sleep", "calm", "relaxation", "stress", "evening"],
    herbs: ["lavender", "chamomile"],
    blends: ["evening-calm-tea", "bedtime-blend"],
  },
  {
    title: "Digestive Comfort",
    slug: "digestive-comfort",
    summary:
      "Simple, traditional routines often used for post-meal comfort and gentle digestive support.",
    tags: ["digestion", "comfort", "after meals", "routine"],
    herbs: ["chamomile"],
    blends: ["after-meal-tea", "gentle-digest-blend"],
  },
  {
    title: "Seasonal Wellness",
    slug: "seasonal-wellness",
    summary:
      "Everyday wellness routines often used during seasonal transitions.",
    tags: ["seasonal", "change of season", "wellness routines"],
    herbs: ["lavender"],
    blends: ["seasonal-support-tea", "cold-weather-blend"],
  },
];
