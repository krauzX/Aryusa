"use client";

import { DashboardSidebar } from "@/components";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  formatCategoryName,
  convertCategoryNameToURLFriendly,
} from "../../../../../utils/categoryFormating";

interface DashboardSingleCategoryProps {
  params: Promise<{
    id: number;
  }>;
}

const DashboardSingleCategory: React.FC<DashboardSingleCategoryProps> = ({
  params,
}) => {
  const [categoryInput, setCategoryInput] = useState<{ name: string }>({
    name: "",
  });
  const router = useRouter();

  useEffect(() => {
    const fetchCategory = async () => {
      const { id } = await params;
      const response = await fetch(
        `http://localhost:3001/api/categories/${id}`
      );
      const data = await response.json();
      setCategoryInput({ name: data.name });
    };

    fetchCategory();
  }, [params]);

  const deleteCategory = async () => {
    const { id } = await params;
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3001/api/categories/${id}`, requestOptions)
      .then((response) => {
        if (response.status === 204) {
          toast.success("Category deleted successfully");
          router.push("/admin/categories");
        } else {
          throw new Error("There was an error deleting a category");
        }
      })
      .catch(() => {
        toast.error("There was an error deleting category");
      });
  };

  const updateCategory = async () => {
    const { id } = await params;
    if (categoryInput.name.length > 0) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: convertCategoryNameToURLFriendly(categoryInput.name),
        }),
      };
      fetch(`http://localhost:3001/api/categories/${id}`, requestOptions)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error("Error updating a category");
          }
        })
        .then(() => toast.success("Category successfully updated"))
        .catch(() => {
          toast.error("There was an error while updating a category");
        });
    } else {
      toast.error("For updating a category you must enter all values");
      return;
    }
  };

  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto xl:h-full max-xl:flex-col max-xl:gap-y-5">
      <DashboardSidebar />
      <div className="flex flex-col gap-y-7 xl:pl-5 max-xl:px-5 w-full">
        <h1 className="text-3xl font-semibold">Category details</h1>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Category name:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={formatCategoryName(categoryInput.name)}
              onChange={(e) =>
                setCategoryInput({ ...categoryInput, name: e.target.value })
              }
            />
          </label>
        </div>

        <div className="flex gap-x-2 max-sm:flex-col">
          <button
            type="button"
            className="uppercase bg-green-500 px-10 py-5 text-lg border  border-gray-300 font-bold text-white shadow-sm hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2"
            onClick={updateCategory}
          >
            Update category
          </button>
          <button
            type="button"
            className="uppercase bg-red-600 px-10 py-5 text-lg border  border-gray-300 font-bold text-white shadow-sm hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2"
            onClick={deleteCategory}
          >
            Delete category
          </button>
        </div>
        <p className="text-xl text-error max-sm:text-lg">
          Note: if you delete this category, you will delete all products
          associated with the category.
        </p>
      </div>
    </div>
  );
};

export default DashboardSingleCategory;
