"use client";

import { useCart } from "@/context/CartContext";
import { useProducts } from "@/context/productContext";
 // Assuming this exists
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const { addToCart } = useCart();
  const { products } = useProducts();

  const paintingProducts = products.filter((product) => product.type === "painting");

  return (
    <main className="bg-[#fffdf5] min-h-screen font-orangegummy tracking-[1.1px] py-12 px-6 md:px-20">
      <h1 className="text-6xl text-yellow-600  tracking-[1.1px] text-center mb-12">
        Painting
      </h1>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        {paintingProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            <Link href={`/product/${product.id}`}>
              <Image
                src={product.images[0]}
                alt={product.title}
                width={500}
                height={300}
                className="w-full object-cover h-48 md:h-64 hover:scale-[1.02] transition duration-200"
              />
              <div className="p-3 space-y-1">
                <h2 className="text-sm font-semibold text-yellow-700">{product.title}</h2>
                <p className="text-gray-600 text-[10px] md:text-xs">{product.description}</p>
              </div>
            </Link>

          
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
