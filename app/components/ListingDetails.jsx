// components/ListingDetails.tsx
export default function ListingDetails() {
    return (
      <div className="space-y-6">
        {/* Title Section */}
        <div className="border-b pb-6">
          <h1 className="text-2xl font-semibold mb-4">Entire rental unit in Yeni Iskele</h1>
          <div className="grid grid-cols-2 gap-4 text-gray-600">
            <div>4 guests</div>
            <div>1 bedroom</div>
            <div>1 bed</div>
            <div>1 bath</div>
          </div>
        </div>
  
        {/* Host Info */}
        <div className="border-b py-6">
          <h3 className="font-semibold">Hosted by Nunei</h3>
          <p className="text-gray-500 text-sm">New Host</p>
        </div>
  
        {/* Amenities */}
        <div className="space-y-6 py-6">
          <div>
            <h3 className="font-semibold mb-2">Beach and garden views</h3>
            <p className="text-gray-600">Soak up the views during your stay.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Dive right in</h3>
            <p className="text-gray-600">This is one of the few places in the area with a pool.</p>
          </div>
        </div>
  
        {/* Description */}
        <div className="border-t pt-6">
          <p className="text-gray-600">
            Located in a central location, this apartment is 5 minutes walk from the sea...
          </p>
        </div>
      </div>
    );
  }