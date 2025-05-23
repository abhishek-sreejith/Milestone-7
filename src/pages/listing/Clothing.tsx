// Define TypeScript interfaces

export interface ClothingItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  categoryName: string;
  category: string;
}
import React from "react";
import { useClothingApi } from "./mockApiService";

import casualImg from "../../assets/casual.png";
import formalImg from "../../assets/formal.png";
import partyImg from "../../assets/party.png";
import gymImg from "../../assets/gym.png";
import { ClothingItemCard } from "../../components/ClothingItemCard";

interface StyleCategory {
  name: string;
  image: string;
}

// Component to display a section of clothing items
const ClothingSection: React.FC<{ title: string; items: ClothingItem[] }> = ({
  title,
  items,
}) => {
  return (
    <div className="my-4 sm:my-6 md:my-8 w-full">
      <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-alfa-slab text-center mt-[30px] sm:mt-[45px] md:mt-[61px] mb-[25px] sm:mb-[35px] md:mb-[51px]">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
        {items.map((item) => (
          <div className="w-full flex justify-center" key={item.id}>
            <ClothingItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Main component
const ClothingCatalog: React.FC = () => {
  const { data: clothingItems, loading, error } = useClothingApi();
  // Style categories data
  const styleCategories: StyleCategory[] = [
    { name: "Casual", image: casualImg },
    { name: "Formal", image: formalImg },
    { name: "Party", image: partyImg },
    { name: "Gym", image: gymImg },
  ];
  // Group items by category
  const getItemsByCategory = (category: string) => {
    return clothingItems.filter((item) => item.category === category);
  };

  if (loading) {
    return <div className="text-center py-12">Loading clothing items...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">Error: {error}</div>;
  }

  const newArrivals = getItemsByCategory("new_arrivals");
  const casualItems = getItemsByCategory("casual");

  return (
    <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8">
      {newArrivals.length > 0 && (
        <ClothingSection title="NEW ARRIVALS" items={newArrivals} />
      )}
      {/* Divider line */}
      <div className="h-px w-full bg-dividerColor bg-opacity-30 my-4 sm:my-6 md:my-8"></div>
      {casualItems.length > 0 && (
        <ClothingSection title="CASUAL" items={casualItems} />
      )}
      <div className="h-px w-full bg-dividerColor bg-opacity-30 my-4 sm:my-6 md:my-8"></div>
      <section className="w-full">
        <div className="w-full p-4 sm:p-6 md:p-[64px] bg-[#F0F0F0] rounded-xl sm:rounded-2xl md:rounded-3xl my-4 sm:my-6 md:my-8">
          <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-[400] text-center mb-4 sm:mb-6 md:mb-8 font-alfa-slab">
            BROWSE BY STYLE
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {/* Row 1 - Mobile: Full width, Tablet: 1/2 width, Desktop: 2/5 width */}
            <div className="sm:col-span-1 md:col-span-2 bg-white rounded-[12px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden mb-4 sm:mb-0">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-48 sm:h-full">
                {/* Background image */}
                <img
                  src={styleCategories[0].image || "/placeholder.svg"}
                  alt={styleCategories[0].name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Text on top */}
                <div className="relative z-10 p-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-black">
                    {styleCategories[0].name}
                  </h2>
                </div>
              </div>
            </div>

            <div className="sm:col-span-1 md:col-span-3 bg-white rounded-[12px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden mb-4 sm:mb-0">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-48 sm:h-60">
                {/* Background image */}
                <img
                  src={styleCategories[1].image || "/placeholder.svg"}
                  alt={styleCategories[1].name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Text on top */}
                <div className="relative z-10 p-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-black">
                    {styleCategories[1].name}
                  </h2>
                </div>
              </div>
            </div>

            {/* Row 2 - Mobile: Full width, Tablet: 1/2 width, Desktop: 3/5 width */}
            <div className="sm:col-span-1 md:col-span-3 bg-white rounded-[12px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden mb-4 sm:mb-0">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-48 sm:h-60">
                {/* Background image */}
                <img
                  src={styleCategories[2].image || "/placeholder.svg"}
                  alt={styleCategories[2].name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Text on top */}
                <div className="relative z-10 p-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-black">
                    {styleCategories[2].name}
                  </h2>
                </div>
              </div>
            </div>

            <div className="sm:col-span-1 md:col-span-2 bg-white rounded-[12px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-48 sm:h-60">
                {/* Background image */}
                <img
                  src={styleCategories[3].image || "/placeholder.svg"}
                  alt={styleCategories[3].name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Text on top */}
                <div className="relative z-10 p-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-black">
                    {styleCategories[3].name}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClothingCatalog;