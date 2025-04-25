"use client";
import { useState } from 'react';
import { HiHome, HiPlus, HiPhotograph, HiCog, HiUser, HiOutlineDocumentText } from 'react-icons/hi';

const RealtorDashboard = () => {
  const [activeTab, setActiveTab] = useState('properties');
  const [listings, setListings] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    area: '',
    yearBuilt: new Date().getFullYear(),
    description: '',
    features: [],
    images: [],
    contactEmail: '',
    contactPhone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setFormData(prev => ({ ...prev, images: [...prev.images, ...newImages] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setListings([...listings, formData]);
    setFormData({
      title: '',
      price: '',
      location: '',
      type: 'Apartment',
      bedrooms: 2,
      bathrooms: 2,
      area: '',
      yearBuilt: new Date().getFullYear(),
      description: '',
      features: [],
      images: [],
      contactEmail: '',
      contactPhone: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white h-screen shadow-lg fixed">
          <div className="p-4">
            <h2 className="text-2xl font-bold text-blue-600 mb-8">Realtor Dashboard</h2>
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('properties')}
                className={`w-full flex items-center space-x-2 p-3 rounded-lg ${activeTab === 'properties' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <HiHome className="w-5 h-5" />
                <span>Properties</span>
              </button>
              <button
                onClick={() => setActiveTab('add-new')}
                className={`w-full flex items-center space-x-2 p-3 rounded-lg ${activeTab === 'add-new' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <HiPlus className="w-5 h-5" />
                <span>Add New</span>
              </button>
              <button
                onClick={() => setActiveTab('media')}
                className={`w-full flex items-center space-x-2 p-3 rounded-lg ${activeTab === 'media' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <HiPhotograph className="w-5 h-5" />
                <span>Media</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center space-x-2 p-3 rounded-lg ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <HiCog className="w-5 h-5" />
                <span>Settings</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-64 p-8 flex-1">
          {activeTab === 'add-new' && (
            <form onSubmit={handleSubmit} className="max-w-4xl">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h1 className="text-2xl font-bold mb-6">Add New Property</h1>
                
                {/* Basic Information */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Property Title</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      >
                        <option>Apartment</option>
                        <option>House</option>
                        <option>Villa</option>
                        <option>Office</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Specifications */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-4">Specifications</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                      <input
                        type="number"
                        name="bedrooms"
                        value={formData.bedrooms}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                      <input
                        type="number"
                        name="bathrooms"
                        value={formData.bathrooms}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Area (m²)</label>
                      <input
                        type="number"
                        name="area"
                        value={formData.area}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Year Built</label>
                      <input
                        type="number"
                        name="yearBuilt"
                        value={formData.yearBuilt}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Media Upload */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-4">Property Images</h2>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <input
                      type="file"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer inline-block"
                    >
                      <HiPhotograph className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Drag and drop images or click to upload</p>
                      <p className="text-sm text-gray-500">Recommended size: 1200x800 pixels</p>
                    </label>
                  </div>
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {formData.images.map((img, index) => (
                      <div key={index} className="relative aspect-square">
                        <img
                          src={img}
                          alt={`Preview ${index}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                      <input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Phone</label>
                      <input
                        type="tel"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submission */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Publish Property
                </button>
              </div>
            </form>
          )}

          {activeTab === 'properties' && (
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Your Properties</h1>
                <button 
                  onClick={() => setActiveTab('add-new')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
                >
                  <HiPlus className="w-5 h-5 mr-2" />
                  Add New
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {listings.map((listing, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gray-100 relative">
                      {listing.images[0] && (
                        <img
                          src={listing.images[0]}
                          alt={listing.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{listing.title}</h3>
                      <p className="text-blue-600 text-xl font-bold mb-2">{listing.price}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <HiOutlineDocumentText className="w-4 h-4 mr-2" />
                        {listing.type}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default RealtorDashboard;