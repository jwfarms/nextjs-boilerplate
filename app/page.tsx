"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f2fb] text-gray-800">

      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-50 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-800">JW FARMS</h1>
        <nav className="flex gap-4 text-sm font-semibold">
          <a href="#products" className="hover:text-purple-700">Products</a>
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
      <section id="products" className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Products</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-2xl shadow-md bg-white p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Lavender Buds</h3>
            <p className="text-sm text-gray-600 mb-3">
              Ideal for sachets, baking, teas, candles, and crafts
            </p>
            <p className="text-purple-700 font-semibold mb-4">$9.99 / 2 oz</p>
            <a
              href="mailto:jwfarms77@gmail.com?subject=Lavender%20Order"
              className="inline-block bg-purple-700 hover:bg-purple-800 text-white rounded-xl px-6 py-2"
            >
              Email to Order
            </a>
          </div>

          <div className="rounded-2xl shadow-md bg-white opacity-60 p-6 text-center">
            <h3 className="text-xl font-semibold mb-1">Fresh Lavender Bundles</h3>
            <p className="text-sm text-gray-500">
              Available during harvest season
            </p>
          </div>

          <div className="rounded-2xl shadow-md bg-white opacity-60 p-6 text-center">
            <h3 className="text-xl font-semibold mb-1">Lavender Plants</h3>
            <p className="text-sm text-gray-500">
              Seasonal availability
            </p>
          </div>

        </div>
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
