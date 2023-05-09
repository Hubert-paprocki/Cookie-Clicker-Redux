import React from "react";
import NavigationList from "../navigation/NavigationList";
import GameBox from "./GameBox";

function AppBox() {
  return (
    <div className="w-[1000px] bg-stone-800 rounded-lg m-5 ">
      <NavigationList />
      <GameBox />
    </div>
  );
}

export default AppBox;
