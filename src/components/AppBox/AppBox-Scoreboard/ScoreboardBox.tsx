import React from "react";
import ScoreboardList from "./Scoreboard/ScoreboardList";
import ScoreboardForm from "./Scoreboard/ScoreboardForm";

function ScoreboardBox() {
  return (
    <div className="w-[1024px] flex flex-col justify-between">
      <ScoreboardList /> <ScoreboardForm />
    </div>
  );
}

export default ScoreboardBox;
