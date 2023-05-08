import NavigationItem from "./NavigationItem";

interface ListedNavigation {
  id: number;
  name: string;
}

const navigationList: ListedNavigation[] = [
  {
    id: 1,
    name: `earn cookies`,
  },
  {
    id: 2,
    name: `shop`,
  },
];

function NavigationList() {
  const renderedNavigationList = navigationList.map((navigation) => {
    return <NavigationItem key={navigation.id} name={navigation.name} />;
  });
  return (
    <div className="flex justify-between  bg-yellow-800 bg-opacity-20 m-4 rounded-lg text-2xl">
      {renderedNavigationList}
    </div>
  );
}

export default NavigationList;
