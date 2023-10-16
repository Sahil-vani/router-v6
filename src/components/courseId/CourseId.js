import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const CourseId = () => {
  const { courseid } = useParams();

  const navigate = useNavigate();

  return (
    <div className="text-3xl flex justify-center content-center">
      URL Params: <h1 className="text-blue-400"> {courseid} </h1>
      <button
        className="rounded m-3 bg-yellow-300 flex justify-center content-center"
        onClick={() => navigate("/dashboard", { state: courseid })}
      >
        Price
      </button>
    </div>
  );
};

export default CourseId;
