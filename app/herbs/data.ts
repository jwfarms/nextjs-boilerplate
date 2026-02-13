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
    pdfHref: "/herbal-library/lavender.pdf",
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
    tincture: {
      bullets: [
        "Dried leaf: 1:5 (herb : alcohol)",
        "Fresh leaf: 1:2",
        "Alcohol: 40–60%",
      ],
      steps: [
        "Chop fresh cilantro (or use dried).",
        "Add herb to a glass jar and cover with alcohol using the ratio above.",
        "Seal, label, and store in a dark cabinet.",
        "Shake daily for 4–6 weeks.",
        "Strain and bottle.",
      ],
      notes: ["Shelf life: often 3–5 years when stored cool and dark."],
    },
    capsules: {
      bullets: ["Dried cilantro leaf powder", "Empty capsules (size 0 or 00)"],
      steps: ["Fill capsules.", "Store labeled and dry."],
      notes: [
        "Often used as a food herb first; use extra care with concentrated forms.",
      ],
    },
    pairings: ["Lime", "Ginger", "Mint", "Cumin (culinary)"],
    safety: [
      "Cilantro is widely used as food.",
      "If you have plant allergies, introduce slowly and discontinue if you notice sensitivity.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      "These statements have not been evaluated by the FDA. This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.",
    ],
    pdfHref: "/herbal-library/cilantro.pdf",
  },

  // =========================
  // CLEAVERS
  // =========================
  {
    slug: "cleavers",
    name: "Cleavers",
    botanical: "Galium aparine",
    intro:
      "Cleavers is a traditional springtime herb often included in gentle seasonal routines. It’s commonly prepared as an infusion and enjoyed as part of classic “fresh start” wellness traditions.",
    snapshot: [
      { label: "Botanical name", value: "Galium aparine" },
      { label: "Common names", value: "Cleavers, sticky weed, goosegrass" },
      { label: "Family", value: "Bedstraw family (Rubiaceae)" },
      { label: "Part used", value: "Aerial parts (fresh preferred)" },
      { label: "Taste/aroma", value: "Green, mild, slightly grassy" },
    ],
    traditionalUses: [
      "Traditional springtime wellness routines (traditional use)",
      "Gentle daily “refresh” habits (traditional use)",
      "Historically used in folk preparations as a mild herb (traditional use)",
    ],
    tea: {
      title: "Cleavers Tea (Infusion)",
      bullets: ["1–2 tsp dried cleavers (or 2–3 tbsp fresh)", "1 cup hot water"],
      steps: [
        "Place cleavers in a mug or teapot.",
        "Pour hot water over the herb.",
        "Cover and steep 10–15 minutes.",
        "Strain and enjoy.",
      ],
      notes: [
        "Cleavers is often used fresh in traditional practice; dried can work as a simple infusion.",
      ],
    },
    tincture: {
      bullets: [
        "Fresh cleavers: 1:2 (herb : alcohol)",
        "Dried cleavers: 1:5",
        "Alcohol: 40–60%",
      ],
      steps: [
        "Chop fresh cleavers (recommended) or use dried.",
        "Cover with alcohol using the ratio above.",
        "Seal, label, and store in a dark cabinet.",
        "Shake daily for 4–6 weeks.",
        "Strain and bottle.",
      ],
      notes: ["Shelf life: often 3–5 years when stored cool and dark."],
    },
    capsules: {
      bullets: ["Dried cleavers powder", "Empty capsules (size 0 or 00)"],
      steps: ["Fill capsules.", "Store labeled and dry."],
      notes: [
        "Traditional use is often as tea/infusion; use extra care with concentrated forms.",
      ],
    },
    pairings: ["Nettle", "Lemon (tiny amount)", "Mint (tiny amount)"],
    safety: [
      "Use extra care if you are pregnant, breastfeeding, taking medications, or managing a condition—consult a qualified professional.",
      "Discontinue if you notice sensitivity or stomach upset.",
      "These statements have not been evaluated by the FDA. This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.",
    ],
    pdfHref: "/herbal-library/cleavers.pdf",
  },

  // =========================
  // DANDELION
  // =========================
  {
    slug: "dandelion",
    name: "Dandelion",
    botanical: "Taraxacum officinale",
    intro:
      "Dandelion is a classic traditional herb and food plant. Leaves and root are used in many folk traditions—often as part of springtime routines and everyday nourishment.",
    snapshot: [
      { label: "Botanical name", value: "Taraxacum officinale" },
      { label: "Common names", value: "Dandelion" },
      { label: "Family", value: "Daisy family (Asteraceae)" },
      { label: "Part used", value: "Leaf and root" },
      {
        label: "Taste/aroma",
        value: "Leaf: bitter/green • Root (roasted): earthy",
      },
    ],
    traditionalUses: [
      "Traditional springtime wellness routines (traditional use)",
      "Bitter herb traditions for digestion and appetite (traditional use)",
      "Roasted root beverages as a coffee-like tradition (traditional use)",
      "Everyday nourishment in food traditions (traditional use)",
    ],
    tea: {
      title: "Dandelion Leaf Tea (Infusion)",
      bullets: ["1–2 tsp dried leaf", "1 cup hot water"],
      steps: [
        "Place dandelion leaf in a mug or teapot.",
        "Pour hot water over the herb.",
        "Cover and steep 10–15 minutes.",
        "Strain and enjoy.",
      ],
      notes: [
        "Bitter taste is normal; many people blend with mint or a touch of lemon.",
      ],
    },
    tincture: {
      bullets: [
        "Dried leaf or root: 1:5 (herb : alcohol)",
        "Fresh leaf: 1:2",
        "Alcohol: 40–60%",
      ],
      steps: [
        "Chop fresh plant material (or use dried).",
        "Cover with alcohol using the ratio above.",
        "Seal, label, and store in a dark cabinet.",
        "Shake daily for 4–6 weeks.",
        "Strain and bottle.",
      ],
      notes: ["Shelf life: often 3–5 years when stored cool and dark."],
    },
    capsules: {
      bullets: [
        "Dried dandelion leaf or root powder",
        "Empty capsules (size 0 or 00)",
      ],
      steps: ["Fill capsules.", "Store labeled and dry."],
      notes: [
        "Traditional use often emphasizes tea/food use; use extra care with concentrated forms.",
      ],
    },
    pairings: ["Mint", "Ginger", "Lemon peel"],
    safety: [
      "Avoid if you have a known allergy to plants in the daisy family (ragweed, etc.).",
      "If you have gallbladder concerns or are taking medications, consult a qualified professional before using concentrated preparations.",
      "Discontinue if you notice sensitivity or stomach upset.",
      "These statements have not been evaluated by the FDA. This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.",
    ],
    pdfHref: "/herbal-library/dandelion.pdf",
  },

  // =========================
  // DILL
  // =========================
  {
    slug: "dill",
    name: "Dill",
    botanical: "Anethum graveolens",
    intro:
      "Dill is a well-loved culinary herb used in traditional foodways across many cultures. It’s often enjoyed after meals and included in simple household routines as part of everyday nourishment.",
    snapshot: [
      { label: "Botanical name", value: "Anethum graveolens" },
      { label: "Common names", value: "Dill" },
      { label: "Family", value: "Carrot family (Apiaceae)" },
      { label: "Part used", value: "Leaf (weed) and seed" },
      { label: "Taste/aroma", value: "Bright, aromatic, slightly sweet" },
    ],
    traditionalUses: [
      "Traditional digestion comfort after meals when used in foods (traditional use)",
      "Included in classic culinary traditions (traditional use)",
      "Simple soothing household routines (traditional use)",
    ],
    tea: {
      title: "Dill Seed Tea (Traditional Infusion)",
      bullets: ["1 tsp dill seed (lightly crushed)", "1 cup hot water"],
      steps: [
        "Lightly crush dill seed.",
        "Place in a mug or teapot.",
        "Pour hot water over the seed.",
        "Cover and steep 10–15 minutes.",
        "Strain and enjoy.",
      ],
      notes: ["Traditionally enjoyed after meals."],
    },
    tincture: {
      bullets: ["Dill seed (dried): 1:5 (herb : alcohol)", "Alcohol: 40–60%"],
      steps: [
        "Add dill seed to a glass jar.",
        "Cover with alcohol using the ratio above.",
        "Seal, label, and store in a dark cabinet.",
        "Shake daily for 4–6 weeks.",
        "Strain and bottle.",
      ],
      notes: ["Shelf life: often 3–5 years when stored cool and dark."],
    },
    capsules: {
      bullets: ["Dill seed powder", "Empty capsules (size 0 or 00)"],
      steps: ["Fill capsules.", "Store labeled and dry."],
      notes: [
        "Use extra care with concentrated forms; dill is commonly used as food first.",
      ],
    },
    pairings: ["Fennel", "Ginger", "Lemon"],
    safety: [
      "Dill is widely used as food.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional before using concentrated preparations.",
      "Discontinue if you notice sensitivity or irritation.",
      "These statements have not been evaluated by the FDA. This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.",
    ],
    pdfHref: "/herbal-library/dill.pdf",
  },

  // =========================
  // ECHINACEA  ✅ ADDED
  // =========================
  {
    slug: "echinacea",
    name: "Echinacea",
    botanical: "Echinacea purpurea",
    intro:
      "Echinacea is a well-known traditional herb often included in seasonal wellness routines. It has a long history of household use, especially during times of seasonal change.",
    snapshot: [
      { label: "Botanical name", value: "Echinacea purpurea" },
      { label: "Common names", value: "Purple coneflower" },
      { label: "Family", value: "Daisy family (Asteraceae)" },
      { label: "Part used", value: "Root and aerial parts (varies by tradition)" },
      { label: "Taste/aroma", value: "Earthy; may cause a tingling sensation" },
    ],
    traditionalUses: [
      "Seasonal wellness traditions (traditional use)",
      "Traditional immune-support routines (traditional use)",
      "Short-term household use during seasonal shifts (traditional use)",
    ],
    tea: {
      title: "Echinacea Tea (Infusion)",
      bullets: [
        "1–2 tsp dried echinacea root or aerial parts",
        "1 cup hot water",
        "Optional: honey or lemon",
      ],
      steps: [
        "Place echinacea in a mug or teapot.",
        "Pour hot water over the herb.",
        "Cover and steep 10–15 minutes.",
        "Strain and enjoy.",
      ],
      notes: [
        "Traditionally used for short periods during seasonal transitions.",
      ],
    },
    tincture: {
      bullets: [
        "Dried echinacea: 1:5 (herb : alcohol)",
        "Fresh echinacea: 1:2",
        "Alcohol: 40–60%",
      ],
      steps: [
        "Chop fresh herb (or use dried).",
        "Cover with alcohol using the ratio above.",
        "Seal, label, and store in a dark cabinet.",
        "Shake daily for 4–6 weeks.",
        "Strain and bottle.",
      ],
      notes: ["Shelf life: often 3–5 years when stored cool and dark."],
    },
    capsules: {
      bullets: ["Dried echinacea powder", "Empty capsules (size 0 or 00)"],
      steps: ["Fill capsules.", "Store labeled and dry."],
      notes: ["Use extra care with concentrated forms and start small."],
    },
    pairings: ["Elderberry", "Ginger", "Lemon balm"],
    safety: [
      "Avoid if you have a known allergy to plants in the daisy family (ragweed, etc.).",
      "Use extra care if pregnant, breastfeeding, immune-compromised, or taking medications—consult a qualified professional.",
      "Discontinue if you notice sensitivity or stomach upset.",
      "These statements have not been evaluated by the FDA. This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.",
    ],
    pdfHref: "/herbal-library/echinacea.pdf",
  },
];
