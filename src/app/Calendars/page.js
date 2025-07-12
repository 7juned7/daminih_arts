"use client";

import SkeletonCard from "@/Components/Skeleton";
import { useCart } from "@/context/CartContext";
import { useProducts } from "@/context/productContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useMemo } from "react";

const Page = () => {
  const router = useRouter();
  
  const { products, setSelectedProduct } = useProducts();

const paintingProducts = useMemo(() => {
  return products.filter((product) => product.type === "calander");
}, [products]);
  const [imgLoadedMap, setImgLoadedMap] = useState([]);

 useEffect(() => {
  setImgLoadedMap((prev) => {
    if (prev.length !== paintingProducts.length) {
      return new Array(paintingProducts.length).fill(false);
    }
    return prev;
  });
}, [paintingProducts.length]);

  const handleClick = (product) => {
    sessionStorage.setItem("selectedProduct", JSON.stringify(product));
    setSelectedProduct(product);
    router.push("/product");
  };

  return (
    <main className="py-12 px-6 md:px-20">
      <div className="max-w-4xl h-full mx-auto">
        <h1 className="text-2xl md:text-3xl text-yellow-600 text-center mb-8">
          Calandars
        </h1>
    

        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
         {paintingProducts.length === 0 ? (
  <div className="col-span-full text-center py-12 text-gray-500 text-lg">
    No art for now
  </div>
) : (
  paintingProducts.map((product, index) => (
    <div
      key={product.id}
      className="overflow-hidden hover:shadow-lg transition bg-white rounded relative"
    >
      <div onClick={() => handleClick(product)} className="cursor-pointer relative">
        {!imgLoadedMap[index] && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
            <span className="w-6 h-6 border-2 border-yellow-500 border-t-transparent animate-spin rounded-full" />
          </div>
        )}

        <Image
          src={product.images[0]}
          alt={product.title}
          width={500}
          height={500}
          priority
          className={`w-full object-contain h-48 md:h-64 transition duration-200 ${
            imgLoadedMap[index] ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => {
            setImgLoadedMap((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "/fallback.jpg";
            setImgLoadedMap((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }}
        />

        <div className="py-4 px-2 space-y-1">
          <h2 className="text-md text-black">{product.title}</h2>
          <p className="text-gray-600 text-sm">{product.description}</p>
        </div>
      </div>
    </div>
  ))
)}

        </div>
      </div>
    </main>
  );
};

export default Page;
