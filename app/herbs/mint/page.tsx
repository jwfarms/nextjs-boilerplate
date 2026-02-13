import HerbPage, { generateMetadata as genMeta } from "../[slug]/page";

export function generateMetadata() {
  return genMeta({ params: { slug: "mint" } });
}

export default function Page() {
  return <HerbPage params={{ slug: "mint" }} />;
}
