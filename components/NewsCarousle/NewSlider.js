"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
const NewSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 5;

  const totalItems = items.length;
  const maxIndex = totalItems - visibleCards;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <div className="relative w-full overflow-hidden bg-black text-white">
      <div className="border-t-2 border-white px-4 py-1 mb-2 mt-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Discover more from BBC</h2>

          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              className="hover:bg-gray-600 text-white p-2 rounded-full"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={handleNext}
              className="hover:bg-gray-600 text-white p-2 rounded-full"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider Content */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          width: `${(totalItems / visibleCards) * 100}%`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 p-4"
            style={{ flex: "0 0 20%" }}
          >
            
            <div className="p-4 border-b-2 border-white">
            <Image src={item.image} alt={item.title} width={300} height={300} className="mb-4" />
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewSlider;
