import Link from "next/link";
import { notFound } from "next/navigation";

// ✅ Simple in-file “database” to start.
// Later you can move this to a separate file or CMS.
type Herb = {
  slug: string;
  name: string;
  botanical: string;
  intro: string;
  snapshot: { label: string; value: string }[];
  traditionalUses: string[];
  tea: { title: string; bullets: string[]; steps: string[]; notes?: string[] };
  tincture: { bullets: string[]; steps: string[]; notes?: string[] };
  capsules: { bullets: string[]; steps: string[]; notes?: string[] };
  pairings?: string[];
  safety: string[];
  pdfHref?: string; // optional: link to your existing PDF
};

const HERBS: Herb[] = [
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
      title: "Medicinal Tea (Infusion)",
      bullets: [
        "1–2 tsp dried basil leaf (or 1–2 tbsp fresh)",
        "1 cup hot water",
        "Optional: honey, lemon, or a splash of milk",
      ],
      steps: [
        "Place basil in a mug or teapot.",
        "Pour hot water over the herb.",
        "Cover and steep 10–15 minutes.",
        "Strain and enjoy.",
      ],
      notes: [
        "Traditionally enjoyed warm after meals or during seasonal transitions.",
        "Best fresh; refrigerate up to 24 hours if needed.",
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
      bullets: [
        "Dried basil leaf powder",
        "Empty capsules (size 0 or 00)",
        "Optional: capsule filling tray",
      ],
      steps: [
        "Fill capsules with basil powder.",
        "Store in a labeled glass jar away from heat and humidity.",
      ],
      notes: ["Traditionally used in small amounts as part of an herbal routine."],
    },
    pairings: ["Ginger", "Lemon peel", "Peppermint"],
    safety: [
      "Basil is widely used as food. For concentrated preparations, use extra care.",
      "If pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      "Discontinue if you notice sensitivity or irritation.",
      "These statements have not been evaluated by the FDA. This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.",
    ],
    // If you have a Basil PDF already, put it here:
    // pdfHref: "/downloads/herbs/basil.pdf",
  },
];

export function generateMetadata({ params }: { params: { slug: string } }) {
  const herb = HERBS.find((h) => h.slug === params.slug);
  if (!herb) return { title: "Herb | JW Farms" };

  return {
    title: `${herb.name} (${herb.botanical}) | Herbal Learning Library | JW Farms`,
    description: `Learn traditional ways to prepare ${herb.name}—tea, tincture, and capsules—plus safety notes. Educational reference from JW Farms.`,
    alternates: { canonical: `https://www.jwfarms7.com/herbs/${herb.slug}` },
  };
}

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

export default function HerbPage({ params }: { params: { slug: string } }) {
  const herb = HERBS.find((h) => h.slug === params.slug);
  if (!herb) return notFound();

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
        <p className="mt-2 text-lg italic text-gray-700">
          {herb.botanical}
        </p>

        <p className="mt-6 text-lg leading-relaxed text-gray-800">
          {herb.intro}
        </p>

        {herb.pdfHref ? (
          <div className="mt-6">
            <a
              href={herb.pdfHref}
              className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-800 shadow-sm ring-1 ring-purple-200 hover:ring-purple-300"
            >
              View / Download PDF →
            </a>
          </div>
        ) : null}

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
              <div className="font-semibold text-gray-900 mt-5 mb-2">
                Notes
              </div>
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
              <div className="font-semibold text-gray-900 mt-5 mb-2">
                Notes
              </div>
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
              <div className="font-semibold text-gray-900 mt-5 mb-2">
                Notes
              </div>
              <Bullets items={herb.capsules.notes} />
            </>
          ) : null}
        </div>

        {herb.pairings?.length ? (
          <>
            <SectionTitle>Pairing ideas</SectionTitle>
            <Bullets items={herb.pairings} />
          </>
        ) : null}

        <SectionTitle>Safety &amp; considerations</SectionTitle>
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100">
          <Bullets items={herb.safety} />
        </div>
      </div>
    </main>
  );
}
