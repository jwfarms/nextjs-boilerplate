import WellnessTopicPage from "../WellnessTopicPage";

export const metadata = {
  title: "Digestion Support | Wellness Lookup | JW Farms",
  description:
    "Explore herbs and blends traditionally used in simple routines for digestion support. Educational reference from JW Farms.",
  alternates: {
    canonical: "https://www.jwfarms7.com/wellness-lookup/digestion-support",
  },
};

export default function Page() {
  return <WellnessTopicPage slug="digestion-support" />;
}
