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
    <div className="grow sm:ml-2 ">
      <h2>— History —</h2>
      <ul>
        {history.map((item, index) => {
          const [part1, part2, part3] = splitItemString(item);
          return (
            <li
              key={index}
              className="flex items-center justify-center md:justify-start nowrap"
            >
              <p className="my-1 whitespace-nowrap">{part1}</p>
              {part2 && (
                <>
                  <img
                    src={CookieSvg}
                    alt="cookie"
                    className="w-5 sm:w-6 md:w-7 mx-1 md:mx-2 mt-1 md:mt-1.5"
                  />
                  <p className="my-1 whitespace-nowrap">{part2}</p>
                </>
              )}
              {part3 ? (
                <p className="my-1 ml-2 md:ml-3 max-[360px]:hidden">{part3}</p>
              ) : (
                <img
                  src={CookieSvg}
                  alt="cookie"
                  className="w-5 sm:w-6 md:w-7 mx-1 md:mx-2 mt-1 md:mt-1.5"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UsersActionHistory;
