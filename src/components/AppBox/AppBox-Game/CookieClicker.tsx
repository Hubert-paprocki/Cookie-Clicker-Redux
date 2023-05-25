import React from "react";
import CookieBtn from "../../../images/1464300474.svg";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { increment } from "../../../app/slices/actions";

function CookieClicker(): JSX.Element {
  const dispatch = useAppDispatch();
  const grannyHandsIsActive = useAppSelector(
    (state) => state.shop.boosters[0].isActive
  );

  const handleClick = () => {
    dispatch(increment({ grannyHandsIsActive }));
  };

  return (
    <div className="flex items-center justify-center p-2 xs:p-5 sm:p-10">
      <button
        className="rounded-full active:scale-[108%] active:duration-75 hover:scale-[102.5%] duration-200 opacity-80 w-2/3 sm:w-auto"
        onClick={handleClick}
        onContextMenu={(e) => e.preventDefault()}
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <img
          src={CookieBtn}
          alt="Cookie"
          className="w-full"
          draggable="false"
        />
      </button>
    </div>
  );
}

export default CookieClicker;
