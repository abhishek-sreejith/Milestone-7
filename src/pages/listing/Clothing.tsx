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
    <div className="my-8">
      <h2 className="text-[48px] font-alfa-slab font-black text-center mt-[61px] mb-[51px]">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ClothingItemCard key={item.id} item={item} />
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
    <div className="container mx-auto px-4 py-8">
      {newArrivals.length > 0 && (
        <ClothingSection title="NEW ARRIVALS" items={newArrivals} />
      )}
      {/* Divider line */}
      <div className="h-px w-full bg-dividerColor bg-opacity-30 "></div>
      {casualItems.length > 0 && (
        <ClothingSection title="CASUAL" items={casualItems} />
      )}
      <div className="h-px w-full bg-dividerColor bg-opacity-30 "></div>
      <section>
        <div className="mx-auto w-full p-[64px] bg-gray-100 rounded-3xl my-8">
          <h1 className="text-[48px] font-[400] text-center mb-8 font-alfa-slab">
            BROWSE BY STYLE
          </h1>

          <div className="grid grid-cols-5 gap-4">
            {/* Row 1 */}
            <div className="col-span-2 bg-white rounded-[20px] overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden h-full">
                {/* Background image */}
                <img
                  src={styleCategories[0].image || "/placeholder.svg"}
                  alt={styleCategories[0].name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Text on top */}
                <div className="relative z-10 p-4">
                  <h2 className="text-2xl font-bold text-black">
                    {styleCategories[0].name}
                  </h2>
                </div>
              </div>
            </div>

            <div className="col-span-3 bg-white rounded-[20px] overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden h-60">
                {/* Background image */}
                <img
                  src={styleCategories[1].image || "/placeholder.svg"}
                  alt={styleCategories[1].name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Text on top */}
                <div className="relative z-10 p-4">
                  <h2 className="text-2xl font-bold text-black">
                    {styleCategories[1].name}
                  </h2>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="col-span-3 bg-white rounded-[20px] overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden h-60">
                {/* Background image */}
                <img
                  src={styleCategories[2].image || "/placeholder.svg"}
                  alt={styleCategories[2].name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Text on top */}
                <div className="relative z-10 p-4">
                  <h2 className="text-2xl font-bold text-black">
                    {styleCategories[2].name}
                  </h2>
                </div>
              </div>
            </div>

            <div className="col-span-2 bg-white rounded-[20px] overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden h-60">
                {/* Background image */}
                <img
                  src={styleCategories[3].image || "/placeholder.svg"}
                  alt={styleCategories[3].name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Text on top */}
                <div className="relative z-10 p-4">
                  <h2 className="text-2xl font-bold text-black">
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
