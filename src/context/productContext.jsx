"use client";
// daminihartsgooglesheetsecretapikey
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
      const res = await fetch("https://script.google.com/macros/s/AKfycbxx-0rzTQxSIbXfOjzFbsSamnZw6zM0p3LyS0aKzKVhXuKXSzRTitZOUzknd0peJBJv/exec?key=daminihartsgooglesheetsecretapikey");
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      console.log(data);
      setProducts(data.map((item, idx) => ({
        ...item,
        id: item.id?.toString() || idx.toString(),
        images: [item.imageURL],
      })));
    } catch (err) {
      console.error("Failed to fetch secure products:", err);
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
