// *********************
// Role of the component: Showing products on the shop page with applied filter and sort
// Name of the component: Products.tsx
// Component call: <Products slug={slug} />
// Input parameters: { slug }: any
// Output: products grid
// *********************

import React from "react";
import ProductItem from "./ProductItem";

const Products = async ({ slug }: any) => {
  // getting all data from URL slug and preparing everything for sending GET request
  let slugSearchPar = await slug?.searchParams;
  const inStockNum = slugSearchPar?.inStock === "true" ? 1 : 0;
  const outOfStockNum = slugSearchPar.outOfStock === "true" ? 1 : 0;
  const page = (await slugSearchPar?.page) ? Number(slugSearchPar?.page) : 1;

  let stockMode: string = "lte";

  // preparing inStock and out of stock filter for GET request
  // If in stock checkbox is checked, stockMode is "equals"
  if (inStockNum === 1) {
    stockMode = "equals";
  }
  // If out of stock checkbox is checked, stockMode is "lt"
  if (outOfStockNum === 1) {
    stockMode = "lt";
  }
  // If in stock and out of stock checkboxes are checked, stockMode is "lte"
  if (inStockNum === 1 && outOfStockNum === 1) {
    stockMode = "lte";
  }
  // If in stock and out of stock checkboxes aren't checked, stockMode is "gt"
  if (inStockNum === 0 && outOfStockNum === 0) {
    stockMode = "gt";
  }

  let slugpar = await slug?.params;
  // sending API request with filtering, sorting and pagination for getting all products
  const data = await fetch(
    `http://localhost:3001/api/products?filters[price][$lte]=${
      slugSearchPar?.price || 3000
    }&filters[rating][$gte]=${
      Number(slugSearchPar?.rating) || 0
    }&filters[inStock][$${stockMode}]=1&${
      slugpar?.length > 0 ? `filters[category][$equals]=${slugpar.slug}&` : ""
    }sort=${slugSearchPar?.sort}&page=${page}`
  );

  const products = await data.json();

  return (
    <div className="grid grid-cols-3 justify-items-center gap-x-2 gap-y-5 max-[1300px]:grid-cols-3 max-lg:grid-cols-2 max-[500px]:grid-cols-1">
      {products.length > 0 ? (
        products.map((product: Product) => (
          <ProductItem key={product.id} product={product} color="white" />
        ))
      ) : (
        <h3 className="text-3xl mt-5 text-center w-full col-span-full max-[1000px]:text-2xl max-[500px]:text-lg">
          No products found for specified query
        </h3>
      )}
    </div>
  );
};

export default Products;
