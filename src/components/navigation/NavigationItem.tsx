import React from "react";
interface NavigationItemProps {
  name: string;
}

function NavigationItem({ name }: NavigationItemProps): JSX.Element {
  return (
    <button className="px-5 py-2  hover:bg-yellow-800 hover:bg-opacity-20  first:rounded-bl-lg first:rounded-tl-lg last:rounded-br-lg last:rounded-tr-lg duration-200 first:border-r-2 last:border-l-2 border-stone-800 text-stone-300 hover:text-stone-50 md:min-w-[170px] hover:min-w-[200px]">
      {name}
    </button>
  );
}

export default NavigationItem;
