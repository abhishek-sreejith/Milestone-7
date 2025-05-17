import "./App.css";
import { X, Search, ShoppingCart, User } from "lucide-react";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/listing/HomePage";
import ProductDetail from "./pages/products/ProductDetail";
interface FooterLink {
  title: string;
  links: string[];
}
const footerLinks: Record<string, FooterLink> = {
  COMPANY: {
    title: "COMPANY",
    links: ["About", "Features", "Works", "Career"],
  },
  HELP: {
    title: "HELP",
    links: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  FAQ: {
    title: "FAQ",
    links: ["Account", "Manage Deliveries", "Orders", "Payments"],
  },
  RESOURCES: {
    title: "RESOURCES",
    links: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
};
// Header component that will be reused across all pages
const Header = () => {
  return (
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
      <nav className="py-6 px-15 flex items-center justify-between bg-white">
        {/* Left side: Logo and Links */}
        <div className="flex items-center gap-12 flex-shrink-0">
          <Link to="/" className="font-alfa-slab text-[32px] font-black tracking-tighter">
            FAKESTORE
          </Link>
          <div className="hidden md:flex items-center gap-8 font-inter">
            <div className="relative group">
              <Link to="/shop" className="text-[16px]">
                Shop
              </Link>
              <span className="inline-block ml-1">▼</span>
            </div>
            <Link to="/sale" className="text-[16px]">
              On Sale
            </Link>
            <Link to="/new-arrivals" className="text-[16px]">
              New Arrivals
            </Link>
            <Link to="/brands" className="text-[16px]">
              Brands
            </Link>
          </div>
        </div>

        {/* Right side: Search and Icons */}
        <div className="flex items-center gap-4 flex-grow ml-8">
          {/* Search bar */}
          <div className="relative flex items-center bg-gray-100 rounded-full px-4 py-2 flex-grow">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent border-none outline-none ml-2 w-full"
            />
          </div>

          {/* Icons */}
          <button className="p-2">
            <ShoppingCart className="h-6 w-6" />
          </button>
          <button className="p-2">
            <User className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </div>
  );
};
// Footer component that will be reused across all pages
const Footer = () => {
  return (
    <footer className="mt-auto bg-[#F0F0F0] mx-auto px-4 py-8 font-inter">
      <div className="px-4 mx-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-26">
          {/* Store Info */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-black mb-4 font-alfa-slab">
              FAKESTORE
            </h2>
            <p className="text-gray-600 mb-4">
              We have clothes that suits your style and which you're proud
              to wear.
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
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
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
          <p className="text-[#00000099] font-inter text-[14px] mb-4 md:mb-0">
            Fakestore© 2000-2023, All Rights Reserved
          </p>
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
  );
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col font-inter">
      <Header />
      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-[120px]"></div>
      {children}
      <Footer />
    </main>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout>
              <HomePage/>
            </Layout>
          } 
        />
        <Route 
          path="/product/:id" 
          element={
            <Layout>
              <ProductDetail />
            </Layout>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;