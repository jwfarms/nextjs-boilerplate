export const metadata = {
  title: "Lavender Farm in Tennessee | JW Farms",
  description:
    "JW Farms is a small lavender farm in Tennessee, growing and harvesting lavender using traditional, small-farm practices focused on quality and care.",
  alternates: {
    canonical: "https://www.jwfarms7.com/lavender-farm-tennessee",
  },
};


export default function LavenderFarmTennesseePage() {
  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-800">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-purple-800">
          Lavender Farm in Tennessee
        </h1>

        <p className="text-lg mb-4">
          JW Farms (also known as JW Farms 7) is a small, family-owned lavender
          farm located in Tennessee. We grow and harvest lavender using
          small-batch, seasonal practices with a strong focus on quality
          and care.
        </p>

        <p className="mb-4">
          Our lavender is grown for culinary use, crafts, sachets, garden
          planting, and aromatic purposes. Depending on the season, we offer
          dried lavender buds, fresh bundles, lavender plants, and plug trays.
        </p>

        <p className="mb-6">
          We serve customers throughout Tennessee and ship select products
          nationwide. All orders and availability inquiries are handled
          by email.
        </p>

        <p className="font-semibold text-purple-700">
          📧 Email us to ask about availability:{" "}
          <a
            href="mailto:jwfarms77@gmail.com"
            className="underline hover:text-purple-900"
          >
            jwfarms77@gmail.com
          </a>
        </p>

        <div className="mt-10">
          <a
            href="/"
            className="text-purple-700 underline hover:text-purple-900"
          >
            ← Back to JW Farms
          </a>
        </div>
      </div>
    </main>
  );
}
