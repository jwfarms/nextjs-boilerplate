"use client";

import Image from "next/image";
import Link from "next/link";

import InstallApp from "@/components/InstallApp";

export default function Home() {
  // ✅ Combined LocalBusiness + Product schema (JSON-LD)
  // - Service-area safe (no street address)
  // - Geo-targeted to Cottontown / North Nashville, TN
  // - Products included as an ItemList
  const jwFarmsJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.jwfarms7.com/#business",
      name: "JW Farms",
      alternateName: "JW Farms 7",
      url: "https://www.jwfarms7.com/",
      // ✅ updated to match your renamed image in /public/gallery
      image:
        "https://www.jwfarms7.com/gallery/tennessee-lavender-field-jw-farms.png",
      description:
        "JW Farms is a small, family-owned lavender farm in Cottontown (North Nashville), Tennessee. We grow and harvest lavender with care and offer buds, bundles, plants, and plug trays. Serving local customers and shipping nationwide by email order.",
      email: "jwfarms77@gmail.com",
      sameAs: ["https://jwfarms.blogspot.com/"],
      areaServed: [
        { "@type": "Place", name: "Cottontown, TN" },
        { "@type": "Place", name: "North Nashville, TN" },
        { "@type": "AdministrativeArea", name: "Tennessee" },
        { "@type": "Country", name: "United States" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": "https://www.jwfarms7.com/#products-list",
      name: "JW Farms Lavender Products",
      url: "https://www.jwfarms7.com/#products",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Product",
            "@id": "https://www.jwfarms7.com/#product-lavender-buds",
            name: "Lavender Buds (2 oz)",
            description: "Culinary-grade dried lavender buds • 2 oz bag.",
            brand: { "@type": "Brand", name: "JW Farms" },
            // ✅ updated to match your renamed image in /public/products
            image: [
              "https://www.jwfarms7.com/products/lavender-buds-jw-farms-tennessee.png",
            ],
            url: "https://www.jwfarms7.com/#products",
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "9.99",
              availability: "https://schema.org/InStock",
              url: "https://www.jwfarms7.com/#products",
              seller: { "@id": "https://www.jwfarms7.com/#business" },
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Product",
            "@id": "https://www.jwfarms7.com/#product-fresh-bundles",
            name: "Fresh Lavender Bundles",
            description:
              "Fresh lavender bundles • 10–15 stems per bundle (harvest season only).",
            brand: { "@type": "Brand", name: "JW Farms" },
            // ✅ updated to match your renamed image in /public/products
            image: [
              "https://www.jwfarms7.com/products/fresh-lavender-bundles-jw-farms-tennessee.png",
            ],
            url: "https://www.jwfarms7.com/#products",
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "12.0",
              availability: "https://schema.org/LimitedAvailability",
              url: "https://www.jwfarms7.com/#products",
              seller: { "@id": "https://www.jwfarms7.com/#business" },
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Product",
            "@id": "https://www.jwfarms7.com/#product-lavender-plants",
            name: "Lavender Plants (quart-size)",
            description:
              "Lavender plants in a quart-size pot (seasonal availability).",
            brand: { "@type": "Brand", name: "JW Farms" },
            // ✅ updated to match your renamed image in /public/products
            image: [
              "https://www.jwfarms7.com/products/lavender-plants-jw-farms-tennessee.png",
            ],
            url: "https://www.jwfarms7.com/#products",
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "15.0",
              availability: "https://schema.org/LimitedAvailability",
              url: "https://www.jwfarms7.com/#products",
              seller: { "@id": "https://www.jwfarms7.com/#business" },
            },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Product",
            "@id": "https://www.jwfarms7.com/#product-72-plugs",
            name: "Lavender Tray – 72 Plugs",
            description:
              "Commercial plug tray • 72 lavender plugs (seasonal availability).",
            brand: { "@type": "Brand", name: "JW Farms" },
            // ✅ updated to match your renamed image in /public/products
            image: [
              "https://www.jwfarms7.com/products/lavender-plug-tray-72-jw-farms-tennessee.png",
            ],
            url: "https://www.jwfarms7.com/#products",
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "130.0",
              availability: "https://schema.org/LimitedAvailability",
              url: "https://www.jwfarms7.com/#products",
              seller: { "@id": "https://www.jwfarms7.com/#business" },
            },
          },
        },
      ],
    },
  ];

  // Reusable heading style for the landing page sections (soft serif)
  const sectionHeading =
    "font-serif font-medium text-3xl md:text-4xl text-purple-700 text-center tracking-tight";

  // ✅ ONE shared button system (so every button matches)
  const softButtonBase =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 " +
    "font-serif font-medium text-[17px] shadow-sm transition-all duration-200 " +
    "hover:shadow-md hover:-translate-y-[1px]";

  const softButtonPrimary =
    softButtonBase + " bg-purple-700/90 text-white hover:bg-purple-700";

  const softButtonSecondary =
    softButtonBase +
    " bg-white/80 text-purple-800 border border-purple-200 backdrop-blur hover:bg-white";

  const softButtonTertiary =
    softButtonBase +
    " bg-purple-50/70 text-purple-800 border border-purple-200 backdrop-blur hover:bg-purple-50";

  // For slightly smaller buttons inside product cards
  const softButtonSmall =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 " +
    "font-serif font-medium text-[16px] shadow-sm transition-all duration-200 " +
    "hover:shadow-md hover:-translate-y-[1px]";

  const softButtonSmallSecondary =
    softButtonSmall +
    " bg-purple-50/70 text-purple-800 border border-purple-200 backdrop-blur hover:bg-white";

  return (
    <div className="min-h-screen bg-[#f6f2fb] text-gray-800">
      {/* ✅ JSON-LD goes ONCE, near the top */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jwFarmsJsonLd) }}
      />
      <InstallApp />

      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur shadow-sm z-50 px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/jwfarms7-logo.png"
            alt="JW Farms 7"
            width={72}
            height={72}
            priority
            className="rounded-full"
          />
        </Link>

        <nav className="flex gap-4 text-[15px] font-medium text-slate-700">
          <a href="/lavender" className="hover:text-purple-700">
            Lavender
          </a>
          <a href="/lavender/knowledge" className="hover:text-[#6b4fa3]">
            Knowledge Hub
          </a>

          <a href="#benefits" className="hover:text-purple-700">
            Benefits
          </a>

          <a href="/downloadable-guides" className="hover:text-purple-700">
            Downloadable Guides
          </a>

          <a href="/herbal-learning-library" className="hover:text-purple-700">
            Herbal Learning Library
          </a>

          <a href="#products" className="hover:text-purple-700">
            Products
          </a>
          <a href="#about" className="hover:text-purple-700">
            About
          </a>
          <a href="#faq" className="hover:text-purple-700">
            FAQ
          </a>
          <a href="#gallery" className="hover:text-purple-700">
            Gallery
          </a>
          <a href="#contact" className="hover:text-purple-700">
            Contact
          </a>
          <a href="/lavender-farm-tennessee" className="hover:text-purple-700">
            Tennessee Lavender Farm
          </a>

          <a
            href="https://jwfarms.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-700"
          >
            Blog
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        className="relative py-28 px-6 text-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1445510491599-c391e8046a68?auto=format&fit=crop&w=2400&q=80')",
        }}
      >
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-white/60" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <Image
            src="/logo/jwfarms7-logo.png"
            alt="JW Farms 7"
            width={160}
            height={160}
            priority
            className="mb-6 rounded-full bg-white/80 p-2 shadow-lg"
          />

          <h1 className="font-serif font-medium tracking-tight text-slate-900 mb-4 drop-shadow-sm text-4xl md:text-6xl leading-[1.05] text-center">
            Pure Lavender, Naturally Grown
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-800 mb-4 leading-relaxed">
            JW Farms (JW Farms 7) is a small, family-owned lavender farm in
            Tennessee.
            <br />
            Hand-harvested lavender, available by email order.
          </p>

          <p className="text-sm md:text-base text-gray-700">
            🌿 Family-owned <span className="mx-2">•</span> 🇺🇸 Grown in the USA{" "}
            <span className="mx-2">•</span> 📧 Email-only ordering
          </p>

          {/* ✅ Matching hero buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className={softButtonPrimary}>
              View Products
            </a>

            <a href="#contact" className={softButtonSecondary}>
              Email to Order
            </a>

            <a href="#benefits" className={softButtonTertiary}>
              Explore Benefits
            </a>
          </div>
        </div>
      </section>

      {/* Lavender Benefits */}
      <section
        id="benefits"
        className="py-20 px-6 bg-white border-t border-purple-100"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`${sectionHeading} mb-4`}>Lavender Benefits</h2>

          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Lavender has a long history of traditional use for comfort and
            everyday well-being. Here are some of the most common ways people
            use lavender at home.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Relaxing aroma",
                text: "Many people enjoy lavender’s scent as part of a calming routine—diffuser, sachets, or dried bundles.",
              },
              {
                title: "Sleep routine support",
                text: "Often used in bedtime rituals like pillow sachets or linen sprays to create a soothing atmosphere.",
              },
              {
                title: "Home + linens",
                text: "A fresh, clean scent for drawers, closets, and linens—especially with dried buds.",
              },
              {
                title: "Bath & self-care",
                text: "Commonly included in bath soaks and simple self-care blends. Always patch test and dilute essential oils properly.",
              },
              {
                title: "Cooking & baking",
                text: "Culinary lavender can add a light floral note to syrups, teas, shortbread, and honey—use a little goes a long way.",
              },
              {
                title: "Crafts & gifts",
                text: "Bundles, sachets, and handcrafted items make thoughtful gifts—especially during harvest season.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-[#f6f2fb] border border-purple-100 p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-10 max-w-4xl mx-auto text-center">
            Note: These are traditional and everyday wellness uses. Lavender
            isn’t a substitute for medical care. If you’re pregnant, nursing,
            have sensitivities, or are using essential oils around children/pets,
            use extra caution and consult a professional if needed.
          </p>
        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        className="py-20 px-6 max-w-6xl mx-auto border-t border-purple-100"
      >
        <h2 className={`${sectionHeading} mb-12`}>Our Products</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Lavender Buds",
              desc: "Culinary-grade dried buds • 2 oz bag",
              price: "$9.99",
              email: true,
              image: "lavender-buds-jw-farms-tennessee.png",
            },
            {
              title: "Fresh Lavender Bundles",
              desc: "10–15 stems per bundle",
              price: "$12.00",
              note: "Harvest season only",
              image: "fresh-lavender-bundles-jw-farms-tennessee.png",
            },
            {
              title: "Lavender Plants",
              desc: "Quart-size pot",
              price: "$15.00",
              note: "Seasonal availability",
              image: "lavender-plants-jw-farms-tennessee.png",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-md bg-white p-6 text-center transition hover:shadow-xl hover:-translate-y-1"
            >
            <div className="relative w-full h-48 rounded-xl mb-4 overflow-hidden bg-[#f6f2fb]">
  <img
    src={`/products/${item.image}`}
    alt={item.title}
    className="w-full h-full object-contain p-3"
    loading="lazy"
  />
  {/* subtle edge fade */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_55%,rgba(246,242,251,0.85)_100%)]" />
</div>


              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
              <p className="text-purple-700 font-semibold mb-4">{item.price}</p>

              {item.email ? (
                <a
                  href="mailto:jwfarms77@gmail.com?subject=Lavender%20Order"
                  className={softButtonSmallSecondary}
                >
                  Email to Order
                </a>
              ) : (
                <p className="text-sm text-gray-500">{item.note}</p>
              )}
            </div>
          ))}

          <div className="rounded-2xl shadow-md bg-white p-6 text-center md:col-span-3 transition hover:shadow-xl hover:-translate-y-1">
            <img
              src="/products/lavender-plug-tray-72-jw-farms-tennessee.png"
              alt="Lavender plug trays"
              className="w-full h-56 object-cover rounded-xl mb-4"
            />

            <h3 className="text-xl font-semibold mb-2">
              Lavender Tray – 72 Plugs
            </h3>
            <p className="text-sm text-gray-600 mb-2">Commercial plug tray</p>
            <p className="text-purple-700 font-semibold mb-4">$130.00</p>
            <p className="text-sm text-gray-500">
              Seasonal • Email for availability
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 px-6 bg-white border-t border-purple-100"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`${sectionHeading} mb-8`}>About JW Farms</h2>

          <p className="text-gray-700 mb-4">
            JW FARMS is a small, family-owned lavender farm focused on quality,
            care, and seasonal growing practices. Everything we offer is grown,
            harvested, and handled in small batches.
          </p>

          <p className="text-gray-700 mb-6">
            Our lavender is ideal for sachets, crafts, baking, teas, and garden
            planting. Availability changes throughout the year based on harvest
            timing and growing conditions.
          </p>

          <p className="mt-6 text-gray-700">
            <a
              href="/lavender-farm-tennessee"
              className="font-semibold text-purple-700 underline hover:text-purple-900"
            >
              Learn more about our lavender farm in Tennessee →
            </a>
          </p>

          <p className="font-semibold text-purple-700">
            📧 Email us anytime:{" "}
            <a
              href="mailto:jwfarms77@gmail.com"
              className="underline hover:text-purple-900"
            >
              jwfarms77@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="py-20 px-6 bg-[#f6f2fb] border-t border-purple-100"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className={`${sectionHeading} mb-12`}>Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "How do I place an order?",
                a: "All orders are placed by email. Click any “Email to Order” button or email us directly.",
              },
              {
                q: "Do you ship lavender?",
                a: "Shipping depends on the product and season. Please email us with your location.",
              },
              {
                q: "When are plants and plugs available?",
                a: "Plants and plug trays are seasonal and vary each year.",
              },
              {
                q: "Do you offer bulk or wholesale pricing?",
                a: "Yes. Email us with your quantity needs and intended use.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="py-20 px-6 bg-[#f9f6fc] border-t border-purple-100"
      >
        <h2 className={`${sectionHeading} mb-12`}>Life at JW Farms</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              src: "/gallery/lavender-in-bloom-jw-farms-tennessee.png",
              label: "Lavender in bloom at JW Farms in Tennessee",
            },
            {
              src: "/gallery/stalks.png",
              label: "Fresh lavender stalks harvested at JW Farms",
            },
            {
              src: "/gallery/plugs.png",
              label: "Lavender plug trays grown at JW Farms in Tennessee",
            },
            {
              src: "/gallery/plant.png",
              label: "Healthy lavender plants growing at JW Farms",
            },
            {
              src: "/gallery/lavender-harvest-jw-farms-tennessee.png",
              label: "Lavender harvest at JW Farms in Tennessee",
            },
            {
              src: "/gallery/tennessee-lavender-field-jw-farms.png",
              label: "Lavender field at JW Farms in Tennessee",
            },
          ].map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md transition hover:shadow-xl hover:scale-105"
            >
             <img
  src={img.src}
  alt={img.label}
  className="w-full h-64 object-contain bg-[#f6f2fb] p-4"
/>
              <p className="p-3 text-sm text-center text-gray-600">
                {img.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 px-6 bg-[#f6f2fb] text-center border-t border-purple-100">
        <h2 className="font-serif font-medium text-3xl md:text-4xl text-purple-700 mb-8 tracking-tight">
          From Our Farm
        </h2>

        <div className="max-w-5xl mx-auto rounded-2xl shadow-md overflow-hidden mb-8 bg-white">
          <iframe
            src="https://jwfarms.blogspot.com/"
            className="w-full h-[500px]"
            loading="lazy"
            title="JW Farms Blog"
          ></iframe>
        </div>

        {/* ✅ Matching blog button */}
        <a
          href="https://jwfarms.blogspot.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={softButtonTertiary}
        >
          Visit the Blog <span aria-hidden="true">→</span>
        </a>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-6 bg-[#f6f2fb] text-center border-t border-purple-100"
      >
        <h2 className="font-serif font-medium text-3xl md:text-4xl text-purple-700 mb-4 tracking-tight">
          Contact JW Farms
        </h2>
        <p className="mb-6 text-gray-600">
          To place an order or ask about availability, email us directly:
        </p>

        <a
          href="mailto:jwfarms77@gmail.com"
          className="text-lg font-semibold text-purple-700 underline"
        >
          jwfarms77@gmail.com
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#6b4fa3] via-[#7b5fc0] to-[#4a2c82] text-white py-16 text-center">
        <div className="flex flex-col items-center gap-5">
          <Image
            src="/logo/jwfarms7-logo.png"
            alt="JW Farms 7 Logo"
            width={150}
            height={150}
            priority={false}
            className="rounded-full shadow-2xl bg-white/90 p-2"
          />

          <p className="text-xl font-semibold tracking-wide">JW FARMS</p>

          <p className="text-sm text-purple-100 max-w-md">
            Small-batch lavender grown with care in Tennessee
          </p>

          <p className="text-xs text-purple-200 mt-3">© 2026 JW FARMS</p>
        </div>
      </footer>
    </div>
  );
}

