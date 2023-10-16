import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid justify-center py-7">
      <h1 className="text-3xl">This is Home Page.</h1>
      <Link to="/learn" className="py-1 divide-x-2 text-red-500">
        Learn
      </Link>
      <Link to="/myapp" className="py-1 divide-x-2 text-red-500">
        App
      </Link>
    </div>
  );
};

export default Home;
