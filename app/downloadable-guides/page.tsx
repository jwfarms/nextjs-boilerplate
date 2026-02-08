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

        {/* Guides grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "How to Store Dried Lavender",
              desc:
                "A simple, practical storage guide to preserve aroma, color, and quality.",
              href: "https://jwfarms.blogspot.com/",
              badge: "PDF",
            },
            {
              title: "Caring for Dried Lavender Wreaths",
              desc:
                "Tips to reduce shedding, prevent fading, and store wreaths seasonally.",
              href: "https://jwfarms.blogspot.com/",
              badge: "PDF",
            },
            {
              title: "Culinary Lavender Reference",
              desc:
                "A quick variety guide and reminder for gentle, balanced culinary use.",
              href: "https://jwfarms.blogspot.com/",
              badge: "PDF",
            },
            {
              title: "Lavender at Home Starter Pack",
              desc:
                "A beginner-friendly set of ideas for everyday lavender use.",
              href: "https://jwfarms.blogspot.com/",
              badge: "PDF",
            },
            {
              title: "Lavender Quick Sheet",
              desc:
                "An overview of lavender varieties, uses, and tips in one handy printable reference.",
              href: "/downloads/lavender-sheet.pdf",
              badge: "PDF",
            },
            {
              title: "7 Lavenders Compared",
              desc:
                "A beginner-friendly visual guide comparing bloom times, USDA hardiness zones, and drought tolerance for seven popular lavender types. Includes English, Spanish, and French lavender.",
              href: "/downloads/7-lavenders-compared-jw-farms.pdf",
              badge: "PDF",
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
                  {g.badge}
                </span>
              </div>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {g.desc}
              </p>

              <p className="mt-4 text-purple-700 font-semibold">
                View / Download →
              </p>
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
