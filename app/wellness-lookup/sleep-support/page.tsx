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
            </di

