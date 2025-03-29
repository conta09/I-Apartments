import ImageGallery from "../components/ImageGallery";
import BookingWidget from "../components/BookingWidget";
import ListingDetails from "../components/ListingDetails";
export default function ListingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <ImageGallery />
          <ListingDetails />
        </div>
        
        {/* Right Column */}
        <div className="sticky top-8 h-fit">
          <BookingWidget />
        </div>
      </div>
    </div>
  );
}