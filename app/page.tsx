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

  {/* Product 1 */}
  <div className="rounded-2xl shadow-md bg-white p-6 text-center">
    <h3 className="text-xl font-semibold mb-2">Lavender Buds</h3>
    <p className="text-sm text-gray-600 mb-2">
      Culinary-grade dried lavender buds
    </p>
    <p className="text-sm text-gray-600 mb-2">
      Quantity: 2 oz bag
    </p>
    <p className="text-purple-700 font-semibold mb-4">
      $9.99
    </p>
    <a
      href="mailto:jwfarms77@gmail.com?subject=Lavender%20Buds%20Order"
      className="inline-block bg-purple-700 hover:bg-purple-800 text-white rounded-xl px-6 py-2"
    >
      Email to Order
    </a>
  </div>

  {/* Product 2 */}
  <div className="rounded-2xl shadow-md bg-white p-6 text-center">
    <h3 className="text-xl font-semibold mb-2">Fresh Lavender Bundles</h3>
    <p className="text-sm text-gray-600 mb-2">
      Fresh-cut lavender, tied bundles
    </p>
    <p className="text-sm text-gray-600 mb-2">
      Quantity: 10–15 stems per bundle
    </p>
    <p className="text-purple-700 font-semibold mb-4">
      $12.00 per bundle
    </p>
    <p className="text-sm text-gray-500">
      Available during harvest season
    </p>
  </div>

  {/* Product 3 */}
  <div className="rounded-2xl shadow-md bg-white p-6 text-center">
    <h3 className="text-xl font-semibold mb-2">Lavender Plants</h3>
    <p className="text-sm text-gray-600 mb-2">
      Healthy starter lavender plants
    </p>
    <p className="text-sm text-gray-600 mb-2">
      Quantity: 1 plant (quart-size pot)
    </p>
    <p className="text-purple-700 font-semibold mb-4">
      $15.00 each
    </p>
    <p className="text-sm text-gray-500">
      Seasonal availability
    </p>
  </div>

          <div className="rounded-2xl shadow-md bg-white opacity-60 p-6 text-center">
  <h3 className="text-xl font-semibold mb-2">
    Lavender Tray – 72 Plugs
  </h3>

  <p className="text-sm text-gray-500 mb-3">
    Seasonal availability
  </p>

  <p className="text-purple-700 font-semibold mb-4">
    $130.00
  </p>

  <p className="text-xs text-gray-500">
    Email us for availability
  </p>
</div>


</div>

      </section>
{/* Blog */}
<section id="blog" className="py-20 px-6 bg-white">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-4">
      From Our Farm
    </h2>

    <p className="text-gray-600 mb-8">
      Updates from the fields, harvest notes, and life at JW FARMS.
    </p>
{/* About */}
<section id="about" className="py-16 px-6 bg-white">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-semibold text-purple-800 mb-6">
      About JW FARMS
    </h2>

    <p className="text-gray-700 mb-4">
      JW FARMS is a small, family-owned lavender farm dedicated to growing
      healthy plants and high-quality lavender products with care and
      intention. Everything we offer is grown seasonally, hand-harvested,
      and handled in small batches to ensure freshness and quality.
    </p>

    <p className="text-gray-700 mb-4">
      Our lavender buds are ideal for sachets, crafts, baking, teas, and
      home use, while our seasonal plants and plugs are grown for gardeners
      and growers who value strong starts and dependable varieties.
      Availability changes throughout the year based on growing conditions
      and harvest timing.
    </p>

    <p className="text-gray-700">
      We keep things simple and personal — all orders and questions are
      handled directly by email. If you’re interested in product
      availability, bulk orders, or seasonal updates, we’re always happy
      to hear from you.
    </p>

    <p className="mt-6 font-semibold text-purple-700">
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
{/* Photo Gallery */}
<section id="gallery" className="py-16 px-6 bg-[#f6f2fb]">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-semibold text-purple-800 mb-4">
      Lavender Gallery
    </h2>
    <p className="text-gray-600 mb-10">
      A glimpse into our fields, harvest, and seasonal lavender at JW FARMS
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <img
        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
        alt="Lavender field"
        className="rounded-2xl shadow-md object-cover h-64 w-full"
      />
      <img
        src="https://images.unsplash.com/photo-1524594154908-edd28a72c38b"
        alt="Fresh lavender bundles"
        className="rounded-2xl shadow-md object-cover h-64 w-full"
      />
      <img
        src="https://images.unsplash.com/photo-1445510491599-c391e8046a68"
        alt="Lavender flowers"
        className="rounded-2xl shadow-md object-cover h-64 w-full"
      />
      <img
        src="https://images.unsplash.com/photo-1590086782957-93c06ef21604"
        alt="Lavender buds close up"
        className="rounded-2xl shadow-md object-cover h-64 w-full"
      />
      <img
        src="https://images.unsplash.com/photo-1599687268791-2a21f49b48c0"
        alt="Lavender plants"
        className="rounded-2xl shadow-md object-cover h-64 w-full"
      />
      <img
        src="https://images.unsplash.com/photo-1596397249128-7c4f33c6f93c"
        alt="Lavender harvest"
        className="rounded-2xl shadow-md object-cover h-64 w-full"
      />
    </div>
  </div>
</section>

    {/* Blog Preview */}
    <div className="rounded-2xl shadow-md overflow-hidden mb-8">
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
