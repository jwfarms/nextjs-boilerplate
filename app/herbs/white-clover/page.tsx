import HerbPage, { generateMetadata as genMeta } from "../[slug]/page";

export function generateMetadata() {
  return genMeta({ params: { slug: "white-clover" } });
}

export default function Page() {
  return <HerbPage params={{ slug: "white-clover" }} />;
}
