import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <h1 className="text-5xl text-stone-400">
        The course info: {location.state}
      </h1>
    </div>
  );
};

export default Dashboard;
