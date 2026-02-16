
// app/print/study-book/page.tsx
import { HERBS } from "@/app/herbs/data";
import PrintColoringImage from "@/components/PrintColoringImage";

// Print-only page; don’t pre-render the whole thing at build time
export const dynamic = "force-dynamic";

// Optional: keep this out of indexing
export const metadata = {
  title: "Herbal Study + Coloring Book | JW Farms",
  robots: { index: false, follow: false },
};

type GodsGarden = {
  biblicalReference: string; // use "—" when not a biblical plant reference
  growthBehavior: string;
  medicinalAncientToToday: string;
  livingParable: string; // God-only framing
};

// ✅ If you already have this mapping in app/herbs/[slug]/page.tsx,
// you can copy it here later. For now, we generate graceful defaults
// so EVERY herb prints correctly.
const GODS_GARDEN_BY_SLUG: Record<string, Partial<GodsGarden>> = {
  // Example: mustard (if you add it to HERBS)
  mustard: {
    biblicalReference: "Matthew 13:31–32",
    growthBehavior:
      "Mustard begins as a very small seed, easily overlooked. Once established, it grows quickly and can spread across open ground. Its vigorous growth makes it difficult to remove once it has taken hold.",
    medicinalAncientToToday:
      "In traditional practice, mustard was valued as a warming herb—used in food and topical applications to encourage circulation and movement. Today, mustard seed remains widely used in culinary traditions and in classic warming folk routines.",
    livingParable:
      "God shows that what begins small can become strong once rooted. Faith grows the same way—alive, persistent, and spreading outward beyond its beginning.",
  },
};

function firstSnapshotValue(herb: any, label: string) {
  return (herb.snapshot ?? []).find((r: any) => r.label === label)?.value;
}

function buildDefaults(herb: any): GodsGarden {
  const family = firstSnapshotValue(herb, "Family");
  const partUsed = firstSnapshotValue(herb, "Part used");
  const taste = firstSnapshotValue(herb, "Taste/aroma");

  const topUses = (herb.traditionalUses ?? []).slice(0, 3);
  const prepHints: string[] = [];
  if (herb.tea) prepHints.push("tea");
  if (herb.tincture) prepHints.push("tincture");
  if (herb.capsules) prepHints.push("capsules");

  const prepLine =
    prepHints.length > 0
      ? `It is often prepared as ${prepHints.join(", ")} in traditional routines.`
      : "It is commonly prepared in simple traditional routines.";

  return {
    biblicalReference: "—",
    growthBehavior:
      `God designed ${herb.name} to flourish according to its place and season. ` +
      `${family ? `As part of the ${family}, ` : ""}` +
      `it expresses its purpose through structure, aroma, and resilience. ` +
      `${partUsed ? `The part most often used is ${partUsed}. ` : ""}` +
      `${taste ? `It is known for a ${taste.toLowerCase()} character. ` : ""}` +
      `In the garden, consistent tending shapes how a plant grows over time.`,

    medicinalAncientToToday:
      `Across household and folk traditions, ${herb.name} has been used for everyday support and seasonal routines. ` +
      (topUses.length ? `Common traditional uses include: ${topUses.join("; ")}. ` : "") +
      prepLine +
      `Today, it continues to be used in foodways and traditional herbal practice as part of simple wellness habits.`,

    livingParable:
      `God designed this plant with purpose—its form, timing, and usefulness all teach patience and stewardship. ` +
      `Small, consistent care often produces the most lasting fruit. What is tended faithfully becomes a blessing over time.`,
  };
}

export default function PrintStudyBookPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Print helpers */}
      <style>{`
        @media print {
          .break-after-page { break-after: page; page-break-after: always; }
          .no-print { display: none !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      <div className="mx-auto max-w-4xl px-10 py-12">
        {/* Cover */}
        <section className="break-after-page">
          <div className="no-print mb-6 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
            Tip: In Chrome, go to <b>File → Print</b> and choose <b>Save as PDF</b>.  
            Turn on <b>Background graphics</b> if you want borders/shading.
          </div>

          <h1 className="font-serif text-5xl font-semibold tracking-tight">
            Herbal Study &amp; Coloring Book
          </h1>
          <p className="mt-3 text-lg text-gray-700">
            A quiet, print-friendly companion—study pages and coloring pages for every herb in the JW Farms Herbal Learning Library.
          </p>

          <div className="mt-10 rounded-2xl border border-gray-200 p-6">
            <p className="text-gray-800">
              <span className="font-semibold">How to use:</span> Read one herb at a time. Reflect on how God designed each plant to grow with purpose and to serve. Then color the sketch page slowly.
            </p>
            <p className="mt-3 text-sm text-gray-600">
              Educational use only. Not medical advice.
            </p>
          </div>

          <div className="mt-10 text-sm text-gray-600">
            JW Farms • jwfarms7.com
          </div>
        </section>

        {/* Pages (Option 2): Study page + Coloring page per herb */}
        {HERBS.map((herb) => {
          const override = GODS_GARDEN_BY_SLUG[herb.slug] ?? {};
          const defaults = buildDefaults(herb);

          const godsGarden: GodsGarden = {
            biblicalReference: override.biblicalReference ?? defaults.biblicalReference,
            growthBehavior: override.growthBehavior ?? defaults.growthBehavior,
            medicinalAncientToToday:
              override.medicinalAncientToToday ?? defaults.medicinalAncientToToday,
            livingParable: override.livingParable ?? defaults.livingParable,
          };

          const coloringSrc = `/coloring/${herb.slug}.svg`;

          return (
            <div key={herb.slug}>
              {/* PAGE 1: Study */}
              <section className="break-after-page">
                <h2 className="font-serif text-4xl font-semibold">
                  {herb.name}
                </h2>
                <p className="mt-2 text-lg italic text-gray-700">
                  {herb.botanical}
                </p>

                <div className="mt-8 rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    God’s Garden
                  </h3>
                  <p className="mt-2 text-gray-700">
                    God designed <span className="font-medium">{herb.name}</span> to grow with purpose, to serve the body, and to teach through creation.
                  </p>

                  <div className="mt-6 space-y-5">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                        Scripture reference (if noted)
                      </div>
                      <div className="mt-1 text-gray-900">
                        {godsGarden.biblicalReference}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                        Growth &amp; behavior
                      </div>
                      <div className="mt-1 text-gray-900 leading-relaxed">
                        {godsGarden.growthBehavior}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                        Medicinal use (ancient → today)
                      </div>
                      <div className="mt-1 text-gray-900 leading-relaxed">
                        {godsGarden.medicinalAncientToToday}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                        Living parable
                      </div>
                      <div className="mt-1 text-gray-900 leading-relaxed">
                        {godsGarden.livingParable}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Optional mini reflection line */}
                <p className="mt-8 text-sm text-gray-700">
                  Reflection: As you study this plant, consider what patience, timing, and stewardship look like in your own life.
                </p>
              </section>

              {/* PAGE 2: Coloring */}
              <section className="break-after-page">
                <h2 className="font-serif text-4xl font-semibold">
                  {herb.name}
                </h2>
                <p className="mt-2 text-base text-gray-700">
                  Coloring Page
                </p>

                <PrintColoringImage
                  src={coloringSrc}
                  alt={`${herb.name} coloring page`}
                />

                <div className="mt-8 text-sm text-gray-600">
                  JW Farms • jwfarms7.com
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </main>
  );
}
