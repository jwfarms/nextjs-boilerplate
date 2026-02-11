"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

export const metadata = {
  title: "Wellness Lookup | JW Farms",
  description:
    "Explore wellness topics and discover herbs and blends traditionally used in simple, everyday routines. Educational reference from JW Farms.",
  alternates: { canonical: "https://www.jwfarms7.com/wellness-lookup" },
};

type Topic = {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  herbsCount: number;
  blendsCount: number;
};

const STORAGE_KEY = "jwfarms_wellness_lookup_search";

const TOPICS: Topic[] = [
  {
    title: "Digestion Support",
    slug: "digestion-support",
    summary:
      "Traditional routines and herbs often used for post-meal comfort and everyday digestive support.",
    tags: ["digestion", "after meals", "comfort"],
    herbsCount: 1,
    blendsCount: 0,
  },
  {
    title: "Sleep Support",
    slug: "sleep-support",
    summary:
      "Gentle evening routines and calming herbs traditionally used for a restful wind-down.",
    tags: ["sleep", "calm", "evening"],
    herbsCount: 1,
    blendsCount: 0,
  },
];

function normalizeQuery(q: string) {
  return q.trim().toLowerCase();
}

export default function WellnessLookupPage() {
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
    if (!q) return TOPICS;
    return TOPICS.filter((t) =>
      [t.title, t.summary, ...t.tags].join(" ").toLowerCase().includes(q)
    );
  }, [query]);

  const grouped = useMemo(() => {
    const map: Record<string, Topic[]> = {};
    filtered.forEach((t) => {
      const letter = t.title?.[0]?.toUpperCase() || "#";
      (map[letter] ??= []).push(t);
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
    <main className="bg-[#f6f2fb] text-gray-800 min-h-screen">
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h1
          id="top"
          className="text-4xl md:text-5xl font-semibold text-purple-800 mb-6"
        >
          Wellness Lookup
        </h1>

        <p className="text-lg leading-relaxed mb-10 max-w-3xl">
          Explore wellness topics and see herbs and blends traditionally used in
          simple, everyday routines. This is educational information—always
          consult a qualified professional for medical advice.
        </p>

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
              <span className="font-semibold">{TOPICS.length}</span>
            </p>
            <p className="text-sm text-gray-700">Educational information only.</p>
          </div>
        </div>

        {/* Alphabet Jump */}
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

        {/* Results */}
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
                {(grouped[letter] ?? []).map((t) => (
                  <div
                    key={t.slug}
                    className="bg-white rounded-3xl shadow-sm overflow-hidden border border-purple-100"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                        {t.summary}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {t.tags.slice(0, 5).map((tag) => (
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
                          Herbs: <span className="font-semibold">{t.herbsCount}</span>{" "}
                          • Blends:{" "}
                          <span className="font-semibold">{t.blendsCount}</span>
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
      </section>
    </main>
  );
}
