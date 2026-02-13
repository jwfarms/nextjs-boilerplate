// app/herbs/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { HERBS } from "../data";

// ✅ IMPORTANT: do NOT pre-render every herb at build time.
// This prevents build failures when one herb's content causes a prerender crash.
export const dynamic = "force-dynamic";

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
      {items.map((t, i) => (
        <li key={`${t}-${i}`}>{t}</li>
      ))}
    </ul>
  );
}

function Steps({ items }: { items: string[] }) {
  return (
    <ol className="list-decimal pl-6 space-y-1 text-gray-800">
      {items.map((t, i) => (
        <li key={`${t}-${i}`}>{t}</li>
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
        <p className="mt-2 text-lg italic text-gray-700">{herb.botanical}</p>

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

        {herb.tea ? (
          <>
            <SectionTitle>{herb.tea.title}</SectionTitle>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100">
              <div className="font-semibold text-gray-900 mb-2">You’ll need</div>
              <Bullets items={herb.tea.bullets} />
              <div className="font-semibold text-gray-900 mt-5 mb-2">
                Directions
              </div>
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
          </>
        ) : null}

        {herb.tincture ? (
          <>
            <SectionTitle>Tincture (Alcohol extract)</SectionTitle>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100">
              <div className="font-semibold text-gray-900 mb-2">Basics</div>
              <Bullets items={herb.tincture.bullets} />
              <div className="font-semibold text-gray-900 mt-5 mb-2">
                Directions
              </div>
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
          </>
        ) : null}

        {herb.capsules ? (
          <>
            <SectionTitle>Capsules</SectionTitle>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100">
              <div className="font-semibold text-gray-900 mb-2">You’ll need</div>
              <Bullets items={herb.capsules.bullets} />
              <div className="font-semibold text-gray-900 mt-5 mb-2">
                Directions
              </div>
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
          </>
        ) : null}

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
