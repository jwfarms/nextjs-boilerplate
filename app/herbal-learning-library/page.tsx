
export const metadata = {
  title: "Herbal Learning Library | JW Farms",
  description:
    "Printable herbal learning guides from JW Farms—lavender and other herbs & plants, organized for easy reference.",
  alternates: {
    canonical: "https://www.jwfarms7.com/herbal-learning-library",
  },
};

type Guide = {
  title: string;
  desc: string;
  href: string; // e.g. /downloads/lavender-sheet.pdf
  badge?: string; // PDF, NEW, etc.
  topic: string; // Lavender, Herbs, etc.
};

const GUIDES: Guide[] = [
  {
    title: "Lavender Quick Sheet",
    desc: "An overview of lavender varieties, uses, and tips in one handy printable reference.",
    href: "/downloads/lavender-sheet.pdf",
    badge: "PDF",
    topic: "Lavender",
  },
  // ✅ Add more later like this:
  // {
  //   title: "Peppermint Quick Sheet",
  //   desc: "A simple reference guide for peppermint.",
  //   href: "/downloads/peppermint-sheet.pdf",
  //   badge: "PDF",
  //   topic: "Herbs",
  // },
];

function groupByTopic(guides: Guide[]) {
  const map = new Map<string, Guide[]>();
  for (const g of guides) {
    const key = g.topic || "Other";
    map.set(key, [...(map.get(key) || []), g]);
  }
  return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
}

export default function HerbalLearningLibraryPage() {
  const groups = groupByTopic(GUIDES);

  return (
    <main className="bg-[#f6f2fb] text-gray-800">
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <a
          href="/"
          className="inline-block text-sm font-semibold text-purple-700 underline hover:text-purple-900"
        >
          ← Back to JW FARMS
        </a>

        <h1 className="mt-6 text-4xl md:text-5xl font-semibold text-purple-800">
          Herbal Learning Library
        </h1>

        <p className="mt-4 text-lg leading-relaxed max-w-3xl">
          A growing collection of printable guides for lavender and other herbs
          and plants. Everything is organized for quick reference and easy
          downloading.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-purple-100">
            <h2 className="text-lg font-semibold text-purple-800 mb-2">
              How it works
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Each guide is a PDF you can open, save, or print. We’ll keep adding
              more herbs and plant references over time.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 border border-purple-100">
            <h2 className="text-lg font-semibold text-purple-800 mb-2">
              Want a specific herb?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Email us what you’d like added next and we’ll prioritize it.
            </p>
            <a
              href="mailto:jwfarms77@gmail.com?subject=Herbal%20Learning%20Library%20Request"
              className="inline-block mt-4 bg-purple-700 hover:bg-purple-800 text-white rounded-xl px-5 py-3 font-semibold transition-all duration-200 hover:scale-[1.02]"
            >
              Request a Guide
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 border border-purple-100">
            <h2 className="text-lg font-semibold text-purple-800 mb-2">
              Prefer the blog?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We also share farm updates and posts on Blogger.
            </p>
            <a
              href="https://jwfarms.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-purple-700 font-semibold underline hover:text-purple-900"
            >
              Visit the Blog →
            </a>
          </div>
        </div>

        {/* Library content */}
        <div className="mt-14 space-y-12">
          {groups.map(([topic, guides]) => (
            <section key={topic} className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-purple-800">
                  {topic}
                </h2>
                <span className="text-sm text-gray-500">
                  {guides.length} guide{guides.length === 1 ? "" : "s"}
                </span>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                {guides.map((g) => (
                  <a
                    key={g.href}
                    href={g.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[#f6f2fb] rounded-2xl border border-purple-100 shadow-sm p-6 transition hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {g.title}
                      </h3>
                      <span className="shrink-0 text-xs font-semibold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                        {g.badge || "PDF"}
                      </span>
                    </div>
                    <p className="mt-3 text-gray-700 leading-relaxed">{g.desc}</p>
                    <p className="mt-4 text-purple-700 font-semibold">
                      View / Download →
                    </p>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
