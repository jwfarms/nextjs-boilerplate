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
      "Basil is a beloved culinary herb with a long history of traditional household use.",
    snapshot: [
      { label: "Botanical name", value: "Ocimum basilicum" },
      { label: "Family", value: "Mint family (Lamiaceae)" },
    ],
    traditionalUses: [
      "Comfortable digestion after meals (traditional use)",
    ],
    safety: [
      "Basil is widely used as food.",
      "Consult a professional if pregnant or on medication.",
      "Educational information only.",
    ],
    pdfHref: "/herbal-library/basil.pdf",
  },

  // =========================
  // LAVENDER  ✅ FIXED
  // =========================
  {
    slug: "lavender",
    name: "Lavender",
    botanical: "Lavandula angustifolia",
    intro:
      "Lavender is cherished for its soothing aroma and traditional household uses.",
    snapshot: [
      { label: "Botanical name", value: "Lavandula angustifolia" },
      { label: "Family", value: "Mint family (Lamiaceae)" },
    ],
    traditionalUses: [
      "Relaxing evening routines (traditional use)",
    ],
    safety: [
      "Lavender is commonly used in food and tea.",
      "Use caution with concentrated preparations.",
      "Educational information only.",
    ],
    pdfHref: "/herbal-library/lavender.pdf",
  },

  // =========================
  // CHAMOMILE  ✅ FIXED
  // =========================
  {
    slug: "chamomile",
    name: "Chamomile",
    botanical: "Matricaria chamomilla",
    intro:
      "Chamomile is a gentle herb often enjoyed as a calming tea.",
    snapshot: [
      { label: "Botanical name", value: "Matricaria chamomilla" },
      { label: "Family", value: "Daisy family (Asteraceae)" },
    ],
    traditionalUses: [
      "Evening calm routines (traditional use)",
    ],
    safety: [
      "Avoid if allergic to daisy-family plants.",
      "Consult a professional if pregnant.",
      "Educational information only.",
    ],
    pdfHref: "/herbal-library/chamomile.pdf",
  },

  // =========================
  // ECHINACEA  ✅ NEW + VALID
  // =========================
  {
    slug: "echinacea",
    name: "Echinacea",
    botanical: "Echinacea purpurea",
    intro:
      "Echinacea is traditionally used in seasonal wellness routines.",
    snapshot: [
      { label: "Botanical name", value: "Echinacea purpurea" },
      { label: "Family", value: "Daisy family (Asteraceae)" },
    ],
    traditionalUses: [
      "Seasonal wellness traditions (traditional use)",
    ],
    safety: [
      "Consult a qualified professional if pregnant or immune-compromised.",
      "Educational information only.",
    ],
  },
];
