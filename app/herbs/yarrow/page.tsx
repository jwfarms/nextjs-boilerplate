import HerbPage, { generateMetadata as genMeta } from "../[slug]/page";

export function generateMetadata() {
  return genMeta({ params: { slug: "yarrow" } });
}

export default function Page() {
  return <HerbPage params={{ slug: "yarrow" }} />;
}
