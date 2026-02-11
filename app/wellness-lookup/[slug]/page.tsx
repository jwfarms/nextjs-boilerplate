import Link from "next/link";
import { notFound } from "next/navigation";
import { TOPICS } from "../page";

// ✅ Static export support (prebuild each topic page)
export function generateStaticParams() {
  return TOPICS.map((t) => ({ slug: t.slug }));
}

// ✅ Do not allow unknown slugs in static export mode
export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }) {
  const topic = TOPICS.find((t) => t.slug === params.slug);
  if (!topic) return { title: "Wellness Topic | JW Farms" };

  return {
    title: `${topic.title} | Wellness Lookup | JW Farms`,
    description: topic.summary,
    alternates: {
      canonical: `https://www.jwfarms7.com/wellness-lookup/${topic.slug}`,
    },
  };
}

function prettyTitleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function WellnessTopicPage({
  params,
}: {
  params: { slug: string };
}) {
  const topic = TOPICS.find((t) => t.slug === params.slug);
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
          {topic.summary}
        </p>

        <h2 className="text-2xl font-semibold text-purple-900 mt-10 mb-3">
          Suggested herbs
        </h2>

        {topic.herbs?.length ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {topic.herbs.map((slug) => (
              <Link
                key={slug}
                href={`/herbs/${slug}`}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100 hover:ring-purple-200 transition"
              >
                <div className="font-semibold text-gray-900">
                  {prettyTitleFromSlug(slug)}
                </div>
                <div className="mt-1 text-sm font-semibold text-purple-700">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-700">No herbs linked yet.</p>
        )}

        <h2 className="text-2xl font-semibold text-purple-900 mt-10 mb-3">
          Suggested blends
        </h2>

        {topic.blends?.length ? (
          <ul className="list-disc pl-6 space-y-1 text-gray-800">
            {topic.blends.map((b) => (
              <li key={b}>{prettyTitleFromSlug(b)}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No blends linked yet.</p>
        )}

        <h2 className="text-2xl font-semibold text-purple-900 mt-10 mb-3">
          Notes
        </h2>

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100">
          <ul className="list-disc pl-6 space-y-1 text-gray-800">
            <li>Educational information only.</li>
            <li>
              If pregnant, breastfeeding, taking medications, or managing a
              condition, consult a qualified professional.
            </li>
            <li>These statements have not been evaluated by the FDA.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
