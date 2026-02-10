"use client";

import Image from "next/image";
import Link from "next/link";

export default function TennesseeLavenderFarmPage() {
  // Reusable heading styles (matches landing page softness)
  const pageTitle =
    "font-serif font-medium tracking-tight text-slate-900 text-4xl md:text-6xl leading-[1.05]";
  const sectionHeading =
    "font-serif font-medium text-3xl md:text-4xl text-purple-700 tracking-tight";
  const sectionSubtle =
    "text-gray-700 leading-relaxed text-base md:text-lg";

  // ✅ ONE shared button system (same vibe as your landing page)
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

  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-800">
      {/* Top */}
      <section className="px-6 pt-10 pb-10 md:pt-14">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-purple-700/90 font-medium mb-4">
            <Link href="/" className="hover:underline">
              JW Farms
            </Link>{" "}
            <span className="mx-2 text-purple-400">/</span>
            <span className="text-purple-700">Tennessee Lavender Farm</span>
          </div>

          <h1 className={pageTitle}>JW Farms Lavender Farm in Tennessee</h1>

          <p className="mt-5 max-w-3xl text-gray-700 text-base md:text-lg leading-relaxed">
            JW Farms (also known as JW Farms 7) is a small, family-owned lavender farm serving the{" "}
            <span className="font-semibold">Cottontown / North Nashville</span> area of Tennessee.
            We grow lavender with care, harvest by hand, and handle everything in small batches — the traditional way.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              className={softButtonPrimary}
              href="mailto:jwfarms77@gmail.com?subject=Lavender%20Order%20or%20Question"
            >
              Email JW Farms
            </a>

            <Link className={softButtonSecondary} href="/lavender/knowledge">
              Visit the Knowledge Hub <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Hero image */}
          <div className="mt-10 rounded-3xl overflow-hidden shadow-md bg-white border border-purple-100">
            <div className="relative w-full h-[220px] md:h-[320px]">
              {/* Replace src with your own if you want (kept as a safe placeholder path) */}
              <Image
                src="/gallery/lavender-harvest-jw-farms-tennessee.png"
                alt="Lavender at JW Farms in Tennessee"
                fill
                className="object-cover"
                priority
              />
              {/* soft overlay for “magazine clean” */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro two-column */}
      <section className="px-6 py-14 bg-white border-y border-purple-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className={sectionHeading}>A small lavender farm serving Tennessee</h2>
            <p className={`mt-4 ${sectionSubtle}`}>
              We’re based in the <span className="font-semibold">Cottontown / North Nashville</span> region.
              We don’t publish a street address online — instead, we serve customers through clear communication
              and simple ordering by email.
            </p>

            <p className={`mt-4 ${sectionSubtle}`}>
              If you’re looking for buds, bundles, plants, or plug trays, email us and we’ll share current availability
              and timing based on the season.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f6f2fb] border border-purple-100 p-8 shadow-sm">
            <h3 className="font-serif font-medium text-2xl text-slate-900 tracking-tight">
              What we offer
            </h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple-700">•</span>
                Dried lavender buds (culinary &amp; home use)
              </li>
              <li className="flex gap-3">
                <span className="text-purple-700">•</span>
                Fresh bundles (harvest season)
              </li>
              <li className="flex gap-3">
                <span className="text-purple-700">•</span>
                Lavender plants (seasonal)
              </li>
              <li className="flex gap-3">
                <span className="text-purple-700">•</span>
                Plug trays (seasonal / limited)
              </li>
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                className={softButtonTertiary}
                href="mailto:jwfarms77@gmail.com?subject=Availability%20Question"
              >
                Ask about availability <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How we grow */}
      <section className="px-6 py-16 bg-[#f6f2fb] border-b border-purple-100">
        <div className="max-w-6xl mx-auto">
          <h2 className={sectionHeading}>How we grow lavender at JW Farms</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Small-batch care",
                body:
                  "We focus on healthy plants, good airflow, and careful timing rather than rushing growth.",
              },
              {
                title: "Hand-harvested",
                body:
                  "Lavender is harvested by hand for quality and to protect the plant for the next season.",
              },
              {
                title: "Thoughtful handling",
                body:
                  "We dry and store lavender carefully so aroma and color stay strong as long as possible.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl bg-white border border-purple-100 p-7 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-slate-900">{card.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-700">
            Want deeper guidance? Visit our{" "}
            <Link href="/lavender/knowledge" className="font-semibold text-purple-700 underline hover:text-purple-900">
              Lavender Knowledge Hub
            </Link>{" "}
            for step-by-step help.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 bg-white border-b border-purple-100">
        <div className="max-w-6xl mx-auto">
          <h2 className={sectionHeading}>Frequently asked questions</h2>

          <div className="mt-10 space-y-5">
            {[
              {
                q: "Where is JW Farms located in Tennessee?",
                a: "We serve the Cottontown / North Nashville area of Tennessee. For ordering and details, email us and we’ll respond with what you need.",
              },
              {
                q: "Do you ship lavender?",
                a: "Yes — shipping depends on the product and season. Email us your location and what you’re looking for, and we’ll confirm options.",
              },
              {
                q: "When are bundles, plants, and plugs available?",
                a: "Those items are seasonal and vary year to year based on growing conditions. Email us and we’ll share current timing and availability.",
              },
              {
                q: "How do I place an order?",
                a: "All orders are placed by email. Tell us what you want and your shipping location, and we’ll reply with availability and next steps.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-2xl bg-[#f6f2fb] border border-purple-100 p-7 shadow-sm"
              >
                <h3 className="font-semibold text-slate-900 text-lg">{item.q}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="mt-10 rounded-3xl bg-white border border-purple-100 shadow-sm p-8">
            <h3 className="font-serif font-medium text-2xl text-purple-700 tracking-tight">
              Want printable how-to guides?
            </h3>
            <p className="mt-3 text-gray-700">
              Our downloadable guides are designed to be simple, practical references you can return to anytime.
            </p>

            <div className="mt-6">
              <Link href="/downloadable-guides" className={softButtonPrimary}>
                Go to Downloadable Guides <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-16 bg-[#f6f2fb]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className={sectionHeading}>Contact JW Farms</h2>
          <p className="mt-4 text-gray-700">
            For orders, availability, or questions about our lavender farm in Tennessee, email us anytime.
          </p>

          <div className="mt-8">
            <a
              className={softButtonPrimary}
              href="mailto:jwfarms77@gmail.com?subject=JW%20Farms%20Lavender%20Question"
            >
              Email JW Farms
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
