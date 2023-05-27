import { useAppSelector } from "../../../../app/hooks";

function UsersActiveBooster(): JSX.Element {
  const selectedItems = useAppSelector((state) =>
    state.shop.boosters.filter((booster) => booster.isActive)
  );
  const boostersLanguage = useAppSelector(
    (state) => state.language.selectedLanguage.upgrades
  );
  const titleActiveBoostersLanguage = useAppSelector(
    (state) => state.language.selectedLanguage.userStats.activeBoosters
  );

  return (
    <div>
      <h2>{titleActiveBoostersLanguage}</h2>
      <ul className="text-center">
        {selectedItems.map((item) => {
          const boosterLanguage = boostersLanguage.find(
            (language) => language.id === item.id
          );
          if (boosterLanguage) {
            return <li key={item.id}>{boosterLanguage.name}</li>;
          }
          return null;
        })}
      </ul>
    </div>
  );
}
//infinite loop from reducer,fix
export default UsersActiveBooster;
