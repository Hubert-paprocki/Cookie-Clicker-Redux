import React from "react";
import ScoreboardList from "./Scoreboard/ScoreboardList";
import ScoreboardForm from "./Scoreboard/ScoreboardForm";
import { useAppSelector } from "../../../app/hooks";

function ScoreboardBox() {
  const slide = useAppSelector((state) => state.navigation.value);
  return (
    <div className="w-[1024px] flex flex-col justify-between">
      {slide === "scoreboard" && (
        <>
          <ScoreboardList /> <ScoreboardForm />
        </>
      )}
    </div>
  );
}

export default ScoreboardBox;
