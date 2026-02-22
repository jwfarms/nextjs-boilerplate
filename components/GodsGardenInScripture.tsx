import Link from "next/link";

type Props = {
  plantName: string;
  biblicalReference: string;
  growthBehavior: string;
  partsUsedSimple: string;
  medicinalAncientToToday: string;
  livingParable: string;
  studyArtSvg?: string; // /study-art/<slug>.svg
  coloringPageSvg?: string; // /coloring/<slug>.svg
};

export default function GodsGardenInScripture({
  plantName,
  biblicalReference,
  growthBehavior,
  partsUsedSimple,
  medicinalAncientToToday,
  livingParable,
  studyArtSvg,
  coloringPageSvg,
}: Props) {
  return (
    <section className="mt-10">
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-purple-100">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <h2 className="text-2xl font-semibold text-purple-900">
            God&apos;s Garden in Scripture
          </h2>

          <div className="text-sm text-gray-600">
            <span className="font-medium text-gray-700">Biblical reference:</span>{" "}
            {biblicalReference || "—"}
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-[#f6f2fb] p-4">
            <div className="text-xs uppercase tracking-wide text-gray-600">
              Growth behavior
            </div>
            <p className="mt-2 text-gray-800 leading-relaxed">{growthBehavior}</p>
          </div>

          <div className="rounded-xl bg-[#f6f2fb] p-4">
            <div className="text-xs uppercase tracking-wide text-gray-600">
              Parts used
            </div>
            <p className="mt-2 text-gray-800 leading-relaxed">{partsUsedSimple}</p>
          </div>

          <div className="rounded-xl bg-[#f6f2fb] p-4 md:col-span-2">
            <div className="text-xs uppercase tracking-wide text-gray-600">
              Medicinal (ancient to today)
            </div>
            <p className="mt-2 text-gray-800 leading-relaxed">
              {medicinalAncientToToday}
            </p>
          </div>

          <div className="rounded-xl bg-[#f6f2fb] p-4 md:col-span-2">
            <div className="text-xs uppercase tracking-wide text-gray-600">
              Living parable
            </div>
            <p className="mt-2 text-gray-800 leading-relaxed">{livingParable}</p>
          </div>
        </div>

        {(studyArtSvg || coloringPageSvg) ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {studyArtSvg ? (
              <div className="rounded-2xl border border-purple-100 overflow-hidden bg-white">
                <div className="p-4 border-b border-purple-100">
                  <div className="font-semibold text-purple-900">
                    Study Art (SVG)
                  </div>
                  <div className="text-sm text-gray-600">
                    Printable reference art.
                  </div>
                </div>

                <div className="p-4">
                  <img
                    src={studyArtSvg}
                    alt={`${plantName} study art`}
                    className="w-full h-auto"
                    loading="lazy"
                  />

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={studyArtSvg}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-purple-800 text-white hover:bg-purple-900"
                    >
                      Open SVG
                    </a>

                    <a
                      href={studyArtSvg}
                      download
                      className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-purple-200 text-purple-900 hover:bg-purple-50"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ) : null}

            {coloringPageSvg ? (
              <div className="rounded-2xl border border-purple-100 overflow-hidden bg-white">
                <div className="p-4 border-b border-purple-100">
                  <div className="font-semibold text-purple-900">
                    Coloring Page (SVG)
                  </div>
                  <div className="text-sm text-gray-600">
                    Line art for coloring.
                  </div>
                </div>

                <div className="p-4">
                  <img
                    src={coloringPageSvg}
                    alt={`${plantName} coloring page`}
                    className="w-full h-auto"
                    loading="lazy"
                  />

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={coloringPageSvg}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-purple-800 text-white hover:bg-purple-900"
                    >
                      Open SVG
                    </a>

                    <a
                      href={coloringPageSvg}
                      download
                      className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-purple-200 text-purple-900 hover:bg-purple-50"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="mt-6">
          <Link
            href="/downloadable-guides"
            className="text-sm font-medium text-[#6b4fa3] hover:underline"
          >
            Browse Downloadable Guides →
          </Link>
        </div>
      </div>
    </section>
  );
}
