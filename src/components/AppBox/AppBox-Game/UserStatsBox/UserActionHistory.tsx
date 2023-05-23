import React from "react";
import { useAppSelector } from "../../../../app/hooks";
import CookieSvg from "../../../../images/1464300474.svg";

function UsersActionHistory(): JSX.Element {
  const history = useAppSelector((state) => state.cookie.history);

  const splitItemString = (item: string) => {
    const index1 = item.indexOf("cookie");
    const index2 = item.indexOf("(");
    if (index1 !== -1 && index2 !== -1) {
      const part1 = item.substring(0, index1);
      const part2 = item.substring(index1 + "cookie".length, index2);
      const part3 = item.substring(index2);
      return [part1, part2, part3];
    } else if (index1 !== -1) {
      const part1 = item.substring(0, index1);
      const part2 = item.substring(index1 + "cookie".length);
      return [part1, part2];
    }
    return [item];
  };

  return (
    <div className="grow ml-2">
      <h2>— History —</h2>
      <ul>
        {history.map((item, index) => {
          const [part1, part2, part3] = splitItemString(item);
          return (
            <li key={index} className="flex items-center justify-start nowrap">
              <p className="my-1">{part1}</p>
              {part2 && (
                <>
                  <img
                    src={CookieSvg}
                    alt="cookie"
                    className="w-7 mx-2 mt-1.5"
                  />
                  <p className="my-1">{part2}</p>
                </>
              )}
              {part3 ? (
                <p className="my-1 ml-3">{part3}</p>
              ) : (
                <img src={CookieSvg} alt="cookie" className="w-7 mx-2 mt-1.5" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UsersActionHistory;
