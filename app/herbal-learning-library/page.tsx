// app/herbal-learning-library/page.tsx

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
  slug: string; // must match PDF + PNG filenames
};

const HERBS: Herb[] = [
  { title: "Basil", slug: "basil" },
  { title: "Chamomile", slug: "chamomile" },
  { title: "Cilantro", slug: "cilantro" },
  { title: "Cleavers", slug: "cleavers" },
  { title: "Dandelion", slug: "dandelion" },
  { title: "Dill", slug: "dill" },
  { title: "Echinacea", slug: "echinacea" },
  { title: "Edelweiss Lavender", slug: "edelweiss-lavender" },
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
  { title: "Plantain Weed", slug: "plantain" },
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
  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-800">
      <section className="py-20 px-6 max-w-6xl mx-auto">
        {/* Back link */}
        <a
          href="/"
          className="inline-block text-sm font-medium text-[#6b4fa3] hover:underline"
        >
          ← Back to JW Farms
        </a>

        <h1 className="mt-6 text-4xl md:text-5xl font-semibold text-purple-800">
          Herbal Learning Library
        </h1>

        <p className="mt-4 text-lg leading-relaxed max-w-3xl">
          Printable herbal reference sheets—simple, practical guides you can
          download and keep. Click any herb to open the PDF.
        </p>

        {/* Grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HERBS.map((herb) => {
            const pdfHref = `/herbal-library/${herb.slug}.pdf`;
            const previewSrc = `/herbal-library/previews/${herb.slug}.png`;

            return (
              <a
                key={herb.slug}
                href={pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl bg-white shadow-md overflow-hidden transition hover:shadow-xl hover:-translate-y-0.5"
              >
                {/* Thumbnail */}
                <div className="bg-white">
                  <img
                    src={previewSrc}
                    alt={`${herb.title} herbal reference preview`}
                    className="w-full h-64 object-contain bg-white"
                    loading="lazy"
                  />
                </div>

                {/* Text */}
                <div className="p-5 border-t border-purple-100">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {herb.title}
                    </h2>
                    <span className="shrink-0 text-xs font-semibold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                      PDF
                    </span>
                  </div>

                  <p className="mt-3 text-purple-700 font-semibold group-hover:underline">
                    View / Download →
                  </p>

                  <p className="mt-2 text-xs text-gray-500">
                    {pdfHref}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-10 bg-white rounded-2xl shadow-sm p-6 border border-purple-100">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">
            File naming must match
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Each card expects:
            <br />
            <span className="font-mono text-sm">
              /public/herbal-library/&lt;slug&gt;.pdf
            </span>
            <br />
            <span className="font-mono text-sm">
              /public/herbal-library/previews/&lt;slug&gt;.png
            </span>
            <br />
            Example: <span className="font-mono text-sm">basil.pdf</span> and{" "}
            <span className="font-mono text-sm">previews/basil.png</span>
          </p>
        </div>
      </section>
    </main>
  );
}
