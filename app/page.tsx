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

      <header className="sticky top-0 bg-white shadow-sm z-50 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-800">JW FARMS</h1>
      </header>

      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-800 mb-4">
          Pure Lavender, Naturally Grown
        </h2>
        <p className="max-w-xl mx-auto text-lg">
          Hand-harvested lavender grown with care at JW FARMS.
        </p>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Lavender Buds</h3>
          <p className="mb-2">$9.99 / 2 oz</p>
          <button
            onClick={() => addToCart({ id: 1, name: "Lavender Buds", price: 9.99 })}
            className="bg-purple-700 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </section>

      <section className="bg-white py-12 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.name} × {item.qty}</span>
            <span>${(item.price * item.qty).toFixed(2)}</span>
          </div>
        ))}
        {cart.length > 0 && (
          <>
            <p className="font-semibold mt-4">Total: {total.toFixed(2)}</p>
            <button
              onClick={checkout}
              className="mt-4 bg-purple-700 text-white px-4 py-2 rounded"
            >
              Checkout (Stripe)
            </button>
          </>
        )}
      </section>

    </div>
  );
}

