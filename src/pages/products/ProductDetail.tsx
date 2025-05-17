import { useState } from "react";
import { useDispatch } from "react-redux";
import { Check, Minus, Plus } from "lucide-react";
import { useParams } from "react-router-dom";
import { useProductDetailApi } from "./fetchProductDetail";
import { addToCart } from "../../store/slice/cartSlice";
import Button from "../../components/Button";

const ProductDetail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { data, loading, error } = useProductDetailApi(id!);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState("olive");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleAddToCart = () => {
    if (data) {
      console.log("Adding to redux");
      dispatch(
        addToCart({
          id: data.id,
          title: data.name,
          price: data.price,
          color: selectedColor, // if you have a color picker
          quantity: quantity,
          image: data.images[0],
          size: selectedSize, // if you have a size picker
        })
      );
    }
  };
  // Show loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Loading product details...</p>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-red-600">
          Error loading product details. Please try again.
        </p>
      </div>
    );
  }

  // Show message if no data
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Product not found</p>
      </div>
    );
  }

  // Use default image if no images available
  const images =
    data.images && data.images.length > 0
      ? data.images
      : ["https://placehold.co/400x500?text=No+Image"];

  return (
    <div className="flex flex-col min-h-screen font-inter">
      {/* Main Content */}
      <main className="flex-grow px-4 md:px-6 lg:px-16 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-6">
          <a href="/" className="text-gray-500 hover:text-black">
            Home
          </a>
          <span className="text-gray-500">&gt;</span>
          <span className="text-gray-700">{data.name}</span>
        </div>

        {/* Product Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Thumbnails */}
          <div className="hidden lg:flex lg:col-span-1 flex-col gap-4">
            {images.slice(0, 3).map((image, index) => (
              <div
                key={index}
                className={`border rounded-md p-2 cursor-pointer ${
                  selectedImageIndex === index
                    ? "border-gray-800"
                    : "hover:border-gray-400"
                }`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`${data.name} thumbnail ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

          {/* Main Product Image */}
          <div className="lg:col-span-5 bg-[#f0f0f0] rounded-md flex items-center justify-center p-4">
            <img
              src={images[selectedImageIndex]}
              alt={data.name}
              className="max-w-full h-auto"
            />
          </div>

          {/* Product Details */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-subtitleColor">
            <h1 className="text-3xl md:text-[32px] font-alfa-slab text-black">
              {data.name}
            </h1>

            <div className="text-3xl font-bold text-black">${data.price}</div>

            <p className="text-subtitleColor">{data.description}</p>

            <div className="text-subtitleColor">
              <h3 className="font-medium mb-2">Key Features:</h3>
              <ul className="space-y-1">
                <li className="flex items-center gap-2">
                  <Check size={18} className="text-[#4f4631]" />
                  <span>Premium 100% Cotton fabric for all-day comfort</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} className="text-[#4f4631]" />
                  <span>
                    High-quality screen-printed graphic for long-lasting
                    durability
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} className="text-[#4f4631]" />
                  <span>
                    Classic crew neck and short sleeves for a timeless fit
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} className="text-[#4f4631]" />
                  <span>Available in Black, White, and Navy Blue</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} className="text-[#4f4631]" />
                  <span>Unisex design, suitable for both men and women</span>
                </li>
              </ul>
            </div>
            {/* Divider */}
            <div className="h-px w-full bg-dividerColor bg-opacity-30 "></div>

            <div>
              <h3 className="font-medium mb-3">Select Colors</h3>
              <div className="flex gap-3">
                <button
                  className={`w-10 h-10 rounded-full bg-[#4f4631] flex items-center justify-center`}
                  onClick={() => setSelectedColor("olive")}
                  aria-label="Olive color"
                >
                  {selectedColor === "olive" && (
                    <Check size={16} className="text-white" />
                  )}
                </button>
                <button
                  className={`w-10 h-10 rounded-full bg-[#314f4a]  flex items-center justify-center`}
                  onClick={() => setSelectedColor("teal")}
                  aria-label="Teal color"
                >
                  {" "}
                  {selectedColor === "teal" && (
                    <Check size={16} className="text-white" />
                  )}
                </button>
                <button
                  className={`w-10 h-10 rounded-full bg-[#31344f] flex items-center justify-center`}
                  onClick={() => setSelectedColor("navy")}
                  aria-label="Navy color"
                >
                  {" "}
                  {selectedColor === "navy" && (
                    <Check size={16} className="text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-dividerColor bg-opacity-30 "></div>

            <div>
              <h3 className="font-medium mb-3">Choose Size</h3>
              <div className="flex flex-wrap gap-2">
                {["Small", "Medium", "Large", "X-Large"].map((size) => (
                  <button
                    key={size}
                    className={`px-6 py-2 rounded-full ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-[#f0f0f0] text-subtitleColor hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            {/* Divider */}
            <div className="h-px w-full bg-dividerColor bg-opacity-30 "></div>

            <div className="flex gap-4 items-center">
              <div className="flex items-center bg-[#F0F0F0] rounded-[62px]">
                <button
                  className="px-3 py-3"
                  onClick={decrementQuantity}
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>
                <span className="px-6 py-3">{quantity}</span>
                <button
                  className="px-3 py-3"
                  onClick={incrementQuantity}
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>
              <Button
                className="bg-black text-white rounded-full px-10 py-4 text-sm hover:bg-subtitleColor w-full"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
