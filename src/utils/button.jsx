"use client";

import React from "react";

const AnimatedButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative cursor-pointer overflow-hidden border-2 border-black px-2 py-1 md:px-6 md:py-3 font-semibold text-black transition-all duration-500 group w-fit ${className}`}
    >
      {/* Background fill animation */}
      <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
      
      {/* Text */}
      <span className="relative z-10 transition duration-300 group-hover:text-white">
        {children}
      </span>
    </button>
  );
};

export default AnimatedButton;
