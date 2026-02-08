export const metadata = {
  title: "Herbal Learning Library | JW Farms",
  description:
    "Printable herbal reference sheets from JW Farms—simple, practical guides you can download and keep.",
  alternates: {
    canonical: "https://www.jwfarms7.com/herbal-learning-library",
  },
};

type Herb = {
  title: string;
  slug: string; // must match BOTH the PDF name and PNG name
};

const HERBS: Herb[] = [
  { title: "Basil", slug: "basil" },
  { title: "Chamomile", slug: "chamomile" },
  { title: "Cilantro", slug: "cilantro" },
  { title: "Cleavers", slug: "cleavers" },
  { title: "Dandelion", slug: "dandelion" },
  { title: "Dill", slug: "dill" },
  { title: "Echinacea", slug: "echinacea" },
  { title: "Edelweiss Lavender", slug: "edelwiss-lavender" }, // <-- note spelling below
  { title: "Garlic", slug: "garlic" },
  { title: "Ginko", slug: "ginko" },
  { title: "Lavender", slug: "lavender" },
  { title: "Lemon Balm", slug: "lemonbalm" },
  { title: "Marjoram", slug: "marjoram" },
  { title: "Marshmallow", slug: "marshmallow" },
  { title: "Mint", slug: "mint" },
  { title: "Mullein", slug: "mullein" },
  { title: "Nasturtium", slug: "nasturtium" },
  { title: "Oregano", slug: "oregano" },
  { title: "Parsley", slug: "parsley" },
  { title: "Peppermint", slug: "peppermint" },
  { title: "Plantain Weed", slug: "plantain-weed" }, // rename file if needed
  { title: "Purslane", slug: "purslane" },
  { title: "Rosemary", slug: "rosemary" },
  { title: "Sage", slug: "sage" },
  { title: "Spearmint", slug: "spearmint" },
  { title: "St John's Wort", slug: "st-johns-wort" },
  { title: "Thyme", slug: "thyme" },
  { title: "White Clover", slug: "white-clover" },
  { title: "Yarrow", slug: "yarrow" },
];

export default function HerbalLearningLibraryPage() {
  // Alphabetical
  const items = [...HERBS].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <main className="bg-[#f6f2fb] text-gray-800">
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-purple-800 mb-6">
          Herbal Learning Library
        </h1>

        <p className="text-lg leading-relaxed mb-10 max-w-3xl">
          A growing library of printable herbal reference sheets. Click any guide
          to view or download the PDF.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((h) => {
            const pdfHref = `/herbal-library/${h.slug}.pdf`;
            const previewSrc = `/herbal-library/previews/${h.slug}.png`;

            return (
              <a
                key={h.slug}
                href={pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl hover:-translate-y-1"
              >
                {/* Thumbnail */}
                <div className="relative bg-[#f3eefb] border-b border-purple-100">
                  <img
                    src={previewSrc}
                    alt={`${h.title} herbal reference preview`}
                    className="w-full h-64 object-contain p-4"
                    loading="lazy"
                    onError={(e) => {
                      // graceful fallback if a preview is missing
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      const parent = (e.currentTarget as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div style="height:16rem; display:flex; align-items:center; justify-content:center; color:#6b7280; font-weight:600;">
                            Preview coming soon
                          </div>
                        `;
                      }
                    }}
                  />
                </div>

                {/* Text */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {h.title}
                    </h2>
                    <span className="shrink-0 text-xs font-semibold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                      PDF
                    </span>
                  </div>

                  <p className="mt-4 text-purple-700 font-semibold">
                    View / Download →
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}
