// *********************
// Role of the component: Category wrapper that will contain title and category items
// Name of the component: CategoryMenu.tsx
// Component call: <CategoryMenu />
// Input parameters: no input parameters
// Output: section title and category items
// *********************
import React from "react";
import CategoryItem from "./CategoryItem";
import Image from "next/image";
import { categoryMenuList } from "@/lib/utils";
import Heading from "./Heading";

const CategoryMenu = () => {
  return (
    <div className="py-10 bg-gradient-to-r from-green-400 to-green-600">
      <Heading title="BROWSE CATEGORIES" />
      <div className="max-w-screen-2xl mx-auto py-10 gap-5 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {categoryMenuList.map((item) => (
          <CategoryItem title={item.title} key={item.id} href={item.href}>
            <Image src={item.src} width={48} height={48} alt={item.title} />
          </CategoryItem>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
