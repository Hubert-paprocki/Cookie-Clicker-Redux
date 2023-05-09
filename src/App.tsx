import React from "react";
import Footer from "./components/Footer";
import bg from "./images/CookieBg.jpg";
import Appbox from "./components/AppBox/AppBox";

function App() {
  return (
    <div className="bg-stone-800 font-Braah uppercase tracking-wider text-xl">
      <div className="min-h-screen relative flex justify-center items-center">
        <div
          className="absolute inset-0 opacity-30  z-0"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="relative text-white flex justify-center items-center z-10">
          <Appbox />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
