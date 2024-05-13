import React from "react";

const Plan = ({ plan }) => {
  return (
    <div className="bg-gray-200 rounded-lg p-5 max-w-sm shadow-md">
      <h3 className="text-lg font-semibold">{plan.type} subscription</h3>
      <p className="text-gray-600 my-2">{plan.price} for each Month</p>
      <ul className="list-disc pl-5 my-3">{plan.description}</ul>
      <button className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
        Start
      </button>
    </div>
  );
};

export default Plan;
