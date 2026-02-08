import Image from "next/image";

export const metadata = {
  title: "Downloadable Guides | JW Farms",
  description:
    "Printable herbal guides from JW Farms—simple, practical references you can download and keep.",
  alternates: { canonical: "https://www.jwfarms7.com/downloadable-guides" },
};

const guides = [
  {
    title: "Herbal First Aid Kit",
    description:
      "A simple, print-friendly herbal reference—kept close at hand.",
    pdfHref: "/downloads/herbal-first-aid-kit.pdf",
    thumbSrc: "/downloads/herbal-first-aid-kit.png", // make sure this exists
    fileLabel: "PDF",
  },
  // Add more guides here the same way:
  // {
  //   title: "Lavender Drying Guide",
  //   description: "How to harvest and dry lavender for best color and scent.",
  //   pdfHref: "/downloads/lavender-drying-guide.pdf",
  //   thumbSrc: "/downloads/lavender-drying-guide.png",
  //   fileLabel: "PDF",
  // },
];

export default function DownloadableGuidesPage() {
  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-800">
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h1 className="text-4xl md:text-5xl font-semibold text-purple-900">
          Downloadable Guides
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-700">
          Print-friendly guides from JW Farms—simple references you can keep in
          the kitchen, the craft room, or the medicine cabinet.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <article
              key={g.pdfHref}
              className="bg-white/80 rounded-2xl shadow-sm border border-purple-100 overflow-hidden"
            >
              <div className="relative aspect-[4/5] bg-white">
                <Image
                  src={g.thumbSrc}
                  alt={`${g.title} preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-semibold text-purple-900">
                  {g.title}
                </h2>
                <p className="mt-2 text-sm text-gray-700">{g.description}</p>

                <div className="mt-4 flex gap-3">
                  {/* Open in browser */}
                  <a
                    href={g.pdfHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-purple-800 text-white hover:bg-purple-900"
                  >
                    View {g.fileLabel}
                  </a>

                  {/* Force download */}
                  <a
                    href={g.pdfHref}
                    download
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-purple-200 text-purple-900 hover:bg-purple-50"
                  >
                    Download
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Downloadable Lavender Guides | JW Farms",
  description:
    "Printable lavender guides from JW Farms—simple, practical how-to references for storing, crafting, and using lavender at home.",
  alternates: {
    canonical: "https://www.jwfarms7.com/downloadable-guides",
  },
};

export default function DownloadableGuidesPage() {
  const guides = [
    {
      title: "How to Store Dried Lavender",
      desc:
        "A simple, practical storage guide to preserve aroma, color, and quality.",
      href: "/downloads/how-to-store-dried-lavender.pdf",
      badge: "PDF",
      image: "/downloads/how-to-store-dried-lavender-preview.png",
    },
    {
      title: "Caring for Dried Lavender Wreaths",
      desc:
        "Tips to reduce shedding, prevent fading, and store wreaths seasonally.",
      href: "/downloads/caring-for-dried-lavender-wreaths.pdf",
      badge: "PDF",
      image: "/downloads/caring-for-dried-lavender-wreaths-preview.png",
    },
    {
      title: "Culinary Lavender Reference",
      desc:
        "A quick variety guide and reminder for gentle, balanced culinary use.",
      href: "/downloads/culinary-lavender-reference.pdf",
      badge: "PDF",
      image: "/downloads/culinary-lavender-reference-preview.png",
    },
    {
      title: "Lavender at Home Starter Pack",
      desc:
        "A beginner-friendly set of ideas for everyday lavender use.",
      href: "/downloads/lavender-at-home-starter-pack.pdf",
      badge: "PDF",
      image: "/downloads/lavender-at-home-starter-pack-preview.png",
    },
    {
      title: "Lavender Quick Sheet",
      desc:
        "An overview of lavender varieties, uses, and tips in one handy printable reference.",
      href: "/downloads/lavender-sheet.pdf",
      badge: "PDF",
      image: "/downloads/lavender-sheet-preview.png",
    },
    {
      title: "7 Lavenders Compared",
      desc:
        "A beginner-friendly visual guide comparing bloom times, USDA hardiness zones, and drought tolerance. Includes English, Spanish, and French lavender.",
      href: "/downloads/7-lavenders-compared-jw-farms.pdf",
      badge: "PDF",
      image: "/downloads/7-lavenders-compared-preview.png",
    },
  ];

  return (
    <main className="bg-[#f6f2fb] text-gray-800 min-h-screen">
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-purple-800 mb-6">
          Downloadable Guides
        </h1>

        <p className="text-lg leading-relaxed mb-10 max-w-3xl">
          This collection of printable guides is designed to support the care,
          use, and enjoyment of lavender at home. Each guide reflects traditional
          practices and thoughtful handling — created to be returned to as needed.
        </p>

        {/* Guides grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((g, i) => (
            <a
              key={i}
              href={g.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl hover:-translate-y-1"
            >
              {/* Thumbnail (clean, cover-like) */}
              {g.image ? (
                <div className="border-b border-purple-50 bg-gradient-to-b from-[#faf7ff] to-white flex items-center justify-center">
                  <img
                    src={g.image}
                    alt={`${g.title} preview`}
                    className="w-auto h-44 object-contain my-4 rounded-lg shadow-sm"
                    loading="lazy"
                  />
                </div>
              ) : null}

              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {g.title}
                  </h2>
                  <span className="shrink-0 text-xs font-semibold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    {g.badge}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {g.desc}
                </p>

                <p className="text-purple-700 font-semibold">
                  View / Download →
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Internal discovery links */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-xl font-semibold text-purple-800 mb-3">
            Looking for the Lavender overview?
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Visit our main lavender page for a calm introduction to how we grow
            lavender and how it is traditionally used.
          </p>

          <a
            href="/lavender"
            className="inline-block mt-4 bg-purple-700 hover:bg-purple-800 text-white rounded-xl px-6 py-3 font-semibold transition-all duration-200 hover:scale-[1.02]"
          >
            Go to Lavender at JW Farms
          </a>

          <a
            href="/lavender-farm-tennessee"
            className="block mt-4 text-purple-700 font-semibold underline hover:text-purple-900"
          >
            Learn about our Tennessee lavender farm →
          </a>
        </div>
      </section>
    </main>
  );
}
