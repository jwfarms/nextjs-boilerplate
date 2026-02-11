"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Ailment = {
  title: string;
  slug: string;
  summary: string;
  tags?: string[];
  herbs?: string[];  // herb slugs
  blends?: string[]; // blend slugs
};

const STORAGE_KEY = "jwfarms_wellness_lookup_search";

function normalizeQuery(q: string) {
  return q.trim().toLowerCase();
}

export default function WellnessLookupClient({ ailments }: { ailments: Ailment[] }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setQuery(saved);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, query);
    } catch {}
  }, [query]);

  const filtered = useMemo(() => {
    const q = normalizeQuery(query);
    if (!q) return ailments;

    return ailments.filter((a) => {
      const hay = [
        a.title,
        a.summary,
        ...(a.tags ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [query, ailments]);

  const grouped = useMemo(() => {
    const map: Record<string, Ailment[]> = {};
    filtered.forEach((a) => {
      const letter = a.title?.[0]?.toUpperCase() || "#";
      if (!map[letter]) map[letter] = [];
      map[letter].push(a);
    });

    Object.keys(map).forEach((k) => {
      map[k].sort((x, y) => x.title.localeCompare(y.title));
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
          Search wellness topics
        </label>

        <div className="flex gap-3 items-stretch">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 rounded-2xl border border-purple-300 bg-white/80 px-5 py-4 text-lg
                       focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Type a topic… (sleep, digestion, stress)"
            inputMode="search"
            aria-label="Search wellness topics"
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
            <span className="font-semibold">{ailments.length}</span>
          </p>

          <p className="text-sm text-gray-700">
            Educational information only.
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
            No topics found
          </h2>
          <p className="text-gray-700 mb-5">
            Try a different word (like sleep, stress, digestion), or clear your search.
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
                {grouped[letter].map((a) => (
                  <div
                    key={a.slug}
                    className="bg-white rounded-3xl shadow-sm overflow-hidden border border-purple-100"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {a.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                        {a.summary}
                      </p>

                      {a.tags?.length ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {a.tags.slice(0, 5).map((t) => (
                            <span
                              key={t}
                              className="text-xs font-semibold text-purple-800 bg-purple-100 px-3 py-1 rounded-full"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      <div className="mt-5 flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          Herbs: <span className="font-semibold">{a.herbs?.length ?? 0}</span> • Blends:{" "}
                          <span className="font-semibold">{a.blends?.length ?? 0}</span>
                        </div>

                        <Link
                          href={`/wellness-lookup/${a.slug}`}
                          className="text-sm font-semibold text-purple-700 hover:underline"
                        >
                          View suggestions →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  );
}
