import NavigationItem from "./NavigationItem";
import { useAppSelector } from "../../../app/hooks";
import { NavigationState } from "../../../app/slices/navigationSlice";
import { useMemo } from "react";

interface ListedNavigation extends NavigationState {
  readonly id: number;
  readonly name: string;
}

function NavigationList(): JSX.Element {
  const naviLanguage = useAppSelector(
    (state) => state.language.selectedLanguage.navigation
  );
  const navigationList: ListedNavigation[] = useMemo(
    () => [
      {
        id: 1,
        name: naviLanguage.earnCookies,
        link: "game",
      },
      {
        id: 2,
        name: naviLanguage.scoreboard,
        link: "scoreboard",
      },
      {
        id: 3,
        name: naviLanguage.shop,
        link: "shop",
      },
    ],
    [naviLanguage]
  );

  const renderedNavigationList = useMemo(
    () =>
      navigationList.map((navigation) => (
        <NavigationItem
          key={navigation.id}
          name={navigation.name}
          link={navigation.link}
        />
      )),
    [navigationList]
  );

  return (
    <nav>
      <ul className="flex flex-col min-[500px]:flex-row justify-between bg-yellow-800 bg-opacity-20 rounded-lg m-4 xs:m-1">
        {renderedNavigationList}
      </ul>
    </nav>
  );
}

export default NavigationList;
