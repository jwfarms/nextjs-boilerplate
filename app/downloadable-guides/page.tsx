export const metadata = {
  title: "Downloadable Lavender Guides | JW Farms",
  description:
    "Printable lavender guides from JW Farms—simple, practical how-to references for storing, crafting, and using lavender at home.",
  alternates: {
    canonical: "https://www.jwfarms7.com/downloadable-guides",
  },
};

export default function DownloadableGuidesPage() {
  return (
    <main className="bg-[#f6f2fb] text-gray-800">
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-purple-800 mb-6">
          Downloadable Guides
        </h1>

        <p className="text-lg leading-relaxed mb-10 max-w-3xl">
          This collection of printable guides is designed to support the care,
          use, and enjoyment of lavender at home. Each guide reflects traditional
          practices and thoughtful handling — created to be returned to as needed.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "How to Store Dried Lavender",
              desc:
                "A simple, practical storage guide to preserve aroma, color, and quality.",
              href: "/downloads/how-to-store-dried-lavender.pdf",
            },
            {
              title: "Caring for Dried Lavender Wreaths",
              desc:
                "Tips to reduce shedding, prevent fading, and store wreaths seasonally.",
              href: "/downloads/caring-for-dried-lavender-wreaths.pdf",
            },
            {
              title: "Culinary Lavender Reference",
              desc:
                "A quick variety guide and reminder for gentle, balanced culinary use.",
              href: "/downloads/culinary-lavender-reference.pdf",
            },
            {
              title: "Lavender at Home Starter Pack",
              desc:
                "A beginner-friendly set of ideas for everyday lavender use.",
              href: "/downloads/lavender-at-home-starter-pack.pdf",
            },
            {
              title: "Lavender Quick Sheet",
              desc:
                "An overview of lavender varieties, uses, and tips in one handy printable reference.",
              href: "/downloads/lavender-sheet.pdf",
            },
            {
              title: "7 Lavenders Compared",
              desc:
                "A beginner-friendly visual guide comparing bloom times, USDA hardiness zones, and drought tolerance. Includes English, Spanish, and French lavender.",
              href: "/downloads/7-lavenders-compared-jw-farms.pdf",
            },
          ].map((g, i) => (
            <a
              key={i}
              href={g.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl shadow-md p-6 transition hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {g.title}
                </h2>
                <span className="shrink-0 text-xs font-semibold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                  PDF
                </span>
              </div>

              <p className="mt-3 text-gray-600 leading-relaxed">{g.desc}</p>

              <p className="mt-4 text-purple-700 font-semibold">
                View / Download →
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
