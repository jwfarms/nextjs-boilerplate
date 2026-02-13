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

  {
    slug: "cilantro",
    name: "Cilantro",
    botanical: "Coriandrum sativum",
    intro:
      "Cilantro is a familiar kitchen herb with a long history of traditional household use. The fresh leaf is commonly used in food traditions, while the seeds (coriander) are widely used for flavor and warming, aromatic support.",
    snapshot: [
      { label: "Botanical name", value: "Coriandrum sativum" },
      { label: "Common names", value: "Cilantro (leaf), Coriander (seed)" },
      { label: "Family", value: "Carrot family (Apiaceae)" },
      { label: "Part used", value: "Leaf (fresh), seed (dried)" },
      {
        label: "Taste/aroma",
        value:
          "Fresh, bright, citrusy-herbal (leaf); warm, spicy-sweet (seed)",
      },
    ],
    traditionalUses: [
      "Culinary support for comfortable digestion after meals (traditional use)",
      "Fresh, cleansing-tasting food traditions (traditional use)",
      "Aromatic kitchen herb for everyday vitality (traditional use)",
      "Traditional use of coriander seed in warming spice blends (traditional use)",
    ],
    tea: {
      title: "Coriander Seed Tea (Infusion)",
      bullets: [
        "1–2 tsp coriander seeds (lightly crushed)",
        "1 cup hot water",
        "Optional: honey, lemon, or a slice of fresh ginger",
      ],
      steps: [
        "Lightly crush coriander seeds (use a mortar/pestle or the back of a spoon).",
        "Place seeds in a mug or teapot.",
        "Pour hot water over the seeds.",
        "Cover and steep 10–15 minutes.",
        "Strain and enjoy.",
      ],
      notes: [
        "Cilantro leaf is usually used fresh in food; coriander seed is more common for tea.",
      ],
    },
    tincture: {
      bullets: [
        "Dried coriander seed: 1:5 (herb : alcohol)",
        "Alcohol: 40–60% (many people use vodka)",
      ],
      steps: [
        "Lightly crush coriander seeds.",
        "Add to a glass jar and cover with alcohol using the ratio above.",
        "Seal, label, and store in a dark cabinet.",
        "Shake daily (or whenever you remember) for 4–6 weeks.",
        "Strain and bottle in a dark dropper bottle.",
      ],
      notes: ["Shelf life: often 3–5 years when stored cool and dark."],
    },
    capsules: {
      bullets: ["Coriander seed powder", "Empty capsules (size 0 or 00)"],
      steps: ["Fill capsules with coriander powder.", "Store labeled and dry."],
      notes: ["Traditionally used in small amounts as part of an herbal routine."],
    },
    pairings: ["Ginger", "Fennel", "Peppermint", "Lemon peel"],
    safety: [
      "Cilantro is widely used as food. For concentrated preparations, start small.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      "Discontinue if you notice sensitivity or irritation.",
      "These statements have not been evaluated by the FDA. This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.",
    ],
    pdfHref: "/herbal-library/cilantro.pdf",
  },

  {
    slug: "cleavers",
    name: "Cleavers",
    botanical: "Galium aparine",
    intro:
      "Cleavers is a traditional springtime herb often included in gentle wellness routines. In folk tradition it’s associated with ‘moving and clearing’ support and is commonly prepared as a mild tea or as an infused herb in cool preparations.",
    snapshot: [
      { label: "Botanical name", value: "Galium aparine" },
      { label: "Common names", value: "Cleavers, Goosegrass, Stickyweed" },
      { label: "Family", value: "Madder family (Rubiaceae)" },
      { label: "Part used", value: "Aerial parts (fresh preferred), leaf & stem" },
      { label: "Taste/aroma", value: "Mild, green, lightly grassy" },
    ],
    traditionalUses: [
      "Traditional spring cleansing routines (traditional use)",
      "Gentle ‘moving’ support as part of seasonal transitions (traditional use)",
      "Traditional use for skin-comfort routines (traditional use)",
      "Mild everyday tea as part of a wellness rhythm (traditional use)",
    ],
    tea: {
      title: "Cleavers Tea (Infusion)",
      bullets: [
        "1–2 tsp dried cleavers (or 2–3 tsp if very fluffy)",
        "1 cup hot water",
        "Optional: a squeeze of lemon",
      ],
      steps: [
        "Place cleavers in a mug or teapot.",
        "Pour hot water over the herb.",
        "Cover and steep 10–15 minutes.",
        "Strain and enjoy.",
      ],
      notes: [
        "Cleavers is often preferred fresh. Some people enjoy a cool infusion (overnight in the fridge) for a gentler taste.",
      ],
    },
    tincture: {
      bullets: [
        "Fresh cleavers: 1:2 (herb : alcohol)",
        "Dried cleavers: 1:5",
        "Alcohol: 40–60% (many people use vodka)",
      ],
      steps: [
        "Chop fresh cleavers (or crumble dried).",
        "Add herb to a glass jar and cover with alcohol using the ratio above.",
        "Seal, label, and store in a dark cabinet.",
        "Shake daily (or whenever you remember) for 4–6 weeks.",
        "Strain and bottle in a dark dropper bottle.",
      ],
      notes: ["Fresh plant tinctures are common for cleavers."],
    },
    capsules: {
      bullets: ["Dried cleavers powder", "Empty capsules (size 0 or 00)"],
      steps: ["Fill capsules with cleavers powder.", "Store labeled and dry."],
      notes: [
        "Traditional use varies. Start small and use extra care with concentrated preparations.",
      ],
    },
    pairings: ["Nettle", "Red clover", "Lemon balm", "Mint"],
    safety: [
      "Cleavers is generally used as a gentle herb in traditional practices. Start small to assess tolerance.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      "Discontinue if you notice sensitivity or irritation.",
      "These statements have not been evaluated by the FDA. This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.",
    ],
    pdfHref: "/herbal-library/cleavers.pdf",
  },

  {
    slug: "dandelion",
    name: "Dandelion",
    botanical: "Taraxacum officinale",
    intro:
      "Dandelion is a classic traditional herb used both as food and in seasonal routines. The leaf is commonly used in spring greens, while the root is often used in roasted blends and traditional wellness preparations.",
    snapshot: [
      { label: "Botanical name", value: "Taraxacum officinale" },
      { label: "Common names", value: "Dandelion" },
      { label: "Family", value: "Daisy family (Asteraceae)" },
      { label: "Part used", value: "Leaf, root, flower" },
      {
        label: "Taste/aroma",
        value:
          "Leaf: bitter-green; Root: earthy, roasted; Flower: mild, honey-like",
      },
    ],
    traditionalUses: [
      "Traditional springtime cleansing routines (traditional use)",
      "Root used in roasted beverage traditions (traditional use)",
      "Traditional digestive and ‘bitter’ herb routines (traditional use)",
      "Food tradition: leafy greens as part of seasonal vitality (traditional use)",
    ],
    tea: {
      title: "Dandelion Root Tea (Decoction)",
      bullets: [
        "1–2 tsp dried dandelion root",
        "1½ cups water (it will reduce as it simmers)",
        "Optional: cinnamon stick or ginger slice",
      ],
      steps: [
        "Add dandelion root to a small pot with water.",
        "Bring to a gentle boil, then reduce to a simmer.",
        "Simmer 15–20 minutes.",
        "Strain and enjoy warm.",
      ],
      notes: [
        "Leaf can be infused like a standard tea, but root is typically simmered (decoction).",
      ],
    },
    tincture: {
      bullets: [
        "Dried dandelion root: 1:5 (herb : alcohol)",
        "Fresh root: 1:2",
        "Alcohol: 40–60% (many people use vodka)",
      ],
      steps: [
        "Chop or crush root (especially if fresh).",
        "Add to a glass jar and cover with alcohol using the ratio above.",
        "Seal, label, and store in a dark cabinet.",
        "Shake daily (or whenever you remember) for 4–6 weeks.",
        "Strain and bottle in a dark dropper bottle.",
      ],
      notes: [
        "Avoid if you have gallbladder concerns unless guided by a professional.",
      ],
    },
    capsules: {
      bullets: ["Dandelion root powder", "Empty capsules (size 0 or 00)"],
      steps: ["Fill capsules with root powder.", "Store labeled and dry."],
      notes: ["Traditional use varies. Start small to assess tolerance."],
    },
    pairings: ["Burdock", "Ginger", "Peppermint", "Nettle"],
    safety: [
      "Avoid if you have known allergy to plants in the daisy family (ragweed, etc.).",
      "Use extra care if you have gallbladder issues or are taking medications—consult a qualified professional.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      "These statements have not been evaluated by the FDA. This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.",
    ],
    pdfHref: "/herbal-library/dandelion.pdf",
  },

  {
    slug: "dill",
    name: "Dill",
    botanical: "Anethum graveolens",
    intro:
      "Dill is a bright, aromatic culinary herb used for centuries in food traditions. The leaf is popular fresh, and the seed is widely used in traditional preparations and spice blends—often as part of comfortable digestion routines after meals.",
    snapshot: [
      { label: "Botanical name", value: "Anethum graveolens" },
      { label: "Common names", value: "Dill" },
      { label: "Family", value: "Carrot family (Apiaceae)" },
      { label: "Part used", value: "Leaf, seed" },
      {
        label: "Taste/aroma",
        value: "Fresh, grassy, anise-like; seed is warmer and more pungent",
      },
    ],
    traditionalUses: [
      "Comfortable digestion after meals (traditional use)",
      "Traditional culinary spice for richness and balance (traditional use)",
      "Aromatic household tea traditions (traditional use)",
      "Food tradition: pickling and preserving (traditional use)",
    ],
    tea: {
      title: "Dill Seed Tea (Infusion)",
      bullets: [
        "1–2 tsp dill seeds (lightly crushed)",
        "1 cup hot water",
        "Optional: honey or a slice of lemon",
      ],
      steps: [
        "Lightly crush dill seeds.",
        "Place seeds in a mug or teapot.",
        "Pour hot water over the seeds.",
        "Cover and steep 10–15 minutes.",
        "Strain and enjoy.",
      ],
      notes: ["Dill leaf is usually enjoyed as food; the seed is more common for tea."],
    },
    tincture: {
      bullets: [
        "Dried dill seed: 1:5 (herb : alcohol)",
        "Alcohol: 40–60% (many people use vodka)",
      ],
      steps: [
        "Lightly crush dill seeds.",
        "Add to a glass jar and cover with alcohol using the ratio above.",
        "Seal, label, and store in a dark cabinet.",
        "Shake daily (or whenever you remember) for 4–6 weeks.",
        "Strain and bottle in a dark dropper bottle.",
      ],
      notes: ["Shelf life: often 3–5 years when stored cool and dark."],
    },
    capsules: {
      bullets: ["Dill seed powder", "Empty capsules (size 0 or 00)"],
      steps: ["Fill capsules with dill seed powder.", "Store labeled and dry."],
      notes: ["Traditionally used in small amounts as part of an herbal routine."],
    },
    pairings: ["Fennel", "Ginger", "Peppermint", "Lemon peel"],
    safety: [
      "Dill is widely used as food. For concentrated preparations, start small.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      "Discontinue if you notice sensitivity or irritation.",
      "These statements have not been evaluated by the FDA. This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.",
    ],
    pdfHref: "/herbal-library/dill.pdf",
  },
];
