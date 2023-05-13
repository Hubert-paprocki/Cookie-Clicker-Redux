import React from "react";
import NavigationList from "./Navigation/NavigationList";
import GameBox from "./AppBox-Game/GameBox";
import ShopBox from "./AppBox-Shop/ShopBox";
import { useAppSelector } from "../../app/hooks";

function AppBox() {
  const shop = useAppSelector((state) => state.app.value);
  console.log(shop);
  return (
    <div className="w-[1024px]  bg-stone-800 rounded-lg overflow-hidden">
      <NavigationList />
      <div
        className={`flex max-w-none w-[2048px]  duration-700 ${
          shop === "shop" ? "-translate-x-[1024px]" : ""
        }`}
      >
        <GameBox />
        <ShopBox />
      </div>
    </div>
  );
}

export default AppBox;
