import { incentives } from "@/lib/utils";
import React from "react";
import IncentiveCard from "./IncentiveCard";

const Incentives = () => {
  return (
    <div className="bg-gray-50 py-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 py-5">
        Best Customer Benefits
      </h2>
      <div className="mx-auto max-w-screen-2xl py-10 sm:px-2 lg:px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4 lg:max-w-none lg:grid-cols-3">
          {incentives.map((incentive) => (
            <IncentiveCard key={incentive.name} incentive={incentive} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Incentives;
