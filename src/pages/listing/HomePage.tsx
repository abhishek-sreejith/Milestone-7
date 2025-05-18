// src/components/FakeStore.tsx
import Button from "../../components/Button";
import ClothingCatalog from "./Clothing";

const HomePage = () => {
  return (
    <main className="min-h-screen flex flex-col font-inter">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row min-h-[70vh] sm:min-h-[80vh]">
        {/* Full background image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/bg2.png"
            alt="Fashion background"
            className="object-cover w-full h-full"
          />
          {/* Dark overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
        </div>
        <div className="relative z-10 w-full md:w-3/4 p-4 sm:p-8 md:p-16 flex flex-col justify-center">
          <h1 className="font-alfa-slab font-[400] text-[32px] sm:text-[48px] md:text-[64px] leading-tight md:leading-none mb-4 md:mb-6 text-black">
            FIND CLOTHES THAT MATCH YOUR STYLE PERFECTLY
          </h1>
          <p className="font-inter text-subtitleColor mb-6 md:mb-8 max-w-lg text-[14px] sm:text-[16px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div>
            <Button className="bg-black text-white rounded-full px-10 py-4 text-sm hover:bg-subtitleColor">
              Shop Now
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center mt-8 sm:mt-12 md:mt-16 gap-6 sm:gap-0">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">200+</h3>
              <p className="text-subtitleColor text-sm sm:text-base">International Brands</p>
            </div>

            {/* Divider line - hidden on mobile */}
            <div className="hidden sm:block h-12 sm:h-16 w-px bg-dividerColor bg-opacity-30 mx-4 sm:mx-6"></div>

            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">2,000+</h3>
              <p className="text-subtitleColor text-sm sm:text-base">High-Quality Products</p>
            </div>

            {/* Divider line - hidden on mobile */}
            <div className="hidden sm:block h-12 sm:h-16 w-px bg-dividerColor bg-opacity-30 mx-4 sm:mx-6"></div>

            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">30,000+</h3>
              <p className="text-subtitleColor text-sm sm:text-base">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Keep this div for layout consistency */}
        <div className="relative z-10 w-full md:w-1/2"></div>
      </section>
      {/* Brands Section */}
      <section className="bg-black text-white py-6 sm:py-8 px-2 sm:px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-y-4 sm:gap-8">
          <div className="w-1/2 sm:w-1/3 md:w-auto flex justify-center px-2">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider">
              VERSACE
            </h4>
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-auto flex justify-center px-2">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">ZARA</h4>
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-auto flex justify-center px-2">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">GUCCI</h4>
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-auto flex justify-center px-2">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">PRADA</h4>
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-auto flex justify-center px-2">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">Calvin Klein</h4>
          </div>
        </div>
      </section>
      <section>
        <ClothingCatalog />
      </section>
    </main>
  );
};

export default HomePage;
