import Footer from "./components/Footer/Footer";
import bg from "./images/CookieBg.jpg";
import Appbox from "./components/AppBox/AppBox";
import Tittle from "./components/Title";
import LanguageBtn from "./components/LanguageBtn/LanguageBtn";
import ModalBox from "./components/Modal/ModalBox";

function App(): JSX.Element {
  return (
    <div className="bg-stone-800 font-Braah uppercase tracking-wider text-sm xs:text-md md:text-xl lg:text-2xl">
      <ModalBox />
      <div className="min-[500px]:min-h-screen relative flex flex-col min-[1024px]:justify-center items-center min-[500px]:pt-10">
        <LanguageBtn />
        <Tittle />
        <div
          className="absolute inset-0 opacity-30 z-0"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="relative text-white flex justify-center items-center z-10 w-full h-full">
          <Appbox />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
