'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bannerImages = [
  "/banner/banner1.jpeg",
  "/banner/banner2.jpeg",
  "/banner/banner3.jpeg",
  "/banner/banner4.jpeg",
  "/banner/banner5.jpeg"
];

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

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mb-12 overflow-hidden shadow-md aspect-[12/5] relative">
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
          className="absolute w-full h-full object-cover z-0"
        />
      </AnimatePresence>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
    </div>
  );
};

export default Banner;
