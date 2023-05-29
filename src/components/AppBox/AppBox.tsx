import NavigationList from "./Navigation/NavigationList";
import GameBox from "./AppBox-Game/GameBox";
import ShopBox from "./AppBox-Shop/ShopBox";
import { useAppSelector } from "../../app/hooks";
import ScoreboardBox from "./AppBox-Scoreboard/ScoreboardBox";

function AppBox(): JSX.Element {
  const slide = useAppSelector((state) => state.navigation.link);

  const switchSlide =
    slide === "shop"
      ? "-translate-x-[66.6666%] min-[1024px]:-translate-x-[2048px]"
      : slide === "scoreboard"
      ? "-translate-x-[33.3333%] min-[1024px]:-translate-x-[1024px]"
      : "";

  return (
    <main className="w-full min-[1024px]:w-[1024px] bg-stone-800 rounded-none overflow-hidden min-[1024px]:rounded-lg max-[500px]:min-h-screen">
      <NavigationList />
      <section
        className={`flex w-[300%] min-[1024px]:w-[3072px] duration-300 ease-long-slide ${switchSlide}`}
      >
        <GameBox />
        <ScoreboardBox />
        <ShopBox />
      </section>
    </main>
  );
}

export default AppBox;
