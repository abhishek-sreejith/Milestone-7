"use client"

import { useState } from "react"
import { Check, Minus, Plus,} from "lucide-react"

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("Large")
  const [selectedColor, setSelectedColor] = useState("olive")

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow px-4 md:px-6 lg:px-16 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-6">
          <a href="/" className="text-gray-500 hover:text-black">
            Home
          </a>
          <span className="text-gray-500">&gt;</span>
          <a href="/shop" className="text-gray-500 hover:text-black">
            Shop
          </a>
          <span className="text-gray-500">&gt;</span>
          <a href="/shop/men" className="text-gray-500 hover:text-black">
            Men
          </a>
          <span className="text-gray-500">&gt;</span>
          <span className="text-gray-700">T-shirts</span>
        </div>

        {/* Product Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Thumbnails */}
          <div className="hidden lg:flex lg:col-span-1 flex-col gap-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="border rounded-md p-2 cursor-pointer hover:border-gray-400">
                <img
                  src={`https://placehold.co/100x100?text=Thumbnail+${index}`}
                  alt={`T-shirt thumbnail ${index}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

          {/* Main Product Image */}
          <div className="lg:col-span-5 bg-[#f0f0f0] rounded-md flex items-center justify-center p-4">
            <img
              src="https://placehold.co/400x500?text=T-shirt"
              alt="One Life Graphic T-shirt"
              className="max-w-full h-auto"
            />
          </div>

          {/* Product Details */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl font-bold">One Life Graphic T-shirt</h1>

            <div className="text-3xl font-bold">$260</div>

            <p className="text-gray-600">
              This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it
              offers superior comfort and style.
            </p>

            <div>
              <h3 className="font-medium mb-2">Key Features:</h3>
              <ul className="space-y-1">
                <li className="flex items-center gap-2">
                  <Check size={18} className="text-[#4f4631]" />
                  <span>Premium 100% Cotton fabric for all-day comfort</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} className="text-[#4f4631]" />
                  <span>High-quality screen-printed graphic for long-lasting durability</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} className="text-[#4f4631]" />
                  <span>Classic crew neck and short sleeves for a timeless fit</span>
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

            <div>
              <h3 className="font-medium mb-3">Select Colors</h3>
              <div className="flex gap-3">
                <button
                  className={`w-10 h-10 rounded-full bg-[#4f4631] flex items-center justify-center ${selectedColor === "olive" ? "ring-2 ring-offset-2 ring-black" : ""}`}
                  onClick={() => setSelectedColor("olive")}
                  aria-label="Olive color"
                >
                  {selectedColor === "olive" && <Check size={16} className="text-white" />}
                </button>
                <button
                  className={`w-10 h-10 rounded-full bg-[#314f4a] ${selectedColor === "teal" ? "ring-2 ring-offset-2 ring-black" : ""}`}
                  onClick={() => setSelectedColor("teal")}
                  aria-label="Teal color"
                ></button>
                <button
                  className={`w-10 h-10 rounded-full bg-[#31344f] ${selectedColor === "navy" ? "ring-2 ring-offset-2 ring-black" : ""}`}
                  onClick={() => setSelectedColor("navy")}
                  aria-label="Navy color"
                ></button>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Choose Size</h3>
              <div className="flex flex-wrap gap-2">
                {["Small", "Medium", "Large", "X-Large"].map((size) => (
                  <button
                    key={size}
                    className={`px-6 py-2 rounded-full ${
                      selectedSize === size ? "bg-black text-white" : "bg-[#f0f0f0] text-black hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="flex items-center border rounded-md">
                <button className="px-3 py-2 border-r" onClick={decrementQuantity} aria-label="Decrease quantity">
                  <Minus size={18} />
                </button>
                <span className="px-6 py-2">{quantity}</span>
                <button className="px-3 py-2 border-l" onClick={incrementQuantity} aria-label="Increase quantity">
                  <Plus size={18} />
                </button>
              </div>

              <button className="flex-1 bg-black text-white hover:bg-black/90 rounded-md py-3 px-4">Add to Cart</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
