import HerbPage, { generateMetadata as genMeta } from "../[slug]/page";

export function generateMetadata() {
  return genMeta({ params: { slug: "basil" } });
}

export default function Page() {
  return <HerbPage params={{ slug: "basil" }} />;
}
