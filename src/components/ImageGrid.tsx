import React from 'react';

type ImageGridProps = {
  images: string[]; // You can extend this prop to take dynamic images if needed.
};

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 ml-6 mr-6">
      {/* First row: One large image */}
      <div className="row-span-1">
        <div className="relative">
          <img
            src={images[0]}
            alt="Main Image"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
            Destination
          </div>
        </div>
      </div>

      {/* Second row: 2x2 grid of images */}
      <div className="grid grid-cols-2 gap-2 col-span-1">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="relative">
            <img
              src={images[index + 1]}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
              {index === 0 && 'Stay'}
              {index === 1 && 'Activity'}
              {index === 2 && 'Sightseeing'}
              {index === 3 && 'More'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
