
// app/herbal-learning-library/page.tsx

import HerbLibraryClient from "./HerbLibraryClient";

// ✅ Prevent build-time prerendering (fixes Vercel "prerender error" for this page)
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Herbal Learning Library | JW Farms",
  description:
    "Printable herbal reference sheets from JW Farms—simple, practical guides you can download and keep.",
  alternates: {
    canonical: "https://www.jwfarms7.com/herbal-learning-library",
  },
};

const FEATURED_BOOK = {
  title: "Herbal Learning Library Book",
  desc: "One easy download with the full Herbal Learning Library in a single, compressed PDF.",
  pdfHref: "/herbal-library/herbal-learning-library-book.pdf",
  previewImg: "/herbal-library/previews/herbal-learning-library.png",
  badge: "PDF BOOK",
};

const HERBS = [
  { title: "Basil", slug: "basil", learnHref: "/herbs/basil" },
  { title: "Chamomile", slug: "chamomile", learnHref: "/herbs/chamomile" },
  { title: "Cilantro", slug: "cilantro", learnHref: "/herbs/cilantro" },
  { title: "Cleavers", slug: "cleavers", learnHref: "/herbs/cleavers" },
  { title: "Dandelion", slug: "dandelion", learnHref: "/herbs/dandelion" },
  { title: "Dill", slug: "dill", learnHref: "/herbs/dill" },
  { title: "Echinacea", slug: "echinacea", learnHref: "/herbs/echinacea" },
  { title: "Lavender", slug: "lavender", learnHref: "/herbs/lavender" },

  {
    title: "Edelweiss Lavender",
    slug: "edelweiss-lavender",
    learnHref: "/herbs/edelweiss-lavender",
  },
  { title: "Garlic", slug: "garlic", learnHref: "/herbs/garlic" },
  { title: "Ginko", slug: "ginko", learnHref: "/herbs/ginko" },

  // ✅ IMPORTANT: keep slug as lemonbalm (no hyphen)
  { title: "Lemon Balm", slug: "lemonbalm", learnHref: "/herbs/lemonbalm" },

  { title: "Marjoram", slug: "marjoram", learnHref: "/herbs/marjoram" },
  { title: "Marshmallow", slug: "marshmallow", learnHref: "/herbs/marshmallow" },
  { title: "Mint", slug: "mint", learnHref: "/herbs/mint" },
  { title: "Mullein", slug: "mullein", learnHref: "/herbs/mullein" },
  { title: "Nasturtium", slug: "nasturtium", learnHref: "/herbs/nasturtium" },
  { title: "Oregano", slug: "oregano", learnHref: "/herbs/oregano" },
  { title: "Parsley", slug: "parsley", learnHref: "/herbs/parsley" },
  { title: "Peppermint", slug: "peppermint", learnHref: "/herbs/peppermint" },
  { title: "Plantain Weed", slug: "plantain", learnHref: "/herbs/plantain" },
  { title: "Purslane", slug: "purslane", learnHref: "/herbs/purslane" },
  { title: "Rosemary", slug: "rosemary", learnHref: "/herbs/rosemary" },
  { title: "Sage", slug: "sage", learnHref: "/herbs/sage" },
  { title: "Spearmint", slug: "spearmint", learnHref: "/herbs/spearmint" },
  { title: "St John's Wort", slug: "st-johns-wort", learnHref: "/herbs/st-johns-wort" },
  { title: "Thyme", slug: "thyme", learnHref: "/herbs/thyme" },
  { title: "White Clover", slug: "white-clover", learnHref: "/herbs/white-clover" },
  { title: "Yarrow", slug: "yarrow", learnHref: "/herbs/yarrow" },
];

export default function HerbalLearningLibraryPage() {
  return (
    <main className="bg-[#f6f2fb] text-gray-800 min-h-screen">
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-purple-800 mb-6">
          Herbal Learning Library
        </h1>

        <p className="text-lg leading-relaxed mb-10 max-w-3xl">
          A growing library of printable herbal reference sheets—simple, practical
          guides you can save, print, and keep on hand.
        </p>

        {/* ✅ Featured “Full Book” Download */}
        <div className="mb-12">
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-purple-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Preview */}
              <a
                href={FEATURED_BOOK.pdfHref}
                className="group block bg-purple-50 p-6 md:p-8"
                aria-label="Open the Herbal Learning Library Book PDF"
              >
                <div className="rounded-2xl bg-white/70 border border-purple-100 overflow-hidden shadow-sm">
                  <img
                    src={FEATURED_BOOK.previewImg}
                    alt="Herbal Learning Library book cover preview"
                    className="w-full aspect-[4/3] object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-sm text-purple-700 font-semibold group-hover:underline">
                  View / Download →
                </div>
                <div className="mt-1 text-xs text-gray-500 break-all">
                  {FEATURED_BOOK.pdfHref}
                </div>
              </a>

              {/* Copy + CTA */}
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {FEATURED_BOOK.title}
                    </h2>
                    <span className="shrink-0 text-xs font-semibold text-purple-800 bg-purple-100 px-3 py-1 rounded-full">
                      {FEATURED_BOOK.badge}
                    </span>
                  </div>

                  <p className="mt-3 text-gray-700 leading-relaxed">
                    {FEATURED_BOOK.desc}
                  </p>

                  <ul className="mt-4 text-sm text-gray-700 space-y-2">
                    <li>• Best place to start if you want everything in one file</li>
                    <li>• Printable and easy to save for offline reference</li>
                    <li>• Compressed for faster download</li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={FEATURED_BOOK.pdfHref}
                    className="rounded-2xl px-6 py-3 font-semibold bg-purple-700 text-white hover:bg-purple-800 active:scale-[0.99] transition"
                  >
                    Download the Full Book →
                  </a>

                  <a
                    href="#library"
                    className="rounded-2xl px-6 py-3 font-semibold bg-white text-purple-800 ring-1 ring-purple-200 hover:ring-purple-300 transition"
                  >
                    Browse individual herbs ↓
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Library */}
        <div id="library">
          <HerbLibraryClient herbs={HERBS} />
        </div>
      </section>
    </main>
  );
}
