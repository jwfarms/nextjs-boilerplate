export const metadata = {
  title: "Herbal Learning Library | JW Farms",
  description:
    "Printable herbal reference sheets from JW Farms—simple, practical guides you can download and keep.",
  alternates: {
    canonical: "https://www.jwfarms7.com/herbal-learning-library",
  },
};

import HerbLibraryClient from "./HerbLibraryClient";

const HERBS = [
  { title: "Basil", slug: "basil", learnHref: "/herbs/basil", tags: ["Culinary"] },
  { title: "Chamomile", slug: "chamomile", learnHref: "/herbs/chamomile", tags: ["Medicinal"] },
  { title: "Cilantro", slug: "cilantro", learnHref: "/herbs/cilantro", tags: ["Culinary"] },
  { title: "Cleavers", slug: "cleavers", learnHref: "/herbs/cleavers", tags: ["Medicinal"] },
  { title: "Dandelion", slug: "dandelion", learnHref: "/herbs/dandelion", tags: ["Medicinal"] },
  { title: "Dill", slug: "dill", learnHref: "/herbs/dill", tags: ["Culinary"] },
  { title: "Echinacea", slug: "echinacea", learnHref: "/herbs/echinacea", tags: ["Medicinal"] },

  // ✅ Lavender in BOTH
  { title: "Lavender", slug: "lavender", learnHref: "/herbs/lavender", tags: ["Culinary", "Medicinal"] },
  { title: "Edelweiss Lavender", slug: "edelweiss-lavender", tags: ["Medicinal"] },

  { title: "Garlic", slug: "garlic", tags: ["Culinary"] },

  // NOTE: you spelled folder “ginko”, so keep slug “ginko”
  { title: "Ginko", slug: "ginko", tags: ["Medicinal"] },

  // IMPORTANT: your folder is lemonbalm (with dash)
  { title: "Lemonbalm", slug: "lemonbalm", tags: ["Medicinal"] },

  { title: "Marjoram", slug: "marjoram", tags: ["Culinary"] },
  { title: "Marshmallow", slug: "marshmallow", tags: ["Medicinal"] },
  { title: "Mint", slug: "mint", tags: ["Culinary", "Medicinal"] },
  { title: "Mullein", slug: "mullein", tags: ["Medicinal"] },
  { title: "Nasturtium", slug: "nasturtium", tags: ["Culinary"] },
  { title: "Oregano", slug: "oregano", tags: ["Culinary"] },
  { title: "Parsley", slug: "parsley", tags: ["Culinary"] },
  { title: "Peppermint", slug: "peppermint", tags: ["Culinary", "Medicinal"] },
  { title: "Plantain Weed", slug: "plantain", tags: ["Medicinal"] },
  { title: "Purslane", slug: "purslane", tags: ["Culinary"] },
  { title: "Rosemary", slug: "rosemary", tags: ["Culinary"] },
  { title: "Sage", slug: "sage", tags: ["Culinary"] },
  { title: "Spearmint", slug: "spearmint", tags: ["Culinary"] },
  { title: "St John's Wort", slug: "st-johns-wort", tags: ["Medicinal"] },
  { title: "Thyme", slug: "thyme", tags: ["Culinary"] },
  { title: "White Clover", slug: "white-clover", tags: ["Culinary", "Medicinal"] },
  { title: "Yarrow", slug: "yarrow", tags: ["Medicinal"] },
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

        <HerbLibraryClient herbs={HERBS} />
      </section>
    </main>
  );
}
