import Link from "next/link";

type Props = {
  plantName: string;
  biblicalReference: string;
  growthBehavior: string;
  medicinalAncientToToday: string;
  livingParable: string;
  coloringPageSvg?: string;
  guideHref?: string;
};

export default function GodsGardenInScripture({
  plantName,
  biblicalReference,
  growthBehavior,
  medicinalAncientToToday,
  livingParable,
  coloringPageSvg,
  guideHref = "/downloadable-guides",
}: Props) {
  return (
    <section className="mt-10 rounded-2xl border border-purple-200 bg-[#fbf8ff] p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-purple-900">
        God’s Garden in Scripture
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        How God designed <span className="font-medium">{plantName}</span> to grow,
        to heal, and to teach.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-purple-900">
            Biblical Reference
          </h3>
          <p className="mt-1 text-gray-800">{biblicalReference}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-purple-900">
            Growth & Behavior
          </h3>
          <p className="mt-1 text-gray-800 leading-relaxed">{growthBehavior}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-purple-900">
            Medicinal Use (Ancient → Today)
          </h3>
          <p className="mt-1 text-gray-800 leading-relaxed">
            {medicinalAncientToToday}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-purple-900">
            Living Parable
          </h3>
          <p className="mt-1 text-gray-800 leading-relaxed">{livingParable}</p>
        </div>

        {coloringPageSvg ? (
          <div className="pt-2">
            <h3 className="text-sm font-semibold tracking-wide text-purple-900">
              Coloring Page
            </h3>
            <p className="mt-1 text-gray-700">
              Printable botanical sketch for quiet study and reflection.
            </p>
            <a
              href={coloringPageSvg}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center rounded-xl bg-purple-800 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-900"
            >
              Open {plantName} coloring page →
            </a>
          </div>
        ) : null}

        <p className="pt-2 text-sm text-gray-600">
          <Link href={guideHref} className="font-medium text-purple-800 hover:underline">
            This plant is included in our printable study &amp; coloring guide.
          </Link>
        </p>
      </div>
    </section>
  );
}
