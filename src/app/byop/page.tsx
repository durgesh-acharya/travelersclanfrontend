// pages/about.tsx
"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { FC, useState } from 'react';



interface Location {
    id: number;
    name: string;
  }
  
  const locations: Location[] = [
    { id: 1, name: 'New York' },
    { id: 2, name: 'Los Angeles' },
    { id: 3, name: 'Chicago' },
    { id: 4, name: 'San Francisco' },
    // Add more locations as needed
  ];


const BYOP: FC = () => {
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
 





  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocation = locations.find(location => location.id === parseInt(event.target.value));
    setSelectedLocation(selectedLocation || null);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = () => {
    // Handle the submit logic
    console.log('Selected Location:', selectedLocation);
    console.log('Selected Date:', selectedDate);
    
  };
  return (
    <>
    <Navbar />
   <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Select Your Options</h2>

        {/* Location Dropdown */}
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700">Select Location</label>
          <select
            id="location"
            onChange={handleLocationChange}
            className="mt-2 block w-full p-2 border rounded-lg bg-gray-50"
          >
            <option value="">Select Location</option>
            {locations.map(location => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>

        {/* Date Picker */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700">Select Date</label>
          <input
            id="date"
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="mt-2 block w-full p-2 border rounded-lg bg-gray-50"
          />
        </div>

        {/* Go Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-navbarcolor text-white py-2 rounded-lg hover:bg-blue-800 transition"
        >
          Go
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default BYOP;
