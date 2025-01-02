import React from "react";
import { FaStar } from "react-icons/fa6";

interface RatingPercentElementProps {
  ratings: {
    total: number;
    average: number;
    breakdown: {
      [key: string]: number;
    };
  };
}

const RatingPercentElement: React.FC<RatingPercentElementProps> = ({
  ratings,
}) => {
  const { total, average, breakdown } = ratings;

  return (
    <div>
      <div className="flex items-center justify-center gap-x-[1px] mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-custom-yellow text-2xl" />
        ))}
        <p className="ms-1 text-lg font-medium text-black dark:text-gray-400">
          {average.toFixed(2)}
        </p>
        <p className="ms-1 text-lg font-medium text-black dark:text-gray-400">
          out of
        </p>
        <p className="ms-1 text-lg font-medium text-black dark:text-gray-400">
          5
        </p>
      </div>
      <p className="text-lg font-medium text-black dark:text-gray-400 text-center">
        {total} global ratings
      </p>
      {Object.entries(breakdown).map(([star, percent]) => (
        <div key={star} className="flex items-center justify-center mt-4">
          <a
            href="#"
            className="text-base font-medium text-black dark:text-green-500 hover:underline"
          >
            {star} star
          </a>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-custom-yellow rounded"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
          <span className="text-base font-medium text-black dark:text-gray-400">
            {percent}%
          </span>
        </div>
      ))}
    </div>
  );
};

export default RatingPercentElement;
