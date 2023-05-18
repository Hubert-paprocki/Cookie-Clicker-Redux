import { ReactNode } from "react";
import React from "react";

interface SocialMediaItemProps {
  img: ReactNode;
  link: string;
}

const SocialMediaItem = ({ img, link }: SocialMediaItemProps): JSX.Element => {
  return (
    <a
      className="hover:scale-125 transition duration-300 cursor-pointer text-4xl hover:text-purple-500"
      href={link}
    >
      {img}
    </a>
  );
};

export default SocialMediaItem;
