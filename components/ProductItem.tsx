import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProductItemRating from "./ProductItemRating";

const ProductItem = ({
  product,
  color,
}: {
  product: Product;
  color: string;
}) => {
  product.discount_price = 200;
  const discountPercentage =
    ((product.price - product.discount_price) / product.price) * 100;

  return (
    <div className="relative overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl mb-2 bg-white group">
      <Link className="block" href={`/product/${product.slug}`}>
        <Image
          src={
            product.mainImage
              ? `/${product.mainImage}`
              : "/product_placeholder.jpg"
          }
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-[300px] object-cover"
          alt={product?.title}
        />

        <div className="p-4 text-center">
          <div
            className={
              color === "black"
                ? `text-xl text-black font-normal mt-2 uppercase`
                : `text-xl text-green-700 font-normal mt-2 uppercase`
            }
          >
            {product.title}
          </div>
          <div className="flex justify-center items-baseline space-x-2">
            <p
              className={
                color === "black"
                  ? "text-lg text-black font-semibold line-through"
                  : "text-lg text-green-600 font-semibold line-through"
              }
            >
              ${product.price}
            </p>
            <p
              className={
                color === "black"
                  ? "text-lg text-black font-semibold"
                  : "text-lg text-green-600 font-semibold"
              }
            >
              ${product.discount_price}
            </p>
          </div>
          <ProductItemRating productRating={product?.rating} />
        </div>
        <div className="absolute top-0 right-0 bg-red-600 text-white p-1 text-xs font-bold">
          {Math.round(discountPercentage)}% Off
        </div>
        <div className="absolute inset-0 bg-green-200 bg-opacity-80 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="p-4 text-green-800">{product.description}</p>
        </div>
        <div className="block w-full uppercase bg-white px-0 py-2 text-base font-bold text-green-600 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 mt-2">
          <p className="text-center hover:animate-vibrate">View product</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
