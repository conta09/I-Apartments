import React from 'react';
import Card from './Card';
const Rentals = () => {
  const rentalsData = [
    {
      image: '/img1.jpg',
      title: 'Perfect Fit',
      timeAgo: '16H ago',
      beds: 3,
      baths: 2,
      price: '$142,900',
      address: '130 Milcom Ave',
      location: 'Checktowaga, NY 14227',
    },
    {
      image: '/img1.jpg',
      title: 'Cozy Home',
      timeAgo: '1D ago',
      beds: 2,
      baths: 1,
      price: '$120,000',
      address: '456 Elm St',
      location: 'Rochester, NY 14620',
    },
    {
      image: '/img1.jpg',
      title: 'Modern Apartment',
      timeAgo: '2D ago',
      beds: 4,
      baths: 3,
      price: '$250,000',
      address: '789 Oak St',
      location: 'Buffalo, NY 14201',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Our Rentals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rentalsData.map((rental, index) => (
          <Card
            key={index}
            image={rental.image}
            title={rental.title}
            timeAgo={rental.timeAgo}
            beds={rental.beds}
            baths={rental.baths}
            price={rental.price}
            address={rental.address}
            location={rental.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Rentals;