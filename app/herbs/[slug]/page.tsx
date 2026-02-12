import Link from "next/link";
import { notFound } from "next/navigation";
import { HERBS, type Herb } from "../data";

// ✅ Static export support (prebuild each herb page)
export function generateStaticParams() {
  return HERBS.map((h) => ({ slug: h.slug }));
}

// ✅ Do not allow unknown slugs in static export mode
export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }) {
  const herb = HERBS.find((h) => h.slug === params.slug);
  if (!herb) return { title: "Herb | JW Farms" };

  return {
    title: `${herb.name} (${herb.botanical}) | JW Farms`,
    description: herb.intro,
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

function PrepCard({
  title,
  bullets,
  steps,
  notes,
}: {
  title: string;
  bullets: string[];
  steps: string[];
  notes?: string[];
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100">
      <div className="font-semibold text-gray-900 mb-2">{title}</div>
      <div className="text-sm font-semibold text-gray-700 mb-2">You’ll need</div>
      <Bullets items={bullets} />
      <div className="text-sm font-semibold text-gray-700 mt-5 mb-2">Directions</div>
      <Steps items={steps} />
      {notes?.length ? (
        <>
          <div className="text-sm font-semibold text-gray-700 mt-5 mb-2">
            Notes
          </div>
          <Bullets items={notes} />
        </>
      ) : null}
    </div>
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

        <p className="mt-6 text-lg leading-relaxed text-gray-800">{herb.intro}</p>

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
            <PrepCard
              title="Tea (Infusion)"
              bullets={herb.tea.bullets}
              steps={herb.tea.steps}
              notes={herb.tea.notes}
            />
          </>
        ) : null}

        {herb.tincture ? (
          <>
            <SectionTitle>Tincture (Alcohol extract)</SectionTitle>
            <PrepCard
              title="Tincture basics"
              bullets={herb.tincture.bullets}
              steps={herb.tincture.steps}
              notes={herb.tincture.notes}
            />
          </>
        ) : null}

        {herb.capsules ? (
          <>
            <SectionTitle>Capsules</SectionTitle>
            <PrepCard
              title="Capsules"
              bullets={herb.capsules.bullets}
              steps={herb.capsules.steps}
              notes={herb.capsules.notes}
            />
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
