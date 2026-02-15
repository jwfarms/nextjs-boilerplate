"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Herb = {
  title: string;
  slug: string;
  tags?: string[]; // ✅ NEW
  // Optional override (rare). If not provided, we auto-build /herbs/[slug]
  learnHref?: string;
};

const STORAGE_KEY = "jwfarms_herb_library_search";
const TAGS_KEY = "jwfarms_herb_library_tags";

function normalizeQuery(q: string) {
  return q.trim().toLowerCase();
}

export default function HerbLibraryClient({ herbs }: { herbs: Herb[] }) {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  // Remember last search (localStorage)
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

  // Remember selected tags
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(TAGS_KEY);
      if (saved) setActiveTags(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(TAGS_KEY, JSON.stringify(activeTags));
    } catch {}
  }, [activeTags]);

  // Build list of available tags from data
  const availableTags = useMemo(() => {
    const set = new Set<string>();
    herbs.forEach((h) => (h.tags ?? []).forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [herbs]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clear = () => setQuery("");
  const clearTags = () => setActiveTags([]);

  const filtered = useMemo(() => {
    const q = normalizeQuery(query);

    return herbs.filter((herb) => {
      const matchesQuery = !q || normalizeQuery(herb.title).includes(q);

      // If no tags selected => tag filter passes
      if (activeTags.length === 0) return matchesQuery;

      const herbTags = herb.tags ?? [];

      // "OR" logic: show if herb has ANY of the selected tags
      const matchesTags = activeTags.some((t) => herbTags.includes(t));

      return matchesQuery && matchesTags;
    });
  }, [query, herbs, activeTags]);

  // Group herbs by first letter (based on TITLE)
  const grouped = useMemo(() => {
    const map: Record<string, Herb[]> = {};
    filtered.forEach((herb) => {
      const letter = herb.title?.[0]?.toUpperCase() || "#";
      if (!map[letter]) map[letter] = [];
      map[letter].push(herb);
    });

    Object.keys(map).forEach((k) => {
      map[k].sort((a, b) => a.title.localeCompare(b.title));
    });

    return map;
  }, [filtered]);

  const letters = useMemo(() => {
    return Object.keys(grouped).sort((a, b) => a.localeCompare(b));
  }, [grouped]);

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

          <p className="text-sm text-gray-700">All guides are printable PDFs.</p>
        </div>
      </div>

      {/* ✅ Tag Filter Chips */}
      {availableTags.length > 0 && (
        <div className="mb-10">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="text-sm font-semibold text-purple-900">
              Filter by tags:
            </div>

            <button
              type="button"
              onClick={clearTags}
              disabled={activeTags.length === 0}
              className="text-sm font-semibold text-purple-700 hover:underline disabled:text-purple-300 disabled:no-underline"
            >
              Clear tags
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {availableTags.map((tag) => {
              const active = activeTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={
                    "rounded-full px-4 py-2 text-sm font-semibold transition ring-1 " +
                    (active
                      ? "bg-purple-700 text-white ring-purple-700"
                      : "bg-white text-purple-800 ring-purple-200 hover:ring-purple-300")
                  }
                  aria-pressed={active}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Sticky Alphabet Jump Links */}
      {letters.length > 0 && (
        <div className="sticky top-0 z-10 -mx-2 mb-10" id="top">
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
            No herbs found
          </h2>
          <p className="text-gray-700 mb-5">
            Try a different name, adjust your tag filters, or clear search to see
            the full library.
          </p>

          <div className="flex gap-3 flex-wrap">
            <button
              type="button"
              onClick={clear}
              className="rounded-2xl px-6 py-3 font-semibold bg-purple-700 text-white hover:bg-purple-800 transition"
            >
              Clear search
            </button>
            <button
              type="button"
              onClick={clearTags}
              className="rounded-2xl px-6 py-3 font-semibold bg-white text-purple-800 ring-1 ring-purple-200 hover:ring-purple-300 transition"
            >
              Clear tags
            </button>
          </div>
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
                {grouped[letter].map((herb) => {
                  const pdfHref = `/herbal-library/${herb.slug}.pdf`;
                  const imgSrc = `/herbal-library/previews/${herb.slug}.png`;

                  const learnHref = herb.learnHref ?? `/herbs/${herb.slug}`;

                  return (
                    <div
                      key={herb.slug}
                      className="bg-white rounded-3xl shadow-sm overflow-hidden border border-purple-100"
                    >
                      {/* PDF Card (primary action) */}
                      <a
                        href={pdfHref}
                        className="group block hover:shadow-md hover:-translate-y-[1px]
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

                          {/* Tags display */}
                          {herb.tags?.length ? (
                            <div className="mt-1 flex flex-wrap gap-2">
                              {herb.tags.map((t) => (
                                <span
                                  key={t}
                                  className="text-xs font-semibold text-purple-800 bg-purple-50 ring-1 ring-purple-100 px-2 py-1 rounded-full"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          ) : null}

                          <div className="mt-3 text-purple-700 font-semibold group-hover:underline">
                            View / Download →
                          </div>

                          <div className="mt-2 text-sm text-gray-500 break-all">
                            {pdfHref}
                          </div>
                        </div>
                      </a>

                      {/* Learn More */}
                      <div className="px-6 pb-6 -mt-2">
                        <Link
                          href={learnHref}
                          className="inline-flex items-center text-sm font-semibold text-purple-700 hover:underline"
                          aria-label={`Learn more about ${herb.title}`}
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
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
