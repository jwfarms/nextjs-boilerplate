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
  // ✅ Culinary
  { title: "Basil", slug: "basil", learnHref: "/herbs/basil", category: "Culinary" },
  { title: "Cilantro", slug: "cilantro", learnHref: "/herbs/cilantro", category: "Culinary" },
  { title: "Dill", slug: "dill", learnHref: "/herbs/dill", category: "Culinary" },
  { title: "Garlic", slug: "garlic", category: "Culinary" },
  { title: "Marjoram", slug: "marjoram", category: "Culinary" },
  { title: "Mint", slug: "mint", category: "Culinary" },
  { title: "Nasturtium", slug: "nasturtium", category: "Culinary" },
  { title: "Oregano", slug: "oregano", category: "Culinary" },
  { title: "Parsley", slug: "parsley", category: "Culinary" },
  { title: "Peppermint", slug: "peppermint", category: "Culinary" },
  { title: "Rosemary", slug: "rosemary", category: "Culinary" },
  { title: "Sage", slug: "sage", category: "Culinary" },
  { title: "Spearmint", slug: "spearmint", category: "Culinary" },
  { title: "Thyme", slug: "thyme", category: "Culinary" },
  { title: "White Clover", slug: "white-clover", category: "Culinary" },
  { title: "Purslane", slug: "purslane", category: "Culinary" },

  // ✅ Medicinal (traditional use / wellness)
  { title: "Chamomile", slug: "chamomile", learnHref: "/herbs/chamomile", category: "Medicinal" },
  { title: "Cleavers", slug: "cleavers", learnHref: "/herbs/cleavers", category: "Medicinal" },
  { title: "Dandelion", slug: "dandelion", learnHref: "/herbs/dandelion", category: "Medicinal" },
  { title: "Echinacea", slug: "echinacea", learnHref: "/herbs/echinacea", category: "Medicinal" },
  { title: "Ginko", slug: "ginko", category: "Medicinal" },
  { title: "Lemon Balm", slug: "lemon-balm", category: "Medicinal" },
  { title: "Marshmallow", slug: "marshmallow", category: "Medicinal" },
  { title: "Mullein", slug: "mullein", category: "Medicinal" },
  { title: "Plantain Weed", slug: "plantain", category: "Medicinal" },
  { title: "St John's Wort", slug: "st-johns-wort", category: "Medicinal" },
  { title: "Yarrow", slug: "yarrow", category: "Medicinal" },

  // ✅ Lavender types (you can choose which bucket you prefer)
  { title: "Lavender", slug: "lavender", learnHref: "/herbs/lavender", category: "Medicinal" },
  { title: "Edelweiss Lavender", slug: "edelweiss-lavender", category: "Medicinal" },
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
