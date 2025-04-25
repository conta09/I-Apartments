"use client";
import { useState } from 'react';
import Image from 'next/image';

const EstateDetailsPage = ({ estate }) => {
  const [mainImage, setMainImage] = useState(estate.images[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <a href="#" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
              </svg>
              <a href="#" className="text-gray-700 hover:text-blue-600 text-sm font-medium ml-1">
                Properties
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
              </svg>
              <span className="text-blue-600 text-sm font-medium ml-1">
                {estate.title}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Gallery */}
        <div className="lg:w-2/3">
          <div className="relative h-96 w-full rounded-xl overflow-hidden mb-4 bg-gray-100">
            <Image
              src={mainImage}
              alt={estate.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {estate.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setMainImage(image)}
                className={`relative h-24 rounded-md overflow-hidden ${mainImage === image ? 'ring-2 ring-blue-500' : ''}`}
              >
                <Image
                  src={image}
                  alt={`${estate.title} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          <button className="mt-4 text-blue-600 font-medium flex items-center text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            Show All Images
          </button>

          {/* Things to Know Section */}
          <div className="mt-12 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Things to Know</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Availability</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Available for immediate move-in
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Minimum lease: 12 months
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Policies</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Pets allowed (with deposit)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    No smoking allowed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{estate.title}</h1>
            <p className="text-gray-600 mb-4">{estate.location}</p>

            <div className="text-3xl font-bold text-blue-600 mb-6">{estate.price}</div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-gray-500 text-sm">Type</p>
                <p className="font-medium">{estate.type}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Bedrooms</p>
                <p className="font-medium">{estate.bedrooms}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Bathrooms</p>
                <p className="font-medium">{estate.bathrooms}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Area</p>
                <p className="font-medium">{estate.area}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Year Built</p>
                <p className="font-medium">{estate.yearBuilt}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-gray-600">{estate.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Features</h3>
              <ul className="grid grid-cols-2 gap-2">
                {estate.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {estate.certified && (
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Certified
                </span>
              )}
              {estate.imported && (
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Imported
                </span>
              )}
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Listed {estate.listedSince}
              </span>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Contact Agent
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              All our properties have been inspected and verified by our experts.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-gray-50 rounded-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +250 788 123 456
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@estateapp.com
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                KN 4 Ave, Kigali, Rwanda
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">Help Center</a>
              </li>
              
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to get updates on new properties</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-grow"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Estate App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Example usage with sample data
const SampleEstateDetailsPage = () => {
  const sampleEstate = {
    id: '1',
    title: 'Modern Luxury Apartment',
    price: '$480,000',
    location: 'Downtown, Kigali',
    type: 'Apartment',
    bedrooms: 3,
    bathrooms: 2,
    area: '180 m²',
    yearBuilt: 2020,
    description:
      'This modern luxury apartment offers stunning city views, high-end finishes, and premium amenities. Located in the heart of the city with easy access to shopping, dining, and entertainment.',
    features: [
      'Swimming Pool',
      'Gym',
      'Parking',
      'Security',
      'Balcony',
      'Air Conditioning',
      'Fully Furnished',
      'WiFi',
    ],
    images: ['/img1.jpg', '/img1.jpg', '/img1.jpg', '/img1.jpg', '/img1.jpg'],
    certified: true,
    imported: false,
    listedSince: '3 months ago',
  };

  return <EstateDetailsPage estate={sampleEstate} />;
};

export default SampleEstateDetailsPage;