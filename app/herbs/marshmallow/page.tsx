import HerbPage, { generateMetadata as genMeta } from "../[slug]/page";

export function generateMetadata() {
  return genMeta({ params: { slug: "marshmallow" } });
}

export default function Page() {
  return <HerbPage params={{ slug: "marshmallow" }} />;
}
