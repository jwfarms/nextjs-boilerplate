import HerbPage, { generateMetadata as genMeta } from "../[slug]/page";

export function generateMetadata() {
  return genMeta({ params: { slug: "peppermint" } });
}

export default function Page() {
  return <HerbPage params={{ slug: "peppermint" }} />;
}
