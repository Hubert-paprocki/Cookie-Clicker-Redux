import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import ScoreboardItem from "./ScoreboardItem";
import {
  fetchScoreList,
  loadMoreScores,
} from "../../../../app/slices/scoreboardSlice";
import Button from "../../../Button";

function ScoreboardList(): JSX.Element {
  const scoreList = useAppSelector((state) => state.scoreboard.scoreList);
  const dispatch = useAppDispatch();

  const handleLoadMore = () => {
    dispatch(loadMoreScores());
  };

  useEffect(() => {
    dispatch(fetchScoreList());
  }, [handleLoadMore]);

  const renderedScoreboardList = scoreList.map((scoreboard) => (
    <ScoreboardItem
      key={scoreboard.id}
      userName={scoreboard.username}
      score={scoreboard.score}
    />
  ));

  return (
    <ol className="flex flex-col gap-3 items-center max-h-[500px] overflow-y-scroll ml-4">
      {renderedScoreboardList}
      <Button primary onClick={handleLoadMore}>
        load more
      </Button>
    </ol>
  );
}

export default ScoreboardList;
