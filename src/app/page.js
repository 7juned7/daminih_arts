"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

import { useState, useEffect } from "react";
const Page = () => {
    const [workshopProducts,setWorkshopProducts] = useState([])
    const { addToCart } = useCart();
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch("https://opensheet.elk.sh/YOUR_SHEET_ID/workshops");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setWorkshopProducts(data);
    } catch (error) {
      console.error("Fetch failed, loading fallback data:", error);
      // Fallback dummy data
      setWorkshopProducts([
        {
          id: 1,
          title: "Beginner Watercolor Workshop",
          description: "Learn the basics of watercolor painting in a 2-hour live session.",
          price: "₹799",
          image: "/workshop1.jpg",
        },
        {
          id: 2,
          title: "Floral Art Masterclass",
          description: "Paint beautiful floral compositions with step-by-step guidance.",
          price: "₹999",
          image: "/workshop2.jpg",
        },
        {
          id: 3,
          title: "Sunflower Special Workshop",
          description: "Celebrate your love for sunflowers with this exclusive session.",
          price: "₹899",
          image: "/workshop3.jpg",
        },
        {
          id: 4,
          title: "Art & Mindfulness Workshop",
          description: "Blend creativity and calm through mindful sketching.",
          price: "₹749",
          image: "/workshop4.jpg",
        },
        {
          id: 5,
          title: "Ink & Wash Techniques",
          description: "Master ink illustration with watercolor washes.",
          price: "₹899",
          image: "/workshop5.jpg",
        },
        {
          id: 6,
          title: "Creative Journaling",
          description: "Turn your everyday journaling into an art practice.",
          price: "₹699",
          image: "/workshop6.jpg",
        },
      ]);
    }
  };

  fetchData();
}, []);

  return (
    <main className="bg-[#fffdf5] min-h-screen font-orangegummy tracking-[1.1px] font-extralight py-12 px-6 md:px-20">
      <h1 className="text-6xl text-yellow-600 font-someflowers tracking-[1.1px] text-center mb-12"> Workshops</h1>

      <div className="grid gap-2 grid-cols-2 lg:grid-cols-3">
        {workshopProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col gap-2 mb-6 justify-between rounded-2xl transition"
          >
            <div>
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={500}
                className="w-full object-cover"
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-xs font-semibold text-yellow-700">
                  {product.title}
                </h2>
                <p className="text-gray-600  text-[8px] md:text-xs">{product.description}</p>
                <div className="text-yellow-800 text-xs font-bold">
                  {product.price}
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xs">
           <button
  onClick={() => addToCart(product)}
  className="bg-yellow-500 text-white cursor-pointer px-2 py-1 md:px-4 md:py-2 rounded hover:bg-yellow-600 transition"
>
  Add to Cart
</button>
              <button className="bg-yellow-500 text-white cursor-pointer px-2 py-1 md:px-4 md:py-2 rounded hover:bg-yellow-600 transition">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;