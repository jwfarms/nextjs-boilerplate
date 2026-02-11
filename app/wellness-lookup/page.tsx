import WellnessLookupClient from "./WellnessLookupClient";
import { TOPICS } from "./data";

export const metadata = {
  title: "Wellness Lookup | JW Farms",
  description:
    "Explore wellness topics and discover herbs and blends traditionally used in simple, everyday routines. Educational reference from JW Farms.",
  alternates: { canonical: "https://www.jwfarms7.com/wellness-lookup" },
};

export default function WellnessLookupPage() {
  return (
    <main className="bg-[#f6f2fb] text-gray-800 min-h-screen">
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h1
          id="top"
          className="text-4xl md:text-5xl font-semibold text-purple-800 mb-6"
        >
          Wellness Lookup
        </h1>

        <p className="text-lg leading-relaxed mb-10 max-w-3xl">
          Explore wellness topics and see herbs and blends traditionally used in
          simple, everyday routines. This is educational information—always
          consult a qualified professional for medical advice.
        </p>

        <WellnessLookupClient topics={TOPICS} />
      </section>
    </main>
  );
}
