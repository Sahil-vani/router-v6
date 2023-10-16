import React from "react";
import { Link, Outlet } from "react-router-dom";

const Learn = () => {
  return (
    <div className="grid justify-center">
      <h1 className="text-3xl justify-items-center pl-4">Learn</h1>
      <h3 className="text-lg py-3">This is Learn Page.</h3>
      <Link to="/learn/courses" className="py-1 divide-x-2 text-red-500">
        Courses
      </Link>
      <Link to="/learn/bundles" className="py-1 divide-x-2 text-red-500">
        Bundles
      </Link>
      <Outlet />
    </div>
  );
};

export default Learn;
