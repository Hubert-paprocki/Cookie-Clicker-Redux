import { ReactNode } from "react";
import React from "react";

interface SocialMediaItemProps {
  readonly img: ReactNode;
  readonly link: string;
}

const SocialMediaItem = ({ img, link }: SocialMediaItemProps): JSX.Element => {
  return (
    <button className="hover:scale-125 transition duration-300 cursor-pointer hover:text-purple-700 text-4xl sm:text-5xl">
      <a href={link}>{img}</a>
    </button>
  );
};

export default SocialMediaItem;
