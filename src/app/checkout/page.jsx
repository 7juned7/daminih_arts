"use client";
import { toast } from "@/utils/toast"; // adjust path if needed

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import { Router } from "next/router";

const Checkout = () => {
  const { cartItems, total ,clearCart} = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const validateForm = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!form.name.trim()) {
    toast.show("Please enter your full name.", "error");
    return false;
  }

  if (!emailRegex.test(form.email)) {
    toast.show("Please enter a valid email address.", "error");
    return false;
  }

  if (!phoneRegex.test(form.phone)) {
    toast.show("Please enter a valid 10-digit phone number.", "error");
    return false;
  }

  if (!form.address.trim()) {
    toast.show("Please enter your delivery address.", "error");
    return false;
  }

  return true;
};


const handleSubmit = async () => {
  if (!form.name || !form.email || !form.phone || !form.address) {
    toast.show("Please fill all details");
    return;
  }
  if (!validateForm()) return;

  try {
    // Create order on backend
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total * 100 }), // in paisa
    });

    if (!res.ok) throw new Error("Failed to create Razorpay order");

    const orderData = await res.json();

    if (!window.Razorpay) {
     toast.show("Razorpay SDK not loaded. Please try again.", "error");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "My Store",
      description: "Order Payment",
      order_id: orderData.id,
      handler: async function (response) {
        const verifyRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/verify-payment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            name: form.name,
            email: form.email,
            phone: form.phone,
            address: form.address,
            cartItems, // make sure cartItems is accessible here
            total: total * 100,
          }),
        });

        const result = await verifyRes.json();

        if (result.status === "success") {
        toast.show("✅ Payment Successful!", "success");
          clearCart(); setForm({name: "",
    email: "",
    phone: "",
    address: ""}); Router.push("/success") 
        } else {
         toast.show("❌ Payment verification failed!", "error");
        }
      },
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },
      method: {
        upi: true,
        card: true,
        netbanking: false,
      },
      theme: {
        color: "#facc15",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("Checkout Error:", error);
    toast.show("Something went wrong during checkout.", "error");
  }
};




  return (
    <main className=" min-h-screen py-12 px-4 md:px-20 font-orangegummy tracking-[1px]">
      <h1 className="text-2xl md:text-3xl text-black text-center mb-10">
        Checkout
      </h1>

      {/* Customer Info */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10 space-y-4">
        <h2 className="text-black text-xl mb-4">Customer Details</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border text-black border-black rounded px-4 py-2"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border text-black border-black rounded px-4 py-2"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full border text-black border-black rounded px-4 py-2"
          value={form.phone}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Delivery Address"
          className="w-full border text-black border-black rounded px-4 py-2"
          rows={3}
          value={form.address}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10 space-y-4">
        <h2 className="text-black text-xl mb-4">Order Summary</h2>

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
              <p className="text-sm text-black">{item.title}</p>
              <p className="text-xs text-gray-500">
                {item.quantity} × ₹{item.price}
              </p>
            </div>
            <p className="text-sm text-black">
              ₹{item.quantity * item.price}
            </p>
          </div>
        ))}

        <div className="flex justify-between pt-4 border-t mt-4 text-lg text-black">
          <span>Total:</span>
          <span>₹{total}</span>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="bg-black cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
        >
          Place Order
        </button>
      </div>
      <Script
  src="https://checkout.razorpay.com/v1/checkout.js"
  strategy="afterInteractive"
/>
    </main>
  );
};

export default Checkout;
