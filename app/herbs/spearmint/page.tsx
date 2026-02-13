import HerbPage, { generateMetadata as genMeta } from "../[slug]/page";

export function generateMetadata() {
  return genMeta({ params: { slug: "spearmint" } });
}

export default function Page() {
  return <HerbPage params={{ slug: "spearmint" }} />;
}
