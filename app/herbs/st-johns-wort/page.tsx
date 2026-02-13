import HerbPage, { generateMetadata as genMeta } from "../[slug]/page";

export function generateMetadata() {
  return genMeta({ params: { slug: "st-johns-wort" } });
}

export default function Page() {
  return <HerbPage params={{ slug: "st-johns-wort" }} />;
}
