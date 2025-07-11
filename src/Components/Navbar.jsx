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
    <nav className="bg-[#fffdf5]  shadow-md tracking-[1px] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between md:justify-start md:gap-8 relative">
        {/* Cart Icon - Mobile Left */}
        <Link href="/cart" className="relative z-60 md:hidden text-yellow-600 inline-block">
    <ShoppingCart />
    {cartCount > 0 && (
      <span className="absolute -top-2 -right-2 text-white text-[14px] text-center w-[18px] h-[18px] bg-yellow-600 rounded-full">
        {cartCount}
      </span>
    )}
  </Link>

        {/* Logo - Center on mobile, left on desktop */}
        <div className="">
          <Link
            href="/"
            className="   text-yellow-600 flex items-center gap-2"
          >
           <Image
  src="/logo/logo.png"  // ✅ Start with `/` not `./`
  alt="Logo"
  width={60}
  height={20}
  className="z-60"
/>
          </Link>
        </div>

        {/* Hamburger - Right */}
        <button className="md:hidden text-yellow-600 z-60 cursor-pointer "  onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-yellow-600  ml-auto">
           <li className="hover:text-yellow-700 transition"><Link href="/">Home</Link></li>
          <li className="hover:text-yellow-700 transition"><Link href="/Workshops">Workshops</Link></li>
             <li className="hover:text-yellow-700 transition"><Link href="/Calendars">Calendars</Link></li>
                <li className="hover:text-yellow-700 transition"><Link href="/Paintings">Paintings</Link></li>
          <li className="hover:text-yellow-700 transition"><Link href="/about">About</Link></li>
         <Link href="/cart" className="relative hidden text-yellow-600 hover:text-yellow-700 inline-block">
    <ShoppingCart />
    {cartCount > 0 && (
      <span className="absolute -top-2 -right-2 text-white text-center text-[14px] w-[18px] h-[18px] bg-yellow-600 rounded-full">
        {cartCount}
      </span>
    )}
  </Link>
        </ul>
      </div>

      {/* Mobile Animated Dropdown */}
   <AnimatePresence>
  {menuOpen && (
    <>
      {/* Glassy overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/10 backdrop-blur-md z-30"
        onClick={toggleMenu}
      />

      {/* Glassy dropdown panel */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="md:hidden fixed bottom-0 top-0  left-0 w-full backdrop-blur-md bg-black/30 border border-white/20 shadow-lg rounded-b-xl z-40 px-4 pb-6"
      >
        <ul className="space-y-4 mt-40 text-yellow-600 text-xl ">
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
