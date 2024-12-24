"use client";

import Image from "next/image";
import React, { useState } from "react";

interface IncentiveProps {
  incentive: {
    name: string;
    description: string;
    imageSrc: string;
    svgSrc: string;
  };
}

const IncentiveCard: React.FC<IncentiveProps> = ({ incentive }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative text-center sm:flex sm:text-left lg:block lg:text-center bg-white p-6 rounded-lg transition-shadow duration-300 shadow-md hover:shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="sm:flex-shrink-0">
        <div className="flow-root relative">
          <Image
            width={64}
            height={64}
            className={`mx-auto transition-all duration-300 ease-in-out ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
            src={incentive.imageSrc}
            alt={incentive.name}
          />
          <Image
            width={64}
            height={64}
            className={`mx-auto transition-all duration-300 ease-in-out absolute inset-0 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
            src={incentive.svgSrc}
            alt={incentive.name}
          />
        </div>
      </div>
      <div className="mt-3 sm:ml-3 sm:mt-0 lg:ml-0 lg:mt-3">
        <h3 className="text-lg font-semibold text-gray-900">
          {incentive.name}
        </h3>
        <p className="mt-2 text-base text-gray-600">{incentive.description}</p>
      </div>
    </div>
  );
};

export default IncentiveCard;
