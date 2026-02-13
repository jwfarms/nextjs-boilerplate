import HerbPage, { generateMetadata as genMeta } from "../[slug]/page";

export const dynamicParams = false;

export function generateMetadata() {
  return genMeta({ params: { slug: "chamomile" } });
}

export default function Page() {
  return <HerbPage params={{ slug: "chamomile" }} />;
