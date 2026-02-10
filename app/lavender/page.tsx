import Link from "next/link";

export const metadata = {
  title: "Lavender at JW Farms | Lavender Farm & Uses",
  description:
    "Learn about lavender at JW Farms — how we grow it, traditional uses, and seasonal lavender products from our family-owned lavender farm.",
  alternates: {
    canonical: "https://www.jwfarms7.com/lavender",
  },
};

export default function LavenderPage() {
  // Reusable heading style (soft serif)
  const sectionHeading =
    "font-serif font-medium text-2xl md:text-3xl text-purple-700 tracking-tight";

  // ✅ Shared button system (matches landing page + Knowledge Hub)
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

  const softCard =
    "rounded-3xl bg-white/80 border border-purple-100 shadow-sm p-6 md:p-8";

  const inlineLink =
    "text-purple-700 underline underline-offset-4 decoration-purple-300 hover:text-purple-900";

  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-800">
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-purple-700/80 hover:text-purple-900 hover:underline"
          >
            ← Back to JW Farms
          </Link>

          {/* Header */}
          <h1 className="mt-6 font-serif font-medium tracking-tight text-slate-900 text-4xl md:text-6xl leading-[1.05]">
            Lavender at JW Farms
          </h1>

          <p className="mt-5 text-lg md:text-xl leading-relaxed text-gray-700">
            Lavender has been part of daily life for generations — valued for
            its fragrance, usefulness, and steady presence. At JW Farms, we grow
            lavender with care and intention, and we share traditional ways of
            using it at home, in the kitchen, and as part of everyday well-being.
          </p>

          <p className="mt-4 leading-relaxed text-gray-700">
            This page offers a clear overview of lavender, how we grow it, and how
            it is commonly used. For deeper guides and hands-on projects, we link
            to our extended resources throughout.
          </p>

          {/* Quick actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/lavender/knowledge" className={softButtonPrimary}>
              Visit the Knowledge Hub
            </Link>
            <Link href="/#products" className={softButtonSecondary}>
              View Products
            </Link>
            <Link href="/downloadable-guides" className={softButtonTertiary}>
              Downloadable Guides
            </Link>
          </div>

          {/* Content sections */}
          <div className="mt-12 space-y-10">
            <section className={softCard}>
              <h2 className={sectionHeading}>What Is Lavender?</h2>
              <p className="mt-3 leading-relaxed text-gray-700">
                Lavender is a flowering perennial known for its aromatic buds and
                adaptability. While many varieties exist, lavender has long been
                appreciated for its versatility — from household use to culinary and
                decorative applications.
              </p>
            </section>

            <section className={softCard}>
              <h2 className={sectionHeading}>How We Grow Lavender at JW Farms</h2>
              <p className="mt-3 leading-relaxed text-gray-700">
                JW Farms is a small, family-owned lavender farm focused on quality
                rather than scale. Our lavender is grown seasonally, harvested by hand,
                and handled in small batches with attention to timing and care.
              </p>

              <ul className="mt-5 space-y-2 text-gray-700">
                {[
                  "Healthy plants grown with intention",
                  "Careful harvest timing",
                  "Proper drying and storage",
                  "Respect for the natural rhythm of the land",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[7px] h-2 w-2 rounded-full bg-purple-300 flex-none" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link href="/lavender/knowledge/how-we-grow" className={inlineLink}>
                  Read: How We Grow Lavender at JW Farms →
                </Link>
              </div>
            </section>

            <section className={softCard}>
              <h2 className={sectionHeading}>Ways Lavender Is Traditionally Used</h2>
              <p className="mt-3 leading-relaxed text-gray-700">
                Lavender has traditionally been used in simple, practical ways that
                fit naturally into daily life — from scenting drawers and closets to
                culinary use with appropriate varieties.
              </p>
              <p className="mt-4 leading-relaxed text-gray-700">
                We focus on uses that are approachable and rooted in tradition rather
                than excess.
              </p>
            </section>

            <section className={softCard}>
              <h2 className={sectionHeading}>Lavender for Well-Being</h2>
              <p className="mt-3 leading-relaxed text-gray-700">
                Lavender has long been associated with calm environments and gentle
                routines. Our approach emphasizes moderation, simplicity, safety, and
                education rather than promises or outcomes.
              </p>
            </section>

            <section className={softCard}>
              <h2 className={sectionHeading}>Learn More</h2>
              <p className="mt-3 leading-relaxed text-gray-700">
                Lavender rewards patience. Whether grown, used, or enjoyed simply for
                its presence, it fits best into life when approached without urgency.
              </p>
            </section>

            {/* Explore more */}
            <section className="rounded-3xl bg-white border border-purple-100 shadow-md p-7 md:p-10">
              <h2 className="font-serif font-medium text-2xl md:text-3xl text-slate-900">
                Explore more from JW Farms
              </h2>
              <p className="mt-2 text-gray-700 leading-relaxed max-w-3xl">
                If you’d like deeper guides or print-friendly references, these are a great next step.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Link
                  href="/lavender/knowledge"
                  className="block rounded-2xl bg-white/70 border border-purple-100 p-5 hover:shadow-md transition"
                >
                  <p className="font-serif font-medium text-lg text-slate-900">
                    Lavender Knowledge Hub
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Growing, harvesting, drying, and seasonal care.
                  </p>
                </Link>

                <Link
                  href="/downloadable-guides"
                  className="block rounded-2xl bg-white/70 border border-purple-100 p-5 hover:shadow-md transition"
                >
                  <p className="font-serif font-medium text-lg text-slate-900">
                    Downloadable Guides
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Printable references for storing, crafting, and using lavender.
                  </p>
                </Link>

                <Link
                  href="/lavender-farm-tennessee"
                  className="block rounded-2xl bg-white/70 border border-purple-100 p-5 hover:shadow-md transition sm:col-span-2"
                >
                  <p className="font-serif font-medium text-lg text-slate-900">
                    Lavender Farm in Tennessee
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Learn about JW Farms (Cottontown / North Nashville) and how we grow.
                  </p>
                </Link>
              </div>

              {/* Helpful links list */}
              <div className="mt-8 rounded-2xl bg-[#f6f2fb] border border-purple-100 p-5">
                <h3 className="font-serif font-medium text-xl text-slate-900">
                  Explore Lavender at JW Farms
                </h3>

                <ul className="mt-4 space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-purple-300 flex-none" />
                    <span>
                      🌿{" "}
                      <Link href="/#products" className={inlineLink}>
                        View our current lavender products
                      </Link>
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-purple-300 flex-none" />
                    <span>
                      📄{" "}
                      <Link href="/downloadable-guides" className={inlineLink}>
                        Download printable lavender guides
                      </Link>
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-purple-300 flex-none" />
                    <span>
                      ✍️{" "}
                      <a
                        href="https://jwfarms.blogspot.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={inlineLink}
                      >
                        Read practical lavender tips and how-to articles
                      </a>
                    </span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/lavender/knowledge" className={softButtonPrimary}>
                  Start in the Knowledge Hub
                </Link>
                <Link href="/#contact" className={softButtonTertiary}>
                  Contact JW Farms <span aria-hidden="true">→</span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

