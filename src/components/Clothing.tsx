// Define TypeScript interfaces
export interface ClothingItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  categoryName: string;
  category: string;
}

import React from 'react';
import { useClothingApi } from './mockApiService';


// Component to display a single clothing item
const ClothingItemCard: React.FC<{ item: ClothingItem }> = ({ item }) => {
  return (
    <div className="w-full">
      <div className="bg-[#F0EEED] rounded-[20px] aspect-square flex items-center justify-center h-[300px] w-[300px] overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-2 font-medium text-gray-900">{item.name}</h3>
      <p className="mt-1 font-bold text-gray-900">${item.price}</p>
    </div>
  );
};

// Component to display a section of clothing items
const ClothingSection: React.FC<{ title: string; items: ClothingItem[] }> = ({ title, items }) => {
  return (
    <div className="my-8">
      <h2 className="text-[48px] font-alfa-slab font-black text-center mt-[61px] mb-[51px]">{title}</h2>
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

  // Group items by category
  const getItemsByCategory = (category: string) => {
    return clothingItems.filter(item => item.category === category);
  };

  if (loading) {
    return <div className="text-center py-12">Loading clothing items...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">Error: {error}</div>;
  }

  const newArrivals = getItemsByCategory('new_arrivals');
  const casualItems = getItemsByCategory('casual');

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
    </div>
  );
};

export default ClothingCatalog;