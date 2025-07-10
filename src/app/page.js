'use client';

import React from 'react';
import Link from 'next/link';

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

const Page = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link href={`/${product.slug}`} key={product.name}>
            <div className="cursor-pointer border p-4 rounded-xl shadow-md hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl text-yellow-600 font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
