import { useAppSelector } from "../../../../app/hooks";
function Score(): JSX.Element {
  const cookieValue = useAppSelector((state) => state.cookie.value);
  const scoreLanguage = useAppSelector(
    (state) => state.language.selectedLanguage.userStats.scoreName
  );
  return (
    <div>
      <h2>{scoreLanguage}</h2> <p>{cookieValue}</p>
    </div>
  );
}

export default Score;
