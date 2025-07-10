"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useState } from "react";

const Checkout = () => {
  const { cartItems, total } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.phone || !form.address) {
      alert("Please fill in all fields");
      return;
    }

    // This is where you'd send data to backend
    alert("Order placed successfully!");

    // Example: console.log({ form, cartItems, total });
  };

  return (
    <main className="bg-[#fffdf5] min-h-screen py-12 px-4 md:px-20 font-orangegummy tracking-[1px]">
      <h1 className="text-4xl md:text-5xl text-yellow-600 text-center mb-10">
        Checkout
      </h1>

      {/* Customer Info */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10 space-y-4">
        <h2 className="text-yellow-700 text-xl mb-4">Customer Details</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border text-black border-yellow-200 rounded px-4 py-2"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border text-black border-yellow-200 rounded px-4 py-2"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full border text-black border-yellow-200 rounded px-4 py-2"
          value={form.phone}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Delivery Address"
          className="w-full border text-black border-yellow-200 rounded px-4 py-2"
          rows={3}
          value={form.address}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10 space-y-4">
        <h2 className="text-yellow-700 text-xl mb-4">Order Summary</h2>

        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <Image
              src={item.images[0]}
              alt={item.title}
              width={60}
              height={60}
              className="rounded"
            />
            <div className="flex-1">
              <p className="text-sm text-yellow-700">{item.title}</p>
              <p className="text-xs text-gray-500">
                {item.quantity} × ₹{item.price}
              </p>
            </div>
            <p className="text-sm text-yellow-700">
              ₹{item.quantity * item.price}
            </p>
          </div>
        ))}

        <div className="flex justify-between pt-4 border-t mt-4 text-lg text-yellow-700">
          <span>Total:</span>
          <span>₹{total}</span>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
        >
          Place Order
        </button>
      </div>
    </main>
  );
};

export default Checkout;
