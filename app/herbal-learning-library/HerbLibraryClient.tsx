"use client";

import { useMemo, useState } from "react";

type Herb = {
  title: string;
  slug: string;
};

export default function HerbLibraryClient({ herbs }: { herbs: Herb[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return herbs.filter((herb) =>
      herb.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, herbs]);

  // Group herbs by first letter
  const grouped = useMemo(() => {
    const map: Record<string, Herb[]> = {};
    filtered.forEach((herb) => {
      const letter = herb.title[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(herb);
    });
    return map;
  }, [filtered]);

  const letters = Object.keys(grouped).sort();

  return (
    <>
      {/* Search */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Search herbs</label>
        <div className="flex gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 rounded-xl border border-purple-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Type a herb name…"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="bg-purple-700 text-white px-6 py-3 rounded-xl hover:bg-purple-800"
            >
              Clear
            </button>
          )}
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Showing {filtered.length} of {herbs.length}
        </p>
      </div>

      {/* Alphabet Jump Links */}
      <div className="flex flex-wrap gap-3 mb-10">
        {letters.map((letter) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="text-purple-700 font-medium hover:underline"
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Herb Grid */}
      <div className="space-y-14">
        {letters.map((letter) => (
          <section key={letter} id={`letter-${letter}`}>
            <h2 className="text-2xl font-semibold text-purple-800 mb-6">
              {letter}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {grouped[letter].map((herb) => (
                <div
                  key={herb.slug}
                  className="bg-white rounded-2xl shadow-sm p-6"
                >
                  <img
                    src={`/herbal-library/previews/${herb.slug}.png`}
                    alt={`${herb.title} herbal reference preview`}
                    className="rounded-lg mb-4"
                  />

                  <h3 className="text-xl font-semibold mb-2">
                    {herb.title}
                  </h3>

                  <a
                    href={`/herbal-library/${herb.slug}.pdf`}
                    className="text-purple-700 font-medium hover:underline"
                  >
                    View / Download →
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
