'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedButton from '@/utils/button';

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
        name: 'CALENDARS',
        slug: 'Calendars',
        description:'Art-themed 2025 calendar to inspire your year.',
          image: '/homeimages/calandars.jpeg',
      },
        {
        name: 'PAINTING WORKSHOP',
        slug: 'Workshops',
        description: 'Join our hands-on creative workshop.',
        image: '/homeimages/workshop.jpeg',
      },
      {
        name: 'PAINTINGS',
        slug: 'Paintings',
        description: 'A collection of original artwork for your space.',
          image: '/homeimages/paintings.jpeg',
      },
    ],
    []
  );

  return (
    <div className="min-h-screen ">
      {/* 🔼 Sliding Carousel Banner */}
      <Banner />

      {/* 🔽 Product Cards */}
      <section className="bg-[#f1f1f1] px-4 py-12">
       
        <div className="max-w-6xl mx-auto space-y-16">
         {products.map((product, i) => (
  <motion.div
    key={product.name}
    custom={i}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={slideUp}
     className={`flex  md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-start md:items-center gap-6`}
>
    {/* Image */}
   <div className="relative flex-1 w-[150px] h-[150px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] overflow-hidden rounded-2xl">
  <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center space-y-2 text-center">
    {/* Always visible product name */}
    <p className="text-white text-xs md:text-3xl lg:text-5xl w-full p-2 bg-black/60">
      {product.name}
    </p>

    
  </div>
 <Image
  src={product.image}
  alt={product.name}
  width={500}
  height={500}
  className="w-full h-full object-cover rounded-2xl shadow-lg"
/>

</div>

    {/* Text */}
    <div className="space-y-4 flex-1 flex-col">
      <h3 className="  md:text-2xl font-bold text-gray-800">{product.name}</h3>
      <p className=" text-sm text-gray-600">{product.description}</p>
       <Link href={`/${product.slug}`}>
    <AnimatedButton>
      See More
    </AnimatedButton>
  </Link>
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
