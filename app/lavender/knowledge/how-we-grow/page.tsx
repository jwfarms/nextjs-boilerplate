export const metadata = {
  title: "How We Grow Lavender at JW Farms | Knowledge Hub",
  description:
    "An honest, practical look at how JW Farms grows lavender—variety selection, sun, soil, watering, pruning, harvesting, and drying.",
};

export default function HowWeGrowLavenderPage() {
  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-800">
      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex gap-4 text-sm font-medium">
          <a
            href="/"
            className="text-[#6b4fa3] hover:underline"
          >
            JW Farms
          </a>
          <span className="text-gray-500">/</span>
          <a
            href="/lavender/knowledge"
            className="text-[#6b4fa3] hover:underline"
          >
            Knowledge Hub
          </a>
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight">
          How We Grow Lavender at JW Farms
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          At JW Farms, lavender isn’t grown quickly or aggressively. It’s grown{" "}
          <strong>carefully</strong>, with attention to soil, climate, and
          timing. We’re a small family-owned lavender farm in Tennessee, and
          everything we grow reflects what actually works here—not what just
          sounds good in theory.
        </p>

        <hr className="my-10 border-black/10" />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Choosing the right lavender</h2>
          <p className="leading-relaxed text-gray-700">
            One of the biggest mistakes people make with lavender is choosing
            the wrong type. Not all lavender thrives in humid climates. We
            select varieties that handle heat and humidity, develop strong root
            systems, and produce reliable fragrance and buds.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">Sun comes first</h2>
          <p className="leading-relaxed text-gray-700">
            Lavender is not a shade plant. Our fields receive full sun—ideally 6
            to 8 hours per day—with open airflow to reduce moisture buildup.
            Sun is more important than fertilizer. Always.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">Soil matters more than water</h2>
          <p className="leading-relaxed text-gray-700">
            Lavender doesn’t like “rich” soil. We focus on excellent drainage
            and well-aerated soil. Heavy or compacted soil is the fastest way to
            kill lavender—if water can’t drain quickly, roots rot. We amend soil
            for structure, not nutrients.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">Watering: less is more</h2>
          <p className="leading-relaxed text-gray-700">
            Lavender prefers deep, infrequent watering. Young plants are watered
            to establish roots. Mature plants are watered sparingly. Overwatering
            causes more problems than underwatering. Once established, lavender
            is remarkably resilient.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">Pruning for health, not speed</h2>
          <p className="leading-relaxed text-gray-700">
            We prune to maintain shape, improve airflow, and prevent the plant
            from turning overly woody. Timing matters. Cutting too much, too
            late, or too early can stress the plant—especially in humid climates.
            Patience extends a lavender plant’s life by years.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">Harvesting at the right moment</h2>
          <p className="leading-relaxed text-gray-700">
            Lavender is harvested when buds are formed, color is strong, and
            fragrance is at its peak. Too early reduces scent. Too late reduces
            quality. We harvest by watching the plants—not the calendar.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">Drying lavender the right way</h2>
          <p className="leading-relaxed text-gray-700">
            We dry lavender slowly and naturally—out of direct sunlight, in a
            well-ventilated space, with careful spacing to prevent mold. Rushing
            the drying process ruins fragrance and color. Good lavender takes
            time, even after harvest.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">Why we grow lavender this way</h2>
          <p className="leading-relaxed text-gray-700">
            We grow lavender this way because it produces better fragrance,
            plants live longer, quality stays consistent, and nothing is forced.
            Lavender teaches patience—and we’re happy to share what it’s taught us.
          </p>
        </section>

        <div className="mt-12 rounded-2xl bg-white/80 border border-[#6b4fa3]/10 p-6">
          <h3 className="text-lg font-semibold">Next up</h3>
          <p className="mt-2 text-gray-700">
            Want us to publish a guide next? We’re planning beginner mistakes,
            harvesting, drying, pruning, and a seasonal care calendar.
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
