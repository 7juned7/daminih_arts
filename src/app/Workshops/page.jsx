"use client";

import { useCart } from "@/context/CartContext";
import { useProducts } from "@/context/productContext";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const { addToCart } = useCart();
  const { products } = useProducts();

  const workshopProducts = products.filter((product) => product.type === "workshop");

  return (
    <main className="bg-[#fffdf5]   py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto" >

      <h1 className="text-xl md:text-3xl text-yellow-600   text-center mb-8">
        Workshops
      </h1>

      

      {/* Products Section */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
        {workshopProducts.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden hover:shadow-lg transition bg-white rounded"
          >
            <Link href={`/product/${product.id}`}>
              <Image
                src={product.images[0]}
                alt={product.title}
                width={500}
                height={300}
                priority
                className="w-full object-cover h-48 md:h-64 hover:scale-[1.02] transition duration-200"
              />
              <div className="py-4 px-2 space-y-1">
                <h2 className="text-md text-yellow-700">{product.title}</h2>
                <p className="text-gray-600 text-sm md:text-sm">{product.description}</p>
        
              </div>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </main>
  );
};

export default Page;
