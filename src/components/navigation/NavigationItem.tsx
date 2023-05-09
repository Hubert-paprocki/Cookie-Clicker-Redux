import React from "react";
interface NavigationItemProps {
  name: string;
}

function NavigationItem({ name }: NavigationItemProps): JSX.Element {
  return (
    <button className="px-5 py-2  hover:bg-yellow-800 hover:bg-opacity-20  first:rounded-bl-lg first:rounded-tl-lg last:rounded-br-lg last:rounded-tr-lg duration-200 first:border-r-4 last:border-l-4 border-stone-800 text-stone-300 hover:text-stone-50 md:min-w-[217px] hover:min-w-[250px] uppercase tracking-wider">
      {name}
    </button>
  );
}

export default NavigationItem;
