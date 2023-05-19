// ShopTileList.tsx
import React from "react";
import ShopTileItem from "./ShopTileItem";
import { useAppSelector } from "../../../../app/hooks";

function ShopTileList(): JSX.Element {
  const boosters = useAppSelector((state) => state.boosters.boosters);
  const renderedShopTileList = boosters.map((booster: any) => {
    return (
      <ShopTileItem
        key={booster.id}
        id={booster.id}
        name={booster.name}
        desc={booster.desc}
        price={booster.price}
        time={booster.time}
      />
    );
  });
  return (
    <div className="flex flex-wrap text-2xl gap-3 h-full mx-4 pb-4">
      {renderedShopTileList}
    </div>
  );
}

export default ShopTileList;
