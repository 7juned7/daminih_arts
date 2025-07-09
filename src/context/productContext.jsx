"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all products from your sheet or API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://opensheet.elk.sh/YOUR_SHEET_ID/all");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        // Normalize ids to strings
        const normalized = data.map((item) => ({
          ...item,
          id: item.id.toString(),
        }));

        setProducts(normalized);
      } catch (error) {
        console.error("Using fallback product data due to error:", error);
        setProducts([
          {
            id: "100",
            title: "Beginner Watercolor Workshop",
            description: "Learn watercolor basics in a 2-hour session.",
            price: "₹799",
            images: ["/painting1.jpg", "/painting2.jpg", "/painting3.jpg"],
            type: "workshop",
          },
          {
            id: "2",
            title: "Sunflower Calendar 2025",
            description: "Aesthetic hand-painted sunflower calendar.",
            price: "₹499",
            images: ["/painting1.jpg", "/painting2.jpg", "/painting3.jpg"],
            type: "calendar",
          },
          {
            id: "3",
            title: "Abstract Bloom Painting",
            description: "One-of-a-kind floral painting on canvas.",
            price: "₹1499",
            images: ["/painting1.jpg", "/painting2.jpg", "/painting3.jpg"],
            type: "painting",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getProductById = (id) =>
    products.find((p) => p.id.toString() === id.toString());

  return (
    <ProductsContext.Provider value={{ products, loading, getProductById }}>
      {children}
    </ProductsContext.Provider>
  );
};
