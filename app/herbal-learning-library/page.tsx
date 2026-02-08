export const metadata = {
  title: "Herbal Learning Library | JW Farms",
  description:
    "A growing collection of printable herbal reference guides from JW Farms — simple, traditional, and beginner-friendly.",
  alternates: {
    canonical: "https://www.jwfarms7.com/herbal-learning-library",
  },
};

const herbs = [
  {
    name: "Basil",
    pdf: "/herbal-library/basil.pdf",
    preview: "/herbal-library-previews/basil.png",
  },
  {
    name: "Chamomile",
    pdf: "/herbal-library/chamomile.pdf",
    preview: "/herbal-library-previews/chamomile.png",
  },
  {
    name: "Lavender",
    pdf: "/herbal-library/lavender.pdf",
    preview: "/herbal-library-previews/lavender.png",
  },
  {
    name: "Dandelion",
    pdf: "/herbal-library/dandelion.pdf",
    preview: "/herbal-library-previews/dandelion.png",
  },
  {
    name: "Peppermint",
    pdf: "/herbal-library/peppermint.pdf",
    preview: "/herbal-library-previews/peppermint.png",
  },
  {
    name: "Yarrow",
    pdf: "/herbal-library/yarrow.pdf",
    preview: "/herbal-library-previews/yarrow.png",
  },
  // ⬆️ keep adding herbs here as needed
];

export default function HerbalLearningLibraryPage() {
  return (
    <main className="bg-[#f6f2fb] text-gray-800">
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-purple-800 mb-6">
          Herbal Learning Library
        </h1>

        <p className="text-lg leading-relaxed max-w-3xl mb-12">
          This library contains printable herbal reference sheets created to be
          simple, traditional, and easy to return to. Each guide focuses on one
          plant at a time — no overwhelm, just practical knowledge.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {herbs.map((herb, i) => (
            <a
              key={i}
              href={herb.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="aspect-[3/4] bg-gray-100">
                <img
                  src={herb.preview}
                  alt={`${herb.name} herbal reference preview`}
                  className="w-full h-full object-contain group-hover:scale-105 transition"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-900">
                  {herb.name}
                </h2>

                <p className="mt-2 text-purple-700 font-semibold">
                  View / Download →
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
