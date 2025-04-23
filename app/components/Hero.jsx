import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img1.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
          Dorms and Apartments
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl">
          Explore the best properties in your area. Rent according to your preferences.
        </p>

        {/* Search Bar */}
        <div className="mt-8 w-full max-w-xl flex items-center rounded-full bg-white shadow-lg overflow-hidden px-4 py-2">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by city, neighborhood, or address"
            className="w-full outline-none text-sm sm:text-base text-gray-700 bg-transparent"
          />
          <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
