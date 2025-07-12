"use client";

import { toast } from "@/utils/toast";
import { createContext, useContext, useState, useEffect } from "react";


const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("daminih-cart");
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("daminih-cart", JSON.stringify(cartItems));
  }, [cartItems]);

const addToCart = (product) => {
  const priceNumber = Number(product.price.toString().replace(/[^\d]/g, ""));
  let updated = false;

  setCartItems((prev) => {
    const exists = prev.find((item) => item.id === product.id);
    updated = !!exists;

    if (exists) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...product, quantity: 1, price: priceNumber }];
  });

  // This gets called only once
  setTimeout(() => {
    toast.show(updated ? "Quantity updated in cart!" : "Added to cart!", "success");
  }, 0);
};
  const clearCart = () => setCartItems([]);

  const updateQuantity = (id, delta) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    )
  );

  // Safely show toast after state update (only once)
  
  setTimeout(() => {
    toast.show("Quantity updated!", "default");
  }, 0);
};


  const removeItem = (id) => {
  setCartItems((prev) => prev.filter((item) => item.id !== id));

  // Trigger toast outside render cycle
  setTimeout(() => {
    toast.show("Item removed from cart.", "error");
  }, 0);
};

const total = cartItems.reduce((sum, item) => {
  const price = item.offer ?? item.price; // Use offer if available
  return sum + price * item.quantity;
}, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeItem, total ,clearCart}}
    >
      {children}
    </CartContext.Provider>
  );
};
