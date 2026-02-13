import HerbPage, { generateMetadata as genMeta } from "../[slug]/page";

export function generateMetadata() {
  return genMeta({ params: { slug: "dill" } });
}

export default function Page() {
  return <HerbPage params={{ slug: "dill" }} />;
}
