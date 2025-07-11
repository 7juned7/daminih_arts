'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    name: 'Workshop',
    slug: 'Workshops',
    description: 'Join our hands-on creative workshop.',
    image: '/images/workshop.jpg',
  },
  {
    name: 'Calendar',
    slug: 'Calendars',
    description: 'Art-themed 2025 calendar to inspire your year.',
    image: '/images/calendar.jpg',
  },
  {
    name: 'Paintings',
    slug: 'Paintings',
    description: 'A collection of original artwork for your space.',
    image: '/images/paintings.jpg',
  },
];

const bannerImages = [
"/banner/banner1.jpeg","/banner/banner2.jpeg","/banner/banner3.jpeg","/banner/banner4.jpeg","/banner/banner5.jpeg"
];

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

const Page = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  }),
};


  return (
    <div className="min-h-screen bg-white py-0 px-0">
      {/* 🔼 Sliding Carousel Banner */}
      <div className="w-full mb-12  overflow-hidden shadow-md aspect-[12/5] relative">
  <AnimatePresence initial={false} custom={direction}>
    <motion.img
      key={bannerImages[index]}
      src={bannerImages[index]}
      alt="Banner"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute w-full h-full object-cover"
    />
  </AnimatePresence>
</div>


      {/* 🔽 Product Cards */}
      <div className="m-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideUp}
          >
            <Link href={`/${product.slug}`}>
              <div className="cursor-pointer  space-y-2 hover:shadow-lg transition">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-md text-yellow-600 font-semibold">{product.name}</h2>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page;
