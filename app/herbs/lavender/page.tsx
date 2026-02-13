import HerbPage, { generateMetadata as genMeta } from "../[slug]/page";

export const dynamicParams = false;

export function generateMetadata() {
  return genMeta({ params: { slug: "lavender" } });
}

export default function Page() {
  return <HerbPage params={{ slug: "lavender" }} />;
}
