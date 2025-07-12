"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct,setSelectedProduct]= useState(null)
useEffect(() => {
  const fetchProducts = async () => {
    const cached = sessionStorage.getItem("products");
    if (cached) {
      setProducts(JSON.parse(cached));
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://opensheet.vercel.app/1MfdvAcPoCE7PjNK1L6L6TZGyIxVaqXPpMi9D5tfdwVk/Sheet1");
      const data = await res.json();

      const formatDriveLink = (url) => {
        const match = url?.match(/\/d\/(.*?)\//);
        return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url;
      };

      const formatted = data.map((item, idx) => ({
        id: item.id?.toString() || idx.toString(),
        title: item.title,
        description: item.description,
        price: item.price,
        offer: item.offer,
        aboutProduct: item.aboutProduct,
        images: [item.image1, item.image2, item.image3]
          .filter(Boolean)
          .map(formatDriveLink),
        type: item.type,
      }));

      sessionStorage.setItem("products", JSON.stringify(formatted)); // Cache it
      setProducts(formatted);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);


  // Fetch all products from your sheet or API
 
useEffect(() => {
  const storedProduct = sessionStorage.getItem("selectedProduct");
  if (!selectedProduct && storedProduct) {
    setSelectedProduct(JSON.parse(storedProduct));
  }
}, []);


  const getProductById = (id) =>
    products.find((p) => p.id.toString() === id.toString());

  return (
    <ProductsContext.Provider value={{ products, loading, getProductById ,selectedProduct,setSelectedProduct}}>
      {children}
    </ProductsContext.Provider>
  );
};
