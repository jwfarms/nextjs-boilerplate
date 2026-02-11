import Link from "next/link";

export const metadata = {
  title: "Sleep Support | Wellness Lookup | JW Farms",
  description:
    "Explore herbs traditionally used in gentle evening routines for sleep support. Educational reference from JW Farms.",
  alternates: {
    canonical: "https://www.jwfarms7.com/wellness-lookup/sleep-support",
  },
};

export default function SleepSupportPage() {
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
          Sleep Support
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-gray-800">
          These are gentle, traditional ideas people use in evening routines to
          support relaxation and restful wind-down. This page is educational and
          not medical advice.
        </p>

        <h2 className="text-2xl font-semibold text-purple-900 mt-10 mb-3">
          Suggested herbs
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/herbs/lavender"
            className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100 hover:ring-purple-200 transition"
          >
            <div className="font-semibold text-gray-900">Lavender</div>
            <div className="mt-1 text-sm font-semibold text-purple-700">
              Learn more →
            </div>
          </Link>
        </div>

        <h2 className="text-2xl font-semibold text-purple-900 mt-10 mb-3">
          Suggested blends
        </h2>

        <p className="text-gray-700">
          No blends linked yet. (Next we’ll add Jet Fuel Latte and other blends
          and connect them here.)
        </p>

        <h2 className="text-2xl font-semibold text-purple-900 mt-10 mb-3">
          Notes &amp; considerations
        </h2>

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-purple-100">
          <ul className="list-disc pl-6 space-y-1 text-gray-800">
            <li>
              Start small and keep it simple—especially with strongly aromatic
              herbs.
            </li>
            <li>
              If you are pregnant, breastfeeding, taking medications, or managing
              a condition, consult a qualified professional.
            </li>
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
