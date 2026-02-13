// app/herbs/echinacea/page.tsx

import HerbPage, {
  generateMetadata as genMeta,
} from "../[slug]/page";

// We are explicitly locking this route to a known slug
export const dynamicParams = false;

// Reuse the dynamic metadata generator
export function generateMetadata() {
  return genMeta({ params: { slug: "echinacea" } });
}

// Render the dynamic HerbPage with a fixed slug
export default function Page() {
  return <HerbPage params={{ slug: "echinacea" }} />;
}
