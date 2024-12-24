// *********************
// Role of the component: Showing stars for the given rating number
// Name of the component: ProductItemRating.tsx
// Component call: <ProductItemRating productRating={productRating} />
// Input parameters: { productRating: number }
// Output: full colored or outlined star icon depending on the element of the rating array("empty star" or "full star")
// ********************
"use client";
import { nanoid } from "nanoid";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface ProductItemRatingProps {
  productRating: number;
}

const StarBackground = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "lightgreen", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "purple", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <polygon
      points="12,2 15,11 24,11 17,18 20,27 12,21 4,27 7,18 0,11 9,11"
      fill="url(#grad1)"
    />
  </svg>
);

const ProductItemRating = ({ productRating }: ProductItemRatingProps) => {
  return (
    <div className="flex space-x-1 justify-center">
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={nanoid()}
          className="relative tooltip tooltip-top"
          data-tip={`Star ${i + 1}`}
        >
          {i < productRating && <StarBackground />}
          <div className="relative">
            {i < productRating ? (
              <AiFillStar className="text-yellow-500 text-xl transition-transform transform hover:scale-110 relative z-10" />
            ) : (
              <AiOutlineStar className="text-yellow-500 text-xl transition-transform transform hover:scale-110 relative z-10" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductItemRating;
