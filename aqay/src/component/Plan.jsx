// import React from "react";

// const Plan = ({ plan }) => {
//   return (
//     <div className="bg-gray-200 rounded-lg p-5 max-w-sm shadow-md">
//       <h3 className="text-lg font-semibold">{plan.name}</h3>
//       <p className="text-gray-600 my-2">${plan.price}</p>
//       <p className="list-disc pl-5 my-3">{plan.describtion}</p>
//       <button className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50">
//         Start
//       </button>
//     </div>
//   );
// };

// export default Plan;
import React from "react";
const Plan = ({ plan }) => {
  const handleSubscribe = async () => {
    // Retrieve user ID from local storage
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("User not logged in");
      return;
    }
    const url = `http://aqay.runasp.net/api/Subscription/subscribe?userId=${userId}&planId=${plan.id}`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe to plan");
      }

      const data = await response.json();
      alert(data.message || "Subscribed successfully!");
    } catch (error) {
      alert("Subscription failed: " + error.message);
    }
  };

  return (
    <div className="bg-gray-200 rounded-lg p-5 max-w-sm shadow-md">
      <h3 className="text-lg font-semibold">{plan.name}</h3>
      <p className="text-gray-600 my-2">${plan.price}</p>
      <p className="list-disc pl-5 my-3">{plan.describtion}</p>
      <button
        onClick={handleSubscribe}
        className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50"
      >
        Start
      </button>
    </div>
  );
};

export default Plan;
