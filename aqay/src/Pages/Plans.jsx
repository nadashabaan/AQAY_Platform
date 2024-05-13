import React from "react";
import { useState, useEffect } from "react";
import Plan from "../component/Plan";
const Plans = () => {
  const [plans, setplans] = useState([]);
  useEffect(() => {
    const fetchPlans = async () => {
      const apiUrl = "http://localhost:4000/plans";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setplans(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchPlans();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <Plan key={plan.id} plan={plan} />
      ))}
    </div>
  );
};

export default Plans;
