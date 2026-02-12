// app/wellness-lookup/data.ts

export type WellnessTopic = {
  title: string;
  slug: string;
  summary: string;
  tags?: string[];
  herbs?: string[];  // ✅ add
  blends?: string[]; // ✅ add (since your UI shows "Blends")
};

export const TOPICS: WellnessTopic[] = [
  {
    title: "Digestion Support",
    slug: "digestion-support",
    summary:
      "Traditional routines and herbs often used for post-meal comfort and gentle digestive support.",
    tags: ["digestion", "gut", "comfort", "after meals"],
    herbs: ["Peppermint", "Ginger", "Chamomile", "Fennel"],
    blends: ["After-Meal Tea", "Gentle Digest Blend"],
  },
  {
    title: "Sleep & Calm",
    slug: "sleep-calm",
    summary:
      "Gentle, traditional calming routines and herbs commonly used to support rest and relaxation.",
    tags: ["sleep", "calm", "relaxation", "stress"],
    herbs: ["Lavender", "Lemon Balm", "Chamomile", "Passionflower"],
    blends: ["Evening Calm Tea", "Bedtime Blend"],
  },
  {
    title: "Seasonal Wellness",
    slug: "seasonal-wellness",
    summary:
      "Traditional herbs and routines commonly used during seasonal transitions for everyday wellness support.",
    tags: ["seasonal", "immunity", "change of season"],
    herbs: ["Elderberry", "Echinacea", "Ginger", "Thyme"],
    blends: ["Seasonal Support Tea", "Cold-Weather Blend"],
  },
];
