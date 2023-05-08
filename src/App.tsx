import React from "react";
import Footer from "./components/Footer";
import bg from "./images/CookieBg.jpg";

function App() {
  return (
    <div className="bg-stone-800">
      <div className="min-h-screen relative">
        <div
          className="absolute inset-0 opacity-40 animate-pulse"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="absolute inset-0 e text-white">test</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
