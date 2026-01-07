import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LavenderShop() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const checkout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="min-h-screen bg-[#f6f2fb] text-gray-800">

      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-50 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-800">JW FARMS</h1>
        <nav className="flex gap-4 text-sm font-semibold">
          <a href="#shop" className="hover:text-purple-700">Shop</a>
          <a href="#cart" className="hover:text-purple-700">Cart</a>
          <a href="#contact" className="hover:text-purple-700">Contact</a>
          <span className="ml-2">🛒 {cart.reduce((s, i) => s + i.qty, 0)}</span>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-24 px-6 text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1445510491599-c391e8046a68?auto=format&fit=crop&w=2400&q=80')" }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
          Pure Lavender, Naturally Grown
        </motion.h2>
        <p className="max-w-xl mx-auto text-lg mb-4">
          Hand-harvested lavender grown with care at JW FARMS. Sustainably grown, carefully dried, and shipped fresh to your door.
        </p>
        <p className="text-sm text-gray-600">🌿 Family-owned farm • 🇺🇸 Grown in the USA • 📧 Email-only ordering</p>
      </section>

      {/* Products */}
      <section id="shop" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-4">Our Products</h2>
        <p className="text-center text-gray-600 mb-10">Naturally fragrant lavender products grown and harvested in season</p>
        <div className="grid md:grid-cols-3 gap-8">

          {/* Lavender Buds */}
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-center">
              <img src="https://images.unsplash.com/photo-1611078489935-0cb964de46b8?auto=format&fit=crop&w=800&q=80" className="rounded-xl mb-4" />
              <h3 className="text-xl font-semibold mb-1">Lavender Buds</h3>
              <p className="text-sm text-gray-600 mb-1">Perfect for sachets, baking, teas, candles, and crafts</p>
              <p className="text-purple-700 font-semibold mb-2">$9.99 / 2 oz</p>
              <Button onClick={() => addToCart({ id: 1, name: "Lavender Buds", price: 9.99 })} className="rounded-xl w-full bg-purple-700 hover:bg-purple-800 text-white">
                Add to Cart
              </Button>
            </CardContent>
          </Card>

          {/* Lavender Stalks */}
          <Card className="rounded-2xl shadow-md opacity-60">
            <CardContent className="p-6 text-center">
              <img src="https://images.unsplash.com/photo-1598514982901-1fcb3a2d8e28?auto=format&fit=crop&w=800&q=80" className="rounded-xl mb-4" />
              <h3 className="text-xl font-semibold mb-1">Lavender Stalks</h3>
              <p className="text-sm text-gray-500 mb-3">Out of Season</p>
              <form action="https://formspree.io/f/xbjnzqwl" method="POST" data-formspree-success="Thanks! We’ll email you when it’s back.">
                <input type="hidden" name="interest" value="Lavender Stalks" />
                <input type="email" name="email" required placeholder="Notify me when available" className="w-full px-3 py-2 border rounded-xl mb-2" />
                <Button type="submit" className="w-full text-sm bg-purple-600 text-white rounded-xl">Notify Me</Button>
              </form>
            </CardContent>
          </Card>

          {/* Lavender Plants */}
          <Card className="rounded-2xl shadow-md opacity-60">
            <CardContent className="p-6 text-center">
              <img src="https://images.unsplash.com/photo-1610397648930-4778c8f14c8a?auto=format&fit=crop&w=800&q=80" className="rounded-xl mb-4" />
              <h3 className="text-xl font-semibold mb-1">Lavender Plants</h3>
              <p className="text-sm text-gray-500 mb-3">Seasonal Shipping Only</p>
              <form action="https://formspree.io/f/xbjnzqwl" method="POST" data-formspree-success="Thanks! We’ll email you when it’s back.">
                <input type="hidden" name="interest" value="Lavender Plants" />
                <input type="email" name="email" required placeholder="Notify me when available" className="w-full px-3 py-2 border rounded-xl mb-2" />
                <Button type="submit" className="w-full text-sm bg-purple-600 text-white rounded-xl">Notify Me</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cart */}
      <section id="cart" className="bg-white py-12 px-6">
        <div className="max-w-3xl mx-auto mb-6 text-sm text-gray-600">
          ✔ Secure Stripe checkout &nbsp; • &nbsp; ✔ No subscriptions &nbsp; • &nbsp; ✔ Email receipt
        </div>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
          {cart.length === 0 && <p className="text-gray-500">Your cart is empty.</p>}
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <span>{item.name} × {item.qty}</span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
          {cart.length > 0 && (
            <div className="mt-6">
              <p className="font-semibold mb-4">Total: ${total.toFixed(2)} USD</p>
              <Button onClick={checkout} className="w-full bg-purple-700 hover:bg-purple-800 text-white rounded-xl py-3">
                Proceed to Checkout (Stripe)
              </Button>
              <p className="text-xs text-gray-500 text-center mt-2">Secure checkout • Email confirmation sent</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-[#f6f2fb]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact JW FARMS</h2>
          <p className="mb-8 text-gray-600">Questions about availability, orders, or seasonal lavender? Send us a message and we’ll get back to you by email.</p>

          <form action="https://formspree.io/f/xbjnzqwl" method="POST" data-formspree-success="Thanks! We’ll be in touch soon." className="bg-white rounded-2xl shadow-md p-8 space-y-4 text-left">
            <input type="text" name="name" required placeholder="Your Name" className="w-full px-4 py-2 border rounded-xl" />
            <input type="email" name="email" required placeholder="Your Email" className="w-full px-4 py-2 border rounded-xl" />
            <textarea name="message" rows="4" required placeholder="Your Message" className="w-full px-4 py-2 border rounded-xl"></textarea>
            <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 text-white rounded-xl py-3">Send Message</Button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            Or email us directly at <a href="mailto:jwfarms77@gmail.com" className="underline">jwfarms77@gmail.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-10 text-center">
        <p className="mb-2 text-lg font-semibold">JW FARMS</p>
        <p className="text-sm mb-2">Small-batch lavender grown with care</p>
        <p className="mb-2">© 2026 JW FARMS</p>
        <p className="text-sm">Contact: <a href="mailto:jwfarms77@gmail.com" className="underline">jwfarms77@gmail.com</a></p>
      </footer>
    </div>
  );
}
