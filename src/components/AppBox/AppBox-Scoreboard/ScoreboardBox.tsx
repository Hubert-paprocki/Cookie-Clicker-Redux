import React, { useState, useEffect } from "react";
import ScoreboardList from "./Scoreboard/ScoreboardList";
import ScoreboardForm from "./Scoreboard/ScoreboardForm";
import { useAppSelector } from "../../../app/hooks";

function ScoreboardBox(): JSX.Element {
  const slide = useAppSelector((state) => state.navigation.value);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (slide === "scoreboard") {
      setShouldRender(true);
    } else {
      const timeout = setTimeout(() => {
        setShouldRender(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [slide]);

  return (
    <div className="w-full min-[1024px]:w-[1024px] flex flex-col justify-between">
      {shouldRender && (
        <>
          <ScoreboardList />
          <ScoreboardForm />
        </>
      )}
    </div>
  );
}

export default ScoreboardBox;
