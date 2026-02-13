import HerbPage, { generateMetadata as genMeta } from "../[slug]/page";

export function generateMetadata() {
  return genMeta({ params: { slug: "dandelion" } });
}

export default function Page() {
  return <HerbPage params={{ slug: "dandelion" }} />;
}
