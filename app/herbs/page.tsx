import Link from "next/link";
import { HERBS } from "./data";

export const metadata = {
  title: "Herbs | JW Farms",
  description:
    "Herbal Learning Library from JW Farms — educational herb references and traditional preparation methods.",
  alternates: { canonical: "https://www.jwfarms7.com/herbs" },
};

export default function HerbsIndexPage() {
  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link
          href="/herbal-learning-library"
          className="text-sm font-medium text-purple-800 hover:underline"
        >
          ← Back to Herbal Learning Library
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-purple-950">
          Herbs
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          Educational herb profiles and traditional preparation methods (tea,
          tincture, capsules), plus safety notes.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {HERBS.map((h) => (
            <Link
              key={h.slug}
              href={`/herbs/${h.slug}`}
              className="bg-white rounded-3xl shadow-sm overflow-hidden border border-purple-100 p-6 hover:ring-2 hover:ring-purple-200 transition"
            >
              <div className="text-xl font-semibold text-gray-900">{h.name}</div>
              <div className="mt-1 text-sm italic text-gray-600">
                {h.botanical}
              </div>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                {h.intro}
              </p>
              <div className="mt-4 text-sm font-semibold text-purple-700">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
