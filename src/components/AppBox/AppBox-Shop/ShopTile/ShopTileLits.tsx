import React from "react";
import ShopTileItem from "./ShopTileItem";
import { useAppSelector } from "../../../../app/hooks";
import { Booster } from "../../../../app/slices/shopSlice";

function ShopTileList(): JSX.Element {
  const boosters = useAppSelector((state) => state.shop.boosters);
  const boostersLanguage = useAppSelector(
    (state) => state.language.selectedLanguage.upgrades
  );

  const renderedShopTileList = boosters.map((booster: Booster, index) => {
    const boosterLanguage = boostersLanguage[index];

    return (
      <ShopTileItem
        key={booster.id}
        id={booster.id}
        name={boosterLanguage.name}
        desc={boosterLanguage.description}
        price={booster.price}
        time={booster.time}
        cookieVal={booster.cookieVal}
        isActive={booster.isActive}
        flashRed={booster.flashRed}
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
