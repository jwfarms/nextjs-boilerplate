// app/herbs/page.tsx

import Link from "next/link";
import { HERBS } from "./data";

export const metadata = {
  title: "Herbs | JW Farms",
  description: "Herbal learning pages from JW Farms.",
  alternates: {
    canonical: "https://www.jwfarms7.com/herbs",
  },
};

export default function HerbsIndexPage() {
  const sorted = [...HERBS].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="text-sm font-medium text-purple-800 hover:underline"
        >
          ← Back to JW Farms
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-purple-950">
          Herbs
        </h1>
        <p className="mt-3 text-lg text-gray-700">
          Browse herbal learning pages from the JW Farms library.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {sorted.map((h) => (
            <Link
              key={h.slug}
              href={`/herbs/${h.slug}`}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100 hover:ring-purple-200 transition"
            >
              <div className="text-lg font-semibold text-purple-900">
                {h.name}
              </div>
              <div className="text-sm text-gray-600 italic">{h.botanical}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
