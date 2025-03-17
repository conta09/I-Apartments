import React from 'react'
import { FaUserCircle, FaEllipsisV, FaSearch } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Navigation */}
        <div className="flex h-16 items-center justify-between">
          
          {/* Left Section - Logo and Results */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Home</h1>
            
          </div>

          {/* Middle Section - Search (Desktop) */}
          <div className="hidden flex-1 max-w-2xl px-8 lg:block">
            <div className="flex items-center rounded-full border px-4 py-2 text-sm text-gray-400 hover:border-gray-400">
              <FaSearch className="mr-2 h-4 w-4" />
              Search by location...
            </div>
          </div>

          {/* Right Section - Navigation and Icons */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden space-x-6 text-sm text-gray-500 lg:flex">
              <button className="hover:text-gray-700">Buy</button>
              <button className="hover:text-gray-700">Rent</button>
              <button className="hover:text-gray-700">Sell</button>
              <button className="hover:text-gray-700">Find Agent</button>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-2">
              <button className="hidden rounded-full p-2 hover:bg-gray-100 lg:block">
                <FaUserCircle className="h-6 w-6 text-gray-500" />
              </button>
              <button className="rounded-full p-2 hover:bg-gray-100">
                <FaEllipsisV className="h-6 w-6 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search and Filters */}
        <div className="flex h-12 items-center justify-between border-t lg:hidden">
          {/* Mobile Search */}
          <button className="flex items-center text-sm text-gray-500">
            <FaSearch className="mr-2 h-4 w-4" />
            Search
          </button>

          {/* Mobile Filters */}
          <div className="flex space-x-4 text-sm text-gray-500">
            <button>2-4 Beds</button>
            <button>All Types</button>
          </div>
        </div>
      </div>
    </nav>
  );
}