"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  

  return (
    <nav className=" bg-white  z-50">
<div className="max-w-7xl  mx-auto flex items-center justify-between px-8 py-2">
        {/* Cart Icon - Mobile Left */}
        <Link href="/cart" className="relative z-60 md:hidden text-black inline-block">
    <ShoppingCart />
   <AnimatePresence>
  {cartCount > 0 && (
    <motion.span
      key={`mobile-${cartCount}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1.2 }}
      exit={{ scale: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="absolute -top-2 -right-2 text-white text-[14px] text-center w-[18px] h-[18px] bg-black rounded-full"
    >
      {cartCount}
    </motion.span>
  )}
</AnimatePresence>
  </Link>

        {/* Logo - Center on mobile, left on desktop */}
        <div className="">
          <Link
            href="/"
            className="text-black flex items-center gap-2"
          >
           <Image
  src="/logo/logo.png"  // ✅ Start with `/` not `./`
  alt="Logo"
  width={100}
  height={20}
  className="z-60"
/>
          </Link>
        </div>

        {/* Hamburger - Right */}
        <button className="md:hidden text-black z-60 cursor-pointer "  onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex" >

        <ul className="hidden md:flex space-x-6 text-black  ml-auto">
         <li className="relative group transition text-base hover:text-black">
  <Link href="/" className="relative z-10 flex flex-col items-center">
    {/* Text */}
    Home

    {/* Underline */}
    <span className="absolute left-0 z -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>

    {/* Cat Image: Slide up from text on hover */}
    <Image
  src="/logo/cat.png"
  alt="Cat"
  width={50}
  height={50}
  className="absolute bottom-4 -z-[10] translate-y-4 opacity-0 group-hover:translate-y-[0.5rem] group-hover:opacity-100 transition-all duration-500"
/>
  </Link>
</li>

          <li className="relative group transition text-base hover:text-black">
  <Link href="/Workshops" className="relative z-10 flex flex-col items-center">
    {/* Text */}
    Workshops

    {/* Underline */}
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>

    {/* Cat Image: Slide up from text on hover */}
    <Image
  src="/logo/cat.png"
  alt="Cat"
  width={50}
  height={50}
  className="absolute bottom-4 -z-[10] translate-y-4 opacity-0 group-hover:translate-y-[0.5rem] group-hover:opacity-100 transition-all duration-500"
/>
  </Link>
</li>
            <li className="relative group transition text-base hover:text-black">
  <Link href="/Calendars" className="relative z-10 flex flex-col items-center">
    {/* Text */}
    Calendars

    {/* Underline */}
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>

    {/* Cat Image: Slide up from text on hover */}
    <Image
  src="/logo/cat.png"
  alt="Cat"
  width={50}
  height={50}
  className="absolute bottom-4 -z-[10] translate-y-4 opacity-0 group-hover:translate-y-[0.5rem] group-hover:opacity-100 transition-all duration-500"
/>
  </Link>
</li>
                 <li className="relative group transition text-base hover:text-black">
  <Link href="/Paintings" className="relative z-10 flex flex-col items-center">
    {/* Text */}
    Paintings

    {/* Underline */}
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>

    {/* Cat Image: Slide up from text on hover */}
    <Image
  src="/logo/cat.png"
  alt="Cat"
  width={50}
  height={50}
  className="absolute bottom-4 -z-[10] translate-y-4 opacity-0 group-hover:translate-y-[0.5rem] group-hover:opacity-100 transition-all duration-500"
/>
  </Link>
</li>
          <li className="relative group transition text-base hover:text-black">
  <Link href="/about" className="relative z-10 flex flex-col items-center">
    {/* Text */}
    About

    {/* Underline */}
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>

    {/* Cat Image: Slide up from text on hover */}
    <Image
  src="/logo/cat.png"
  alt="Cat"
  width={50}
  height={50}
  className="absolute bottom-4 -z-[10] translate-y-4 opacity-0 group-hover:translate-y-[0.5rem] group-hover:opacity-100 transition-all duration-500"
/>
  </Link>
</li>
        
        </ul>
        </div>
      <div className="hidden md:block" >
         <Link href="/cart" className="relative  text-black ">
    <ShoppingCart />
   <AnimatePresence>
  {cartCount > 0 && (
    <motion.span
      key={`desktop-${cartCount}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1.2 }}
      exit={{ scale: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="absolute -top-2 -right-2 text-white text-center text-[14px] w-[18px] h-[18px] bg-black rounded-full"
    >
      {cartCount}
    </motion.span>
  )}
</AnimatePresence>
  </Link>
      </div>
      </div>

      {/* Mobile Animated Dropdown */}
  <AnimatePresence>
  {menuOpen && (
    <>
      {/* Simple dark overlay (no glassy effect) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black z-30"  // Removed backdrop-blur and transparency
        onClick={toggleMenu}
      />

      {/* Plain dropdown panel (no glassy look) */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="md:hidden fixed  bottom-0 top-0 left-0 w-full bg-white z-40 px-4 pb-6 shadow-lg"
      >
        <ul className="space-y-4 mt-40 text-black text-xl">
          <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/Calendars" onClick={toggleMenu}>Calendars</Link></li>
          <li><Link href="/Workshops" onClick={toggleMenu}>Workshops</Link></li>
          <li><Link href="/Paintings" onClick={toggleMenu}>Paintings</Link></li>
          <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
        </ul>
      </motion.div>
    </>
  )}
</AnimatePresence>





    </nav>
  );
};

export default Navbar;
