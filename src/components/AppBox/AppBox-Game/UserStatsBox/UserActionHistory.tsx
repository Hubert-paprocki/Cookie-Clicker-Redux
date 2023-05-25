import React from "react";
import { useAppSelector } from "../../../../app/hooks";
import { HistoryItem } from "../../../../app/slices/cookieSlice";
import CookieSvg from "../../../../images/1464300474.svg";

const UsersActionHistory = (): JSX.Element => {
  const recentHistory = useAppSelector((state) =>
    state.cookie.history.slice(-3)
  );
  const { selectedLanguage: language } = useAppSelector(
    (state) => state.language
  );
  const { upgrades: boosters } = language;

  const getDetailsMakeStrings = (item: HistoryItem): [string, string] => {
    if (item.type === "earn") {
      const earnedCookies = `${language.history.earn} ${item.earnedCookiesVal}`;
      const cookieValue = `(${item.cookieVal})`;
      return [earnedCookies, cookieValue];
    } else if (item.type === "autoEarn") {
      const autoEarnedCookies = `${language.history.autoEarn[0]} ${item.earnedCookiesVal}`;
      const interval = `${language.history.autoEarn[1]} ${item.interval}"`;
      return [autoEarnedCookies, interval];
    } else if (item.type === "boughtItem" && item.boosterId) {
      const boosterName = boosters[item.boosterId]?.name || "";
      const boughtItem = `${language.history.boughtItem[0]} ${boosterName}`;
      const price = `${language.history.boughtItem[1]} ${item.price}`;
      return [boughtItem, price];
    }
    return ["", ""];
  };

  return (
    <div className="grow sm:ml-2">
      <h2>{language.userStats?.history}</h2>
      <ul>
        {recentHistory.map((item, index) => {
          const [actionDescription, actionDetails] =
            getDetailsMakeStrings(item);
          return (
            <li
              key={index}
              className="flex items-center justify-center md:justify-start nowrap"
            >
              <p className="my-1 whitespace-nowrap">{actionDescription}</p>
              <img
                src={CookieSvg}
                alt="cookie"
                className="w-5 sm:w-6 md:w-7 mx-1 md:mx-2 mt-1 md:mt-1.5"
              />
              <p className="my-1 whitespace-nowrap">{actionDetails}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersActionHistory;
