import NavigationItem from "./NavigationItem";
import { useAppSelector } from "../../../app/hooks";
interface ListedNavigation {
  id: number;
  name: string;
  link: string;
}

function NavigationList(): JSX.Element {
  const naviLanguage = useAppSelector(
    (state) => state.language.selectedLanguage.navigation
  );
  const navigationList: ListedNavigation[] = [
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
  ];
  const renderedNavigationList = navigationList.map((navigation) => {
    return (
      <NavigationItem
        key={navigation.id}
        name={navigation.name}
        link={navigation.link}
      />
    );
  });
  return (
    <div className="flex flex-col min-[500px]:flex-row justify-between bg-yellow-800 bg-opacity-20 rounded-lg m-4 xs:m-1">
      {renderedNavigationList}
    </div>
  );
}

export default NavigationList;
