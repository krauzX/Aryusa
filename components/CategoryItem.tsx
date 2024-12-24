// *********************
// Role of the component: Category Item that will display category icon, category name and link to the category
// Name of the component: CategoryItem.tsx
// Component call: <CategoryItem title={title} href={href} ><Image /></CategoryItem>
// Input parameters: CategoryItemProps interface
// Output: Category icon, category name and link to the category
// *********************
import Link from "next/link";
import React, { type ReactNode } from "react";

interface CategoryItemProps {
  children: ReactNode;
  title: string;
  href: string;
}

const CategoryItem = ({ title, children, href }: CategoryItemProps) => {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center gap-y-2 cursor-pointer bg-white py-5 text-gray-800 hover:bg-lime-500 transition transform hover:scale-105 rounded-lg shadow-md hover:shadow-lg">
        {children}
        <h3 className="font-semibold text-xl">{title}</h3>
      </div>
    </Link>
  );
};

export default CategoryItem;
