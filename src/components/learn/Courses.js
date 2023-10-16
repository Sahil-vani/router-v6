import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Courses = () => {
  const courseList = ["React", "Angular", "Vue", "Nodejs"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1 className="text-5xl text-green-400 py-3">Courses</h1>
      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "rgb(163 163 163)" : "rgb(239 68 68)",
          };
        }}
        className="rounded py-1 px-2 mb-2 h-10 flex items-center justify-content-between"
        to={`/learn/courses/${randomCourseName}`}
      >
        {randomCourseName}
      </NavLink>
      <NavLink
        className="rounded bg-red-500 py-1 px-2 mt-2 h-10 flex items-center justify-content-between"
        to={`/learn/courses/sahil`}
      >
        Sahil
      </NavLink>
      <Outlet />
    </div>
  );
};

export default Courses;
