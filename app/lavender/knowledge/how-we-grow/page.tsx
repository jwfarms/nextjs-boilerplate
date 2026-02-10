import Link from "next/link";

export const metadata = {
  title: "How We Grow Lavender at JW Farms | Lavender Knowledge Hub",
  description:
    "An honest, practical look at how JW Farms grows lavender—variety selection, sun, soil, watering, pruning, harvesting, and drying.",
  alternates: {
    canonical: "https://www.jwfarms7.com/lavender/knowledge/how-we-grow",
  },
};

export default function HowWeGrowLavenderPage() {
  // Shared heading + button styles (matches landing & hub)
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

        {/* Page header */}
        <h1 className="mt-6 font-serif font-medium tracking-tight text-slate-900 text-4xl md:text-6xl leading-[1.05]">
          How We Grow Lavender at JW Farms
        </h1>

        <p className="mt-5 text-lg md:text-xl leading-relaxed text-gray-700">
          At JW Farms, lavender isn’t grown quickly or aggressively. It’s grown{" "}
          <strong>carefully</strong>, with attention to soil, climate, and timing.
          We’re a small family-owned lavender farm in Tennessee, and everything
          we grow reflects what actually works here—not what just sounds good in
          theory.
        </p>

        <hr className="my-12 border-black/10" />

        {/* Content sections */}
        <div className="space-y-12">
          <section className="space-y-3">
            <h2 className={sectionHeading}>Choosing the right lavender</h2>
            <p className="leading-relaxed text-gray-700">
              One of the biggest mistakes people make with lavender is choosing
              the wrong type. Not all lavender thrives in humid climates. We
              select varieties that handle heat and humidity, develop strong
              root systems, and produce reliable fragrance and buds.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={sectionHeading}>Sun comes first</h2>
            <p className="leading-relaxed text-gray-700">
              Lavender is not a shade plant. Our fields receive full sun—ideally
              6 to 8 hours per day—with open airflow to reduce moisture buildup.
              Sun is more important than fertilizer. Always.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={sectionHeading}>Soil matters more than water</h2>
            <p className="leading-relaxed text-gray-700">
              Lavender doesn’t like “rich” soil. We focus on excellent drainage
              and well-aerated soil. Heavy or compacted soil is the fastest way
              to kill lavender—if water can’t drain quickly, roots rot. We amend
              soil for structure, not nutrients.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={sectionHeading}>Watering: less is more</h2>
            <p className="leading-relaxed text-gray-700">
              Lavender prefers deep, infrequent watering. Young plants are
              watered to establish roots. Mature plants are watered sparingly.
              Overwatering causes more problems than underwatering. Once
              established, lavender is remarkably resilient.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={sectionHeading}>Pruning for health, not speed</h2>
            <p className="leading-relaxed text-gray-700">
              We prune to maintain shape, improve airflow, and prevent the plant
              from turning overly woody. Timing matters. Cutting too much, too
              late, or too early can stress the plant—especially in humid
              climates. Patience extends a lavender plant’s life by years.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={sectionHeading}>Harvesting at the right moment</h2>
            <p className="leading-relaxed text-gray-700">
              Lavender is harvested when buds are formed, color is strong, and
              fragrance is at its peak. Too early reduces scent. Too late reduces
              quality. We harvest by watching the plants—not the calendar.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={sectionHeading}>Drying lavender the right way</h2>
            <p className="leading-relaxed text-gray-700">
              We dry lavender slowly and naturally—out of direct sunlight, in a
              well-ventilated space, with careful spacing to prevent mold.
              Rushing the drying process ruins fragrance and color. Good lavender
              takes time, even after harvest.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={sectionHeading}>Why we grow lavender this way</h2>
            <p className="leading-relaxed text-gray-700">
              We grow lavender this way because it produces better fragrance,
              plants live longer, quality stays consistent, and nothing is
              forced. Lavender teaches patience—and we’re happy to share what
              it’s taught us.
            </p>
          </section>
        </div>

        {/* CTA card */}
        <div className={`mt-14 ${softCard} p-7 md:p-8`}>
          <h3 className="font-serif font-medium text-xl md:text-2xl text-slate-900">
            Next up
          </h3>
          <p className="mt-2 text-gray-700 leading-relaxed">
            Want us to publish a guide next? We’re planning beginner mistakes,
            harvesting, drying, pruning, and a seasonal care calendar.
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
