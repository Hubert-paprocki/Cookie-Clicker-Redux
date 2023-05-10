import React from "react";
import NavigationList from "./Navigation/NavigationList";
import GameBox from "./AppBox-Game/GameBox";
import ShopBox from "./AppBox-Shop/ShopBox";

function AppBox() {
  const shop = false;
  return (
    <div className="w-[1024px]  bg-stone-800 rounded-lg p-4 overflow-hidden">
      <NavigationList />
      <div
        className={`flex max-w-none w-[2048px] gap-16 duration-700 ${
          shop ? "-translate-x-[1048px]" : ""
        }`}
      >
        <GameBox />
        <ShopBox />
      </div>
    </div>
  );
}

export default AppBox;
