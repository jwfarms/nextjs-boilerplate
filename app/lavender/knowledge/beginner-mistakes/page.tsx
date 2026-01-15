export const metadata = {
  title: "Lavender Beginner Mistakes | Lavender Knowledge Hub | JW Farms",
  description:
    "The most common lavender growing mistakes—and what to do instead—based on what we see every season at JW Farms.",
};

export default function LavenderBeginnerMistakesPage() {
  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-800">
      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex gap-4 text-sm font-medium">
          <a href="/" className="text-[#6b4fa3] hover:underline">
            JW Farms
          </a>
          <span className="text-gray-500">/</span>
          <a href="/lavender/knowledge" className="text-[#6b4fa3] hover:underline">
            Knowledge Hub
          </a>
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight">
          Beginner Mistakes We See Most Often
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Lavender is easy to love—but it’s also easy to accidentally kill. Most
          problems we see aren’t pests or disease; they’re a few common setup
          issues. Here are the mistakes we see most often, and what to do instead.
        </p>

        <hr className="my-10 border-black/10" />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1) Planting lavender in soil that stays wet</h2>
          <p className="leading-relaxed text-gray-700">
            Lavender hates “wet feet.” If water sits around the roots, the plant
            weakens quickly and can rot. If your soil is heavy or clay-like,
            focus on drainage first—raised beds, mounded rows, and soil that
            drains fast.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">2) Not enough sun</h2>
          <p className="leading-relaxed text-gray-700">
            Lavender needs full sun. In partial shade it often becomes leggy,
            soft, and short-lived. Aim for 6–8 hours of direct sun, with good airflow.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">3) Overwatering</h2>
          <p className="leading-relaxed text-gray-700">
            People love plants by watering them—and lavender doesn’t want that kind
            of love. Water young plants to establish roots, then reduce watering.
            Deep and infrequent beats light and frequent every time.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">4) Over-fertilizing</h2>
          <p className="leading-relaxed text-gray-700">
            Lavender doesn’t need rich soil or heavy feeding. Too much fertilizer
            can cause fast, weak growth with less fragrance. Focus on sun and drainage.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">5) Pruning at the wrong time</h2>
          <p className="leading-relaxed text-gray-700">
            Pruning keeps lavender healthy, but timing matters. Cutting too late
            before cold weather (or too hard into woody stems) can stress the plant.
            Prune to shape and encourage growth—gently and consistently.
          </p>
        </section>

        <div className="mt-12 rounded-2xl bg-white/80 border border-[#6b4fa3]/10 p-6">
          <h3 className="text-lg font-semibold">Want us to add a guide next?</h3>
          <p className="mt-2 text-gray-700">
            We’re building this hub one helpful page at a time—drying, harvesting,
            pruning, varieties, and a seasonal care calendar.
          </p>

          <a
            href="/lavender/knowledge"
            className="mt-4 inline-block text-[#6b4fa3] font-semibold hover:underline"
          >
            ← Back to the Knowledge Hub
          </a>
        </div>
      </article>
    </main>
  );
}
