import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";

import ScoreboardItem from "./ScoreboardItem";
import { fetchScoreList } from "../../../../app/slices/scoreboardSlice";

function ScoreboardList(): JSX.Element {
  const scoreList = useAppSelector((state) => state.scoreboard.scoreList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchScoreList());
  }, [dispatch]);

  const renderedScoreboardList = scoreList.map((scoreboard, index) => (
    <ScoreboardItem
      key={index}
      userName={scoreboard.username}
      score={scoreboard.score}
    />
  ));

  return (
    <ol className="flex flex-col gap-3 items-center max-h-[500px] overflow-y-scroll ml-4">
      {renderedScoreboardList}
    </ol>
  );
}

export default ScoreboardList;
