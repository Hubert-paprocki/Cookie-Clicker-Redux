import React from "react";
import Footer from "./components/Footer";
import bg from "./images/CookieBg.jpg";
import Appbox from "./components/Appbox";

function App() {
  return (
    <div className="bg-stone-800 font-Braah tracking-wider text-xl">
      <div className="min-h-screen relative">
        <div
          className="absolute inset-0 opacity-40 animate-pulse"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="absolute inset-0 e text-white flex justify-center items-center">
          <Appbox />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
