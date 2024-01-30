import { StaticImageData } from "next/image";

import projectsImage from "@/public/projects.png";
import journalImage from "@/public/journal.png";
import shopImage from "@/public/shop.png";
import artImage from "@/public/art.png";
import lifestyleImage from "@/public/lifestyle.png";
import desingImage from "@/public/design.png";

interface IMainItems {
  name: string;
  description: string;
  path: string;
  image: StaticImageData;
}

export const mainItems: IMainItems[] = [
  {
    name: "Projects",
    description: "Creative initiative",
    path: "projects",
    image: projectsImage,
  },
  {
    name: "Journal",
    description: "Community experiences",
    path: "journal",
    image: journalImage,
  },
  {
    name: "Shop",
    description: "Less, but better objects",
    path: "shop",
    image: shopImage,
  },
  {
    name: "Art",
    description: "Bare essentials, bold ideas",
    path: "art",
    image: artImage,
  },
  {
    name: "Minimal lifestyle",
    description: "The art of letting go",
    path: "lifestyle",
    image: lifestyleImage,
  },
  {
    name: "Minimal desing",
    description: "Pure forms, timeless function",
    path: "desing",
    image: desingImage,
  },
];
