"use client";

import { useMemo, useState } from "react";

type Herb = {
  title: string;
  slug: string;
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function firstLetter(title: string) {
  const c = (title || "").trim().charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
}

function groupByLetter(items: Herb[]) {
  const groups = new Map<string, Herb[]>();
  for (const herb of items) {
    const letter = firstLetter(herb.title);
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter)!.push(herb);
  }
  // sort herbs inside each letter
  for (const [k, v] of groups.entries()) {
    v.sort((a, b) => a.title.localeCompare(b.title));
    groups.set(k, v);
  }
  return groups;
}

export default function HerbLibraryClient({ herbs }: { herbs: Herb[] }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [...herbs].sort((a, b) => a.title.localeCompare(b.title));

    return herbs
      .filter((h) => h.title.toLowerCase().includes(query))
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [q, herbs]);

  const grouped = useMemo(() => groupByLetter(filtered), [filtered]);

  const availableLetters = useMemo(() => {
    const set = new Set<string>();
    for (const herb of filtered) set.add(firstLetter(herb.title));
    return set;
  }, [filtered]);

  return (
    <div className="space-y-8">
      {/* Search + alphabet bar */}
      <div className="bg-white/70 backdrop-blur rounded-2xl shadow-sm p-4 md:p-5 sticky top-3 z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
          <div className="flex-1">
            <label className="sr-only" htmlFor="herb-search">
              Search herbs
            </label>
            <input
              id="herb-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search herbs (e.g., basil, thyme, mint)…"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          <div className="text-sm text-gray-600">
            {filtered.length} {filtered.length === 1 ? "result" : "results"}
          </div>
        </div>

        {/* Alphabet jump links */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {ALPHABET.map((L) => {
            const enabled = availableLetters.has(L);
            return enabled ? (
              <a
                key={L}
                href={`#letter-${L}`}
                className="px-2.5 py-1 rounded-lg text-sm font-semibold text-purple-800 bg-purple-50 hover:bg-purple-100 transition"
              >
                {L}
              </a>
            ) : (
              <span
                key={L}
                className="px-2.5 py-1 rounded-lg text-sm font-semibold text-gray-400 bg-gray-50 cursor-not-allowed"
                aria-disabled="true"
              >
                {L}
              </span>
            );
          })}

          {/* Optional "Top" link */}
          <a
            href="#top"
            className="ml-2 px-3 py-1 rounded-lg text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
          >
            Top ↑
          </a>
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
          <p className="text-lg font-semibold text-gray-900">No matches found.</p>
          <p className="mt-2 text-gray-600">
            Try a different keyword (example: “mint”, “basil”, “thyme”).
          </p>
        </div>
      ) : (
        <div className="space-y-10">
          {ALPHABET.filter((L) => grouped.has(L)).map((L) => {
            const list = grouped.get(L)!;

            return (
              <section key={L} id={`letter-${L}`} className="scroll-mt-28">
                <div className="flex items-end justify-between gap-4 mb-4">
                  <h2 className="text-2xl font-semibold text-purple-900">
                    {L}
                  </h2>
                  <a
                    href="#top"
                    className="text-sm font-semibold text-purple-700 hover:underline"
                  >
                    Back to top ↑
                  </a>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {list.map((h) => {
                    const pdfHref = `/herbal-library/${h.slug}.pdf`;
                    const imgSrc = `/herbal-library/previews/${h.slug}.png`;

                    return (
                      <a
                        key={h.slug}
                        href={pdfHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl hover:-translate-y-0.5"
                      >
                        {/* Thumbnail */}
                        <div className="relative bg-white">
                          <img
                            src={imgSrc}
                            alt={`${h.title} herbal reference preview`}
                            loading="lazy"
                            className="w-full aspect-[4/5] object-cover"
                          />
                        </div>

                        {/* Text */}
                        <div className="p-5">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-xl font-semibold text-gray-900">
                              {h.title}
                            </h3>
                            <span className="shrink-0 text-xs font-semibold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                              PDF
                            </span>
                          </div>

                          <p className="mt-3 text-purple-700 font-semibold group-hover:underline">
                            View / Download →
                          </p>

                          <p className="mt-2 text-xs text-gray-500">
                            {pdfHref}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
