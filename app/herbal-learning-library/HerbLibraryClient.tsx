"use client";

import { useEffect, useMemo, useState } from "react";

type Herb = {
  title: string;
  slug: string;
};

const STORAGE_KEY = "jwfarms_herb_library_search";

function normalizeQuery(q: string) {
  return q.trim().toLowerCase();
}

export default function HerbLibraryClient({ herbs }: { herbs: Herb[] }) {
  const [query, setQuery] = useState("");

  // Remember last search (localStorage)
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setQuery(saved);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, query);
    } catch {
      // ignore
    }
  }, [query]);

  const filtered = useMemo(() => {
    const q = normalizeQuery(query);
    if (!q) return herbs;

    return herbs.filter((herb) => normalizeQuery(herb.title).includes(q));
  }, [query, herbs]);

  // Group herbs by first letter (based on TITLE)
  const grouped = useMemo(() => {
    const map: Record<string, Herb[]> = {};
    filtered.forEach((herb) => {
      const letter = herb.title?.[0]?.toUpperCase() || "#";
      if (!map[letter]) map[letter] = [];
      map[letter].push(herb);
    });

    // sort inside each letter
    Object.keys(map).forEach((k) => {
      map[k].sort((a, b) => a.title.localeCompare(b.title));
    });

    return map;
  }, [filtered]);

  const letters = useMemo(() => {
    return Object.keys(grouped).sort((a, b) => a.localeCompare(b));
  }, [grouped]);

  const clear = () => setQuery("");

  return (
    <>
      {/* Search */}
      <div className="mb-6">
        <label className="block font-medium mb-2 text-purple-900">
          Search herbs
        </label>

        <div className="flex gap-3 items-stretch">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 rounded-2xl border border-purple-300 bg-white/80 px-5 py-4 text-lg
                       focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Type a herb name…"
            inputMode="search"
            aria-label="Search herbs"
          />

          <button
            type="button"
            onClick={clear}
            disabled={!query}
            className="rounded-2xl px-7 py-4 font-semibold
                       bg-purple-700 text-white disabled:bg-purple-200 disabled:text-purple-500
                       hover:bg-purple-800 active:scale-[0.99] transition"
            aria-disabled={!query}
          >
            Clear
          </button>
        </div>

        <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm text-gray-700">
            Showing <span className="font-semibold">{filtered.length}</span> of{" "}
            <span className="font-semibold">{herbs.length}</span>
          </p>

          <p className="text-sm text-gray-700">
            All guides are printable PDFs.
          </p>
        </div>
      </div>

      {/* Sticky Alphabet Jump Links */}
      {letters.length > 0 && (
        <div className="sticky top-0 z-10 -mx-2 mb-10">
          <div className="mx-2 rounded-2xl border border-purple-200 bg-[#f6f2fb]/90 backdrop-blur px-4 py-3 shadow-sm">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-sm font-semibold text-purple-900 mr-1">
                Jump to:
              </span>

              {letters.map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="text-purple-700 font-semibold hover:underline"
                >
                  {letter}
                </a>
              ))}

              <span className="mx-2 text-purple-300">|</span>

              <a href="#top" className="text-purple-700 font-semibold hover:underline">
                Top ↑
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-purple-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-purple-900 mb-2">
            No herbs found
          </h2>
          <p className="text-gray-700 mb-5">
            Try a different name, or clear your search to see the full library.
          </p>
          <button
            type="button"
            onClick={clear}
            className="rounded-2xl px-6 py-3 font-semibold bg-purple-700 text-white hover:bg-purple-800 transition"
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="space-y-14">
          {letters.map((letter) => (
            <section key={letter} id={`letter-${letter}`} className="scroll-mt-24">
              <div className="flex items-baseline justify-between mb-6">
                <h2 className="text-2xl font-semibold text-purple-800">
                  {letter}
                </h2>

                <a
                  href="#top"
                  className="text-sm font-semibold text-purple-700 hover:underline"
                >
                  Back to top ↑
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {grouped[letter].map((herb) => {
                  const pdfHref = `/herbal-library/${herb.slug}.pdf`;
                  const imgSrc = `/herbal-library/previews/${herb.slug}.png`;

                  return (
                    <a
                      key={herb.slug}
                      href={pdfHref}
                      className="group block bg-white rounded-3xl shadow-sm overflow-hidden
                                 border border-purple-100
                                 hover:shadow-md hover:-translate-y-[1px]
                                 active:translate-y-0 active:shadow-sm transition"
                      aria-label={`Open ${herb.title} PDF`}
                    >
                      {/* Thumbnail */}
                      <div className="bg-purple-50 px-6 pt-6">
                        <div className="rounded-2xl bg-white/70 border border-purple-100 overflow-hidden">
                          <img
                            src={imgSrc}
                            alt={`${herb.title} herbal reference preview`}
                            className="w-full aspect-[3/4] object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between gap-4 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {herb.title}
                          </h3>
                          <span className="shrink-0 text-xs font-semibold text-purple-800 bg-purple-100 px-3 py-1 rounded-full">
                            PDF
                          </span>
                        </div>

                        <div className="text-purple-700 font-semibold group-hover:underline">
                          View / Download →
                        </div>

                        <div className="mt-2 text-sm text-gray-500 break-all">
                          {pdfHref}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  );
}

