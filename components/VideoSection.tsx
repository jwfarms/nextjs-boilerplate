export default function VideoSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl bg-purple-50 p-8 shadow-sm">
        <h2 className="text-3xl font-serif text-purple-900">
          Videos from JW Farms
        </h2>

        <p className="mt-3 max-w-3xl text-gray-700">
          Follow along with simple lavender lessons, farm updates, seasonal harvests,
          and gentle ways to use lavender at home.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="aspect-video rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
              Video Coming Soon
            </div>
            <h3 className="mt-4 font-serif text-xl text-purple-900">
              Lavender on the Farm
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Seasonal clips from our lavender fields in Cottontown, Tennessee.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="aspect-video rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
              Video Coming Soon
            </div>
            <h3 className="mt-4 font-serif text-xl text-purple-900">
              Simple Lavender Uses
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Easy ways to enjoy dried lavender, bundles, sachets, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
