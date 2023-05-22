import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import CookieImg from "../../../../images/1464300474.svg";
import { buyBooster } from "../../../../app/slices/actions";
import { incrementValueInfinitely } from "../../../../app/slices/cookieSlice";
import { Booster, setFlashRed } from "../../../../app/slices/shopSlice";

function ShopTileItem({ name, desc, price, id, time }: Booster): JSX.Element {
  const dispatch = useAppDispatch();
  const cookieValue = useAppSelector((state) => state.cookie.value);
  const isBought = useAppSelector((state) => state.shop.boosters[id].isActive);
  const flashRed = useAppSelector((state) => state.shop.boosters[id].flashRed);

  const handleBuyItem = () => {
    if (cookieValue >= price && !isBought) {
      dispatch(buyBooster({ id, price, name }));
      if (time) {
        dispatch(incrementValueInfinitely(time));
      }
    } else if (cookieValue < price && !isBought) {
      dispatch(setFlashRed({ id, value: true }));
      setTimeout(() => {
        dispatch(setFlashRed({ id, value: false }));
      }, 500);
    }
  };

  return (
    <div className="p-2 sm:p-5 first:rounded-bl-lg first:rounded-tl-lg last:rounded-br-lg last:rounded-tr-lg duration-200 text-stone-300 rounded-lg bg-yellow-800 bg-opacity-20 flex flex-col justify-evenly sm:justify-center gap-2 min-[500px]:gap-5 grow group  w-full sm:w-auto ">
      <div className="relative bg-orange-200 text-gray-700 p-3 sm:p-4 rounded-lg flex flex-col items-center justify-center text-center sm:h-32 overflow-hidden">
        <p>{name}</p>
        <p className="absolute bottom-0 w-full bg-orange-100 transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
          {desc}
        </p>
      </div>
      <button
        className={`bg-green-400 bg-opacity-20 py-1 px-4 rounded-lg sm:rounded-full flex items-center justify-center ${
          isBought
            ? "opacity-50 "
            : `hover:bg-opacity-50 duration-200 hover:-translate-y-0.5 active:translate-y-0 active:duration-75 ${
                flashRed ? "bg-red-500" : ""
              }`
        }`}
        onClick={handleBuyItem}
        disabled={isBought}
      >
        {isBought ? "Item purchased" : `Buy for ${price}`}
        <img src={CookieImg} alt="cookie" className="h-7 pl-1.5" />
      </button>
    </div>
  );
}

export default ShopTileItem;
