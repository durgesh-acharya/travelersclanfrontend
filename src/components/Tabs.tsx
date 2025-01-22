'use client';
import { useState } from "react";
import TourCard from "./TourCard"; // Card component for tour
import ActivityCard from "./ActivityCard"; // Card component for activity

type Tab = 'tours' | 'activities';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<Tab>('tours');

  // Sample data for tours and activities
  const tours = [
    {
      image: "images/2.jpg",
      duration: "3N4D",
      location: "Paris, France",
      price: "₹45,000"
    },
    {
      image: "images/3.jpg",
      duration: "5N6D",
      location: "Bali, Indonesia",
      price: "₹60,000"
    },
    {
      image: "images/4.jpg",
      duration: "7N8D",
      location: "Tokyo, Japan",
      price: "₹80,000"
    }
  ];

  const activities = [
    {
      image: "images/13.jpg",
      duration: "3H",
      location: "Mountain Hiking",
      price: "₹1,500"
    },
    {
      image: "images/14.jpg",
      duration: "2H",
      location: "City Tour",
      price: "₹1,200"
    },
    {
      image: "images/15.jpg",
      duration: "4H",
      location: "Scuba Diving",
      price: "₹3,000"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="tabs mb-8 flex justify-center">
        <button
          onClick={() => setActiveTab('tours')}
          className={`px-6 py-2 mx-2 text-lg font-semibold ${activeTab === 'tours' ? 'bg-navbarcolor text-white' : 'bg-gray-200'}`}
        >
          Tours
        </button>
        <button
          onClick={() => setActiveTab('activities')}
          className={`px-6 py-2 mx-2 text-lg font-semibold ${activeTab === 'activities' ? 'bg-navbarcolor text-white' : 'bg-gray-200'}`}
        >
          Activities
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activeTab === 'tours' &&
          tours.map((tour, index) => (
            <TourCard
              key={index}
              image={tour.image}
              duration={tour.duration}
              location={tour.location}
              price={tour.price}
            />
          ))}
        
        {activeTab === 'activities' &&
          activities.map((activity, index) => (
            <ActivityCard
              key={index}
              image={activity.image}
              duration={activity.duration}
              location={activity.location}
              price={activity.price}
            />
          ))}
      </div>
    </div>
  );
};

export default Tabs;
