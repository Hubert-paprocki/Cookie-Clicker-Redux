import { RiFacebookFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import SocialMediaItem from "./SocialMediaItem";
import { ReactNode } from "react";
import React from "react";
interface ListedSocialMedia {
  readonly id: number;
  readonly name: string;
  readonly icon: ReactNode;
  readonly link: string;
}

const ListedSocialMedias: ListedSocialMedia[] = [
  {
    id: 1,
    name: `Facebook`,
    icon: <RiFacebookFill />,
    link: `https://www.facebook.com/hbrt.pa/`,
  },
  {
    id: 2,
    name: `Github`,
    icon: <RiGithubFill />,
    link: `https://github.com/X-Tripen`,
  },
  {
    id: 3,
    name: `LinkedIn`,
    icon: <RiLinkedinFill />,
    link: `https://www.linkedin.com/in/hubert-paprocki-25b618236/`,
  },
];

function SocialMediaList(): JSX.Element {
  const renderedSocialMediaList = ListedSocialMedias.map((socialMedia) => {
    return (
      <SocialMediaItem
        key={socialMedia.id}
        img={socialMedia.icon}
        link={socialMedia.link}
      ></SocialMediaItem>
    );
  });
  return (
    <ul className="flex flex-wrap justify-center items-center  mt-6  md:my-10 flex-row gap-x-5">
      {renderedSocialMediaList}
    </ul>
  );
}

export default SocialMediaList;
