// *********************
// Role of the component: products section intended to be on the home page
// Name of the component: ProductsSection.tsx
// Component call: <ProductsSection slug={slug} />
// Input parameters: no input parameters
// Output: products grid
// *********************
import React from "react";
import FeatureFlag from "./FeatureFlag";
import ProductItem from "./ProductItem";
import Heading from "./Heading";
import Collection from "./Collection";
let urll = "http://localhost:3001";
urll = urll + "/api/products";

const ProductsSection = async () => {
  // sending API request for getting all products
  const data = await fetch(urll);
  const products = await data.json();

  // collection data
  const collections = [
    {
      mainImage: "collection1.jpg",
      title: "Summer Sale",
      description: "Get the best deals on summer essentials.",
      offer: "Up to 50% Off",
      link: "/collections/summer-sale",
    },
    {
      mainImage: "collection1.jpg",
      title: "Winter Collection",
      description: "Stay warm with our latest winter collection.",
      offer: "Up to 30% Off",
      link: "/collections/winter-collection",
    },
  ];

  return (
    <div className="bg-emerald-400 border-t-4 border-white">
      <div className="max-w-screen-2xl mx-auto pt-20">
        <Heading title="FEATURED PRODUCTS" />
        <div className="grid grid-cols-4 justify-items-center max-w-screen-2xl mx-auto py-10 gap-x-2 px-10 gap-y-8 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          <FeatureFlag flag="FEATURE_BETA" beta>
            {collections.map((collection, index) => (
              <Collection key={index} collection={collection} color="white" />
            ))}
          </FeatureFlag>
          {products.map((product: Product) => (
            <ProductItem key={product.id} product={product} color="white" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
