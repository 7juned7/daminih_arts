"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useProducts } from "@/context/productContext";
import { useCart } from "@/context/CartContext";
import { useRef, useState, useEffect } from "react";
import { IndianRupee, X, ZoomIn } from "lucide-react";
import AnimatedButton from "@/utils/button";

const ProductPage = () => {
  const { id } = useParams();

  const { products, loading, selectedProduct } = useProducts();
  const { addToCart } = useCart();

  const [zoomImage, setZoomImage] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [zoomImgLoaded, setZoomImgLoaded] = useState(false);

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ move this up — BEFORE any return
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const index = Math.round(el.scrollLeft / el.clientWidth);
      setActiveIndex(index);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <p className="text-center py-20">Loading...</p>;

  const product = selectedProduct;
  if (!product) return notFound();
  return (
    <main className="min-h-screen max-w-6xl m-auto bg-white py-12 px-4 md:px-20 font-orangegummy tracking-[1px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image Carousel */}
        <div>
         <div ref={scrollRef}
  className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth h-[500px] md:h-[500px] w-full relative scrollbar-hide"
  style={{ scrollbarWidth: "none" }}
>
  {product.images?.map((img, idx) => (
   <div key={idx} className="relative snap-center shrink-0 w-full h-full">
      {!imgLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
        </div>
      )}

      <Image
        src={img}
        alt={`${product.title} ${idx + 1}`}
        width={800}
        height={600}
        className="w-full h-full object-contain transition-opacity duration-500"
        style={{ opacity: imgLoaded ? 1 : 0 }}
        onLoadingComplete={() => setImgLoaded(true)}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "/fallback.jpg";
          setImgLoaded(true);
        }}
        priority
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
        idx === activeIndex ? "bg-black" : "bg-white border border-black"
      }`}
      onClick={() => scrollTo(idx)} // ✅ Now defined
    />
  ))}
</div>


        </div>

        {/* Info Section */}
        <div className="flex  px-8 flex-col gap-4">
          <h1 className="text-2xl md:text-3xl text-gray-700">
            {product.title}
          </h1>
          <p className="text-gray-700 text-sm md:text-base">{product.description} </p>
          {product.aboutProduct && (
  <div className="text-sm md:text-base text-gray-600">
    <span className="font-semibold mr-4">Size:</span> 
    <span className="border p-2 border-2" >

    {product.aboutProduct}
    </span>
  </div>
)}
          {/* Price Section */}
{product.offer ? (
  <div className="flex items-center gap-2 mt-2">
    {/* Original Price */}
    <p className="text-red-400 text-lg md:text-xl line-through flex items-center">
      <IndianRupee className="w-5 h-5" />
      {product.price}
    </p>

    {/* Discounted Price */}
    <p className="text-black text-lg md:text-xl font-bold flex items-center">
      <IndianRupee className="w-5 h-5" />
      {product.offer}
    </p>
  </div>
) : (
  // If no offer, show only the regular price
  <p className="text-lg md:text-xl flex items-center text-gray-600 font-bold mt-2">
    <IndianRupee className="w-5 h-5" />
    {product.price}
  </p>
)}

        <AnimatedButton onClick={() => addToCart(product)}>
  Add to Cart
</AnimatedButton>

        </div>
      </div>
     {zoomImage && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-auto">
    <div className="relative max-w-[90vw] max-h-[90vh] overflow-auto">

      {/* Loader */}
      {!zoomImgLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-yellow-500 rounded-full animate-spin" />
        </div>
      )}

      {/* Image */}
      <Image
        src={zoomImage}
        alt="Zoomed Image"
        width={1000}
        height={800}
        className={`object-contain w-full h-full border-[5px] border-white transition-opacity duration-500 ${
          imgLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoadingComplete={() =>  setZoomImgLoaded(true)}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "/fallback.jpg";
           setZoomImgLoaded(true);
        }}
      />

      {/* Close Button */}
      <button
        onClick={() => {
          setZoomImage(null);
          setZoomImgLoaded(false); // Reset for next image
        }}
        className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-20"
      >
        <X className="w-5 h-5 text-gray-800" />
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
