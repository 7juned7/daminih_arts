"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

const Page = () => {
  const { cartItems, updateQuantity, removeItem, total } = useCart();

  return (
    <main className="bg-[#fffdf5] min-h-screen py-12 px-6 md:px-20 font-orangegummy tracking-[1px]">
      <h1 className="text-6xl text-yellow-600 font-someflowers text-center mb-10"> Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 mt-10 text-lg">Your cart is empty!</p>
      ) : (
        <div className="space-y-6">
          <p className="text-right text-sm text-yellow-700">
            Total Items:{" "}
            <span className="font-semibold">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </p>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex  md:flex-row items-center border border-yellow-200 rounded-xl p-4 gap-4 bg-white"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="rounded-xl object-cover"
              />
              <div className="flex-1 w-full">
                <h2 className="text-yellow-700 font-semibold text-sm">{item.title}</h2>
                <p className="text-xs text-gray-600">₹{item.price} each</p>
                <div className="flex items-center gap-2 mt-2">
                 <button
  onClick={() => updateQuantity(item.id, -1)}
  disabled={item.quantity <= 1}
  className={`px-2 py-1 rounded text-white transition 
    ${item.quantity <= 1 ? "bg-gray-300 cursor-not-allowed" : "bg-yellow-300 hover:bg-yellow-400"}`}
>
  -
</button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="text-yellow-700 font-bold text-right">
                ₹{item.price * item.quantity}
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-8 border-t pt-4 text-lg font-semibold text-yellow-700">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <div className="text-center mt-6">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition font-semibold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
