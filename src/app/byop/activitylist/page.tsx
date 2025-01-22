// pages/about.tsx
"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { FC, useState} from 'react';

interface Activity {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const activities: Activity[] = [
  {
    id: 1,
    name: "Scuba Diving",
    description: "Explore the underwater world.",
    price: 150,
    imageUrl: "/images/d1.jpg",
  },
  {
    id: 2,
    name: "Bungee Jumping",
    description: "Experience the thrill of free fall.",
    price: 120,
    imageUrl: "/images/d2.jpg",
  },
  {
    id: 3,
    name: "Paragliding",
    description: "Fly high and enjoy the view.",
    price: 100,
    imageUrl: "/images/d3.jpg",
  },
  // Add more activities as needed
];



const ActivityList: FC = () => {

  const [selectedActivities, setSelectedActivities] = useState<number[]>([]);

  const toggleActivitySelection = (id: number) => {
    setSelectedActivities((prev) =>
      prev.includes(id)
        ? prev.filter((activityId) => activityId !== id)
        : [...prev, id]
    );
  };

  const handleCheckout = () => {
    alert(
      `Selected Activities: ${selectedActivities
        .map((id) => activities.find((activity) => activity.id === id)?.name)
        .join(", ")}`
    );
  };
  
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Activities</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={activity.imageUrl}
                alt={activity.name}
                className="w-full h-48 object-cover"
              />
              <input
                type="checkbox"
                checked={selectedActivities.includes(activity.id)}
                onChange={() => toggleActivitySelection(activity.id)}
                className="absolute top-2 right-2 w-5 h-5 bg-white rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold">{activity.name}</h2>
              <p className="text-gray-600 text-sm mt-2">
                {activity.description}
              </p>
              <p className="text-blue-500 font-semibold mt-2">
                ${activity.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t">
        <button
          onClick={handleCheckout}
          disabled={selectedActivities.length === 0}
          className={`w-full py-3 text-lg font-bold rounded-md ${
            selectedActivities.length > 0
              ? "bg-navbarcolor text-white hover:bg-blue-800"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Checkout ({selectedActivities.length} Selected)
        </button>
      </div>
    </div>
    
    <Footer />
    </>
  );
}

export default ActivityList;
