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

const FDA =
  "These statements have not been evaluated by the FDA. This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.";

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
      FDA,
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
      FDA,
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
    safety: [
      "Cilantro is widely used as food.",
      "If you have plant allergies, introduce slowly and discontinue if you notice sensitivity.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      FDA,
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
      { label: "Part used", value: "Aerial parts" },
      { label: "Taste/aroma", value: "Green, mild, slightly grassy" },
    ],
    traditionalUses: [
      "Traditional springtime wellness routines (traditional use)",
      "Gentle daily “refresh” habits (traditional use)",
      "Historically used in folk preparations as a mild herb (traditional use)",
    ],
    safety: [
      "Use extra care if pregnant, breastfeeding, taking medications, or managing a condition—consult a qualified professional.",
      "Discontinue if you notice sensitivity or stomach upset.",
      FDA,
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
      { label: "Taste/aroma", value: "Leaf: bitter/green • Root: earthy" },
    ],
    traditionalUses: [
      "Traditional springtime wellness routines (traditional use)",
      "Bitter herb traditions for digestion and appetite (traditional use)",
      "Everyday nourishment in food traditions (traditional use)",
    ],
    safety: [
      "Avoid if you have a known allergy to plants in the daisy family (ragweed, etc.).",
      "If you have gallbladder concerns or are taking medications, consult a qualified professional before using concentrated preparations.",
      FDA,
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
    safety: [
      "Dill is widely used as food.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional before using concentrated preparations.",
      FDA,
    ],
    pdfHref: "/herbal-library/dill.pdf",
  },

  // =========================
  // ECHINACEA
  // =========================
  {
    slug: "echinacea",
    name: "Echinacea",
    botanical: "Echinacea purpurea",
    intro:
      "Echinacea is traditionally used in seasonal wellness routines. Many people keep it on hand as part of classic “change of seasons” habits.",
    snapshot: [
      { label: "Botanical name", value: "Echinacea purpurea" },
      { label: "Common names", value: "Purple coneflower" },
      { label: "Family", value: "Daisy family (Asteraceae)" },
      { label: "Part used", value: "Root and aerial parts (varies)" },
      { label: "Taste/aroma", value: "Earthy, slightly pungent" },
    ],
    traditionalUses: [
      "Seasonal wellness traditions (traditional use)",
      "Traditional household support during seasonal shifts (traditional use)",
      "General immune-support folklore (traditional use)",
    ],
    safety: [
      "Use extra care if you have autoimmune conditions or are immune-compromised—consult a qualified professional.",
      "Avoid if you have a known allergy to plants in the daisy family (ragweed, etc.).",
      FDA,
    ],
    pdfHref: "/herbal-library/echinacea.pdf",
  },

  // =========================
  // EDELWEISS LAVENDER
  // =========================
  {
    slug: "edelweiss-lavender",
    name: "Edelweiss Lavender",
    botanical: "Lavandula × intermedia (often sold as ‘Edelweiss’)",
    intro:
      "Edelweiss lavender is a commonly grown lavender type used in traditional household routines for fragrance, relaxation, and seasonal enjoyment.",
    snapshot: [
      { label: "Botanical name", value: "Lavandula × intermedia (cultivar varies)" },
      { label: "Common names", value: "Edelweiss lavender (trade name)" },
      { label: "Family", value: "Mint family (Lamiaceae)" },
      { label: "Part used", value: "Flower (buds)" },
      { label: "Taste/aroma", value: "Floral, fresh, strongly aromatic" },
    ],
    traditionalUses: [
      "Aromatic household routines (traditional use)",
      "Evening wind-down traditions (traditional use)",
      "Linen and home scenting traditions (traditional use)",
    ],
    safety: [
      "Lavender is commonly used in food and household routines. For concentrated internal use, start small.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      FDA,
    ],
    pdfHref: "/herbal-library/edelweiss-lavender.pdf",
  },

  // =========================
  // GARLIC
  // =========================
  {
    slug: "garlic",
    name: "Garlic",
    botanical: "Allium sativum",
    intro:
      "Garlic is a classic culinary staple used worldwide. It has a long history in traditional foodways and everyday household routines.",
    snapshot: [
      { label: "Botanical name", value: "Allium sativum" },
      { label: "Common names", value: "Garlic" },
      { label: "Family", value: "Amaryllis family (Amaryllidaceae)" },
      { label: "Part used", value: "Bulb (cloves)" },
      { label: "Taste/aroma", value: "Pungent, warming, savory" },
    ],
    traditionalUses: [
      "Traditional culinary vitality and food traditions (traditional use)",
      "Seasonal household traditions (traditional use)",
      "General daily wellness routines through food (traditional use)",
    ],
    safety: [
      "Garlic is widely used as food; concentrated forms may be more intense.",
      "If taking blood thinners or preparing for surgery, consult a qualified professional before concentrated use.",
      FDA,
    ],
    pdfHref: "/herbal-library/garlic.pdf",
  },

  // =========================
  // GINKO (folder: ginko)
  // =========================
  {
    slug: "ginko",
    name: "Ginko",
    botanical: "Ginkgo biloba",
    intro:
      "Ginkgo has a long history of traditional use. Today it is often included in classic herbal traditions and wellness routines.",
    snapshot: [
      { label: "Botanical name", value: "Ginkgo biloba" },
      { label: "Common names", value: "Ginkgo" },
      { label: "Family", value: "Ginkgo family (Ginkgoaceae)" },
      { label: "Part used", value: "Leaf (prepared extracts vary)" },
      { label: "Taste/aroma", value: "Mild, slightly bitter" },
    ],
    traditionalUses: [
      "Traditional vitality routines (traditional use)",
      "Classic herbal traditions (traditional use)",
      "Long-standing global folk use (traditional use)",
    ],
    safety: [
      "Consult a qualified professional if taking blood thinners, seizure medications, or if pregnant/breastfeeding.",
      "Use extra care with concentrated extracts.",
      FDA,
    ],
    pdfHref: "/herbal-library/ginko.pdf",
  },

  // =========================
  // LEMONBALM (folder: lemonbalm)
  // =========================
  {
    slug: "lemonbalm",
    name: "Lemonbalm",
    botanical: "Melissa officinalis",
    intro:
      "Lemon balm is a gentle, lemony mint-family herb traditionally used in calming routines and everyday comfort habits.",
    snapshot: [
      { label: "Botanical name", value: "Melissa officinalis" },
      { label: "Common names", value: "Lemonbalm" },
      { label: "Family", value: "Mint family (Lamiaceae)" },
      { label: "Part used", value: "Leaf" },
      { label: "Taste/aroma", value: "Lemony, mild, sweet-herbal" },
    ],
    traditionalUses: [
      "Calm evening routines (traditional use)",
      "Everyday comfort and relaxation habits (traditional use)",
      "Seasonal stress/soothing traditions (traditional use)",
    ],
    safety: [
      "Generally gentle; discontinue if you notice sensitivity.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      FDA,
    ],
    pdfHref: "/herbal-library/lemonbalm.pdf",
  },

  // =========================
  // MARJORAM
  // =========================
  {
    slug: "marjoram",
    name: "Marjoram",
    botanical: "Origanum majorana",
    intro:
      "Marjoram is a warm, aromatic culinary herb traditionally used in comforting food traditions and household routines.",
    snapshot: [
      { label: "Botanical name", value: "Origanum majorana" },
      { label: "Common names", value: "Sweet marjoram" },
      { label: "Family", value: "Mint family (Lamiaceae)" },
      { label: "Part used", value: "Leaf/flowering tops" },
      { label: "Taste/aroma", value: "Warm, sweet, gently spicy" },
    ],
    traditionalUses: [
      "Comforting meal traditions (traditional use)",
      "Aromatic household routines (traditional use)",
      "Classic after-meal comfort traditions (traditional use)",
    ],
    safety: [
      "Marjoram is widely used as food; concentrated preparations require extra care.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      FDA,
    ],
    pdfHref: "/herbal-library/marjoram.pdf",
  },

  // =========================
  // MARSHMALLOW
  // =========================
  {
    slug: "marshmallow",
    name: "Marshmallow",
    botanical: "Althaea officinalis",
    intro:
      "Marshmallow is traditionally valued for its soothing, demulcent qualities and is often used in gentle comfort routines.",
    snapshot: [
      { label: "Botanical name", value: "Althaea officinalis" },
      { label: "Common names", value: "Marshmallow root/leaf" },
      { label: "Family", value: "Mallow family (Malvaceae)" },
      { label: "Part used", value: "Root (common), leaf" },
      { label: "Taste/aroma", value: "Mild, slightly sweet, mucilaginous" },
    ],
    traditionalUses: [
      "Soothing comfort traditions (traditional use)",
      "Gentle seasonal routines (traditional use)",
      "Traditional tea comfort folklore (traditional use)",
    ],
    safety: [
      "May affect absorption of medications—separate by 2+ hours as a cautious practice.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      FDA,
    ],
    pdfHref: "/herbal-library/marshmallow.pdf",
  },

  // =========================
  // MINT
  // =========================
  {
    slug: "mint",
    name: "Mint",
    botanical: "Mentha spp.",
    intro:
      "Mint is a classic household herb used for flavor and everyday comfort. It’s commonly enjoyed as a tea and in traditional after-meal routines.",
    snapshot: [
      { label: "Botanical name", value: "Mentha spp." },
      { label: "Common names", value: "Mint (various species)" },
      { label: "Family", value: "Mint family (Lamiaceae)" },
      { label: "Part used", value: "Leaf" },
      { label: "Taste/aroma", value: "Cooling, bright, refreshing" },
    ],
    traditionalUses: [
      "After-meal comfort traditions (traditional use)",
      "Cooling, refreshing routines (traditional use)",
      "Everyday household tea traditions (traditional use)",
    ],
    safety: [
      "Mint is widely used as food; concentrated oils are much stronger (use extra care).",
      "If you have reflux sensitivity, start small.",
      FDA,
    ],
    pdfHref: "/herbal-library/mint.pdf",
  },

  // =========================
  // MULLEIN
  // =========================
  {
    slug: "mullein",
    name: "Mullein",
    botanical: "Verbascum thapsus",
    intro:
      "Mullein leaf has a long history in traditional herbalism, often prepared as a tea in classic seasonal routines.",
    snapshot: [
      { label: "Botanical name", value: "Verbascum thapsus" },
      { label: "Common names", value: "Mullein" },
      { label: "Family", value: "Figwort family (Scrophulariaceae)" },
      { label: "Part used", value: "Leaf (most common), flower" },
      { label: "Taste/aroma", value: "Mild, earthy" },
    ],
    traditionalUses: [
      "Traditional seasonal wellness routines (traditional use)",
      "Classic tea traditions (traditional use)",
      "General household herbal traditions (traditional use)",
    ],
    safety: [
      "Strain mullein tea well (fine hairs can be irritating).",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      FDA,
    ],
    pdfHref: "/herbal-library/mullein.pdf",
  },

  // =========================
  // NASTURTIUM
  // =========================
  {
    slug: "nasturtium",
    name: "Nasturtium",
    botanical: "Tropaeolum majus",
    intro:
      "Nasturtium is a vibrant garden plant with edible leaves and flowers, traditionally enjoyed as part of food-based wellness traditions.",
    snapshot: [
      { label: "Botanical name", value: "Tropaeolum majus" },
      { label: "Common names", value: "Nasturtium" },
      { label: "Family", value: "Nasturtium family (Tropaeolaceae)" },
      { label: "Part used", value: "Leaf, flower (culinary)" },
      { label: "Taste/aroma", value: "Peppery, fresh" },
    ],
    traditionalUses: [
      "Traditional culinary vitality (traditional use)",
      "Seasonal garden-to-table traditions (traditional use)",
      "Everyday nourishment through food traditions (traditional use)",
    ],
    safety: [
      "Generally used as food; introduce slowly if sensitive.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      FDA,
    ],
    pdfHref: "/herbal-library/nasturtium.pdf",
  },

  // =========================
  // OREGANO
  // =========================
  {
    slug: "oregano",
    name: "Oregano",
    botanical: "Origanum vulgare",
    intro:
      "Oregano is a strong, aromatic culinary herb used in traditional foodways and household routines across many cultures.",
    snapshot: [
      { label: "Botanical name", value: "Origanum vulgare" },
      { label: "Common names", value: "Oregano" },
      { label: "Family", value: "Mint family (Lamiaceae)" },
      { label: "Part used", value: "Leaf/flowering tops" },
      { label: "Taste/aroma", value: "Robust, spicy, aromatic" },
    ],
    traditionalUses: [
      "Culinary traditions for everyday vitality (traditional use)",
      "Traditional seasonal routines (traditional use)",
      "Household herbal traditions (traditional use)",
    ],
    safety: [
      "Oregano is widely used as food; concentrated oil is much stronger (use extra care).",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      FDA,
    ],
    pdfHref: "/herbal-library/oregano.pdf",
  },

  // =========================
  // PARSLEY
  // =========================
  {
    slug: "parsley",
    name: "Parsley",
    botanical: "Petroselinum crispum",
    intro:
      "Parsley is a common culinary herb traditionally used in everyday meals and food-based wellness routines.",
    snapshot: [
      { label: "Botanical name", value: "Petroselinum crispum" },
      { label: "Common names", value: "Parsley" },
      { label: "Family", value: "Carrot family (Apiaceae)" },
      { label: "Part used", value: "Leaf (and sometimes root)" },
      { label: "Taste/aroma", value: "Fresh, green, mildly bitter" },
    ],
    traditionalUses: [
      "Traditional nourishment through food (traditional use)",
      "Culinary vitality traditions (traditional use)",
      "Everyday kitchen herb routines (traditional use)",
    ],
    safety: [
      "Parsley is widely used as food; concentrated preparations require extra care.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      FDA,
    ],
    pdfHref: "/herbal-library/parsley.pdf",
  },

  // =========================
  // PEPPERMINT
  // =========================
  {
    slug: "peppermint",
    name: "Peppermint",
    botanical: "Mentha × piperita",
    intro:
      "Peppermint is a classic cooling mint often enjoyed as a tea. It’s traditionally used in after-meal routines and everyday comfort practices.",
    snapshot: [
      { label: "Botanical name", value: "Mentha × piperita" },
      { label: "Common names", value: "Peppermint" },
      { label: "Family", value: "Mint family (Lamiaceae)" },
      { label: "Part used", value: "Leaf" },
      { label: "Taste/aroma", value: "Cooling, sharp, strongly minty" },
    ],
    traditionalUses: [
      "After-meal comfort traditions (traditional use)",
      "Cooling, refreshing routines (traditional use)",
      "Everyday tea traditions (traditional use)",
    ],
    safety: [
      "Peppermint is widely used as tea/food; concentrated oil is much stronger (use extra care).",
      "If you have reflux sensitivity, start small.",
      FDA,
    ],
    pdfHref: "/herbal-library/peppermint.pdf",
  },

  // =========================
  // PLANTAIN
  // =========================
  {
    slug: "plantain",
    name: "Plantain",
    botanical: "Plantago major (or Plantago lanceolata)",
    intro:
      "Plantain is a common field herb with a long history of traditional household use, especially in simple, practical routines.",
    snapshot: [
      { label: "Botanical name", value: "Plantago major / lanceolata" },
      { label: "Common names", value: "Plantain (weed)" },
      { label: "Family", value: "Plantain family (Plantaginaceae)" },
      { label: "Part used", value: "Leaf" },
      { label: "Taste/aroma", value: "Mild, green" },
    ],
    traditionalUses: [
      "Traditional household herb routines (traditional use)",
      "Classic folk use in simple preparations (traditional use)",
      "Everyday seasonal routines (traditional use)",
    ],
    safety: [
      "Make sure of correct plant identification and harvest from clean areas.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      FDA,
    ],
    pdfHref: "/herbal-library/plantain.pdf",
  },

  // =========================
  // PURSLANE
  // =========================
  {
    slug: "purslane",
    name: "Purslane",
    botanical: "Portulaca oleracea",
    intro:
      "Purslane is an edible garden plant traditionally used as a food herb in many cultures and enjoyed in simple nourishment routines.",
    snapshot: [
      { label: "Botanical name", value: "Portulaca oleracea" },
      { label: "Common names", value: "Purslane" },
      { label: "Family", value: "Purslane family (Portulacaceae)" },
      { label: "Part used", value: "Aerial parts (food use)" },
      { label: "Taste/aroma", value: "Mild, slightly tangy" },
    ],
    traditionalUses: [
      "Traditional nourishment through food (traditional use)",
      "Garden-to-table traditions (traditional use)",
      "Seasonal cooking routines (traditional use)",
    ],
    safety: [
      "Confirm identification and harvest from clean areas.",
      "If you have kidney stone concerns, consult a qualified professional (purslane contains oxalates).",
      FDA,
    ],
    pdfHref: "/herbal-library/purslane.pdf",
  },

  // =========================
  // ROSEMARY
  // =========================
  {
    slug: "rosemary",
    name: "Rosemary",
    botanical: "Salvia rosmarinus (syn. Rosmarinus officinalis)",
    intro:
      "Rosemary is a fragrant culinary herb traditionally used in food, home routines, and classic herbal traditions.",
    snapshot: [
      { label: "Botanical name", value: "Salvia rosmarinus" },
      { label: "Common names", value: "Rosemary" },
      { label: "Family", value: "Mint family (Lamiaceae)" },
      { label: "Part used", value: "Leaf" },
      { label: "Taste/aroma", value: "Piney, resinous, strongly aromatic" },
    ],
    traditionalUses: [
      "Culinary vitality traditions (traditional use)",
      "Aromatic household routines (traditional use)",
      "Classic seasonal traditions (traditional use)",
    ],
    safety: [
      "Rosemary is widely used as food; concentrated preparations require extra care.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      FDA,
    ],
    pdfHref: "/herbal-library/rosemary.pdf",
  },

  // =========================
  // SAGE
  // =========================
  {
    slug: "sage",
    name: "Sage",
    botanical: "Salvia officinalis",
    intro:
      "Sage is a strong aromatic herb used traditionally in cooking and household routines, especially in seasonal traditions.",
    snapshot: [
      { label: "Botanical name", value: "Salvia officinalis" },
      { label: "Common names", value: "Common sage" },
      { label: "Family", value: "Mint family (Lamiaceae)" },
      { label: "Part used", value: "Leaf" },
      { label: "Taste/aroma", value: "Warm, savory, strongly aromatic" },
    ],
    traditionalUses: [
      "Traditional seasonal household routines (traditional use)",
      "Culinary traditions (traditional use)",
      "Aromatic tea traditions (traditional use)",
    ],
    safety: [
      "Sage is widely used as food; concentrated preparations require extra care.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      FDA,
    ],
    pdfHref: "/herbal-library/sage.pdf",
  },

  // =========================
  // SPEARMINT
  // =========================
  {
    slug: "spearmint",
    name: "Spearmint",
    botanical: "Mentha spicata",
    intro:
      "Spearmint is a gentle mint often enjoyed as a tea and used in traditional after-meal routines and everyday comfort habits.",
    snapshot: [
      { label: "Botanical name", value: "Mentha spicata" },
      { label: "Common names", value: "Spearmint" },
      { label: "Family", value: "Mint family (Lamiaceae)" },
      { label: "Part used", value: "Leaf" },
      { label: "Taste/aroma", value: "Sweet, cooling, mild mint" },
    ],
    traditionalUses: [
      "After-meal comfort traditions (traditional use)",
      "Cooling, refreshing routines (traditional use)",
      "Everyday tea traditions (traditional use)",
    ],
    safety: [
      "Spearmint is widely used as tea/food; discontinue if you notice sensitivity.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      FDA,
    ],
    pdfHref: "/herbal-library/spearmint.pdf",
  },

  // =========================
  // ST JOHN'S WORT (folder: st-johns-wort)
  // =========================
  {
    slug: "st-johns-wort",
    name: "St John’s Wort",
    botanical: "Hypericum perforatum",
    intro:
      "St John’s Wort has a long history in traditional herbalism. It is widely discussed in folk traditions and classic preparations.",
    snapshot: [
      { label: "Botanical name", value: "Hypericum perforatum" },
      { label: "Common names", value: "St John’s Wort" },
      { label: "Family", value: "St John’s Wort family (Hypericaceae)" },
      { label: "Part used", value: "Flowering tops" },
      { label: "Taste/aroma", value: "Resinous, slightly bitter" },
    ],
    traditionalUses: [
      "Traditional folk preparations (traditional use)",
      "Classic seasonal routines (traditional use)",
      "Traditional household herb discussions (traditional use)",
    ],
    safety: [
      "IMPORTANT: This herb can interact with many medications. Consult a qualified professional before use.",
      "Use extra care if pregnant, breastfeeding, taking medications, or managing a condition.",
      FDA,
    ],
    pdfHref: "/herbal-library/st-johns-wort.pdf",
  },

  // =========================
  // THYME
  // =========================
  {
    slug: "thyme",
    name: "Thyme",
    botanical: "Thymus vulgaris",
    intro:
      "Thyme is a classic culinary herb used in traditional cooking and household routines, especially in seasonal traditions.",
    snapshot: [
      { label: "Botanical name", value: "Thymus vulgaris" },
      { label: "Common names", value: "Thyme" },
      { label: "Family", value: "Mint family (Lamiaceae)" },
      { label: "Part used", value: "Leaf/flowering tops" },
      { label: "Taste/aroma", value: "Savory, warm, strongly aromatic" },
    ],
    traditionalUses: [
      "Seasonal kitchen traditions (traditional use)",
      "Aromatic tea traditions (traditional use)",
      "Classic household herb routines (traditional use)",
    ],
    safety: [
      "Thyme is widely used as food; concentrated preparations require extra care.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      FDA,
    ],
    pdfHref: "/herbal-library/thyme.pdf",
  },

  // =========================
  // WHITE CLOVER
  // =========================
  {
    slug: "white-clover",
    name: "White Clover",
    botanical: "Trifolium repens",
    intro:
      "White clover is a common meadow plant traditionally used in simple folk practices and seasonal routines.",
    snapshot: [
      { label: "Botanical name", value: "Trifolium repens" },
      { label: "Common names", value: "White clover" },
      { label: "Family", value: "Pea family (Fabaceae)" },
      { label: "Part used", value: "Flowering tops" },
      { label: "Taste/aroma", value: "Mild, slightly sweet" },
    ],
    traditionalUses: [
      "Traditional seasonal routines (traditional use)",
      "Classic folk preparations (traditional use)",
      "General household herb traditions (traditional use)",
    ],
    safety: [
      "Confirm correct plant identification and harvest from clean areas.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      FDA,
    ],
    pdfHref: "/herbal-library/white-clover.pdf",
  },

  // =========================
  // YARROW
  // =========================
  {
    slug: "yarrow",
    name: "Yarrow",
    botanical: "Achillea millefolium",
    intro:
      "Yarrow is a well-known traditional herb in many folk traditions, commonly discussed for its classic place in household herbalism.",
    snapshot: [
      { label: "Botanical name", value: "Achillea millefolium" },
      { label: "Common names", value: "Yarrow" },
      { label: "Family", value: "Daisy family (Asteraceae)" },
      { label: "Part used", value: "Flowering tops" },
      { label: "Taste/aroma", value: "Aromatic, slightly bitter" },
    ],
    traditionalUses: [
      "Classic folk herbal traditions (traditional use)",
      "Traditional seasonal routines (traditional use)",
      "General household preparations (traditional use)",
    ],
    safety: [
      "Avoid if you have known allergy to plants in the daisy family (ragweed, etc.).",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      FDA,
    ],
    pdfHref: "/herbal-library/yarrow.pdf",
  },
];

