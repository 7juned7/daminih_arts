'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AboutMe from '@/Components/AboutMe';
import Banner from '@/Components/Banner';

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
 

  return (
    <div className="min-h-screen  py-0 px-0 mb-16 space-y-12 bg-white">
      {/* 🔼 Sliding Carousel Banner */}
      <Banner/>


      {/* 🔽 Product Cards */}
      <h2 className='text-black text-center m-8 text-3xl' >Check out the my Arts</h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
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
        <div className="cursor-pointer space-y-2 transition">
          <img
            src={product.image}
            alt={product.name}
            className="w-[350px] h-[350px] bg-red-600 object-cover rounded-lg mb-4"
          />
          <h2 className="text-md text-black font-semibold">{product.name}</h2>
          <p className="text-gray-600 text-sm">{product.description}</p>
        </div>
      </Link>
    </motion.div>
  ))}
</div>
<AboutMe />

    </div>
  );
};

export default Page;
