import React, { useEffect, useState } from "react";
import { collection, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { firestore } from "../../../../firebase";
import ScoreboardItem from "./ScoreboardItem";

interface Score {
  id: string;
  username: string;
  score: number;
}

function ScoreboardList() {
  const [scoreList, setScoreList] = useState<Score[]>([]);
  const scoresRef = collection(firestore, "scores");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      scoresRef,
      (querySnapshot: QuerySnapshot) => {
        const newData: Score[] = querySnapshot.docs.map((doc) => {
          const { username, score } = doc.data();
          return {
            id: doc.id,
            username,
            score,
          };
        });

        newData.sort((a, b) => b.score - a.score); // Sort by highest score

        setScoreList(newData.slice(0, 10)); // Get top 10 scores
      }
    );

    return () => unsubscribe();
  }, []);

  const renderedScoreboardList = scoreList.map((scoreboard, index) => (
    <ScoreboardItem
      key={index}
      userName={scoreboard.username}
      score={scoreboard.score}
    />
  ));

  return (
    <div>
      <h2 className="text-center text-4xl">Top 10</h2>
      <ol className="flex flex-col gap-3 items-center text-2xl m-4">
        {renderedScoreboardList}
      </ol>
    </div>
  );
}

export default ScoreboardList;
