// app/print/coloring-book/page.tsx

export const metadata = {
  title: "Coloring Book | JW Farms",
  description: "Print-friendly coloring pages from JW Farms.",
  alternates: { canonical: "https://www.jwfarms7.com/print/coloring-book" },
};

export default function ColoringBookPage() {
  return (
    <main className="min-h-screen bg-[#f6f2fb] text-gray-800">
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <a
            href="/"
            className="inline-flex items-center text-sm font-medium text-[#6b4fa3] hover:underline"
          >
            ← Back to JW Farms
          </a>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-purple-900">
          Coloring Book
        </h1>

        <p className="mt-4 text-gray-700 max-w-2xl">
          Print-friendly coloring pages coming soon.
        </p>
      </section>
    </main>
  );
}
