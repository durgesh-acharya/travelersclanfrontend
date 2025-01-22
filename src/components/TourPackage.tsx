"use client"
import React from "react";
import SubVariant from "./subvariant";
import RouteContainer from "./RouteContainer";
import CategorySelector from "./CategorySelector";
import InclusionExclusion from "./InclusionExclusion";
import KnowBeforeYouGo from "./KnowBeforeYoGo";

interface TourPackageProps {
  title: string;
  duration: string;
  classification: string;
  description: string[];
  price: number;
}

const packages = [
  {
    imageUrl: "/images/d1.jpg",
    tripDuration: "3 Days",
    price: "29999",
    altText: "Package 1",
  },
  {
    imageUrl: "/images/d2.jpg",
    tripDuration: "5 Days",
    price: "39999",
    altText: "Package 2",
  },
  {
    imageUrl: "/images/d3.jpg",
    tripDuration: "7 Days",
    price: "49999",
    altText: "Package 3",
  },
  {
    imageUrl: "/images/d4.jpg",
    tripDuration: "4 Days",
    price: "24999",
    altText: "Package 4",
  },
  {
    imageUrl: "/images/5.jpg",
    tripDuration: "6 Days",
    price: "34999",
    altText: "Package 5",
  },
  {
    imageUrl: "/images/6.jpg",
    tripDuration: "8 Days",
    price: "54999",
    altText: "Package 6",
  },
];

const inclusions = [
  'Round trip airfare',
  'Hotel stay for 5 nights',
  'Daily breakfast',
  'City tour',
  'Travel insurance',
];

const exclusions = [
  'Personal expenses',
  'Meals outside the package',
  'Tips and gratuities',
  'Visa fees',
  'Optional activities',
];

const clauses = [
  'Any breakage or damage of any items in the resort/hotel will be charged at actuals.',
  'All international and domestic airfare, visa fees, airport tax, or any kind of insurance cover is not a part of the package.',
  'All foreign nationals must share their passport and visa details at the time of arrival.',
  'Any personal expenses or items of personal nature will not be included in the package.',
  'Do not consume alcoholic beverages or drugs, if you are found intoxicated, you might be asked to leave the tour/premises.',
  'The hotels are subject to their availability. In case they are not available, the travelers will be accommodated in a property of similar standard.',
  'Meals in the restaurants or cafes are not included.',
  'Travel insurance is not included in the package.',
  'Any activities or transfers not specified in the itinerary are not part of the package and require separate arrangements.'
];
const TourPackage: React.FC<TourPackageProps> = ({
  title,
  duration,
  classification,
  description,
  price,
}) => {
  return (
    <div className="flex flex-col md:flex-row  bg-white rounded-lg shadow-lg overflow-hidden  mt-6 ml-6 mr-6">
      {/* Left Section (60% on medium screens and above, 100% on smaller screens) */}
      <div className="md:w-3/5 w-full p-6">
        {/* Package Title */}
        <h1 className="text-3xl font-bold text-black">{title}</h1>
        
        {/* Duration Capsule */}
        <div className="inline-block bg-gray-200 text-gray-700 text-sm px-4 py-1 rounded-full mt-3">
          {duration}
        </div>
        
        {/* Classification */}
        <div className="text-sm text-gray-500 mt-1">
          {classification}
        </div>
        
        {/* Divider */}
        <hr className="my-4 border-gray-300" />
        
        {/* Description */}
        <ul className="text-sm text-gray-700">
          {description.map((item, index) => (
            <li key={index} className="flex items-center mt-2">
              <span className="mr-2 text-green-500">✔️</span>
              {item}
            </li>
          ))}
        </ul>
        
        {/* Divider */}
        <hr className="my-4 border-gray-300" />
        <SubVariant packages={packages}/>
        <hr className="my-4 border-gray-300" />
        <RouteContainer />
        <hr className="my-4 border-gray-300" />
        <CategorySelector />
        <InclusionExclusion inclusions={inclusions} exclusions={exclusions} />
        <KnowBeforeYouGo clauses={clauses} />
        
      </div>

      {/* Right Section (40% of row for price and book button) */}
      <div className="md:w-2/5 w-full p-6 bg-white border border-gray-200 h-36">
        {/* Price */}
        <div className="text-xl font-semibold text-black mb-4">
          Rs. {price}/- per adult
        </div>
        
        {/* Book Now Button */}
        <button className="w-full bg-navbarcolor text-white py-2 rounded-md hover:bg-blue-600 transition">
          Send Inquiry
        </button>
      </div>
    </div>
  );
};

export default TourPackage;
