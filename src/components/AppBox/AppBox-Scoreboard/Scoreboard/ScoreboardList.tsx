import ScoreboardItem from "./ScoreboardItem";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, QuerySnapshot } from "@firebase/firestore";
import { firestore } from "../../../../firebase";

interface Score {
  username: string;
  score: number;
}

function ScoreboardList() {
  const [scoreList, setScoreList] = useState<Score[]>([]);
  const ref = collection(firestore, "scores");

  useEffect(() => {
    const unsubscribe = onSnapshot(ref, (querySnapshot: QuerySnapshot) => {
      const scores: Score[] = [];
      querySnapshot.forEach((doc) => {
        scores.push(doc.data() as Score);
      });
      scores.sort((a, b) => b.score - a.score); // Sort scores in descending order
      setScoreList(scores.slice(0, 10)); // Slice to include only the top 10 scores
    });

    return unsubscribe;
  }, [ref]);

  const renderedScoreboardList = scoreList.map((scoreboard, index) => (
    <ScoreboardItem
      key={index}
      userName={scoreboard.username}
      score={scoreboard.score}
    />
  ));

  return (
    <div>
      <h2 className=" text-center text-4xl">Top 10</h2>
      <ol className="flex flex-col gap-3 items-center text-2xl m-4">
        {renderedScoreboardList}
      </ol>
    </div>
  );
}

export default ScoreboardList;
