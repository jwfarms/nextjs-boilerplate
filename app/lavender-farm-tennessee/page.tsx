export const metadata = {
  title: "Lavender Farm in Tennessee | JW Farms",
  description:
    "JW Farms is a small, family-owned lavender farm in Tennessee (Cottontown / North Nashville). Learn how we grow, harvest, dry, and use lavender with traditional small-farm practices.",
  alternates: {
    canonical: "https://www.jwfarms7.com/lavender-farm-tennessee",
  },
};

export default function LavenderFarmTennesseePage() {
  // Optional: page-specific structured data (helps local SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.jwfarms7.com/#business",
    name: "JW Farms",
    alternateName: "JW Farms 7",
    url: "https://www.jwfarms7.com/",
    image: "https://www.jwfarms7.com/gallery/tennessee-lavender-field-jw-farms.png",
    description:
      "JW Farms is a small, family-owned lavender farm in Tennessee serving Cottontown and the North Nashville area. We grow and harvest lavender with care and offer buds, bundles, plants, and plug trays by email order.",
    email: "jwfarms77@gmail.com",
    sameAs: ["https://jwfarms.blogspot.com/"],
    areaServed: [
      { "@type": "Place", name: "Cottontown, TN" },
      { "@type": "Place", name: "North Nashville, TN" },
      { "@type": "AdministrativeArea", name: "Tennessee" },
      { "@type": "Country", name: "United States" },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <p className="text-sm font-semibold text-purple-800/80 tracking-wide">
          Tennessee Lavender Farm
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-purple-800">
          JW Farms Lavender Farm in Tennessee
        </h1>

        <p className="mt-6 text-lg leading-relaxed max-w-3xl text-gray-700">
          JW Farms (also known as JW Farms 7) is a small, family-owned lavender
          farm serving the{" "}
          <span className="font-semibold">Cottontown / North Nashville</span>{" "}
          area of Tennessee. We grow lavender with care, harvest by hand, and
          handle everything in small batches — the traditional way.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:jwfarms77@gmail.com?subject=Lavender%20Inquiry"
            className="inline-block bg-purple-700 hover:bg-purple-800 text-white rounded-xl px-7 py-3 font-semibold transition-all duration-200 hover:scale-[1.02]"
          >
            Email JW Farms
          </a>

          <a
            href="/lavender/knowledge"
            className="inline-block bg-white/80 hover:bg-white text-purple-800 rounded-xl px-7 py-3 font-semibold border border-purple-200 transition-all duration-200 hover:scale-[1.02]"
          >
            Visit the Knowledge Hub
          </a>
        </div>

        <div className="mt-10 rounded-2xl overflow-hidden shadow-md bg-white">
          <img
            src="/gallery/tennessee-lavender-field-jw-farms.png"
            alt="Lavender field at JW Farms in Tennessee"
            className="w-full h-72 object-cover"
          />
        </div>
      </section>

      {/* Local + What we offer */}
      <section className="py-16 px-6 bg-white border-t border-purple-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-800">
              A small lavender farm serving Tennessee
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We’re based in the{" "}
              <span className="font-semibold">Cottontown / North Nashville</span>{" "}
              region. We don’t publish a street address online — instead, we
              serve customers through clear communication and simple ordering by
              email.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If you’re looking for lavender buds, bundles, plants, or plug trays,
              email us and we’ll help with availability, timing, and shipping.
            </p>

            <p className="mt-6">
              <a
                href="/"
                className="font-semibold text-purple-700 underline hover:text-purple-900"
              >
                Return to JW Farms homepage →
              </a>
            </p>
          </div>

          <div className="bg-[#f6f2fb] rounded-2xl p-6 border border-purple-100">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">
              What we offer
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Dried lavender buds (culinary & home use)</li>
              <li>• Fresh bundles (harvest season)</li>
              <li>• Lavender plants (seasonal)</li>
              <li>• Lavender plug trays for growers (seasonal)</li>
            </ul>

            <a
              href="/#products"
              className="inline-block mt-6 bg-purple-700 hover:bg-purple-800 text-white rounded-xl px-6 py-3 font-semibold transition-all duration-200 hover:scale-[1.02]"
            >
              View Products on the Homepage
            </a>
          </div>
        </div>
      </section>

      {/* How we grow */}
      <section className="py-16 px-6 bg-[#f6f2fb] border-t border-purple-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-800">
            How we grow lavender at JW Farms
          </h2>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Small-batch care",
                text:
                  "We focus on healthy plants, good airflow, and careful timing rather than rushing growth.",
              },
              {
                title: "Hand-harvested",
                text:
                  "Lavender is harvested by hand for quality and to protect the plant for the next season.",
              },
              {
                title: "Thoughtful handling",
                text:
                  "We dry and store lavender carefully so aroma and color stay strong as long as possible.",
              },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-gray-700 leading-relaxed">
            Want deeper guidance? Visit our{" "}
            <a
              href="/lavender/knowledge"
              className="font-semibold text-purple-700 underline hover:text-purple-900"
            >
              Lavender Knowledge Hub
            </a>{" "}
            for step-by-step help.
          </p>
        </div>
      </section>

      {/* FAQ (great for SEO) */}
      <section className="py-16 px-6 bg-white border-t border-purple-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-800">
            Frequently asked questions
          </h2>

          <div className="mt-8 space-y-6">
            {[
              {
                q: "Where is JW Farms located in Tennessee?",
                a:
                  "We serve the Cottontown / North Nashville area of Tennessee. For ordering and details, email us and we’ll respond with what you need.",
              },
              {
                q: "Do you ship lavender?",
                a:
                  "Yes—shipping depends on the product and season. Email us your location and what you’re looking for, and we’ll confirm options.",
              },
              {
                q: "When are bundles, plants, and plugs available?",
                a:
                  "Those items are seasonal and vary year to year based on growing conditions. Email us and we’ll share current timing and availability.",
              },
              {
                q: "How do I place an order?",
                a:
                  "All orders are placed by email. Tell us what you want and your shipping location, and we’ll reply with availability and next steps.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#f6f2fb] rounded-2xl p-6 border border-purple-100">
                <h3 className="font-semibold text-gray-900 text-lg">{item.q}</h3>
                <p className="mt-2 text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white rounded-2xl shadow-sm p-6 border border-purple-100">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">
              Want printable how-to guides?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our downloadable guides are designed to be simple, practical
              references you can return to anytime.
            </p>
            <a
              href="/downloadable-guides"
              className="inline-block mt-4 bg-purple-700 hover:bg-purple-800 text-white rounded-xl px-6 py-3 font-semibold transition-all duration-200 hover:scale-[1.02]"
            >
              Go to Downloadable Guides
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 text-center bg-[#f6f2fb] border-t border-purple-100">
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-800">
          Contact JW Farms
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto leading-relaxed">
          For orders, availability, or questions about our lavender farm in
          Tennessee, email us anytime.
        </p>
        <a
          href="mailto:jwfarms77@gmail.com?subject=Lavender%20Inquiry"
          className="inline-block mt-6 bg-purple-700 hover:bg-purple-800 text-white rounded-xl px-8 py-3 font-semibold transition-all duration-200 hover:scale-[1.02]"
        >
          Email JW Farms
        </a>
      </section>
    </main>
  );
}
