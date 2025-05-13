// src/components/FakeStore.tsx
import { X, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "./Button";

const FakeStore = () => {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Promo Banner */}
      <div className="bg-black text-white py-3 px-4 flex justify-center items-center relative">
        <p className="text-center text-sm">
          Sign up and get 20% off to your first order.{" "}
          <a href="#" className="font-semibold underline">
            Sign Up Now
          </a>
        </p>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="py-6 px-15 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="/" className="text-2xl font-black tracking-tighter">
            FAKESTORE
          </a>
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <a href="#" className="font-medium">
                Shop
              </a>
              <span className="inline-block ml-1">▼</span>
            </div>
            <a href="#" className="font-medium">
              On Sale
            </a>
            <a href="#" className="font-medium">
              New Arrivals
            </a>
            <a href="#" className="font-medium">
              Brands
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex items-center bg-gray-100 rounded-full px-4 py-2 w-[300px]">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent border-none outline-none ml-2 w-full"
            />
          </div>
          <button className="p-2">
            <ShoppingCart className="h-6 w-6" />
          </button>
          <button className="p-2">
            <User className="h-6 w-6" />
          </button>
        </div>
      </nav>

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

        {/* Content */}
        <div className="relative z-10 w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-black leading-none tracking-tighter mb-6 text-black">
            FIND CLOTHES THAT MATCH YOUR STYLE PERFECTLY
          </h1>
          <p className="text-subtitleColor mb-8 max-w-lg">
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
    </main>
  );
};

export default FakeStore;
