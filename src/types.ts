import { IconName } from "@fortawesome/fontawesome-svg-core";
import { DefaultTheme } from "styled-components";
import { Theme as RebassTheme } from "@rebass/preset";

export type Theme = DefaultTheme & RebassTheme;

export type Image = {
  src: string;
  alt: string;
};

export type Favicon = {
  src: string;
};

export type Project = {
  name: string;
  description: string;
  homepage: string;
  type: string;
  startDate: string;
  endDate: string;
  logo: Image;
};

export type AboutMe = {
  markdown: string;
  portrait: Image;
};

export type SocialLink = {
  url: string;
  name: string;
  icon: IconName;
};

export type BlogPost = {
  slug: string;
  title: string;
  cover: Image;
  date: string;
  readingTime: string;
  devtoUrl: string;
  content: string;
};

export type MediumAuthor = {
  id: string;
  name: string;
  username: string;
};

export type Landing = {
  name: string;
  roles: string[];
  socialLinks: SocialLink[];
};
