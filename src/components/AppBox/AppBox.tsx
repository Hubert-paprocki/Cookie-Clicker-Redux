import React from "react";
import NavigationList from "./Navigation/NavigationList";
import GameBox from "./AppBox-Game/GameBox";
import ShopBox from "./AppBox-Shop/ShopBox";
import { useAppSelector } from "../../app/hooks";
import ScoreboardBox from "./AppBox-Scoreboard/ScoreboardBox";

function AppBox() {
  const slide = useAppSelector((state) => state.navigation.value);
  console.log(slide);
  return (
    <div className="w-[1024px]  bg-stone-800 rounded-lg overflow-hidden">
      <NavigationList />
      <div
        className={`flex w-[3072px]  duration-300 ${
          slide === "shop" && "-translate-x-[2048px]"
        } ${slide === "scoreboard" && "-translate-x-[1024px]"}`}
      >
        <GameBox />
        {<ScoreboardBox />}
        <ShopBox />
      </div>
    </div>
  );
}

export default AppBox;
