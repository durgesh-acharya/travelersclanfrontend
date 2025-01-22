type CardProps = {
  image: string;
  duration: string;
  location: string;
  price: string;
};

const TourCard = ({ image, duration, location, price }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={location} className="w-full h-56 object-cover" />
      <div className="p-4">
        <div className="text-xl font-bold">{location}</div>
        <div className="text-sm text-gray-500">{duration}</div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl text-blue-500">{price}</span>
          <button className="px-4 py-2 bg-navbarcolor text-white rounded-md">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
