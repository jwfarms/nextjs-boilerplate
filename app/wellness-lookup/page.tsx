import WellnessLookupClient from "./WellnessLookupClient";

export const metadata = {
  title: "Wellness Lookup | JW Farms",
  description:
    "Explore wellness topics and discover herbs and blends traditionally used in simple, everyday routines. Educational reference from JW Farms.",
  alternates: {
    canonical: "https://www.jwfarms7.com/wellness-lookup",
  },
};

const AILMENTS = [
  {
    title: "Digestion Support",
    slug: "digestion-support",
    summary:
      "Traditional routines and herbs often used for post-meal comfort and everyday digestive support.",
    tags: ["digestion", "after meals", "comfort"],
    herbs: ["basil"],
    blends: [],
  },
  {
    title: "Head Comfort",
    slug: "head-comfort",
    summary:
      "Wellness routines people often use during occasional head tension or stress.",
    tags: ["head", "tension", "routine"],
    herbs: ["lavender", "peppermint"],
    blends: [],
  },
  {
    title: "Seasonal Support",
    slug: "seasonal-support",
    summary:
      "Traditional wellness habits people use during seasonal transitions.",
    tags: ["seasonal", "routine", "wellness"],
    herbs: ["lavender", "mint"],
    blends: [],
  },
  {
    title: "Sleep Support",
    slug: "sleep-support",
    summary:
      "Gentle evening routines and calming herbs traditionally used for a restful wind-down.",
    tags: ["sleep", "calm", "evening"],
    herbs: ["lavender"],
    blends: [],
  },
  {
    title: "Stress Support",
    slug: "stress-support",
    summary:
      "Aromatic and relaxing routines traditionally used during occasional stress.",
    tags: ["stress", "calm", "relaxation"],
    herbs: ["lavender"],
    blends: [],
  },
  {
    title: "Skin Comfort",
    slug: "skin-comfort",
    summary:
      "Traditional household herbal routines often used for general skin comfort.",
    tags: ["skin", "comfort", "routine"],
    herbs: ["lavender"],
    blends: [],
  },
];

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

        <WellnessLookupClient ailments={AILMENTS} />
      </section>
    </main>
  );
}
