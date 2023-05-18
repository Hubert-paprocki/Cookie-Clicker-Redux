// ShopTileItem.tsx
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { buyItem } from "../../../../app/slices/boostersSlice";
import { subtractBoosterValue } from "../../../../app/slices/cookieSlice";
import CookieImg from "../../../../images/1464300474.svg";
interface ShopTileItemProps {
  name: string;
  desc: string;
  price: number;
}

function ShopTileItem({ name, desc, price }: ShopTileItemProps) {
  const selectedItems = useAppSelector((state) => state.boosters.selectedItems);
  const cookieValue = useAppSelector((state) => state.cookie.value);
  const dispatch = useAppDispatch();
  const purchased = useAppSelector((state) => selectedItems.includes(name));

  const handleBuyItem = () => {
    if (cookieValue >= price) {
      dispatch(buyItem(name));
      dispatch(subtractBoosterValue(price));
    }
  };

  const isDisabled = purchased;

  return (
    <div className="p-5 first:rounded-bl-lg first:rounded-tl-lg last:rounded-br-lg last:rounded-tr-lg duration-200 text-stone-300 rounded-lg bg-yellow-800 bg-opacity-20 flex flex-col  justify-center gap-5 grow group ">
      <div className="relative bg-orange-200 text-gray-700 p-4 rounded-lg flex flex-col items-center justify-center text-center h-32 overflow-hidden">
        <p>{name}</p>
        <p className="absolute bottom-0 w-full bg-orange-100 transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
          {desc}
        </p>
      </div>
      <button
        className={`bg-green-400 bg-opacity-20 py-1 px-4 rounded-full flex items-center justify-center ${
          isDisabled
            ? "opacity-50 "
            : "hover:bg-opacity-50 duration-200 hover:-translate-y-0.5 active:translate-y-0 active:duration-75"
        }`}
        onClick={handleBuyItem}
        disabled={isDisabled}
      >
        {isDisabled ? "Item purchased" : `Buy for ${price}`}
        <img src={CookieImg} alt="cookie" className="h-7 pl-1.5" />
      </button>
    </div>
  );
}

export default ShopTileItem;
