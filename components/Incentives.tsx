import { incentives } from "@/lib/utils";
import React from "react";
import IncentiveCard from "./IncentiveCard";

const Incentives = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 py-5">
          Best Customer Benefits
        </h2>
        <div className="grid grid-cols-1 gap-8 px-4 sm:px-2 lg:px-4 lg:grid-cols-3">
          {incentives.map((incentive) => (
            <IncentiveCard key={incentive.name} incentive={incentive} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Incentives;
