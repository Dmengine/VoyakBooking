'use client';

import React, { useState, useEffect } from 'react';

interface FlightDetails {
  location: string;
  destination: string;
  departureDate: string;
}

const Flights: React.FC = () => {
  const [flightDetails, setFlightDetails] = useState<FlightDetails>({
    location: '',
    destination: '',
    departureDate: '',
  });

  const [flights, setFlights] = useState<FlightDetails[]>([]);

  useEffect(() => {
    const storedFlights = localStorage.getItem('flights');
    if (storedFlights) {
      setFlights(JSON.parse(storedFlights));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFlightDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedFlights = [...flights, flightDetails];
    setFlights(updatedFlights);
    localStorage.setItem('flights', JSON.stringify(updatedFlights));

    setFlightDetails({ location: '', destination: '', departureDate: '' });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 border-2">
      <h1 className="text-xl font-bold mb-4 text-center">Flights</h1>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4 sm:justify-between">
        <div className="flex-1">
          <label htmlFor="location" className="block text-sm font-medium">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={flightDetails.location}
            onChange={handleInputChange}
            placeholder="Enter your location"
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        <div className="flex-1">
          <label htmlFor="destination" className="block text-sm font-medium">
            Destination:
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={flightDetails.destination}
            onChange={handleInputChange}
            placeholder="Enter your destination"
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        <div className="flex-1">
          <label htmlFor="departureDate" className="block text-sm font-medium">
            Departure Date:
          </label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={flightDetails.departureDate}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded font-medium w-full sm:w-auto mt-4 sm:mt-0"
        >
          Add Flight
        </button>
      </form>

      {/* Flight List Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Your Flights</h2>
        {flights.length > 0 ? (
          <ul className="space-y-2">
            {flights.map((flight, index) => (
              <li
                key={index}
                className="p-4 border border-gray-300 rounded bg-gray-50"
              >
                <p>
                  <strong>Location:</strong> {flight.location}
                </p>
                <p>
                  <strong>Destination:</strong> {flight.destination}
                </p>
                <p>
                  <strong>Departure Date:</strong> {flight.departureDate}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No flights added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Flights;
