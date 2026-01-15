"use client";

export default function Home() {
  // ✅ Product schema (JSON-LD) — goes INSIDE the component, ABOVE the return
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "JW Farms Lavender Products",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Product",
          name: "Lavender Buds (2 oz)",
          description: "Culinary-grade dried lavender buds • 2 oz bag.",
          brand: { "@type": "Brand", name: "JW Farms" },
          image: ["https://jwfarms7.com/products/lavender-buds.png"],
          url: "https://jwfarms7.com/#products",
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: "9.99",
            availability: "https://schema.org/InStock",
            url: "https://jwfarms7.com/#products",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          name: "Fresh Lavender Bundles",
          description:
            "Fresh lavender bundles • 10–15 stems per bundle (harvest season only).",
          brand: { "@type": "Brand", name: "JW Farms" },
          image: ["https://jwfarms7.com/products/lavender-bundles2.png"],
          url: "https://jwfarms7.com/#products",
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: "12.00",
            availability: "https://schema.org/LimitedAvailability",
            url: "https://jwfarms7.com/#products",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Product",
          name: "Lavender Plants (quart-size)",
          description: "Lavender plants in a quart-size pot (seasonal availability).",
          brand: { "@type": "Brand", name: "JW Farms" },
          image: ["https://jwfarms7.com/products/lavender-plants.png"],
          url: "https://jwfarms7.com/#products",
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: "15.00",
            availability: "https://schema.org/LimitedAvailability",
            url: "https://jwfarms7.com/#products",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Product",
          name: "Lavender Tray – 72 Plugs",
          description:
            "Commercial plug tray • 72 lavender plugs (seasonal availability).",
          brand: { "@type": "Brand", name: "JW Farms" },
          image: ["https://jwfarms7.com/products/lavender-plugs.png"],
          url: "https://jwfarms7.com/#products",
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: "130.00",
            availability: "https://schema.org/LimitedAvailability",
            url: "https://jwfarms7.com/#products",
          },
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f6f2fb] text-gray-800">
      {/* ✅ JSON-LD script goes ONCE, near the top of the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur shadow-sm z-50 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-800 tracking-wide">
          JW FARMS
        </h1>
        <nav className="flex gap-4 text-sm font-semibold">
          <a href="/lavender" className="hover:text-purple-700">
            Lavender
          </a>
          <a href="/downloadable-guides" className="hover:text-purple-700">
            Downloadable Guides
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
        <div className="absolute inset-0 bg-white/60" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-4 drop-shadow-sm">
            Pure Lavender, Naturally Grown
          </h2>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-800 mb-4 leading-relaxed">
            Hand-harvested lavender grown with care at JW FARMS.
            <br />
            Sustainably grown and available by email order.
          </p>

          <p className="text-sm md:text-base text-gray-700">
            🌿 Family-owned <span className="mx-2">•</span> 🇺🇸 Grown in the USA{" "}
            <span className="mx-2">•</span> 📧 Email-only ordering
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#products"
              className="inline-block bg-purple-700 hover:bg-purple-800 text-white rounded-xl px-7 py-3 font-semibold transition-all duration-200 hover:scale-[1.02]"
            >
              View Products
            </a>
            <a
              href="#contact"
              className="inline-block bg-white/80 hover:bg-white text-purple-800 rounded-xl px-7 py-3 font-semibold border border-purple-200 transition-all duration-200 hover:scale-[1.02]"
            >
              Email to Order
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        className="py-20 px-6 max-w-6xl mx-auto border-t border-purple-100"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-purple-800">
          Our Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Lavender Buds",
              desc: "Culinary-grade dried buds • 2 oz bag",
              price: "$9.99",
              email: true,
              image: "lavender-buds.png",
            },
            {
              title: "Fresh Lavender Bundles",
              desc: "10–15 stems per bundle",
              price: "$12.00",
              note: "Harvest season only",
              image: "lavender-bundles2.png",
            },
            {
              title: "Lavender Plants",
              desc: "Quart-size pot",
              price: "$15.00",
              note: "Seasonal availability",
              image: "lavender-plants.png",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-md bg-white p-6 text-center transition hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={`/products/${item.image}`}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
              <p className="text-purple-700 font-semibold mb-4">{item.price}</p>

              {item.email ? (
                <a
                  href="mailto:jwfarms77@gmail.com?subject=Lavender%20Order"
                  className="inline-block bg-purple-700 hover:bg-purple-800 text-white rounded-xl px-6 py-2 transition-all duration-200 hover:scale-105"
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
              src="/products/lavender-plugs.png"
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

      {/* ...the rest of your page stays the same... */}
    </div>
  );
}
