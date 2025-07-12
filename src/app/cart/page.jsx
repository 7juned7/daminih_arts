"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

const Page = () => {
  const { cartItems, updateQuantity, removeItem, total } = useCart();

  return (
    <main className=" min-h-screen py-12 px-4 md:px-20 font-orangegummy tracking-[1px]">
      <h1 className="text-2xl md:text-3xl text-black  text-center mb-10">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 mt-10 text-lg">Your cart is empty!</p>
      ) : (
        <div className="space-y-6">
          {/* Total Items */}
          <p className="text-right text-sm text-black">
            Total Items:{" "}
            <span className="">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </p>

          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:items-start border border-black rounded-xl p-4 gap-4 bg-white"
            >
              <Image
                src={item.images[0]}
                alt={item.title}
                width={100}
                height={100}
                className="rounded-xl object-cover w-full sm:w-[100px] sm:h-[100px]"
              />
              <div className="flex-1 w-full">
                <h2 className="text-black  text-sm">{item.title}</h2>
               {item.offer ? (
  <div className="flex items-center gap-2">
    <p className="text-xs text-red-500 line-through">₹{item.price}</p>
    <p className="text-xs text-black font-semibold">₹{item.offer} each</p>
  </div>
) : (
  <p className="text-xs text-gray-600">₹{item.price} each</p>
)}

                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    disabled={item.quantity <= 1}
                    className={`px-2 py-1 cursor-pointer w-8 h-8 rounded text-white transition 
                      ${
                        item.quantity <= 1
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-black hover:bg-gray-800"
                      }`}
                  >
                    -
                  </button>

                  <span className="px-2 text-black">{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className=" cursor-pointer w-8 h-8 bg-black text-white rounded hover:bg-gray-800"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-2 text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="text-black  text-right w-full sm:w-auto">
              ₹{(item.offer ?? item.price) * item.quantity}
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="flex justify-between items-center mt-8 border-t pt-4 text-lg  text-black">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          {/* Checkout Button */}
          <div className="text-center mt-6">
            <Link href="/checkout" className="bg-black text-white  w-full sm:w-auto px-6 py-3 rounded-lg hover:bg-gray-900 transition">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
