export const metadata = {
  title: "Herbal Learning Library | JW Farms",
  description:
    "Printable herbal reference sheets from JW Farms—simple, practical guides you can download and keep.",
  alternates: {
    canonical: "https://www.jwfarms7.com/herbal-learning-library",
  },
};

// IMPORTANT: match the filename exactly (case-sensitive on Vercel)
import HerbLibraryClient from "./herblibraryclient";

const HERBS = [
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
    <main className="bg-[#f6f2fb] text-gray-800 min-h-screen">
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h1
          id="top"
          className="text-4xl md:text-5xl font-semibold text-purple-800 mb-6"
        >
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
