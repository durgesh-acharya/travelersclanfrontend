// components/PackageGrid.tsx

import React from "react";

type Package = {
  imageUrl: string;
  tripDuration: string;
  price: string;
  altText: string;
};

type SubVariantProps = {
  packages: Package[];
};

const SubVariant: React.FC<SubVariantProps> = ({ packages }) => {
  return (
    <>
     <h6 className="m-2 pb-2 font-semibold text-md">Choose Trip Duration</h6>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
      {packages.map((pkg, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="relative">
            <img
              src={pkg.imageUrl}
              alt={pkg.altText}
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full p-2">
              <p className="text-white font-bold">{pkg.tripDuration}</p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-md font-semibold text-gray-800 text-center">Starting from</p>
            <p className="text-md font-bold text-green-600 text-center">{pkg.price}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default SubVariant;
