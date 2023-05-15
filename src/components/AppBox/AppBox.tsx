import React from "react";
import NavigationList from "./Navigation/NavigationList";
import GameBox from "./AppBox-Game/GameBox";
import ShopBox from "./AppBox-Shop/ShopBox";
import { useAppSelector } from "../../app/hooks";
import ScoreboardBox from "./AppBox-Scoreboard/ScoreboardBox";

function AppBox() {
  const slide = useAppSelector((state) => state.app.value);
  console.log(slide);
  return (
    <div className="w-[1024px]  bg-stone-800 rounded-lg overflow-hidden">
      <NavigationList />
      <div
        className={`flex w-[3072px]  duration-500 ${
          slide === "shop" && "-translate-x-[1024px]"
        } ${slide === "scoreboard" && "-translate-x-[1024px]"}`}
      >
        <GameBox />
        {slide === "shop" || slide === "game" || <ScoreboardBox />}
        <ShopBox />
      </div>
    </div>
  );
}

export default AppBox;
