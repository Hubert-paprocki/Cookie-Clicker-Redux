import NavigationItem from "./NavigationItem";

interface ListedNavigation {
  id: number;
  name: string;
  link: string;
}

const navigationList: ListedNavigation[] = [
  {
    id: 1,
    name: `earn cookies`,
    link: `game`,
  },
  {
    id: 2,
    name: `scoreboard`,
    link: `scoreboard`,
  },
  {
    id: 3,
    name: `shop`,
    link: `shop`,
  },
];

function NavigationList(): JSX.Element {
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
