import SocialMediaList from "./SocialMediaList/SocialMediaList";
import { useAppSelector } from "../../app/hooks";
function Footer(): JSX.Element {
  const descriptionLanguage = useAppSelector(
    (state) => state.language.selectedLanguage.description
  );
  const creditsLanguage = useAppSelector(
    (state) => state.language.selectedLanguage.credits
  );

  const currentYear = new Date().getFullYear();
  return (
    <div className=" bg-yellow-900 bg-opacity-20  text-neutral-300 text-md xs:text-lg px-5 xs:px-10 flex flex-col pt-0 md:pt-5 justify-center items-center text-center  md:flex-row  pb-8 ">
      <p className="w-full max-w-xl md:pr-12 md:w-1/2 pt-5 border-b-2 border-neutral-800 md:border-none pb-5 md:pb-0 font-norma items">
        {descriptionLanguage}
      </p>
      <div className="w-full max-w-xl border-l-none border-neutral-800 pl-0 md:pl-12 md:w-1/2 md:border-l-2 pt-5 ">
        <p className="leading-relaxed">
          {creditsLanguage.part1}
          <span className="relative whitespace-nowrap group">
            <span
              className="block absolute -inset-1 -skew-y-[1.75deg] translate-y-[0.11rem] bg-purple-800 group-hover:bg-neutral-300 px-2 mx-2 shadow-md duration-700"
              aria-hidden="true"
            ></span>
            <span className="relative text-neutral-300 group-hover:text-purple-700 mx-4">
              Hubert Paprocki
            </span>
          </span>
          {creditsLanguage.part2} {currentYear}
        </p>
        <SocialMediaList />
      </div>
    </div>
  );
}

export default Footer;
