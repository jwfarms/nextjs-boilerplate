import Link from "next/link";

export const metadata = {
  title: "Lavender Knowledge Hub | JW Farms",
  description:
    "Practical lavender guides from JW Farms—growing, harvesting, drying, uses, and seasonal care.",
  alternates: {
    canonical: "https://www.jwfarms7.com/lavender/knowledge",
  },
};

export default function LavenderKnowledgeHubPage() {
  // Reusable heading style (soft serif)
  const sectionHeading =
    "font-serif font-medium text-3xl md:text-4xl text-purple-700 tracking-tight";

  // ✅ ONE shared button system (matches your landing page)
  const softButtonBase =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 " +
    "font-serif font-medium text-[17px] shadow-sm transition-all duration-200 " +
    "hover:shadow-md hover:-translate-y-[1px]";

  const softButtonPrimary =
    softButtonBase + " bg-purple-700/90 text-white hover:bg-purple-700";

  const softButtonSecondary =
    softButtonBase +
    " bg-white/80 text-purple-800 border border-purple-200 backdrop-blur hover:bg-white";

  const softButtonTertiary =
    softButtonBase +
    " bg-purple-50/70 text-purple-800 border border-purple-200 backdrop-blur hover:bg-purple-50";

  const relatedLink =
    "font-serif text-lg text-purple-700 underline underline-offset-4 decoration-purple-300 hover:text-purple-900";

  // Magazine-clean card base (subtle borders + consistent rounding)
  const softCard =
    "rounded-3xl bg-white/80 border border-purple-100 shadow-sm hover:shadow-md transition";

  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-14">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-purple-700/80 hover:text-purple-900 hover:underline"
        >
          ← Back to JW Farms
        </Link>

        {/* Page header */}
        <h1 className="mt-6 font-serif font-medium tracking-tight text-slate-900 text-4xl md:text-6xl leading-[1.05]">
          Lavender Knowledge Hub
        </h1>

        <p className="mt-5 text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl">
          Lavender has been grown and used for centuries, yet much of what’s
          shared today overlooks climate, soil, and the patience the plant
          requires. This Knowledge Hub is where we share what we’ve learned
          growing lavender at JW Farms—honestly and carefully. No shortcuts. No
          hype. Just real experience, season by season.
        </p>

        {/* Related pages */}
        <div className="mt-10 rounded-3xl bg-white/70 border border-purple-100 shadow-sm p-7 md:p-8">
          <p className="text-sm font-semibold text-slate-800 mb-3">
            Related JW Farms pages
          </p>

          <div className="flex flex-col gap-3">
            <Link href="/lavender" className={relatedLink}>
              Lavender overview
            </Link>
            <Link href="/downloadable-guides" className={relatedLink}>
              Downloadable guides
            </Link>
            <Link href="/lavender-farm-tennessee" className={relatedLink}>
              Lavender farm in Tennessee
            </Link>
          </div>
        </div>

        {/* Start here */}
        <section className="mt-12">
          <div className="rounded-3xl bg-white border border-purple-100 shadow-md p-7 md:p-10">
            <h2 className="font-serif font-medium text-2xl md:text-3xl text-slate-900">
              Start here
            </h2>
            <p className="mt-2 text-gray-700 leading-relaxed max-w-3xl">
              Our cornerstone guide to how we grow, care for, harvest, and dry
              lavender at JW Farms.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/lavender/knowledge/how-we-grow"
                className={softButtonPrimary}
              >
                How We Grow Lavender at JW Farms
              </Link>

              <Link
                href="/lavender/knowledge/beginner-mistakes"
                className={softButtonSecondary}
              >
                Beginner Mistakes We See Most Often
              </Link>
            </div>
          </div>
        </section>

        {/* More guides */}
        <section className="mt-14">
          <h2 className={`${sectionHeading} mb-8`}>More guides coming soon</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Beginner mistakes we see most often",
                desc: "Coming soon in the Knowledge Hub.",
              },
              {
                title: "When to harvest lavender (buds vs bundles)",
                desc: "Coming soon in the Knowledge Hub.",
              },
              {
                title: "How to dry lavender properly (without mold)",
                desc: "Coming soon in the Knowledge Hub.",
              },
              {
                title: "Pruning lavender without harming the plant",
                desc: "Coming soon in the Knowledge Hub.",
              },
              {
                title: "Lavender types: English vs French vs Spanish",
                desc: "Coming soon in the Knowledge Hub.",
              },
              {
                title: "Seasonal lavender care calendar",
                desc: "Coming soon in the Knowledge Hub.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`${softCard} p-6 md:p-7`}
              >
                <h3 className="font-serif font-medium text-xl text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-700">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-700 max-w-4xl">
            Want a guide added first? Send us a note through the Contact section
            on the home page—education is part of what we love.
          </p>

          <div className="mt-6">
            <Link href="/#contact" className={softButtonTertiary}>
              Contact JW Farms <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* Magazine-clean CTA (matches your landing page vibe) */}
        <section className="mt-14">
          <div className="rounded-3xl bg-white border border-purple-100 shadow-sm p-7 md:p-10">
            <h2 className="font-serif font-medium text-2xl md:text-3xl text-slate-900">
              Want printable how-to guides?
            </h2>
            <p className="mt-2 text-gray-700 leading-relaxed max-w-3xl">
              Our downloadable guides are designed to be simple, practical
              references you can return to anytime.
            </p>

            <div className="mt-6">
              <Link href="/downloadable-guides" className={softButtonTertiary}>
                Go to Downloadable Guides <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
