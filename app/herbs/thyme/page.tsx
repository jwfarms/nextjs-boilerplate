import HerbPage, { generateMetadata as genMeta } from "../[slug]/page";

export function generateMetadata() {
  return genMeta({ params: { slug: "thyme" } });
}

export default function Page() {
  return <HerbPage params={{ slug: "thyme" }} />;
}
