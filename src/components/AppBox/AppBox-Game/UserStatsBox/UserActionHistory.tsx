import React from "react";
import { useAppSelector } from "../../../../app/hooks";
import CookieSvg from "../../../../images/1464300474.svg";

function UsersActionHistory(): JSX.Element {
  const history = useAppSelector((state) => state.cookie.history);

  const splitItemString = (item: string) => {
    const index = item.indexOf("cookie");
    if (index !== -1) {
      const part1 = item.substring(0, index);
      const part2 = item.substring(index + "cookie".length);
      return [part1, part2];
    }
    return [item];
  };

  return (
    <div>
      <h2>— History —</h2>
      <ul>
        {history.map((item, index) => {
          const [part1, part2] = splitItemString(item);
          return (
            <li key={index} className="flex items-center justify-start ">
              <p className="my-1">{part1}</p>
              <img src={CookieSvg} alt="cookie" className="w-7 mx-1" />
              <p className="my-1 ml-6">{part2}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UsersActionHistory;
