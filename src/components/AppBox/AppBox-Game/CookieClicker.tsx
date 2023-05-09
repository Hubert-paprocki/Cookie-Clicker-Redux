import React from "react";
import CookieBtn from "../../../images/1464300474.svg";

function CookieClicker() {
  return (
    <div className="flex items-center justify-center p-10">
      <button className="rounded-full active:scale-[108%] active:duration-75 hover:scale-[102.5%] duration-200 ">
        <img src={CookieBtn} alt="Cookie" className="max-w-md" />{" "}
      </button>
    </div>
  );
}

export default CookieClicker;
