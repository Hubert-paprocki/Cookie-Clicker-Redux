import React from "react";
import CookieClicker from "./CookieClicker";
import UserStatsBox from "./UserStatsBox/UserStatsBox";

function GameBox() {
  return (
    <div className="flex flex-col w-[1024px]">
      <CookieClicker /> <UserStatsBox />
    </div>
  );
}

export default GameBox;
