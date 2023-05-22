import React from "react";
import SocialMediaList from "./SocialMediaList/SocialMediaList";

function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" bg-yellow-900 bg-opacity-20  text-neutral-300 text-md xs:text-lg px-5 xs:px-10 flex flex-col pt-0 md:pt-5 justify-center items-center text-center  md:flex-row  pb-8">
      <p className="w-full max-w-xl md:pr-12 md:w-1/2 pt-5 border-b-2 border-neutral-800 md:border-none pb-5 md:pb-0 font-norma items">
        Cookie Clicker is a popular incremental game where the goal is to
        accumulate as many cookies as possible by clicking on a giant cookie on
        the screen. As you progress, you can unlock upgrades to increase your
        cookie production and automate the process of clicking.
      </p>
      <div className="w-full max-w-xl border-l-none border-neutral-800 pl-0 md:pl-12 md:w-1/2 md:border-l-2 pt-5 ">
        <p className="leading-relaxed">
          This website was made by
          <span className="relative whitespace-nowrap">
            <span
              className="block absolute -inset-1 -skew-y-2 translate-y-[0.11rem] bg-purple-800 px-2 mx-2 shadow-md"
              aria-hidden="true"
            ></span>
            <span className="relative text-white mx-4">Hubert Paprocki</span>
          </span>
          . All rights reserved. Copyright © {currentYear}
        </p>
        <SocialMediaList />
      </div>
    </div>
  );
}

export default Footer;
