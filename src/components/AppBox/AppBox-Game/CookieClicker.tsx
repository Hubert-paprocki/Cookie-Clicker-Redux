import React from "react";
import CookieBtn from "../../../images/1464300474.svg";
import { useAppDispatch } from "../../../app/hooks";
import { increment } from "../../../app/slices/cookieSlice";

function CookieClicker() {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(increment());
  };

  return (
    <div className="flex items-center justify-center p-10">
      <button
        className="rounded-full active:scale-[108%] active:duration-75 hover:scale-[102.5%] duration-200"
        onClick={handleClick}
      >
        <img
          src={CookieBtn}
          alt="Cookie"
          className="max-w-md"
          draggable="false"
        />
      </button>
    </div>
  );
}

export default CookieClicker;
