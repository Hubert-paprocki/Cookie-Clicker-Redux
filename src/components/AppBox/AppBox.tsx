import React from "react";
import NavigationList from "./Navigation/NavigationList";
import GameBox from "./AppBox-Game/GameBox";
import ShopBox from "./AppBox-Shop/ShopBox";

function AppBox() {
  return (
    <div className="w-[1024px] bg-stone-800 rounded-lg m-5 p-4">
      <NavigationList />
      <div className=" overflow-hidden">
        <GameBox />
        <ShopBox />
      </div>
    </div>
  );
}

export default AppBox;
