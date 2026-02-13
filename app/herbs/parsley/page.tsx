import HerbPage, { generateMetadata as genMeta } from "../[slug]/page";

export function generateMetadata() {
  return genMeta({ params: { slug: "parsley" } });
}

export default function Page() {
  return <HerbPage params={{ slug: "parsley" }} />;
}
