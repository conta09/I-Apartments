import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
          Find Student Apartments
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl">
          Best places to stay during your university journey.
        </p>

        {/* Filters Card */}
        <div className="mt-8 w-full max-w-5xl bg-white bg-opacity-90 rounded-2xl shadow-xl p-6 backdrop-blur-md">
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* Location */}
            <input
              type="text"
              placeholder="Location"
              className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Type */}
            <select
              className="w-full border border-gray-300 rounded-xl p-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>Type</option>
              <option>Room</option>
              <option>1+1</option>
              <option>2+1</option>
              <option>3+1</option>
            </select>

            {/* Budget */}
            <select
              className="w-full border border-gray-300 rounded-xl p-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>Budget</option>
              <option>Below 4000 USD</option>
              <option>4000 - 6000 USD</option>
              <option>Above 6000 USD</option>
            </select>

            {/* Payment Plan */}
            <select
              className="w-full border border-gray-300 rounded-xl p-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>Payment Plan</option>
              <option>Monthly</option>
              <option>3 Months</option>
              <option>Yearly</option>
            </select>

            {/* Furnishing */}
            <select
              className="w-full border border-gray-300 rounded-xl p-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>Furnishing</option>
              <option>Furnished</option>
              <option>Unfurnished</option>
            </select>
          </form>

          {/* Search Button */}
          <div className="flex justify-end mt-6">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300">
              <FaSearch /> Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
