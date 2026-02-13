import HerbPage, { generateMetadata as genMeta } from "../[slug]/page";

export function generateMetadata() {
  return genMeta({ params: { slug: "oregano" } });
}

export default function Page() {
  return <HerbPage params={{ slug: "oregano" }} />;
}
