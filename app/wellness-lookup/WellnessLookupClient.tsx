"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Topic = {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  herbs: string[];
  blends: string[];
};

const STORAGE_KEY = "jwfarms_wellness_lookup_search";

function normalizeQuery(q: string) {
  return q.trim().toLowerCase();
}

export default function WellnessLookupClient({ topics }: { topics: Topic[] }) {
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
    if (!q) return topics;

    return topics.filter((t) =>
      [t.title, t.summary, ...t.tags].join(" ").toLowerCase().includes(q)
    );
  }, [query, topics]);

  const grouped = useMemo(() => {
    const map: Record<string, Topic[]> = {};
    filtered.forEach((t) => {
      const letter = t.title?.[0]?.toUpperCase() || "#";
      if (!map[letter]) map[letter] = [];
      map[letter].push(t);
    });

    Object.keys(map).forEach((k) =>
      map[k].sort((a, b) => a.title.localeCompare(b.title))
    );

    return map;
  }, [filtered]);

  const letters = useMemo(
    () => Object.keys(grouped).sort((a, b) => a.localeCompare(b)),
    [grouped]
  );

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
            placeholder="Type a topic… (sleep, digestion)"
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
          >
            Clear
          </button>
        </div>

        <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm text-gray-700">
            Showing <span className="font-semibold">{filtered.length}</span> of{" "}
            <span className="font-semibold">{topics.length}</span>
          </p>

          <p className="text-sm text-gray-700">Educational information only.</p>
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

              <a
                href="#top"
                className="text-purple-700 font-semibold hover:underline"
              >
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
            Try a different keyword, or clear your search to see everything.
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
            <section
              key={letter}
              id={`letter-${letter}`}
              className="scroll-mt-24"
            >
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
                {(grouped[letter] ?? []).map((t) => (
                  <div
                    key={t.slug}
                    className="bg-white rounded-3xl shadow-sm overflow-hidden border border-purple-100"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {t.title}
                        </h3>
                        <span className="text-xs font-semibold text-purple-800 bg-purple-100 px-3 py-1 rounded-full">
                          Topic
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                        {t.summary}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {t.tags.slice(0, 6).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-semibold text-purple-800 bg-purple-100 px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          Herbs:{" "}
                          <span className="font-semibold">{t.herbs.length}</span>{" "}
                          • Blends:{" "}
                          <span className="font-semibold">
                            {t.blends.length}
                          </span>
                        </div>

                        <Link
                          href={`/wellness-lookup/${t.slug}`}
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
