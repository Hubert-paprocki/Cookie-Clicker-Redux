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
    <div className="flex justify-between  bg-yellow-800 bg-opacity-20  rounded-lg text-2xl m-4">
      {renderedNavigationList}
    </div>
  );
}

export default NavigationList;
