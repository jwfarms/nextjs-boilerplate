import Link from "next/link";

export const metadata = {
  title: "Basil (Ocimum basilicum) | Herbal Learning Library | JW Farms",
  description:
    "Learn traditional ways to prepare Basil—tea, tincture, and capsules—plus safety notes. Educational reference from JW Farms.",
  alternates: {
    canonical: "https://www.jwfarms7.com/herbs/basil",
  },
};

export default function BasilPage() {
  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/herbal-learning-library"
          className="text-sm font-medium text-purple-800 hover:underline"
        >
          ← Back to Herbal Learning Library
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-purple-950">
          Basil
        </h1>
        <p className="mt-2 text-lg italic text-gray-700">Ocimum basilicum</p>

        <p className="mt-6 text-lg leading-relaxed text-gray-800">
          Basil is a beloved culinary herb with a long history of traditional
          household use. Its aromatic leaves are commonly enjoyed in food and
          herbal preparations as part of a warm, nourishing routine.
        </p>

        <h2 className="text-2xl font-semibold text-purple-900 mt-10 mb-3">
          Medicinal Tea (Infusion)
        </h2>
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100">
          <ul className="list-disc pl-6 space-y-1 text-gray-800">
            <li>1–2 tsp dried basil leaf (or 1–2 tbsp fresh)</li>
            <li>1 cup hot water</li>
            <li>Optional: honey, lemon, or a splash of milk</li>
          </ul>
          <ol className="list-decimal pl-6 space-y-1 text-gray-800 mt-4">
            <li>Place basil in a mug or teapot.</li>
            <li>Pour hot water over the herb.</li>
            <li>Cover and steep 10–15 minutes.</li>
            <li>Strain and enjoy.</li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold text-purple-900 mt-10 mb-3">
          Safety &amp; considerations
        </h2>
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100">
          <ul className="list-disc pl-6 space-y-1 text-gray-800">
            <li>
              Basil is widely used as food. For concentrated preparations, use
              extra care.
            </li>
            <li>
              If pregnant, breastfeeding, taking medications, or managing a
              condition, consult a qualified professional.
            </li>
            <li>
              These statements have not been evaluated by the FDA. This
              information is for educational purposes only and is not intended
              to diagnose, treat, cure, or prevent any disease.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
