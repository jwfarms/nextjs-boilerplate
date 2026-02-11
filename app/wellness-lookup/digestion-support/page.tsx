import Link from "next/link";

export const metadata = {
  title: "Digestion Support | Wellness Lookup | JW Farms",
  description:
    "Explore herbs traditionally used in simple routines for digestion support. Educational reference from JW Farms.",
  alternates: {
    canonical: "https://www.jwfarms7.com/wellness-lookup/digestion-support",
  },
};

export default function DigestionSupportPage() {
  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/wellness-lookup"
          className="text-sm font-medium text-purple-800 hover:underline"
        >
          ← Back to Wellness Lookup
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-purple-950">
          Digestion Support
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-gray-800">
          Traditional household herbs and routines often used for post-meal
          comfort and everyday digestive support. Educational only.
        </p>

        <h2 className="text-2xl font-semibold text-purple-900 mt-10 mb-3">
          Suggested herbs
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/herbs/basil"
            className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100 hover:ring-purple-200 transition"
          >
            <div className="font-semibold text-gray-900">Basil</div>
            <div className="mt-1 text-sm font-semibold text-purple-700">
              Learn more →
            </div>
          </Link>
        </div>

        <h2 className="text-2xl font-semibold text-purple-900 mt-10 mb-3">
          Suggested blends
        </h2>

        <p className="text-gray-700">No blends linked yet.</p>

        <h2 className="text-2xl font-semibold text-purple-900 mt-10 mb-3">
          Notes &amp; considerations
        </h2>

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100">
          <ul className="list-disc pl-6 space-y-1 text-gray-800">
            <li>Traditional use is not the same as proven medical treatment.</li>
            <li>Consult a qualified professional for medical advice.</li>
            <li>
              These statements have not been evaluated by the FDA. Educational
              only.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
