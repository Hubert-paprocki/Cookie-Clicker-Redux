import CookieClicker from "./CookieClicker";
import UserStatsBox from "./UserStatsBox/UserStatsBox";

function GameBox(): JSX.Element {
  return (
    <section className="flex flex-col w-full min-[1024px]:w-[1024px]">
      <CookieClicker /> <UserStatsBox />
    </section>
  );
}

export default GameBox;
