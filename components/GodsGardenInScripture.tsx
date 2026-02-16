import Link from "next/link";

type Props = {
  plantName: string;
  biblicalReference: string; // use "—" when not noted in scripture list
  growthBehavior: string;
  partsUsedSimple: string; // e.g. "leaf" or "leaf & root"
  medicinalAncientToToday: string;
  livingParable: string; // God-only language
  studyArtSvg?: string; // e.g. "/study-art/basil.svg" (Option 3)
  coloringPageSvg?: string; // e.g. "/coloring/basil.svg" (Option 2)
};

function MissingArt({ label, path }: { label: string; path: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-purple-300 bg-white/60 p-6 text-center">
      <div className="text-sm font-semibold text-purple-900">{label}</div>
      <div className="mt-1 text-xs text-gray-700">
        Add file at <span className="font-mono">{path}</span>
      </div>
    </div>
  );
}

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
    <section className="mt-10 rounded-2xl border border-purple-200 bg-[#fbf8ff] p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-purple-900">
        God’s Garden in Scripture
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        God designed <span className="font-medium">{plantName}</span> to grow
        with purpose, to serve the body, and to teach through creation.
      </p>

      {/* Side layout: 1/4–1/2 page study art */}
      <div className="mt-6 grid gap-6 md:grid-cols-[320px_1fr]">
        <div className="md:sticky md:top-6">
          {studyArtSvg ? (
            <img
              src={studyArtSvg}
              alt={`${plantName} study illustration`}
              className="w-full h-auto rounded-2xl bg-white p-3 ring-1 ring-purple-100"
              onError={(e) => {
                // swap to placeholder if missing
                const img = e.currentTarget;
                img.style.display = "none";
                const parent = img.parentElement;
                if (parent) {
                  const div = document.createElement("div");
                  div.innerHTML = "";
                }
              }}
            />
          ) : (
            <MissingArt label="Study illustration (Option 3)" path="/public/study-art/<slug>.svg" />
          )}

          {coloringPageSvg ? (
            <div className="mt-4">
              <a
                href={coloringPageSvg}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-purple-800 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-900"
              >
                Open coloring page →
              </a>
            </div>
          ) : (
            <div className="mt-4">
              <MissingArt label="Coloring page (Option 2)" path="/public/coloring/<slug>.svg" />
            </div>
          )}
        </div>

        <div className="space-y-5">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-purple-900">
              Scripture reference (if noted)
            </div>
            <div className="mt-1 text-gray-900">{biblicalReference}</div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-purple-900">
              Growth &amp; behavior
            </div>
            <div className="mt-1 text-gray-900 leading-relaxed">
              {growthBehavior}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-purple-900">
              Parts of the plant used
            </div>
            <div className="mt-1 text-gray-900">
              <span className="font-medium">Parts used:</span> {partsUsedSimple}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-purple-900">
              Medicinal use (ancient → today)
            </div>
            <div className="mt-1 text-gray-900 leading-relaxed">
              {medicinalAncientToToday}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-purple-900">
              Living parable
            </div>
            <div className="mt-1 text-gray-900 leading-relaxed">
              {livingParable}
            </div>
          </div>

          <p className="pt-2 text-xs text-gray-600">
            Educational use only. Not medical advice.
          </p>

          <p className="text-xs text-gray-600">
            <Link href="/downloadable-guides" className="font-medium text-purple-800 hover:underline">
              Browse printable guides →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
