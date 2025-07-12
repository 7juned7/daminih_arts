'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// ✅ Dynamic imports with optional fallback
// const AboutMe = dynamic(() => import('@/Components/AboutMe'), {
//   ssr: false,
//   loading: () => <div className="text-center py-10">Loading About Me...</div>,
// });
const Banner = dynamic(() => import('@/Components/Banner'), {
  ssr: false,
  loading: () => <div className="text-center py-10">Loading Banner...</div>,
});

// ✅ Animation variant
const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

const Page = () => {
  // ✅ Memoized static data
  const products = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white space-y-12">
      {/* 🔼 Sliding Carousel Banner */}
      <Banner />

      {/* 🔽 Product Cards */}
      <section className="bg-[#f1f1f1] px-4 py-12">
        <h2 className="text-black text-center mb-12 text-3xl font-semibold">
          Check out my Arts
        </h2>
        <div className="max-w-6xl mx-auto space-y-16">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              className={`flex flex-col md:flex-row ${
                i % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } items-center gap-10`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <Link href={`/${product.slug}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                  />
                </Link>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-lg">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 👤 About Section */}
      {/* <AboutMe /> */}
    </div>
  );
};

export default Page;
