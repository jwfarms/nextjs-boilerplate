// app/herbs/[slug]/page.tsx
import React from "react";
import GodsGardenInScripture from "@/components/GodsGardenInScripture";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HERBS } from "../data";

// ✅ Critical: do NOT pre-render every herb at build time.
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

// ============================
// Tags used for filtering
// ============================
const TAGS_BY_SLUG: Record<string, string[]> = {
  // Culinary herbs
  basil: ["Culinary"],
  cilantro: ["Culinary"],
  dill: ["Culinary"],
  garlic: ["Culinary"],
  marjoram: ["Culinary"],
  mint: ["Culinary", "Medicinal"],
  oregano: ["Culinary"],
  parsley: ["Culinary"],
  peppermint: ["Culinary", "Medicinal"],
  rosemary: ["Culinary", "Medicinal"],
  sage: ["Culinary", "Medicinal"],
  spearmint: ["Culinary", "Medicinal"],
  thyme: ["Culinary", "Medicinal"],

  // Mostly medicinal / wellness
  chamomile: ["Medicinal"],
  cleavers: ["Medicinal"],
  dandelion: ["Medicinal"],
  echinacea: ["Medicinal"],
  mullein: ["Medicinal"],
  nasturtium: ["Medicinal", "Culinary"],
  plantain: ["Medicinal"],
  purslane: ["Culinary", "Medicinal"],
  "st-johns-wort": ["Medicinal"],
  "white-clover": ["Medicinal"],
  yarrow: ["Medicinal"],

  // Lavender types
  lavender: ["Culinary", "Medicinal"],
  "edelweiss-lavender": ["Medicinal"],

  // ✅ Preferred spelling going forward
  lemonbalm: ["Medicinal"],
  // (Extra safety in case anything still references the old slug)
  "lemon-balm": ["Medicinal"],

  // Folder is “ginko”
  ginko: ["Medicinal"],

  // If you have mustard as a slug in your data, keep it here:
  mustard: ["Culinary", "Medicinal"],
};

// ============================
// God’s Garden in Scripture
// (ONLY add basil for now; we’ll scale later)
// ============================
type GodsGarden = {
  biblicalReference: string; // use "—" when not noted
  growthBehavior: string;
  partsUsedSimple: string; // e.g., "leaf" or "leaf & root"
  medicinalAncientToToday: string;
  livingParable: string; // God-only language (no "Jesus")
  studyArtSvg?: string; // /study-art/<slug>.svg (Option 3)
  coloringPageSvg?: string; // /coloring/<slug>.svg (Option 2)
};

const GODS_GARDEN_BY_SLUG: Record<string, GodsGarden> = {
  basil: {
    biblicalReference: "—",
    growthBehavior:
      "Basil grows quickly in warmth and sun. When the tips are pinched, it responds by branching and becoming fuller—one small act of tending can change the whole shape of the plant.",
    partsUsedSimple: "leaf",
    medicinalAncientToToday:
      "Across Mediterranean and household traditions, basil has been used for comfortable digestion after meals and for aromatic calm in daily routines. Today it remains widely used in food traditions and as a gentle tea herb in traditional practice.",
    livingParable:
      "God designed basil to respond to careful tending. Small, consistent stewardship leads to greater fullness—what is nurtured faithfully often becomes abundant over time.",
    studyArtSvg: "/study-art/basil.svg",
    coloringPageSvg: "/coloring/basil.svg",
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
  if (!items?.length) return null;
  return (
    <ul className="list-disc pl-6 space-y-1 text-gray-800">
      {items.map((t, i) => (
        <li key={`${t}-${i}`}>{t}</li>
      ))}
    </ul>
  );
}

function Steps({ items }: { items: string[] }) {
  if (!items?.length) return null;
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

  const canonical = `https://www.jwfarms7.com/herbs/${herb.slug}`;
  const tags = TAGS_BY_SLUG[herb.slug] ?? [];
  const godsGarden = GODS_GARDEN_BY_SLUG[herb.slug];

  // ==========================
  // A) JSON-LD Article
  // ==========================
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${herb.name} (${herb.botanical})`,
    description: `Traditional ways to prepare ${herb.name}—tea, tincture, and capsules—plus safety notes.`,
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    author: {
      "@type": "Organization",
      name: "JW Farms",
      url: "https://www.jwfarms7.com",
    },
    publisher: {
      "@type": "Organization",
      name: "JW Farms",
      url: "https://www.jwfarms7.com",
    },
    about: [
      { "@type": "Thing", name: herb.name },
      { "@type": "Thing", name: herb.botanical },
    ],
    keywords: [herb.name, herb.botanical, "herbal learning library", ...tags].join(
      ", "
    ),
    isPartOf: {
      "@type": "CollectionPage",
      name: "Herbal Learning Library",
      url: "https://www.jwfarms7.com/herbal-learning-library",
    },
  };

  // ==========================
  // C) FAQ Schema (FAQPage)
  // ==========================
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${herb.name} traditionally used for?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            (herb.traditionalUses ?? []).slice(0, 3).join("; ") ||
            `${herb.name} is used in traditional household routines and classic herbal traditions.`,
        },
      },
      {
        "@type": "Question",
        name: `How do you make ${herb.name} tea?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: herb.tea
            ? `A simple infusion: ${(herb.tea.steps ?? []).join(" ")}`
            : `Many herbs are prepared as a simple infusion (tea). If a tea section is listed on this page, follow those steps.`,
        },
      },
      {
        "@type": "Question",
        name: `Is ${herb.name} safe to use?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            (herb.safety ?? []).slice(0, 3).join(" ") ||
            "Use common sense and consult a qualified professional if pregnant, breastfeeding, taking medications, or managing a condition.",
        },
      },
      {
        "@type": "Question",
        name: `Where can I download the ${herb.name} PDF guide?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: herb.pdfHref
            ? `You can download it from ${herb.pdfHref}.`
            : "If available, the PDF download button appears near the top of the page.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-900">
      {/* A) Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* C) FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* ✅ Top mini-nav (Back to main site + quick links) */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-[#6b4fa3] hover:underline"
          >
            ← Back to JW Farms
          </Link>

          <span className="text-gray-300">|</span>

          <Link
            href="/downloadable-guides"
            className="text-sm font-medium text-[#6b4fa3] hover:underline"
          >
            Downloadable Guides
          </Link>

          <span className="text-gray-300">|</span>

          <Link
            href="/herbal-learning-library"
            className="text-sm font-medium text-[#6b4fa3] hover:underline"
          >
            Herbal Learning Library
          </Link>
        </div>

        {/* Existing link back to the library */}
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

        {/* Tags + internal links back to library filter */}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Link
                key={t}
                href={`/herbal-learning-library?tag=${encodeURIComponent(t)}`}
                className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-800 shadow-sm ring-1 ring-purple-200 hover:ring-purple-300"
              >
                {t}
              </Link>
            ))}
          </div>
        )}

        <p className="mt-6 text-lg leading-relaxed text-gray-800">
          {herb.intro}
        </p>

        {/* ✅ God’s Garden in Scripture (Basil only for now) */}
        {godsGarden ? (
          <GodsGardenInScripture
            plantName={herb.name}
            biblicalReference={godsGarden.biblicalReference}
            growthBehavior={godsGarden.growthBehavior}
            partsUsedSimple={godsGarden.partsUsedSimple}
            medicinalAncientToToday={godsGarden.medicinalAncientToToday}
            livingParable={godsGarden.livingParable}
            studyArtSvg={godsGarden.studyArtSvg}
            coloringPageSvg={godsGarden.coloringPageSvg}
          />
        ) : null}

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
      </div>
    </main>
  );
}
