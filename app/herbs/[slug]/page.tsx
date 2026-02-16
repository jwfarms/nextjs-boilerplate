// app/herbs/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { HERBS } from "../data";

// ✅ Critical: do NOT pre-render every herb at build time.
// Prevents prerender/build issues.
export const dynamic = "force-dynamic";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const herb = HERBS.find((h) => h.slug === params.slug);
  if (!herb) return { title: "Herb | JW Farms" };

  const canonical = `https://www.jwfarms7.com/herbs/${herb.slug}`;

  return {
    title: `${herb.name} (${herb.botanical}) | Herbal Learning Library | JW Farms`,
    description: `Learn traditional ways to prepare ${herb.name}—tea, tincture, and capsules—plus safety notes. Educational reference from JW Farms.`,
    alternates: { canonical },
    openGraph: {
      title: `${herb.name} | JW Farms`,
      description: `Traditional preparations, uses, and safety notes for ${herb.name}.`,
      url: canonical,
      siteName: "JW Farms",
      type: "article",
    },
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

  // Prefer explicit pdfHref from data, else fall back to the convention
  const pdfHref = herb.pdfHref ?? `/herbal-library/${herb.slug}.pdf`;

  // Preview image convention (your cards already use this)
  const previewImg = `/herbal-library/previews/${herb.slug}.png`;

  // ---- Related herbs logic ----
  // 1) If the library list passed tags into /herbs/[slug] pages later, this will work.
  // 2) If tags aren't present in herb data, we fall back to "same first letter".
  // (We keep this robust so it never breaks builds.)
  const currentName = herb.name ?? "";
  const firstLetter = currentName?.[0]?.toUpperCase?.() ?? "";

  // Attempt tag-based relatedness if tags exist anywhere (safe checks)
  const anyTagsExist = HERBS.some((h: any) => Array.isArray((h as any).tags) && (h as any).tags.length);

  let related = HERBS.filter((h) => h.slug !== herb.slug).slice(0, 0);

  if (anyTagsExist) {
    const myTags = ((herb as any).tags ?? []) as string[];
    related = HERBS.filter((h) => h.slug !== herb.slug).filter((h: any) => {
      const tags = (h.tags ?? []) as string[];
      return myTags.length > 0 && tags.some((t) => myTags.includes(t));
    });
  }

  if (related.length === 0 && firstLetter) {
    related = HERBS.filter((h) => h.slug !== herb.slug).filter((h) => {
      const n = h.name ?? "";
      return (n?.[0]?.toUpperCase?.() ?? "") === firstLetter;
    });
  }

  // Keep it tidy
  related = related.slice(0, 6);

  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-purple-800/90 flex flex-wrap gap-2">
          <Link href="/" className="hover:underline font-medium">
            Home
          </Link>
          <span className="text-purple-300">/</span>
          <Link href="/herbal-learning-library" className="hover:underline font-medium">
            Herbal Learning Library
          </Link>
          <span className="text-purple-300">/</span>
          <span className="font-semibold text-purple-950">{herb.name}</span>
        </nav>

        {/* Page header */}
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-purple-950">
          {herb.name}
        </h1>
        <p className="mt-2 text-lg italic text-gray-700">{herb.botanical}</p>

        <p className="mt-6 text-lg leading-relaxed text-gray-800">{herb.intro}</p>

        {/* Primary actions */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={pdfHref}
            className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-800 shadow-sm ring-1 ring-purple-200 hover:ring-purple-300"
          >
            View / Download PDF →
          </a>

          {/* One-stop book download (your merged PDF) */}
          <a
            href="/downloads/herbal-learning-library-book.pdf"
            className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-800 shadow-sm ring-1 ring-purple-200 hover:ring-purple-300"
          >
            Download Full Library Book →
          </a>

          <Link
            href="/herbal-learning-library"
            className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-800 shadow-sm ring-1 ring-purple-200 hover:ring-purple-300"
          >
            Back to Library →
          </Link>
        </div>

        {/* Optional: quick preview image */}
        <div className="mt-6 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-purple-100">
          <div className="text-sm font-semibold text-purple-900 mb-3">
            Herbal reference preview
          </div>
          <div className="rounded-2xl bg-purple-50 border border-purple-100 overflow-hidden">
            <img
              src={previewImg}
              alt={`${herb.name} herbal reference preview`}
              className="w-full aspect-[3/4] object-contain"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-xs text-gray-600">
            If the preview image isn’t available yet, the PDF download above will still work.
          </p>
        </div>

        {/* Helpful internal links (contextual cross-links) */}
        <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100">
          <div className="text-sm font-semibold text-purple-900 mb-2">
            Related JW Farms guides
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link href="/lavender" className="text-purple-700 font-semibold hover:underline">
              Lavender page →
            </Link>
            <Link href="/lavender/knowledge" className="text-purple-700 font-semibold hover:underline">
              Lavender Knowledge Hub →
            </Link>
            <Link href="/downloadable-guides" className="text-purple-700 font-semibold hover:underline">
              Downloadable Guides →
            </Link>
            <Link href="/herbal-learning-library" className="text-purple-700 font-semibold hover:underline">
              Herbal Learning Library →
            </Link>
          </div>
        </div>

        <SectionTitle>Botanical snapshot</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {(herb.snapshot ?? []).map((row) => (
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
        <Bullets items={herb.traditionalUses ?? []} />
        <p className="mt-3 text-sm text-gray-600">
          Traditional use is not the same as proven medical treatment.
        </p>

        {herb.tea ? (
          <>
            <SectionTitle>{herb.tea.title}</SectionTitle>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100">
              <div className="font-semibold text-gray-900 mb-2">You’ll need</div>
              <Bullets items={herb.tea.bullets ?? []} />

              <div className="font-semibold text-gray-900 mt-5 mb-2">
                Directions
              </div>
              <Steps items={herb.tea.steps ?? []} />

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
              <Bullets items={herb.tincture.bullets ?? []} />

              <div className="font-semibold text-gray-900 mt-5 mb-2">
                Directions
              </div>
              <Steps items={herb.tincture.steps ?? []} />

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
              <Bullets items={herb.capsules.bullets ?? []} />

              <div className="font-semibold text-gray-900 mt-5 mb-2">
                Directions
              </div>
              <Steps items={herb.capsules.steps ?? []} />

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
          <Bullets items={herb.safety ?? []} />
        </div>

        {/* Related herbs */}
        {related.length > 0 ? (
          <>
            <SectionTitle>Explore more herbs</SectionTitle>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((h) => (
                <Link
                  key={h.slug}
                  href={`/herbs/${h.slug}`}
                  className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-purple-100 hover:ring-purple-200 transition"
                >
                  <div className="font-semibold text-gray-900">{h.name}</div>
                  <div className="text-sm italic text-gray-600">{h.botanical}</div>
                  <div className="mt-2 text-sm font-semibold text-purple-700">
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : null}

        {/* Footer nav */}
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/herbal-learning-library"
            className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-800 shadow-sm ring-1 ring-purple-200 hover:ring-purple-300"
          >
            ← Back to Herbal Learning Library
          </Link>

          <a
            href="/downloads/herbal-learning-library-book.pdf"
            className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-800 shadow-sm ring-1 ring-purple-200 hover:ring-purple-300"
          >
            Download Full Library Book →
          </a>
        </div>
      </div>
    </main>
  );
}
