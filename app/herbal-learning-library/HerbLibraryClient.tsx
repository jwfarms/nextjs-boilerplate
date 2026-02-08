
"use client";

import { useMemo, useState } from "react";

type Herb = {
  title: string;
  slug: string; // filename without extension (ex: "st-johns-wort")
};

function slugToLabel(slug: string) {
  // Optional: nicer default labels if your titles ever come from slugs
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function HerbLibraryClient({ herbs }: { herbs: Herb[] }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return herbs;

    return herbs.filter((h) => {
      const hay = `${h.title} ${h.slug}`.toLowerCase();
      return hay.includes(query);
    });
  }, [q, herbs]);

  return (
    <>
      {/* Search */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-purple-900 mb-2">
          Search herbs
        </label>

        <div className="flex items-center gap-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Type an herb name (ex: lavender, basil, yarrow)…"
            className="w-full bg-white border border-purple-200 rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
          />

          {q.length > 0 && (
            <button
              type="button"
              onClick={() => setQ("")}
              className="shrink-0 bg-purple-700 hover:bg-purple-800 text-white rounded-xl px-4 py-3 font-semibold transition"
            >
              Clear
            </button>
          )}
        </div>

        <p className="mt-2 text-sm text-gray-600">
          Showing <span className="font-semibold">{filtered.length}</span> of{" "}
          <span className="font-semibold">{herbs.length}</span>
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((h) => {
          const pdf = `/herbal-library/${h.slug}.pdf`;
          const preview = `/herbal-library/previews/${h.slug}.png`;

          return (
            <a
              key={h.slug}
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative bg-[#f6f2fb]">
                <img
                  src={preview}
                  alt={`${h.title} herbal reference preview`}
                  className="w-full h-56 object-contain p-4"
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {h.title || slugToLabel(h.slug)}
                  </h3>
                  <span className="shrink-0 text-xs font-semibold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    PDF
                  </span>
                </div>

                <p className="mt-3 text-purple-700 font-semibold">
                  View / Download →
                </p>

                <p className="mt-2 text-xs text-gray-500">{pdf}</p>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}
