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
  { title: "Basil", slug: "basil", learnHref: "/herbs/basil" },
  { title: "Chamomile", slug: "chamomile", learnHref: "/herbs/chamomile" },
  { title: "Cilantro", slug: "cilantro", learnHref: "/herbs/cilantro" },
  { title: "Cleavers", slug: "cleavers", learnHref: "/herbs/cleavers" },
  { title: "Dandelion", slug: "dandelion", learnHref: "/herbs/dandelion" },
  { title: "Dill", slug: "dill", learnHref: "/herbs/dill" },
  { title: "Echinacea", slug: "echinacea", learnHref: "/herbs/echinacea" },
  { title: "Lavender", slug: "lavender", learnHref: "/herbs/lavender" },

  // ✅ ADD learnHref for the rest:
  {
    title: "Edelweiss Lavender",
    slug: "edelweiss-lavender",
    learnHref: "/herbs/edelweiss-lavender",
  },
  { title: "Garlic", slug: "garlic", learnHref: "/herbs/garlic" },
  { title: "Ginko", slug: "ginko", learnHref: "/herbs/ginko" },

  // ✅ If your folder is /app/herbs/lemon-balm, use slug "lemon-balm"
  { title: "Lemon Balm", slug: "lemon-balm", learnHref: "/herbs/lemon-balm" },

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

  // ✅ Use dashes in the slug and folder name:
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

        <HerbLibraryClient herbs={HERBS} />
      </section>
    </main>
  );
}
