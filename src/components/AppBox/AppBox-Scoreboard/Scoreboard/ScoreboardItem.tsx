import { useAppSelector } from "../../../../app/hooks";
interface ScoreboardItemProps {
  readonly userName: string;
  readonly score: number;
}

function ScoreboardItem({ userName, score }: ScoreboardItemProps): JSX.Element {
  const scoreboardLanguage = useAppSelector(
    (state) => state.language.selectedLanguage.scoreboard
  );
  const anonUsername = useAppSelector(
    (state) => state.language.selectedLanguage.scoreboard.anonymousName
  );

  return (
    <li className="px-5 py-2 bg-yellow-800 first:border-[#c89a30] first:border-2 bg-opacity-20 text-stone-300 hover:text-stone-50 duration-300 rounded-lg uppercase tracking-wider max-w-xl w-full flex sm:hover:scale-105 justify-between">
      <div className="flex">
        {userName === "Anonymous" || (
          <p className="pr-1.5">{scoreboardLanguage.name}</p>
        )}
        <p> {userName === "Anonymous" ? anonUsername : userName}</p>
      </div>
      <p>
        {scoreboardLanguage.score}
        {score}
      </p>
    </li>
  );
}

export default ScoreboardItem;
