import Link from "next/link";

export const metadata = {
  title: "Lavender Beginner Mistakes | Lavender Knowledge Hub | JW Farms",
  description:
    "The most common lavender growing mistakes—and what to do instead—based on what we see every season at JW Farms.",
  alternates: {
    canonical: "https://www.jwfarms7.com/lavender/knowledge/beginner-mistakes",
  },
};

export default function LavenderBeginnerMistakesPage() {
  // Shared “landing-page” styling
  const sectionHeading =
    "font-serif font-medium text-2xl md:text-3xl text-slate-900 tracking-tight";

  const softButtonBase =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 " +
    "font-serif font-medium text-[17px] shadow-sm transition-all duration-200 " +
    "hover:shadow-md hover:-translate-y-[1px]";

  const softButtonTertiary =
    softButtonBase +
    " bg-purple-50/70 text-purple-800 border border-purple-200 backdrop-blur hover:bg-purple-50";

  const crumbLink =
    "text-purple-700/80 hover:text-purple-900 hover:underline underline-offset-4";

  const softCard =
    "rounded-3xl bg-white/80 border border-purple-100 shadow-sm";

  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-800">
      <article className="max-w-3xl mx-auto px-6 py-14">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-3 text-sm font-medium">
          <Link href="/" className={crumbLink}>
            JW Farms
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/lavender/knowledge" className={crumbLink}>
            Knowledge Hub
          </Link>
        </nav>

        {/* Header */}
        <h1 className="mt-6 font-serif font-medium tracking-tight text-slate-900 text-4xl md:text-6xl leading-[1.05]">
          Beginner Mistakes We See Most Often
        </h1>

        <p className="mt-5 text-lg md:text-xl leading-relaxed text-gray-700">
          Lavender is easy to love—but it’s also easy to accidentally kill. Most
          problems we see aren’t pests or disease; they’re a few common setup
          issues. Here are the mistakes we see most often, and what to do
          instead.
        </p>

        <hr className="my-10 border-black/10" />

        {/* Content blocks */}
        <div className="space-y-10">
          <section className="space-y-3">
            <h2 className={sectionHeading}>
              1) Planting lavender in soil that stays wet
            </h2>
            <p className="leading-relaxed text-gray-700">
              Lavender hates “wet feet.” If water sits around the roots, the
              plant weakens quickly and can rot. If your soil is heavy or
              clay-like, focus on drainage first—raised beds, mounded rows, and
              soil that drains fast.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={sectionHeading}>2) Not enough sun</h2>
            <p className="leading-relaxed text-gray-700">
              Lavender needs full sun. In partial shade it often becomes leggy,
              soft, and short-lived. Aim for 6–8 hours of direct sun, with good
              airflow.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={sectionHeading}>3) Overwatering</h2>
            <p className="leading-relaxed text-gray-700">
              People love plants by watering them—and lavender doesn’t want that
              kind of love. Water young plants to establish roots, then reduce
              watering. Deep and infrequent beats light and frequent every time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={sectionHeading}>4) Over-fertilizing</h2>
            <p className="leading-relaxed text-gray-700">
              Lavender doesn’t need rich soil or heavy feeding. Too much
              fertilizer can cause fast, weak growth with less fragrance. Focus
              on sun and drainage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={sectionHeading}>5) Pruning at the wrong time</h2>
            <p className="leading-relaxed text-gray-700">
              Pruning keeps lavender healthy, but timing matters. Cutting too
              late before cold weather (or too hard into woody stems) can stress
              the plant. Prune to shape and encourage growth—gently and
              consistently.
            </p>
          </section>
        </div>

        {/* CTA card */}
        <div className={`mt-12 ${softCard} p-7 md:p-8`}>
          <h3 className="font-serif font-medium text-xl md:text-2xl text-slate-900">
            Want us to add a guide next?
          </h3>
          <p className="mt-2 text-gray-700 leading-relaxed">
            We’re building this hub one helpful page at a time—drying,
            harvesting, pruning, varieties, and a seasonal care calendar.
          </p>

          <div className="mt-6">
            <Link href="/lavender/knowledge" className={softButtonTertiary}>
              ← Back to the Knowledge Hub
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
