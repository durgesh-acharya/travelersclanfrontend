import { useState } from "react";

const CategorySelector = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Handle click event to change selected category
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <>
    <h6 className="m-2 pb-2 font-semibold text-md">Stay Category</h6>
    <div className="flex space-x-4">
      {/* Standard Category */}
      <div
        className={`h-12 p-3 w-36 p-2 rounded-lg border border-gray-300 cursor-pointer transition-all duration-300 ${
          selectedCategory === "Standard" ? "bg-orange-200" : "bg-white"
        }`}
        onClick={() => handleCategoryClick("Standard")}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-md ">Standard</h2>
         
        </div>
      </div>

      {/* Deluxe Category */}
      <div
        className={`h-12 p-3 w-36 p-2 rounded-lg border border-gray-300 cursor-pointer transition-all duration-300 ${
          selectedCategory === "Deluxe" ? "bg-orange-200" : "bg-white"
        }`}
        onClick={() => handleCategoryClick("Deluxe")}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-md ">Deluxe</h2>
        </div>
      </div>

      {/* Luxury Category */}
      <div
        className={`h-12 p-3 w-36 p-2 rounded-lg border border-gray-300 cursor-pointer transition-all duration-300 ${
          selectedCategory === "Luxury" ? "bg-orange-200" : "bg-white"
        }`}
        onClick={() => handleCategoryClick("Luxury")}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-md ">Luxury</h2>
         
        </div>
      </div>
    </div>
    </>
  );
};

export default CategorySelector;
