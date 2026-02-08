export const metadata = {
  title: "Downloadable Guides | JW Farms",
  description:
    "Printable herbal guides from JW Farms—simple, practical references you can download and keep.",
  alternates: {
    canonical: "https://www.jwfarms7.com/downloadable-guides",
  },
};

type Guide = {
  title: string;
  desc: string;
  href: string; // PDF path (from /public)
  badge?: string;
  image?: string; // PNG/JPG preview path (from /public)
};

const featured: Guide = {
  title: "Herbal First Aid Kit",
  desc: "A simple, print-friendly herbal reference—created to be kept close at hand for everyday care.",
  href: "/downloads/herbal-first-aid-kit.pdf",
  badge: "FREE PDF",
  image: "/downloads/herbal-first-aid-kit-preview.png",
};

const guides: Guide[] = [
  // ✅ Keep your existing guides and add new ones here.
  // Update filenames to match exactly what’s in /public/downloads

  {
    title: "How to Store Dried Lavender",
    desc: "A simple, practical storage guide to preserve aroma, color, and quality.",
    href: "/downloads/how-to-store-dried-lavender.pdf",
    badge: "PDF",
    image: "/downloads/how-to-store-dried-lavender-preview.png",
  },
  {
    title: "Caring for Dried Lavender Wreaths",
    desc: "Keep your wreath beautiful longer with a few simple care steps.",
    href: "/downloads/caring-for-dried-lavender-wreaths.pdf",
    badge: "PDF",
    image: "/downloads/caring-for-dried-lavender-wreaths-preview.png",
  },

  // ⭐ Add more here (copy/paste a block)
  // {
  //   title: "Lavender Sleep Guide",
  //   desc: "Simple ways to use lavender for evening calm and rest.",
  //   href: "/downloads/lavender-sleep-guide.pdf",
  //   badge: "PDF",
  //   image: "/downloads/lavender-sleep-guide-preview.png",
  // },
];

function GuideCard({ g }: { g: Guide }) {
  return (
    <article className="bg-white/80 rounded-2xl border border-purple-100 shadow-sm overflow-hidden">
      {/* Preview */}
      {g.image ? (
        <div className="relative aspect-[4/5] bg-white">
          <img
            src={g.image}
            alt={`${g.title} preview`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="aspect-[4/5] bg-purple-50 border-b border-purple-100 flex items-center justify-center text-purple-900/70 text-sm">
          Preview coming soon
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-semibold text-purple-900 leading-snug">
            {g.title}
          </h2>

          {g.badge ? (
            <span className="shrink-0 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-purple-100 text-purple-900 border border-purple-200">
              {g.badge}
            </span>
          ) : null}
        </div>

        <p className="mt-2 text-sm text-gray-700">{g.desc}</p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={g.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-purple-800 text-white hover:bg-purple-900"
          >
            View PDF
          </a>

          <a
            href={g.href}
            download
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-purple-200 text-purple-900 hover:bg-purple-50"
          >
            Download
          </a>
        </div>
      </div>
    </article>
  );
}

export default function DownloadableGuidesPage() {
  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-800">
      {/* ✅ Featured */}
      <section className="border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm font-medium text-purple-900/80">
              Featured Download
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-purple-900">
              {featured.title}
            </h1>

            <p className="mt-4 text-lg text-gray-700 max-w-xl">
              {featured.desc}
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={featured.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium bg-purple-800 text-white hover:bg-purple-900"
              >
                View PDF
              </a>

              <a
                href={featured.href}
                download
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium border border-purple-200 text-purple-900 hover:bg-purple-50"
              >
                Download Free
              </a>
            </div>

            <p className="mt-6 text-xs text-gray-600 max-w-xl">
              Educational use only. Not intended to diagnose, treat, cure, or
              prevent disease.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-purple-100 shadow-sm bg-white">
            {featured.image ? (
              <div className="relative aspect-[4/5]">
                <img
                  src={featured.image}
                  alt={`${featured.title} preview`}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="aspect-[4/5] bg-purple-50 flex items-center justify-center text-purple-900/70 text-sm">
                Preview coming soon
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ✅ All Guides */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-900">
          Downloadable Guides
        </h2>

        <p className="mt-3 max-w-2xl text-gray-700">
          Print-friendly guides from JW Farms—simple references you can keep in
          the kitchen, craft room, or medicine cabinet.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <GuideCard key={g.href} g={g} />
          ))}
        </div>
      </section>
    </main>
  );
}
