import Link from "next/link";

export const metadata = {
  title: "Lavender (Lavandula angustifolia) | Herbal Learning Library | JW Farms",
  description:
    "Learn traditional ways to prepare Lavender—tea, tincture, and capsules—plus safety notes. Educational reference from JW Farms.",
  alternates: {
    canonical: "https://www.jwfarms7.com/herbs/lavender",
  },
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold text-purple-900 mt-10 mb-3">
      {children}
    </h2>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-1 text-gray-800">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function Steps({ items }: { items: string[] }) {
  return (
    <ol className="list-decimal pl-6 space-y-1 text-gray-800">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ol>
  );
}

export default function LavenderPage() {
  const herb = {
    name: "Lavender",
    botanical: "Lavandula angustifolia",
    intro:
      "Lavender is a classic aromatic herb traditionally used in daily routines for calm, comfort, and simple household care. Its fragrant flowers are commonly enjoyed as tea, used in herbal preparations, and appreciated for their soothing scent.",
    snapshot: [
      { label: "Botanical name", value: "Lavandula angustifolia" },
      { label: "Common names", value: "English lavender" },
      { label: "Family", value: "Mint family (Lamiaceae)" },
      { label: "Part used", value: "Flower (buds)" },
      {
        label: "Taste/aroma",
        value: "Floral, sweet, gently bitter; strongly aromatic",
      },
    ],
    traditionalUses: [
      "A calming nighttime routine (traditional use)",
      "Comfort during times of occasional stress (traditional use)",
      "Aromatic support for relaxation and rest (traditional use)",
      "Soothing herbal tea as part of an evening wind-down (traditional use)",
    ],
    tea: {
      title: "Medicinal Tea (Infusion)",
      bullets: [
        "1–2 tsp dried lavender buds",
        "1 cup hot water",
        "Optional: honey and/or lemon",
      ],
      steps: [
        "Place lavender buds in a mug or teapot.",
        "Pour hot water over the herb.",
        "Cover and steep 8–12 minutes.",
        "Strain and enjoy.",
      ],
      notes: [
        "Traditionally enjoyed in the evening or anytime you want a calming cup.",
        "Start with a smaller amount—lavender can be potent and very floral.",
        "Best fresh; refrigerate up to 24 hours if needed.",
      ],
    },
    tincture: {
      bullets: [
        "Dried lavender: 1:5 (herb : alcohol)",
        "Fresh lavender: 1:2",
        "Alcohol: 40–60% is common",
      ],
      steps: [
        "Loosely crumble or chop flowers (especially if fresh).",
        "Add herb to a glass jar and cover with alcohol using the ratio above.",
        "Seal, label, and store away from light.",
        "Shake daily (or often) for 4–6 weeks.",
        "Strain and bottle in a dark dropper bottle.",
      ],
      notes: ["Shelf life: often 3–5 years when stored cool and dark."],
    },
    capsules: {
      bullets: [
        "Dried lavender flower powder (finely ground)",
        "Empty capsules (size 0 or 00)",
        "Optional: capsule filling tray",
      ],
      steps: [
        "Fill capsules with lavender powder.",
        "Store in a labeled jar away from heat and humidity.",
      ],
      notes: [
        "Lavender is strongly aromatic—many people prefer tea or tincture over capsules.",
      ],
    },
    pairings: ["Lemon balm", "Chamomile", "Peppermint"],
    safety: [
      "Lavender is widely used in food and teas. For concentrated preparations, use extra care.",
      "If pregnant, breastfeeding, taking medications, or managing a medical condition, consult a qualified professional.",
      "Discontinue if you notice sensitivity or irritation.",
      "These statements have not been evaluated by the FDA. This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.",
    ],
  };

  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/herbal-learning-library"
          className="text-sm font-medium text-purple-800 hover:underline"
        >
          ← Back to Herbal Learning Library
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-purple-950">
          {herb.name}
        </h1>
        <p className="mt-2 text-lg italic text-gray-700">{herb.botanical}</p>

        <p className="mt-6 text-lg leading-relaxed text-gray-800">
          {herb.intro}
        </p>

        <SectionTitle>Botanical snapshot</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {herb.snapshot.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-purple-100"
            >
              <div className="text-xs uppercase tracking-wide text-gray-500">
                {row.label}
              </div>
              <div className="mt-1 font-medium text-gray-900">{row.value}</div>
            </div>
          ))}
        </div>

        <SectionTitle>Traditional uses</SectionTitle>
        <Bullets items={herb.traditionalUses} />
        <p className="mt-3 text-sm text-gray-600">
          Traditional use is not the same as proven medical treatment.
        </p>

        <SectionTitle>{herb.tea.title}</SectionTitle>
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100">
          <div className="font-semibold text-gray-900 mb-2">You’ll need</div>
          <Bullets items={herb.tea.bullets} />
          <div className="font-semibold text-gray-900 mt-5 mb-2">Directions</div>
          <Steps items={herb.tea.steps} />
          {herb.tea.notes?.length ? (
            <>
              <div className="font-semibold text-gray-900 mt-5 mb-2">Notes</div>
              <Bullets items={herb.tea.notes} />
            </>
          ) : null}
        </div>

        <SectionTitle>Tincture (Alcohol extract)</SectionTitle>
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100">
          <div className="font-semibold text-gray-900 mb-2">Basics</div>
          <Bullets items={herb.tincture.bullets} />
          <div className="font-semibold text-gray-900 mt-5 mb-2">Directions</div>
          <Steps items={herb.tincture.steps} />
          {herb.tincture.notes?.length ? (
            <>
              <div className="font-semibold text-gray-900 mt-5 mb-2">Notes</div>
              <Bullets items={herb.tincture.notes} />
            </>
          ) : null}
        </div>

        <SectionTitle>Capsules</SectionTitle>
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100">
          <div className="font-semibold text-gray-900 mb-2">You’ll need</div>
          <Bullets items={herb.capsules.bullets} />
          <div className="font-semibold text-gray-900 mt-5 mb-2">Directions</div>
          <Steps items={herb.capsules.steps} />
          {herb.capsules.notes?.length ? (
            <>
              <div className="font-semibold text-gray-900 mt-5 mb-2">Notes</div>
              <Bullets items={herb.capsules.notes} />
            </>
          ) : null}
        </div>

        <SectionTitle>Pairing ideas</SectionTitle>
        <Bullets items={herb.pairings} />

        <SectionTitle>Safety &amp; considerations</SectionTitle>
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100">
          <Bullets items={herb.safety} />
        </div>
      </div>
    </main>
  );
}

