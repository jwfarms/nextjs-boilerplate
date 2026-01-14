"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f2fb] text-gray-800">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur shadow-sm z-50 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-800 tracking-wide">
          JW FARMS
        </h1>
        <nav className="flex gap-4 text-sm font-semibold">
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
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-white/60" />

        {/* Content */}
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

          {/* Optional CTA buttons for better flow */}
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
            },
            {
              title: "Fresh Lavender Bundles",
              desc: "10–15 stems per bundle",
              price: "$12.00",
              note: "Harvest season only",
            },
            {
              title: "Lavender Plants",
              desc: "Quart-size pot",
              price: "$15.00",
              note: "Seasonal availability",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-md bg-white p-6 text-center transition hover:shadow-xl hover:-translate-y-1"
            >
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
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-purple-800">
            About JW FARMS
          </h2>

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
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-purple-800">
            Frequently Asked Questions
          </h2>

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
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-purple-800">
          Life at JW FARMS
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { src: "/gallery/lavender.png", label: "Lavender in bloom" },
            { src: "/gallery/stalks.png", label: "Lavender stalks" },
            { src: "/gallery/plugs.png", label: "Lavender plug trays" },
            { src: "/gallery/plant.png", label: "Healthy lavender plants" },
            { src: "/gallery/harvest.png", label: "Harvest time" },
            { src: "/gallery/field.png", label: "Fields in summer" },
          ].map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md transition hover:shadow-xl hover:scale-105"
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-64 object-cover"
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
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-purple-800">
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

        <a
          href="https://jwfarms.blogspot.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-700 hover:bg-purple-800 text-white rounded-xl px-8 py-3 font-semibold transition-all duration-200 hover:scale-105"
        >
          Visit the Blog
        </a>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-6 bg-[#f6f2fb] text-center border-t border-purple-100"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-purple-800">
          Contact JW FARMS
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
      <footer className="bg-purple-800 text-white py-10 text-center">
        <p className="text-lg font-semibold mb-1">JW FARMS</p>
        <p className="text-sm mb-2">Small-batch lavender grown with care</p>
        <p className="text-sm">© 2026 JW FARMS</p>
      </footer>
    </div>
  );
}
