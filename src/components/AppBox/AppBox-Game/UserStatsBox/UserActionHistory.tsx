import React from "react";
import { useAppSelector } from "../../../../app/hooks";
import { HistoryItem } from "../../../../app/slices/cookieSlice";
import CookieSvg from "../../../../images/1464300474.svg";

const UsersActionHistory = (): JSX.Element => {
  const recentHistory = useAppSelector((state) => state.cookie.history);
  const { selectedLanguage: language } = useAppSelector(
    (state) => state.language
  );
  const { upgrades: boosters } = language;

  const getDetailsMakeStrings = (item: HistoryItem): [string, string] => {
    if (item.type === "earn") {
      return [
        `${language.history.earn} ${item.earnedCookiesVal}`,
        `(${item.cookieVal})`,
      ];
    } else if (item.type === "autoEarn") {
      return [
        `${language.history.autoEarn[0]} ${item.earnedCookiesVal}`,
        `${language.history.autoEarn[1]} ${item.interval}"`,
      ];
    } else if (item.type === "boughtItem") {
      const boosterName = boosters[item.boosterId || 0]?.name;
      return [
        `${language.history.boughtItem[0]} ${boosterName} ${item.price}`,
        ``,
      ];
    }

    return ["", ""];
  };

  return (
    <div className="grow sm:ml-2">
      <h2>{language.userStats?.history}</h2>
      <ul>
        {recentHistory.map((item, index) => {
          const [part1, part2] = getDetailsMakeStrings(item);
          return (
            <li
              key={index}
              className="flex items-center justify-center md:justify-start nowrap"
            >
              <p className="my-1 whitespace-nowrap">{part1}</p>
              <img
                src={CookieSvg}
                alt="cookie"
                className="w-5 sm:w-6 md:w-7 mx-1 md:mx-2 mt-1 md:mt-1.5"
              />
              <p className="my-1 whitespace-nowrap">{part2}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersActionHistory;
