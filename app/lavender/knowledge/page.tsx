export const metadata = {
  title: "Lavender Knowledge Hub | JW Farms",
  description:
    "Practical lavender guides from JW Farms—growing, harvesting, drying, uses, and seasonal care.",
};

export default function LavenderKnowledgeHubPage() {
  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb / Back link */}
        <a
          href="/"
          className="inline-block text-sm font-medium text-[#6b4fa3] hover:underline"
        >
          ← Back to JW Farms
        </a>

        <h1 className="mt-6 text-4xl font-bold tracking-tight">
          Lavender Knowledge Hub
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Lavender has been grown and used for centuries, yet much of what’s
          shared today overlooks climate, soil, and the patience the plant
          requires. This Knowledge Hub is where we share what we’ve learned
          growing lavender at JW Farms—honestly and carefully. No shortcuts. No
          hype. Just real experience, season by season.
        </p>

        {/* Featured / Start here */}
        <section className="mt-10 rounded-2xl bg-white/80 backdrop-blur border border-[#6b4fa3]/10 p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Start here</h2>
          <p className="mt-2 text-gray-700">
            Our cornerstone guide to how we grow, care for, harvest, and dry
            lavender at JW Farms.
          </p>

          <a
            href="/lavender/knowledge/how-we-grow"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#6b4fa3] px-4 py-2 text-white font-semibold hover:opacity-95"
          >
            How We Grow Lavender at JW Farms
          </a>
        </section>

        {/* Coming soon list */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">More guides coming soon</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              "Beginner mistakes we see most often",
              "When to harvest lavender (buds vs bundles)",
              "How to dry lavender properly (without mold)",
              "Pruning lavender without harming the plant",
              "Lavender types: English vs French vs Spanish",
              "Seasonal lavender care calendar",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/70 border border-black/5 p-4"
              >
                <div className="font-medium">{item}</div>
                <div className="mt-1 text-sm text-gray-600">
                  Coming soon in the Knowledge Hub.
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gentle footer */}
        <p className="mt-12 text-sm text-gray-600">
          Want a guide added first? Send us a note through the Contact section on
          the home page—education is part of what we love.
        </p>
      </div>
    </main>
  );
}
