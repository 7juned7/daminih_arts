// app/products/calendars/page.tsx
"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useEffect, useState } from "react";



const Page = () => {
   const [calandersProducts,setCalendarsProducts] = useState([])
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
        setCalendarsProducts([
  {
    id: 1,
    title: "Sunflower Calendar 2025",
    description: "A bright & artistic calendar inspired by nature.",
    price: "₹499",
    image: "/calendar1.jpg",
  },
  {
    id: 2,
    title: "Floral Joy Calendar",
    description: "Designed with hand-painted flowers and quotes.",
    price: "₹599",
    image: "/calendar2.jpg",
  },
  {
    id: 3,
    title: "Serene Seasons",
    description: "Minimalist calendar with peaceful seasonal watercolors.",
    price: "₹449",
    image: "/calendar3.jpg",
  },
  {
    id: 4,
    title: "Botanical Bliss",
    description: "Each page showcases botanical sketches with poetry.",
    price: "₹549",
    image: "/calendar4.jpg",
  },
  {
    id: 5,
    title: "Joy of Nature",
    description: "Celebrate nature's beauty with hand-drawn illustrations.",
    price: "₹499",
    image: "/calendar5.jpg",
  },
  {
    id: 6,
    title: "Rustic Vibes 2025",
    description: "Earthy tones and rustic charm for your workspace.",
    price: "₹599",
    image: "/calendar6.jpg",
  },
]);
      }
    };
  
    fetchData();
  }, []);
  return (
 <main className="bg-[#fffdf5] min-h-screen font-orangegummy tracking-[1.1px] font-extralight py-12 px-6 md:px-20">
       <h1 className="text-6xl text-yellow-600 font-someflowers tracking-[1.1px] text-center mb-12"> Calenders</h1>
 
       <div className="grid gap-2 grid-cols-2 lg:grid-cols-3">
         {calandersProducts.map((product) => (
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
