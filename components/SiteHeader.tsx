import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-purple-100 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-serif text-lg font-semibold text-purple-900">
          JW Farms
        </Link>

        <div className="flex items-center gap-4 text-sm font-semibold text-purple-900">
          <Link href="/#products" className="hover:underline">
            Products
          </Link>
          <Link href="/#blog" className="hover:underline">
            Blog
          </Link>

          {/* ✅ This is the new link */}
          <Link
            href="/#install-app"
            className="rounded-full border border-purple-300 px-4 py-2 hover:bg-purple-50 transition"
          >
            Install App
          </Link>

          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
