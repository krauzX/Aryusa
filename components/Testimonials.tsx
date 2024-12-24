"use client";

import React, { useEffect, useState } from "react";
import { reviews } from "@/lib/utils";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-10">
      <div className="relative overflow-hidden w-full h-56">
        <div
          className="absolute top-0 left-0 w-full h-full flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review) => (
            <div key={review.id} className="bg-primary flex-none w-full px-10">
              <div className=" text-green-800 font-bold px-12 py-8 max-lg:text-xl max-sm:text-lg rounded-lg shadow-lg border border-green-400 transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="bg-white p-6 rounded-lg shadow-md border border-green-300">
                  <p className="italic mb-4">"{review.text}"</p>
                  <p className="font-semibold text-right">- {review.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
