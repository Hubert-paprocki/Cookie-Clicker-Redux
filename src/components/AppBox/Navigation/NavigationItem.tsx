import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { changePage } from "../../../app/slices/navigationSlice";

interface NavigationItemProps {
  name: string;
  link: string;
}

function NavigationItem({ name, link }: NavigationItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(changePage(link));
  };

  return (
    <button
      className="px-5 py-2 hover:bg-yellow-800 hover:bg-opacity-20 first:rounded-bl-lg first:rounded-tl-lg last:rounded-br-lg last:rounded-tr-lg duration-200 [&:not(:last-child)]:border-r-4 [&:not(:first-child)]:border-l-4 border-stone-800 text-stone-300 hover:text-stone-50 md:min-w-[217px] hover:min-w-[250px] uppercase tracking-wider"
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

export default NavigationItem;
