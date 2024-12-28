'use client';

import React, { useEffect, useState } from 'react';

interface HotelDetails {
  hotelName: string;
  hotelLocation: string;
  budget: number;
  hotelDescription: string;
}

const Hotels: React.FC = () => {
  const [hotelDetails, setHotelDetails] = useState<HotelDetails>({
    hotelName: '',
    hotelLocation: '',
    hotelDescription: '',
    budget: 0,
  });

  const [hotels, setHotels] = useState<HotelDetails[]>([]);

  useEffect(() => {
    const storedHotels = localStorage.getItem('hotels');
    if (storedHotels) {
      setHotels(JSON.parse(storedHotels));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedHotels = [...hotels, hotelDetails];
    setHotels(updatedHotels);
    localStorage.setItem('hotels', JSON.stringify(updatedHotels));
    setHotelDetails({ hotelName: '', hotelLocation: '', hotelDescription: '', budget: 0 });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setHotelDetails({
      ...hotelDetails,
      [name]: name === 'budget' ? parseFloat(value) : value,
    });
  };

  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Hotels</h1>
      <form
        className="max-w-md mx-auto text-white shadow-md rounded-md p-4 bg-customBlack"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="hotelName">
            Hotel Name
          </label>
          <input
            id="hotelName"
            name="hotelName"
            type="text"
            value={hotelDetails.hotelName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="hotelLocation">
            Hotel Location
          </label>
          <input
            id="hotelLocation"
            name="hotelLocation"
            type="text"
            value={hotelDetails.hotelLocation}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="budget">
            Budget ($)
          </label>
          <input
            id="budget"
            name="budget"
            type="number"
            value={hotelDetails.budget}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="hotelDescription">
            Description
          </label>
          <textarea
            id="hotelDescription"
            name="hotelDescription"
            value={hotelDetails.hotelDescription}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            rows={3}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Add Hotel
        </button>
      </form>

      {/* this is where the added hotels will be displayed */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-center mb-4">Your Added Hotels</h2>
        {hotels.length === 0 ? (
          <p className="text-center text-gray-500">No hotels added yet.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map((hotel, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md p-4 border border-gray-200"
              >
                <h3 className="text-lg font-bold">{hotel.hotelName}</h3>
                <p className="text-sm text-gray-500">{hotel.hotelLocation}</p>
                <p className="text-sm text-gray-500 mt-2">Budget: ${hotel.budget}</p>
                <p className="text-sm mt-2">{hotel.hotelDescription}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hotels;
