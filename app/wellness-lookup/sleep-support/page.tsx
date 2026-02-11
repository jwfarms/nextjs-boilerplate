import WellnessTopicPage from "../WellnessTopicPage";

export const metadata = {
  title: "Sleep Support | Wellness Lookup | JW Farms",
  description:
    "Explore herbs and blends traditionally used in simple evening routines for sleep support. Educational reference from JW Farms.",
  alternates: {
    canonical: "https://www.jwfarms7.com/wellness-lookup/sleep-support",
  },
};

export default function Page() {
  return <WellnessTopicPage slug="sleep-support" />;
}
