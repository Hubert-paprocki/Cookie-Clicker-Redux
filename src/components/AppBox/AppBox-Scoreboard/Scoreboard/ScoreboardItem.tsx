import React from "react";

interface NavigationItemProps {
  userName: string;
  score: number;
}

function NavigationItem({ userName, score }: NavigationItemProps): JSX.Element {
  return (
    <li className="px-5 py-2 bg-yellow-800 first:border-[#c89a30] first:border-2 bg-opacity-20 text-stone-300 hover:text-stone-50 duration-300 rounded-lg uppercase tracking-wider max-w-xl w-full flex hover:scale-105 justify-between">
      <p>Name:{userName}</p>
      <p>Score:{score}</p>
    </li>
  );
}

export default NavigationItem;
