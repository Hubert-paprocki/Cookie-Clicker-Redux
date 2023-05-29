import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import ScoreboardItem from "./ScoreboardItem";
import {
  fetchScoreList,
  loadMoreScores,
} from "../../../../app/slices/scoreboardSlice";
import Button from "../../../Button/Button";

const ScoreboardList = (): JSX.Element => {
  const { scoreList, error } = useAppSelector((state) => state.scoreboard);
  const dispatch = useAppDispatch();

  const handleLoadMore = () => {
    dispatch(loadMoreScores());
    dispatch(fetchScoreList());
  };

  useEffect(() => {
    dispatch(fetchScoreList());
  }, [dispatch]);

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
      {error && `error: ${error}`}
      <Button primary onClick={handleLoadMore}>
        load more
      </Button>
    </ol>
  );
};

export default ScoreboardList;
