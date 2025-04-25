import { useState } from 'react';
import Image from 'next/image';

interface EstateDetails {
  id: string;
  title: string;
  price: string;
  location: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  yearBuilt: number;
  description: string;
  features: string[];
  images: string[];
  certified: boolean;
  imported: boolean;
  listedSince: string;
}

const EstateDetailsPage = ({ estate }: { estate: EstateDetails }) => {
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
              <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <a href="#" className="text-gray-700 hover:text-blue-600 text-sm font-medium ml-1">
                Properties
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
            </svg>
            Show All Images
          </button>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
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
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
              Contact Agent
            </button>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              All our properties have been inspected and verified by our experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage with sample data
const SampleEstateDetailsPage = () => {
  const sampleEstate: EstateDetails = {
    id: '1',
    title: 'Modern Luxury Apartment',
    price: '$480,000',
    location: 'Downtown, Kigali',
    type: 'Apartment',
    bedrooms: 3,
    bathrooms: 2,
    area: '180 m²',
    yearBuilt: 2020,
    description: 'This modern luxury apartment offers stunning city views, high-end finishes, and premium amenities. Located in the heart of the city with easy access to shopping, dining, and entertainment.',
    features: [
      'Swimming Pool',
      'Gym',
      'Parking',
      'Security',
      'Balcony',
      'Air Conditioning',
      'Fully Furnished',
      'WiFi'
    ],
    images: [
        "/img1.jpg",
        "/img1.jpg",
        "/img1.jpg",
        "/img1.jpg",
        "/img1.jpg"
    ],
    certified: true,
    imported: false,
    listedSince: '3 months ago'
  };

  return <EstateDetailsPage estate={sampleEstate} />;
};

export default SampleEstateDetailsPage;