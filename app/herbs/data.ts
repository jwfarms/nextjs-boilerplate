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
  // =========================
  // BASIL
  // =========================
  {
    slug: "basil",
    name: "Basil",
    botanical: "Ocimum basilicum",
    intro:
      "Basil is a beloved culinary herb with a long history of traditional household use. Its aromatic leaves are commonly enjoyed in food and herbal preparations as part of a warm, nourishing routine.",
    snapshot: [
      { label: "Botanical name", value: "Ocimum basilicum" },
      { label: "Common names", value: "Sweet basil" },
      { label: "Family", value: "Mint family (Lamiaceae)" },
      { label: "Part used", value: "Leaf (fresh or dried)" },
      { label: "Taste/aroma", value: "Sweet, peppery, strongly aromatic" },
    ],
    traditionalUses: [
      "Comfortable digestion after meals (traditional use)",
      "Seasonal wellness routines (traditional use)",
      "A calming, aromatic cup of tea (traditional use)",
      "General daily vitality as part of food traditions (traditional use)",
    ],
    tea: {
      title: "Basil Tea (Infusion)",
      bullets: [
        "1–2 tsp dried basil leaf (or 1–2 tbsp fresh)",
        "1 cup hot water",
        "Optional: honey or lemon",
      ],
      steps: [
        "Place basil in a mug or teapot.",
        "Pour hot water over the herb.",
        "Cover and steep 10–15 minutes.",
        "Strain and enjoy.",
      ],
      notes: [
        "Traditionally enjoyed warm after meals or during seasonal transitions.",
      ],
    },
    tincture: {
      bullets: [
        "Dried basil: 1:5 (herb : alcohol)",
        "Fresh basil: 1:2",
        "Alcohol: 40–60% (many people use vodka)",
      ],
      steps: [
        "Chop basil (especially if fresh).",
        "Add herb to a glass jar and cover with alcohol using the ratio above.",
        "Seal, label, and store in a dark cabinet.",
        "Shake daily (or whenever you remember) for 4–6 weeks.",
        "Strain and bottle in a dark dropper bottle.",
      ],
      notes: ["Shelf life: often 3–5 years when stored cool and dark."],
    },
    capsules: {
      bullets: ["Dried basil leaf powder", "Empty capsules (size 0 or 00)"],
      steps: ["Fill capsules with basil powder.", "Store labeled and dry."],
      notes: ["Traditionally used in small amounts as part of an herbal routine."],
    },
    pairings: ["Ginger", "Lemon peel", "Peppermint"],
    safety: [
      "Basil is widely used as food. For concentrated preparations, use extra care.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      "Discontinue if you notice sensitivity or irritation.",
      "These statements have not been evaluated by the FDA. This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.",
    ],
    pdfHref: "/herbal-library/basil.pdf",
  },

  // =========================
  // CHAMOMILE
  // =========================
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
      bullets: [
        "1–2 tsp dried chamomile flowers",
        "1 cup hot water",
        "Optional: honey",
      ],
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
    pdfHref: "/herbal-library/chamomile.pdf",
  },

  // =========================
  // LAVENDER
  // =========================
  {
    slug: "lavender",
    name: "Lavender",
    botanical: "Lavandula angustifolia",
    intro:
      "Lavender is cherished for its soothing aroma and traditional household uses. It’s commonly used in simple routines for relaxation, comfort, and everyday wellness—especially as part of evening wind-down practices.",
    snapshot: [
      { label: "Botanical name", value: "Lavandula angustifolia" },
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
    safety: [
      "Lavender is commonly used in food and household routines. For concentrated internal use, start small.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      "Discontinue if you notice sensitivity or irritation.",
      "These statements have not been evaluated by the FDA. This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.",
    ],
    pdfHref: "/herbal-library/lavender.pdf",
  },

  // =========================
  // CILANTRO
  // =========================
  {
    slug: "cilantro",
    name: "Cilantro",
    botanical: "Coriandrum sativum",
    intro:
      "Cilantro is a bright, aromatic culinary herb used worldwide. Traditionally, it has been included in food-based routines and everyday wellness habits as part of balanced meals.",
    snapshot: [
      { label: "Botanical name", value: "Coriandrum sativum" },
      { label: "Common names", value: "Cilantro (leaf), coriander (seed)" },
      { label: "Family", value: "Carrot family (Apiaceae)" },
      { label: "Part used", value: "Leaf and seed (culinary use)" },
      { label: "Taste/aroma", value: "Fresh, citrusy, pungent" },
    ],
    traditionalUses: [
      "Included in traditional foodways as part of balanced meals (traditional use)",
      "Comfortable digestion after meals when used in foods (traditional use)",
      "Seasonal food traditions and daily vitality (traditional use)",
    ],
    tea: {
      title: "Cilantro Leaf Tea (Mild Infusion)",
      bullets: [
        "1–2 tbsp fresh cilantro (or 1–2 tsp dried leaf)",
        "1 cup hot water",
        "Optional: lemon",
      ],
      steps: [
        "Place cilantro in a mug or teapot.",
        "Pour hot water over the herb.",
        "Cover and steep 5–10 minutes.",
        "Strain and enjoy.",
      ],
      notes: [
        "Cilantro leaf tea is mild; many people prefer it as a food herb rather than a tea.",
      ],
    },
    safety: [
      "Cilantro is widely used as food.",
      "If you have plant allergies, introduce slowly and discontinue if you notice sensitivity.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      "These statements have not been evaluated by the FDA. This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.",
    ],
    pdfHref: "/herbal-library/cilantro.pdf",
  },

  // =========================
  // ECHINACEA
  // =========================
  {
    slug: "echinacea",
    name: "Echinacea",
    botanical: "Echinacea purpurea",
    intro: "Echinacea is traditionally used in seasonal wellness routines.",
    snapshot: [
      { label: "Botanical name", value: "Echinacea purpurea" },
      { label: "Family", value: "Daisy family (Asteraceae)" },
    ],
    traditionalUses: ["Seasonal wellness traditions (traditional use)"],
    safety: [
      "Consult a qualified professional if pregnant or immune-compromised.",
      "Educational information only.",
    ],
    pdfHref: "/herbal-library/echinacea.pdf",
  },
];
