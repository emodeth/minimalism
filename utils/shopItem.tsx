import { StaticImageData } from "next/image";

import hopBackpackImg from "@/public/shopImages/hop-backpack.jpg";
import goBackpackImg from "@/public/shopImages/go-pack.jpg";
import sdCardHolderImg from "@/public/shopImages/sd-card-holder.jpg";
import hotoPenImg from "@/public/shopImages/hoto-screwdriver-pen.jpg";
import picoPenImg from "@/public/shopImages/pico-ballpoint-pen.jpg";
import memobottleImg from "@/public/shopImages/memobottle-water-bottle.jpg";
import airTagSlimImg from "@/public/shopImages/airtag-slim-case.jpg";
import stillformImg from "@/public/shopImages/stilform-pen.jpg";
import orbitkeyRingImg from "@/public/shopImages/orbitkey-ring.jpg";
import orbitkeySanitiserImg from "@/public/shopImages/orbitkey-sanitiser-holder.jpg";
import orbitkeyOrganiserImg from "@/public/shopImages/orbitkey-key-organiser.jpg";
import moonRoolingImg from "@/public/shopImages/moon-rollin-stand.jpg";
import aFrameImg from "@/public/shopImages/a-frame-stand.jpg";
import hopperImg from "@/public/shopImages/hopper-stand.jpg";
import swayImg from "@/public/shopImages/sway-stand.jpg";
import powerImg from "@/public/shopImages/power-bar-2-meters.jpg";
import cableHouseImg from "@/public/shopImages/cable-house.jpg";
import cableStandImg from "@/public/shopImages/cable-stand.jpg";
import platebarImg from "@/public/shopImages/plate-bar.jpg";
import V01WhiteImg from "@/public/shopImages/v01mkii.jpg";
import V01BlackImg from "@/public/shopImages/v01mkii-black.jpg";
import PKG01Img from "@/public/shopImages/pkg01.jpg";
import MWatchImg from "@/public/shopImages/m-watch.jpg";
import V03Img from "@/public/shopImages/v03p-petite.jpg";
import UntitledRugImg from "@/public/shopImages/untitled-1-rug.jpg";
import BohoRugImg from "@/public/shopImages/boho-rug.jpg";
import ConnectionRugImg from "@/public/shopImages/connection-rug.jpg";
import gainsImg from "@/public/shopImages/gains.jpg";
import harrisonImg from "@/public/shopImages/harrison.jpg";
import layerImg from "@/public/shopImages/layer.jpg";
import notebookImg from "@/public/shopImages/recycled-plain-notebook.jpg";

enum tag {
  fashion = "fashion",
  backpacks = "backpacks",
  bags = "bags",
  accessories = "accessories",
  tools = "tools",
  pens = "pens",
  homewares = "homewares",
  furniture = "furniture",
  technology = "technology",
  watches = "watches",
  lightning = "lightning",
  knives = "knives",
  kitchenwares = "kitchenwares",
  books = "books",
  homedecor = "home decor",
  prints = "prints",
  gardening = "gardening",
  tablelamps = "table lamps",
  stationery = "stationery",
  toys = "toys",
  clocks = "clocks",
  mugs = "mugs",
  glassware = "glassware",
  chairs = "chairs",
  deskmats = "desk mats",
  cutlery = "cutlery",
  software = "software",
  digital = "digital",
  wallpapers = "wallpapers",
  wallets = "wallets",
  travel = "travel",
  appliances = "appliances",
  desks = "desks",
  bicycles = "bicycles",
  meditation = "meditation",
  edc = "edc",
  tables = "tables",
}

export interface IShopItem {
  name: string;
  brand: string;
  price: number;
  tags: tag[];
  image: StaticImageData;
}

export const shopItems: IShopItem[] = [
  {
    name: "Hop Backpack",
    brand: "ODA",
    price: 125,
    tags: [tag.fashion, tag.backpacks],
    image: hopBackpackImg,
  },
  {
    name: "Go Backpack",
    brand: "ODA",
    price: 55,
    tags: [tag.fashion, tag.bags],
    image: goBackpackImg,
  },
  {
    name: "SD Card Holder",
    brand: "ODA",
    price: 10,
    tags: [tag.accessories],
    image: sdCardHolderImg,
  },
  {
    name: "Hotto Screwdriver Pen",
    brand: "HOTO",
    price: 30,
    tags: [tag.tools],
    image: hotoPenImg,
  },
  {
    name: "Pico Ballpoint Pen",
    brand: "LAMY",
    price: 50,
    tags: [tag.tools, tag.pens],
    image: picoPenImg,
  },
  {
    name: "Memobottle Water Bottle",
    brand: "Memobottle",
    price: 25,
    tags: [tag.accessories],
    image: memobottleImg,
  },
  {
    name: "AirTag Slim Case",
    brand: "Orbitkey",
    price: 15,
    tags: [tag.accessories],
    image: airTagSlimImg,
  },
  {
    name: "Stilform Pen",
    brand: "Stilform",
    price: 70,
    tags: [tag.tools, tag.pens],
    image: stillformImg,
  },
  {
    name: "Orbitkey Ring",
    brand: "Orbitkey",
    price: 15,
    tags: [tag.accessories],
    image: orbitkeyRingImg,
  },
  {
    name: "Orbitkey Sanitiser Holder",
    brand: "Orbitkey",
    price: 25,
    tags: [tag.accessories],
    image: orbitkeySanitiserImg,
  },
  {
    name: "Orbitkey Key Organiser",
    brand: "Orbitkey",
    price: 40,
    tags: [tag.accessories],
    image: orbitkeyOrganiserImg,
  },
  {
    name: "Moon Rolling' Stand",
    brand: "Pedestal",
    price: 340,
    tags: [tag.homewares, tag.furniture],
    image: moonRoolingImg,
  },
  {
    name: "A-frame Stand",
    brand: "Pedestal",
    price: 330,
    tags: [tag.homewares, tag.furniture],
    image: aFrameImg,
  },
  {
    name: "Hopper Stand",
    brand: "Pedestal",
    price: 500,
    tags: [tag.homewares, tag.furniture],
    image: hopperImg,
  },
  {
    name: "Sway Stand",
    brand: "Pedestal",
    price: 230,
    tags: [tag.homewares, tag.furniture],
    image: swayImg,
  },
  {
    name: "Power Bar 2 meters",
    brand: "Pedestal",
    price: 55,
    tags: [tag.accessories, tag.tools, tag.technology],
    image: powerImg,
  },
  {
    name: "Cable House",
    brand: "Pedestal",
    price: 120,
    tags: [tag.accessories, tag.tools],
    image: cableHouseImg,
  },
  {
    name: "Cable Stand",
    brand: "Pedestal",
    price: 120,
    tags: [tag.accessories, tag.tools],
    image: cableStandImg,
  },
  {
    name: "Plate Bar",
    brand: "Pedestal",
    price: 60,
    tags: [tag.accessories, tag.furniture],
    image: platebarImg,
  },
  {
    name: "V01MKII",
    brand: "Void Watches",
    price: 295,
    tags: [tag.accessories, tag.fashion],
    image: V01WhiteImg,
  },
  {
    name: "V01MKII",
    brand: "Void Watches",
    price: 295,
    tags: [tag.accessories, tag.fashion],
    image: V01BlackImg,
  },
  {
    name: "PKG01",
    brand: "Void Watches",
    price: 220,
    tags: [tag.accessories, tag.fashion],
    image: PKG01Img,
  },
  {
    name: "M-Watch",
    brand: "HODINA x Minimalissimo",
    price: 200,
    tags: [tag.watches, tag.fashion],
    image: MWatchImg,
  },
  {
    name: "V03P Petite",
    brand: "Void Watches",
    price: 220,
    tags: [tag.fashion, tag.accessories],
    image: V03Img,
  },
  {
    name: "Untitled 1 Rug",
    brand: "Nordic Knots",
    price: 990,
    tags: [tag.homewares],
    image: UntitledRugImg,
  },
  {
    name: "Boho Rug",
    brand: "Nordic Knots",
    price: 500,
    tags: [tag.homewares],
    image: BohoRugImg,
  },
  {
    name: "Connection Rug",
    brand: "Nordic Knots",
    price: 990,
    tags: [tag.homewares],
    image: ConnectionRugImg,
  },
  {
    name: "GAINS",
    brand: "Wahts",
    price: 105,
    tags: [tag.fashion, tag.accessories],
    image: gainsImg,
  },
  {
    name: "HARRISON",
    brand: "Wahts",
    price: 175,
    tags: [tag.fashion],
    image: harrisonImg,
  },
  {
    name: "Layer",
    brand: "Benjamin Hubert",
    price: 55,
    tags: [tag.books],
    image: layerImg,
  },
  {
    name: "Recycled Plain Notebook",
    brand: "MUJI",
    price: 5,
    tags: [tag.stationery],
    image: notebookImg,
  },
];
