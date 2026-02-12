// app/herbs/data.ts

export type Herb = {
  slug: string;
  name: string;
  botanical: string;
  intro: string;
  snapshot: { label: string; value: string }[];
  traditionalUses: string[];
  tea?: { title: string; bullets: string[]; steps: string[]; notes?: string[] };
  tincture?: { bullets: string[]; steps: string[]; notes?: string[] };
  capsules?: { bullets: string[]; steps: string[]; notes?: string[] };
  pairings?: string[];
  safety: string[];
  pdfHref?: string;
};

export const HERBS: Herb[] = [
  {
    slug: "lavender",
    name: "Lavender",
    botanical: "Lavandula spp.",
    intro:
      "Lavender is cherished for its soothing aroma and traditional household uses. It’s commonly used in simple routines for relaxation, comfort, and everyday wellness—especially as part of evening wind-down practices.",
    snapshot: [
      { label: "Botanical name", value: "Lavandula spp." },
      { label: "Common names", value: "Lavender" },
      { label: "Family", value: "Mint family (Lamiaceae)" },
      { label: "Part used", value: "Flower (buds), sometimes leaf" },
      { label: "Taste/aroma", value: "Floral, sweet, gently herbaceous" },
    ],
    traditionalUses: [
      "Calm, relaxing evening routines (traditional use)",
      "Comfort during occasional tension (traditional use)",
      "Aromatic support for restful wind-down (traditional use)",
      "Household scenting and linen freshness (traditional use)",
    ],
    tea: {
      title: "Lavender Tea (Infusion)",
      bullets: [
        "1 tsp dried lavender buds (culinary-grade)",
        "1 cup hot water",
        "Optional: honey, lemon, or chamomile for a softer blend",
      ],
      steps: [
        "Place lavender buds in a mug or teapot.",
        "Pour hot water over the herb.",
        "Cover and steep 5–10 minutes (lavender is potent).",
        "Strain and enjoy.",
      ],
      notes: [
        "Start small—lavender can taste strong if over-steeped.",
        "Traditionally enjoyed in the evening as part of a calm routine.",
      ],
    },
    tincture: {
      bullets: [
        "Dried lavender buds: 1:5 (herb : alcohol)",
        "Fresh lavender: 1:2",
        "Alcohol: 40–60% (many people use vodka)",
      ],
      steps: [
        "Lightly crush buds (or chop fresh lavender).",
        "Add herb to a glass jar and cover with alcohol using the ratio above.",
        "Seal, label, and store in a dark cabinet.",
        "Shake daily (or whenever you remember) for 4–6 weeks.",
        "Strain and bottle in a dark dropper bottle.",
      ],
      notes: ["Shelf life: often 3–5 years when stored cool and dark."],
    },
    capsules: {
      bullets: [
        "Dried lavender buds powder (or very finely ground buds)",
        "Empty capsules (size 0 or 00)",
        "Optional: capsule filling tray",
      ],
      steps: [
        "Fill capsules with lavender powder.",
        "Store in a labeled jar away from heat and humidity.",
      ],
      notes: [
        "Use extra care with concentrated preparations; lavender is aromatic and strong.",
      ],
    },
    pairings: ["Chamomile", "Lemon balm", "Rose petals", "Mint (tiny amount)"],
    safety: [
      "Lavender is commonly used in food and household routines. For concentrated internal use, start small.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      "Discontinue if you notice sensitivity or irritation.",
      "These statements have not been evaluated by the FDA. This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.",
    ],
    // pdfHref: "/downloads/herbs/lavender.pdf",
  },

  // Optional starter herb so your wellness topic doesn't feel empty
  {
    slug: "chamomile",
    name: "Chamomile",
    botanical: "Matricaria chamomilla",
    intro:
      "Chamomile is a gentle, traditional herb often enjoyed as a calming tea. It’s widely used in simple nighttime routines and for everyday comfort.",
    snapshot: [
      { label: "Botanical name", value: "Matricaria chamomilla" },
      { label: "Common names", value: "German chamomile" },
      { label: "Family", value: "Daisy family (Asteraceae)" },
      { label: "Part used", value: "Flower" },
      { label: "Taste/aroma", value: "Apple-like, mild, floral" },
    ],
    traditionalUses: [
      "Gentle calm and relaxation (traditional use)",
      "Evening tea routines (traditional use)",
      "Everyday comfort (traditional use)",
    ],
    tea: {
      title: "Chamomile Tea (Infusion)",
      bullets: ["1–2 tsp dried chamomile flowers", "1 cup hot water", "Optional: honey"],
      steps: [
        "Place chamomile in a mug or teapot.",
        "Pour hot water over the herb.",
        "Cover and steep 10–15 minutes.",
        "Strain and enjoy.",
      ],
    },
    safety: [
      "Avoid if you have known allergy to plants in the daisy family (ragweed, etc.).",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      "These statements have not been evaluated by the FDA. Educational information only.",
    ],
  },
];
