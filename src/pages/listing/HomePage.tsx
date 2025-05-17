// src/components/FakeStore.tsx
import Button from "../../components/Button";
import ClothingCatalog from "./Clothing";

const HomePage = () => {
  return (
    <main className="min-h-screen flex flex-col font-inter">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row min-h-[80vh]">
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
        <div className="relative z-10 w-full md:w-3/4 p-8 md:p-16 flex flex-col justify-center">
          <h1 className="font-alfa-slab font-[400] text-[64px] md:text-[64px] leading-none mb-6 text-black">
            FIND CLOTHES THAT MATCH YOUR STYLE PERFECTLY
          </h1>
          <p className="font-inter text-subtitleColor mb-8 max-w-lg text-[16px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div>
            <Button className="bg-black text-white rounded-full px-10 py-4 text-sm hover:bg-subtitleColor">
              Shop Now
            </Button>
          </div>

          <div className="flex items-center mt-16">
            <div>
              <h3 className="text-4xl font-bold text-black">200+</h3>
              <p className="text-subtitleColor">International Brands</p>
            </div>

            {/* Divider line */}
            <div className="h-16 w-px bg-dividerColor bg-opacity-30 mx-6"></div>

            <div>
              <h3 className="text-4xl font-bold text-black">2,000+</h3>
              <p className="text-subtitleColor">High-Quality Products</p>
            </div>

            {/* Divider line */}
            <div className="h-16 w-px bg-dividerColor bg-opacity-30 mx-6"></div>

            <div>
              <h3 className="text-4xl font-bold text-black">30,000+</h3>
              <p className="text-subtitleColor">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Keep this div for layout consistency */}
        <div className="relative z-10 w-full md:w-1/2"></div>
      </section>
      {/* Brands Section */}
      <section className="bg-black text-white py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8">
          <div className="w-1/2 md:w-auto flex justify-center">
            <h4 className="text-2xl md:text-3xl font-bold tracking-wider">
              VERSACE
            </h4>
          </div>
          <div className="w-1/2 md:w-auto flex justify-center">
            <h4 className="text-2xl md:text-3xl font-bold">ZARA</h4>
          </div>
          <div className="w-1/2 md:w-auto flex justify-center">
            <h4 className="text-2xl md:text-3xl font-bold">GUCCI</h4>
          </div>
          <div className="w-1/2 md:w-auto flex justify-center">
            <h4 className="text-2xl md:text-3xl font-bold">PRADA</h4>
          </div>
          <div className="w-1/2 md:w-auto flex justify-center">
            <h4 className="text-2xl md:text-3xl font-bold">Calvin Klein</h4>
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
