import React from "react";
import { useAppSelector } from "../../../../app/hooks";

interface NavigationItemProps {
  userName: string;
  score: number;
}

function NavigationItem({ userName, score }: NavigationItemProps): JSX.Element {
  const scoreboardLanguage = useAppSelector(
    (state) => state.language.selectedLanguage.scoreboard
  );

  return (
    <li className="px-5 py-2 bg-yellow-800 first:border-[#c89a30] first:border-2 bg-opacity-20 text-stone-300 hover:text-stone-50 duration-300 rounded-lg uppercase tracking-wider max-w-xl w-full flex sm:hover:scale-105 justify-between">
      <p>
        {scoreboardLanguage.name}
        {userName}
      </p>
      <p>
        {scoreboardLanguage.score}
        {score}
      </p>
    </li>
  );
}

export default NavigationItem;
