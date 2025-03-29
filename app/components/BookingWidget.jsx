'use client'

import { useState } from 'react';

export default function BookingWidget() {
  const [nights, setNights] = useState(2);

  return (
    <div className="border rounded-xl p-6 shadow-xl">
      <div className="mb-6">
        <span className="text-2xl font-semibold">$35</span>
        <span className="text-gray-600">/night</span>
      </div>

      {/* Date Picker */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        <div className="border p-3 rounded-lg">Check-in</div>
        <div className="border p-3 rounded-lg">Check-out</div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">$44 x {nights} nights</span>
          <span>${44 * nights}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Special offer</span>
          <span className="text-green-600">-$17</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Cleaning fee</span>
          <span>$11</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Service fee</span>
          <span>$15</span>
        </div>
      </div>

      {/* Total Price */}
      <div className="border-t pt-4 mb-6">
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${44 * nights - 17 + 11 + 15}</span>
        </div>
      </div>

      <button className="w-full bg-rose-500 text-white py-4 rounded-xl hover:bg-rose-600 transition">
        Reserve
      </button>
      <p className="text-center text-gray-500 text-sm mt-3">
        You won't be charged yet
      </p>
    </div>
  );
}