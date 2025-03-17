import React from 'react';

const Card = ({ image, title, timeAgo, beds, baths, price, address, location }) => {
  return (
    <div className="bg-[#F1F4F4] max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img className="w-full rounded-t-2xl rounded-b-sm h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {timeAgo}
        </p>
        <div className="mt-2">
          <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {beds} Beds
          </span>
          <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {baths} Baths
          </span>
        </div>
        <div className="mt-4">
          <p className="text-gray-900 font-bold text-xl">{price}</p>
          <p className="text-gray-600 text-sm">{address}</p>
          <p className="text-gray-600 text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;