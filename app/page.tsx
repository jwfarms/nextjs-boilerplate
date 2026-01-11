"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f2fb] text-gray-800">

      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-50 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-800">JW FARMS</h1>
        <nav className="flex gap-4 text-sm font-semibold">
          <a href="#products" className="hover:text-purple-700">Products</a>
          <a href="#about" className="hover:text-purple-700">About</a>
          <a href="#gallery" className="hover:text-purple-700">Gallery</a>
          <a href="#contact" className="hover:text-purple-700">Contact</a>
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
        className="py-24 px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1445510491599-c391e8046a68?auto=format&fit=crop&w=2400&q=80')",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
          Pure Lavender, Naturally Grown
        </h2>
        <p className="max-w-xl mx-auto text-lg mb-4">
          Hand-harvested lavender grown with care at JW FARMS.
          Sustainably grown and available by email order.
        </p>
        <p className="text-sm text-gray-600">
          🌿 Family-owned • 🇺🇸 Grown in the USA • 📧 Email-only ordering
        </p>
      </section>

      {/* Products */}
      <section id="products" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Products</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-2xl shadow-md bg-white p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Lavender Buds</h3>
            <p className="text-sm text-gray-600 mb-2">Culinary-grade dried buds</p>
            <p className="text-sm text-gray-600 mb-2">2 oz bag</p>
            <p className="text-purple-700 font-semibold mb-4">$9.99</p>
            <a
              href="mailto:jwfarms77@gmail.com?subject=Lavender%20Buds%20Order"
              className="inline-block bg-purple-700 hover:bg-purple-800 text-white rounded-xl px-6 py-2"
            >
              Email to Order
            </a>
          </div>

          <div className="rounded-2xl shadow-md bg-white p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Fresh Lavender Bundles</h3>
            <p className="text-sm text-gray-600 mb-2">10–15 stems per bundle</p>
            <p className="text-purple-700 font-semibold mb-4">$12.00</p>
            <p className="text-sm text-gray-500">Harvest season only</p>
          </div>

          <div className="rounded-2xl shadow-md bg-white p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Lavender Plants</h3>
            <p className="text-sm text-gray-600 mb-2">Quart-size pot</p>
            <p className="text-purple-700 font-semibold mb-4">$15.00</p>
            <p className="text-sm text-gray-500">Seasonal availability</p>
          </div>

          <div className="rounded-2xl shadow-md bg-white p-6 text-center md:col-span-3">
            <h3 className="text-xl font-semibold mb-2">Lavender Tray – 72 Plugs</h3>
            <p className="text-sm text-gray-600 mb-2">Commercial plug tray</p>
            <p className="text-purple-700 font-semibold mb-4">$130.00</p>
            <p className="text-sm text-gray-500">Seasonal • Email for availability</p>
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-purple-800 mb-6">
            About JW FARMS
          </h2>

          <p className="text-gray-700 mb-4">
            JW FARMS is a small, family-owned lavender farm focused on quality,
            care, and seasonal growing practices. Everything we offer is grown,
            harvested, and handled in small batches.
          </p>

          <p className="text-gray-700 mb-4">
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
<section id="faq" className="py-16 px-6 bg-[#f6f2fb]">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-semibold text-center mb-10 text-purple-800">
      Frequently Asked Questions
    </h2>

    <div className="space-y-6">

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="font-semibold text-lg mb-2">
          How do I place an order?
        </h3>
        <p className="text-gray-600">
          All orders are placed by email. Simply click any “Email to Order”
          button or email us directly at jwfarms77@gmail.com.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="font-semibold text-lg mb-2">
          Do you ship lavender?
        </h3>
        <p className="text-gray-600">
          Shipping availability depends on the product and season. Please email
          us with your location and desired product for details.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="font-semibold text-lg mb-2">
          When are plants and plugs available?
        </h3>
        <p className="text-gray-600">
          Plants, bundles, and plug trays are seasonal and typically available
          during the growing and harvest seasons. Availability varies year to
          year.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="font-semibold text-lg mb-2">
          Do you offer bulk or wholesale pricing?
        </h3>
        <p className="text-gray-600">
          Yes. Please email us with your quantity needs and intended use, and
          we’ll be happy to discuss options.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* Photo Gallery */}
      <section id="gallery" className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">
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
  className="rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
>

              <img
                src={img.src}
                alt={img.label}
                className="w-full h-64 object-cover transition-transform duration-300"

              />
              <p className="p-3 text-sm text-center text-gray-600">
                {img.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Blog */}
      <section className="py-20 px-6 bg-[#f6f2fb] text-center">
        <h2 className="text-3xl font-semibold mb-6">From Our Farm</h2>

        <div className="max-w-5xl mx-auto rounded-2xl shadow-md overflow-hidden mb-8">
          <iframe
            src="https://jwfarms.blogspot.com/"
            className="w-full h-[500px]"
            loading="lazy"
          ></iframe>
        </div>

        <a
          href="https://jwfarms.blogspot.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-700 hover:bg-purple-800 text-white rounded-xl px-8 py-3 font-semibold"
        >
          Visit the Blog
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-[#f6f2fb] text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact JW FARMS</h2>
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
