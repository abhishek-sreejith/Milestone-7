// src/components/FakeStore.tsx
import { X, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "../../components/Button";
import ClothingCatalog from "./Clothing";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"
interface FooterLink {
  title: string
  links: string[]
}

const FakeStore = () => {
  const footerLinks: Record<string, FooterLink> = {
    COMPANY: {
      title: "COMPANY",
      links: ["About", "Features", "Works", "Career"],
    },
    HELP: {
      title: "HELP",
      links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
    },
    FAQ: {
      title: "FAQ",
      links: ["Account", "Manage Deliveries", "Orders", "Payments"],
    },
    RESOURCES: {
      title: "RESOURCES",
      links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
    },
  }
  return (
    <main className="min-h-screen flex flex-col font-inter">
      {/* Promo Banner */}

      <div className="fixed top-0 left-0 right-0 z-50">
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
        <nav className="py-6 px-10 flex items-center justify-between bg-white">
          <div className="flex items-center gap-12">
            <a
              href="/"
              className="font-alfa-slab text-[32px] font-black tracking-tighter"
            >
              FAKESTORE
            </a>
            <div className="hidden md:flex items-center gap-8 font-inter">
              <div className="relative group">
                <a href="#" className="text-[16px]">
                  Shop
                </a>
                <span className="inline-block ml-1">▼</span>
              </div>
              <a href="#" className="text-[16px]">
                On Sale
              </a>
              <a href="#" className="text-[16px]">
                New Arrivals
              </a>
              <a href="#" className="text-[16px]">
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
      </div>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-[120px]"></div>

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
          <h1 className="font-alfa-slab font-[400] text-[64px] md:text-[64px] leading-none tracking-tighter mb-6 text-black">
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
      <section >
        <ClothingCatalog />
      </section>

      {/* Footer */}
      <section>
      <footer className="mt-auto bg-gray-100  mx-auto px-4 py-8 font-inter">
        <div className="px-4 mx-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-26">
            {/* Store Info */}
            <div className="md:col-span-1">
              <h2 className="text-3xl font-black mb-4 font-alfa-slab">FAKESTORE</h2>
              <p className="text-gray-600 mb-4">
                We have clothes that suits your style and which you're proud to wear.
                <br />
                From women to men.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="p-2 bg-white rounded-full">
                  <FaTwitter className="text-gray-800" />
                </a>
                <a href="#" className="p-2 bg-white rounded-full">
                  <FaFacebook className="text-gray-800" />
                </a>
                <a href="#" className="p-2 bg-white rounded-full">
                  <FaInstagram className="text-gray-800" />
                </a>
                <a href="#" className="p-2 bg-white rounded-full">
                  <FaGithub className="text-gray-800" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title} className="md:col-span-1">
                <h3 className="font-medium mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Copyright and Payment Methods */}
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#00000099] font-inter text-[14px] mb-4 md:mb-0">Fakestore© 2000-2023, All Rights Reserved</p>
            <div className="flex space-x-4">
              <img src="/visa.png" alt="Visa" className="h-15" />
              <img src="/mastercard.png" alt="Mastercard" className="h-15" />
              <img src="/paypal.png" alt="PayPal" className="h-15" />
              <img src="/applepay.png" alt="Apple Pay" className="h-15" />
              <img src="/googlepay.png" alt="Google Pay" className="h-15" />
            </div>
          </div>
        </div>
      </footer>
      </section>
    </main>
  );
};

export default FakeStore;
