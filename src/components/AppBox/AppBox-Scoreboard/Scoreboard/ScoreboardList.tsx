import { useEffect, useState } from "react";
import { collection, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { firestore } from "../../../../firebase";
import ScoreboardItem from "./ScoreboardItem";

interface Scoreboard {
  readonly id: string;
  readonly username: string;
  readonly score: number;
}

function ScoreboardList(): JSX.Element {
  const [scoreList, setScoreList] = useState<Scoreboard[]>([]);
  const scoresRef = collection(firestore, "scores");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      scoresRef,
      (querySnapshot: QuerySnapshot) => {
        const newData: Scoreboard[] = querySnapshot.docs.map((doc) => {
          const { username, score } = doc.data();
          return {
            id: doc.id,
            username,
            score,
          };
        });

        newData.sort((a, b) => b.score - a.score);
        setScoreList(newData.slice(0, 10));
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
    <ol className="flex flex-col gap-3 items-center text-2xl m-4 max-h-[500px] overflow-y-scroll p-4 ">
      {renderedScoreboardList}
    </ol>
  );
}

export default ScoreboardList;
