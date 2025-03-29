// components/ImageGallery.tsx
export default function ImageGallery() {
    const images = [
      "/img1.jpg",
      "/img1.jpg",
      "/img1.jpg",
      "/img1.jpg",

     
    ];
  
    return (
      <div className="grid grid-cols-4 md:grid-cols-4 gap-2 mb-8">
        <div className="col-span-2 row-span-2 h-96 bg-gray-200 rounded-lg overflow-hidden">
          <img 
            src={images[0]} 
            alt="Main listing" 
            className="w-full h-full object-cover"
          />
        </div>
        {images.slice(1).map((img, index) => (
          <div key={index} className="h-48 bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={img} 
              alt={`Listing ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    );
  }