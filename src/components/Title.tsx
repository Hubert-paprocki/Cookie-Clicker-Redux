import React from "react";

function Title() {
  return (
    <h1 className=" z-10 text-7xl pb-5 text-white relative hover:scale-110 hover:-skew-y-1 duration-700 ">
      Cookie Clicker
      <span className="absolute inset-0 translate-x-1 translate-y-1 text-yellow-600">
        Cookie Clicker
      </span>
    </h1>
  );
}

export default Title;
