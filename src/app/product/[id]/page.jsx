"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useProducts } from "@/context/productContext";
import { useCart } from "@/context/CartContext";
import { useRef, useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";

const ProductPage = () => {
  const { id } = useParams();
const { products, loading } = useProducts();
const { addToCart } = useCart();
const [zoomImage, setZoomImage] = useState(null);

const scrollRef = useRef(null);
const [activeIndex, setActiveIndex] = useState(0);

useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  const handleScroll = () => {
    const scrollLeft = el.scrollLeft;
    const width = el.clientWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  el.addEventListener("scroll", handleScroll, { passive: true });
  return () => el.removeEventListener("scroll", handleScroll);
}, []);
if (loading) return <p className="text-center py-20">Loading...</p>;

const product = products.find((p) => p.id.toString() === id);
if (!product) return notFound();

  return (
    <main className="min-h-screen bg-[#fffdf5] py-12 px-4 md:px-20 font-orangegummy tracking-[1px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image Carousel */}
        <div>
         <div ref={scrollRef}
  className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth h-[300px] md:h-[400px] w-full relative scrollbar-hide"
  style={{ scrollbarWidth: "none" }}
>
  {product.images?.map((img, idx) => (
    <div key={idx} className="relative snap-center shrink-0 w-full h-full">
      <Image
        src={img}
        alt={`${product.title} ${idx + 1}`}
        width={800}
        height={600}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "/fallback.jpg";
        }}
        priority={idx === 0}
      />
      {/* Zoom icon */}
      <button
        onClick={() => setZoomImage(img)}
        className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
      >
         <ZoomIn className="w-5 h-5 cursor-pointer text-gray-700" />
      </button>
    </div>
  ))}
</div>


          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {product.images.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition ${
                  idx === activeIndex ? "bg-yellow-600" : "bg-yellow-300"
                }`}
                onClick={() => scrollTo(idx)}
              />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl text-yellow-700">
            {product.title}
          </h1>
          <p className="text-gray-700 text-sm md:text-base">{product.description}</p>
          <p className="text-lg md:text-xl text-yellow-900 font-bold mt-2">₹{product.price}</p>

          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded transition w-fit"
          >
            Add to Cart
          </button>
        </div>
      </div>{zoomImage && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
  <div className="relative max-w-[90vw] max-h-[90vh]">
    <Image
      src={zoomImage}
      alt="Zoomed Image"
      width={1000}
      height={800}
      className="object-contain w-full h-full border-[5px] border-red-500"
    />
    <button
      onClick={() => setZoomImage(null)}
      className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
    >
       <X className="w-5 h-5 cursor-pointer text-gray-800" />
    </button>
  </div>
</div>

)}

      {/* Hide scrollbar for Chrome */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
};

export default ProductPage;
