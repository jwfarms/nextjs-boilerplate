import Link from "next/link";
import { HERBS } from "./data";

export const metadata = {
  title: "Herbs | JW Farms",
  description: "Browse herbs in the Herbal Learning Library.",
  alternates: { canonical: "https://www.jwfarms7.com/herbs" },
};

export default function HerbsIndexPage() {
  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-900">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold tracking-tight text-purple-950">
          Herbs
        </h1>
        <p className="mt-3 text-gray-700">
          Browse herbal pages (educational only).
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {HERBS.map((h) => (
            <Link
              key={h.slug}
              href={`/herbs/${h.slug}`}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100 hover:ring-purple-200 transition"
            >
              <div className="font-semibold text-gray-900">{h.name}</div>
              <div className="mt-1 text-sm italic text-gray-600">
                {h.botanical}
              </div>
              <div className="mt-3 text-sm font-semibold text-purple-700">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
