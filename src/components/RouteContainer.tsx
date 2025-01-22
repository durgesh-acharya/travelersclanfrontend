import { useState } from "react";

const RouteContainer = () => {
  // State to manage whether the container is clicked or not
  const [isClicked, setIsClicked] = useState(false);

  // Handle the click event
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
    <h6 className="m-2 pb-2 font-semibold text-md">Destination Routes</h6>
    <div
      className={` h-12 p-3 rounded-lg border border-gray-300 cursor-pointer transition-all duration-300 ${
        isClicked ? "bg-orange-200" : "bg-white"
      }`}
      onClick={handleClick}
    >
      <div className="flex items-center space-x-2">
        <h2 className="text-md font-semibold">Dubai</h2>
      
      </div>
    </div>
</>
  );
};

export default RouteContainer;
