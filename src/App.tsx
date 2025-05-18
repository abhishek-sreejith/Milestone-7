import "./App.css";
import { X, Search, ShoppingCart, User } from "lucide-react";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { getCurrentUser } from "aws-amplify/auth";
import HomePage from "./pages/listing/HomePage";
import ProductDetail from "./pages/products/ProductDetail";
import { Provider } from "react-redux";
import { store } from "./store/store";
import CartPage from "./pages/cart/CartPage";
import AuthForm from "./pages/Profile/AuthForm";
import ProfileScreen from "./pages/Profile/ProfileScreen"; // Import the new ProfileScreen component

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
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status when component mounts
  useEffect(() => {
    checkAuthState();
  }, []);

  // Function to check if user is authenticated
  const checkAuthState = async () => {
    try {
      const user = await getCurrentUser();
      setIsAuthenticated(!!user);
    } catch (error) {
      console.log("Error: ", error)
      setIsAuthenticated(false);
    }
  };

  // Handle profile icon click based on authentication status
  const handleProfileClick = () => {
    if (isAuthenticated) {
      navigate("/profile");
    } else {
      navigate("/auth");
    }
  };

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
      <nav className="py-4 sm:py-6 px-4 sm:px-8 md:px-15 flex flex-wrap items-center justify-between bg-white">
        {/* Left side: Logo and Links */}
        <div className="flex items-center gap-4 sm:gap-8 md:gap-12 flex-shrink-0">
          <Link
            to="/"
            className="font-alfa-slab text-2xl sm:text-[28px] md:text-[32px] font-black tracking-tighter"
          >
            FAKESTORE
          </Link>
          <div className="hidden md:flex items-center gap-4 lg:gap-8 font-inter">
            <div className="relative group">
              <Link to="/shop" className="text-[14px] lg:text-[16px]">
                Shop
              </Link>
              <span className="inline-block ml-1">▼</span>
            </div>
            <Link to="/sale" className="text-[14px] lg:text-[16px]">
              On Sale
            </Link>
            <Link to="/new-arrivals" className="text-[14px] lg:text-[16px]">
              New Arrivals
            </Link>
            <Link to="/brands" className="text-[14px] lg:text-[16px]">
              Brands
            </Link>
          </div>
        </div>

        {/* Right side: Search and Icons */}
        <div className="flex items-center gap-2 sm:gap-4 flex-grow ml-2 sm:ml-4 md:ml-8 mt-2 sm:mt-0 w-full sm:w-auto">
          {/* Search bar */}
          <div className="relative flex items-center bg-gray-100 rounded-full px-2 sm:px-4 py-2 flex-grow">
            <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent border-none outline-none ml-2 w-full text-sm"
            />
          </div>

          {/* Icons */}
          <button
            className="p-1 sm:p-2"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            className="p-1 sm:p-2"
            onClick={handleProfileClick}
          >
            <User className="h-5 w-5 sm:h-6 sm:w-6" />
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
      <div className="px-2 sm:px-4 mx-4 sm:mx-8 md:mx-12 lg:mx-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 md:gap-16 lg:gap-26">
          {/* Store Info */}
          <div className="sm:col-span-2 md:col-span-1">
            <h2 className="text-2xl sm:text-3xl mb-4 font-alfa-slab">FAKESTORE</h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              We have clothes that suits your style and which you're proud to
              wear.
              <br className="hidden sm:block" />
              From women to men.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3 sm:space-x-4 mt-4">
              <a href="#" className="p-1.5 sm:p-2 bg-white rounded-full">
                <FaTwitter className="text-gray-800 text-sm sm:text-base" />
              </a>
              <a href="#" className="p-1.5 sm:p-2 bg-white rounded-full">
                <FaFacebook className="text-gray-800 text-sm sm:text-base" />
              </a>
              <a href="#" className="p-1.5 sm:p-2 bg-white rounded-full">
                <FaInstagram className="text-gray-800 text-sm sm:text-base" />
              </a>
              <a href="#" className="p-1.5 sm:p-2 bg-white rounded-full">
                <FaGithub className="text-gray-800 text-sm sm:text-base" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="mt-6 sm:mt-0">
              <h3 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">{section.title}</h3>
              <ul className="space-y-1 sm:space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright and Payment Methods */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-[#00000099] font-inter text-xs sm:text-sm md:text-[14px] mb-4 sm:mb-0 text-center sm:text-left">
            Fakestore© 2000-2023, All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            <img src="/visa.png" alt="Visa" className="h-5 sm:h-6 md:h-8" />
            <img
              src="/mastercard.png"
              alt="Mastercard"
              className="h-5 sm:h-6 md:h-8"
            />
            <img src="/paypal.png" alt="PayPal" className="h-5 sm:h-6 md:h-8" />
            <img src="/applepay.png" alt="Apple Pay" className="h-5 sm:h-6 md:h-8" />
            <img src="/googlepay.png" alt="Google Pay" className="h-5 sm:h-6 md:h-8" />
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
      <div className="h-[100px] sm:h-[110px] md:h-[120px]"></div>
      {children}
      <Footer />
    </main>
  );
};

// Create an Auth-protected route wrapper
const ProtectedRoute = ({ element }: { element: React.ReactNode }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        await getCurrentUser();
        setIsAuthenticated(true);
      } catch (error) {
        console.log("Error: ", error)
        navigate('/auth');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, [navigate]);

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-[50vh]">Loading...</div>;
  }

  return isAuthenticated ? <>{element}</> : null;
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/auth"
            element={
              <Layout>
                <AuthForm />
              </Layout>
            }
          />
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
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
          <Route
            path="/cart"
            element={
              <Layout>
                <CartPage />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <ProtectedRoute element={<ProfileScreen />} />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;