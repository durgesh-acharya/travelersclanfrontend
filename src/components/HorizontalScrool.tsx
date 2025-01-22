// components/HorizontalScroll.tsx
'use client';
import { useState, useRef } from 'react';

type Location = {
  imageUrl: string;
  location: string;
};

const locations: Location[] = [
  { imageUrl: '/images/1.jpg', location: 'New York' },
  { imageUrl: '/images/2.jpg', location: 'Los Angeles' },
  { imageUrl: '/images/3.jpg', location: 'Chicago' },
  { imageUrl: '/images/4.jpg', location: 'San Francisco' },
  { imageUrl: '/images/5.jpg', location: 'New York' },
  { imageUrl: '/images/6.jpg', location: 'Los Angeles' },
  { imageUrl: '/images/7.jpg', location: 'Chicago' },
  { imageUrl: '/images/13.jpg', location: 'San Francisco' },
  { imageUrl: '/images/13.jpg', location: 'New York' },
  { imageUrl: '/images/14.jpg', location: 'Los Angeles' },
  { imageUrl: '/images/15.jpg', location: 'Chicago' },
  { imageUrl: '/images/16.jpg', location: 'San Francisco' },
];

const HorizontalScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mt-0">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 py-4 no-scrollbar"
      >
        {locations.map((location, index) => (
          <div key={index} className="flex-shrink-0 w-48">
            <div className="relative">
              <img
                src={location.imageUrl}
                alt={location.location}
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white py-2 px-4 text-center">
                {location.location}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Grey Divider */}
    
    </div>
  );
};

export default HorizontalScroll;
