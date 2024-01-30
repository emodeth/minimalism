import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  description: string;
  path: string;
  image: StaticImageData;
};

function MainItem({ name, description, path, image }: Props) {
  return (
    <div className="w-full aspect-square border cursor-pointer border-[#222] hover:border-[#fff] transition-all duration-[250ms] relative py-[15px] px-5 flex items-end rounded-xl">
      <Image
        className="invert-[1] w-full h-full object-cover opacity-40 absolute inset-0"
        src={image}
        fill
        alt={name}
      />
      <div>
        <p className="text-[14px]">{name}</p>
        <p className="text-[14px] text-[#A3A3A3]">{description}</p>
      </div>
    </div>
  );
}

export default MainItem;
