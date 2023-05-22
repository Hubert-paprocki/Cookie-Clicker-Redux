import React from "react";
import ShopTileItem from "./ShopTileItem";
import { useAppSelector } from "../../../../app/hooks";
import { Booster } from "../../../../app/slices/boostersSlice";

function ShopTileList(): JSX.Element {
  const boosters = useAppSelector((state) => state.boosters.boosters);
  const renderedShopTileList = boosters.map((booster: Booster) => {
    return (
      <ShopTileItem
        key={booster.id}
        id={booster.id}
        name={booster.name}
        desc={booster.desc}
        price={booster.price}
        time={booster.time}
        cookieVal={booster.cookieVal}
        isActive={booster.isActive}
      />
    );
  });
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 h-full mx-4 pb-4">
      {renderedShopTileList}
    </div>
  );
}

export default ShopTileList;
