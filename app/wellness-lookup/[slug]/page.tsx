import Link from "next/link";
import { notFound } from "next/navigation";

type Ailment = {
  slug: string;
  title: string;
  intro: string;
  herbs: { title: string; href: string }[];
  blends: { title: string; href: string; note?: string }[];
  notes: string[];
};

const AILMENTS: Ailment[] = [
  {
    slug: "sleep-support",
    title: "Sleep Support",
    intro:
      "These are gentle, traditional ideas people use in evening routines to support relaxation and restful wind-down. This page is educational and not medical advice.",
    herbs: [
      { title: "Lavender", href: "/herbs/lavender" },
    ],
    blends: [
      // Add your first blend when it’s ready:
      // { title: "Jet Fuel Latte", href: "/herbal-blends/jet-fuel-latte", note: "A warming, energizing routine—best earlier in the day." },
    ],
    notes: [
      "Start small and keep it simple—especially with strongly aromatic herbs.",
      "If you are pregnant, breastfeeding, taking medications, or managing a condition, consult a qualified professional.",
      "These statements have not been evaluated by the FDA. Educational only.",
    ],
  },
  {
    slug: "digestion-support",
    title: "Digestion Support",
    intro:
      "Traditional household herbs and routines often used for post-meal comfort and everyday digestive support. Educational only.",
    herbs: [
      { title: "Basil", href: "/herbs/basil" },
    ],
    blends: [],
    notes: [
      "Traditional use is not the same as proven medical treatment.",
      "Consult a qualified professional for medical advice.",
      "These statements have not been evaluated by the FDA. Educational only.",
    ],
  },
];

export function generateStaticParams() {
  return AILMENTS.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }) {
  const topic = AILMENTS.find((a) => a.slug === params.slug);
  if (!topic) return { title: "Wellness Lookup | JW Farms" };

  return {
    title: `${topic.title} | Wellness Lookup | JW Farms`,
    description: `Explore herbs and blends traditionally used in simple routines for ${topic.title.toLowerCase()}. Educational reference from JW Farms.`,
    alternates: { canonical: `https://www.jwfarms7.com/wellness-lookup/${topic.slug}` },
  };
}

export default function WellnessTopicPage({ params }: { params: { slug: string } }) {
  const topic = AILMENTS.find((a) => a.slug === params.slug);
  if (!topic) return notFound();

  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/wellness-lookup"
          className="text-sm font-medium text-purple-800 hover:underline"
        >
          ← Back to Wellness Lookup
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-purple-950">
          {topic.title}
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-gray-800">
          {topic.intro}
        </p>

        <h2 className="text-2xl font-semibold text-purple-900 mt-10 mb-3">
          Suggested herbs
        </h2>

        {topic.herbs.length ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {topic.herbs.map((h) => (
              <Link
                key={h.href}
                href={h.href}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100 hover:ring-purple-200 transition"
              >
                <div className="font-semibold text-gray-900">{h.title}</div>
                <div className="mt-1 text-sm font-semibold text-purple-700">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-700">No herbs added yet for this topic.</p>
        )}

        <h2 className="text-2xl font-semibold text-purple-900 mt-10 mb-3">
          Suggested blends
        </h2>

        {topic.blends.length ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {topic.blends.map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100 hover:ring-purple-200 transition"
              >
                <div className="font-semibold text-gray-900">{b.title}</div>
                {b.note ? (
                  <div className="mt-2 text-sm text-gray-700">{b.note}</div>
                ) : null}
                <div className="mt-2 text-sm font-semibold text-purple-700">
                  View recipe →
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-700">
            No blends linked yet. (Next we’ll add Jet Fuel Latte and connect it here.)
          </p>
        )}

        <h2 className="text-2xl font-semibold text-purple-900 mt-10 mb-3">
          Notes &amp; considerations
        </h2>
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100">
          <ul className="list-disc pl-6 space-y-1 text-gray-800">
            {topic.notes.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
