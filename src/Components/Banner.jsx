'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeIn' },
  }),
};

const Banner = () => {
  const bannerImages = useMemo(
    () => [
      '/banner/banner1.jpeg',
      '/banner/banner2.jpeg',
      '/banner/banner3.jpeg',
      '/banner/banner4.jpeg',
      '/banner/banner5.jpeg',
      '/banner/banner6.jpeg',
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  return (
    <div className="relative w-full aspect-[12/5] overflow-hidden shadow-md">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={bannerImages[index]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute w-full h-full"
        >
          <Image
            src={bannerImages[index]}
            alt={`Banner ${index + 1}`}
            fill
            priority={index === 0}
            placeholder="empty" // You can use 'blur' if you provide a blurred image
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0  z-10 pointer-events-none" />
    </div>
  );
};

export default Banner;
