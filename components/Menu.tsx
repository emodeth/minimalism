"use client";

import { useMenu } from "@/contexts/MenuContext";
import Link from "next/link";

function Menu() {
  const { isMenuOpened } = useMenu();

  return (
    <div
      className={`${"transition-opacity lg:max-w-[960px] md:max-w-[630px] mx-auto fixed left-0 right-0 top-[88px] grid min-[550px]:grid-cols-3 gap-[10px] z-[9999] max-md:px-2 grid-cols-2 grid-rows-4"} ${
        isMenuOpened === false
          ? "-translate-y-96 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <Link
        href="/projects"
        className={`${"-translate-x-5 uppercase bg-black w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#efefef] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef] text-center"} ${
          isMenuOpened ? "opacity-100 !translate-x-0" : "opacity-0"
        }`}
      >
        Projects
      </Link>
      <Link
        href="/journal"
        className={`${"text-center min-[550px]:translate-y-5 max-[550px]:translate-x-5 uppercase bg-black w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#efefef] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]"} ${
          isMenuOpened
            ? "opacity-100 min-[550px]:!translate-y-0 max-[550px]:!translate-x-0"
            : "opacity-0"
        }`}
      >
        Journal
      </Link>
      <Link
        href="/Shop"
        className={`${"text-center min-[550px]:translate-x-5 -translate-x-5 uppercase bg-black w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#efefef] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]"} ${
          isMenuOpened ? "!translate-x-0 opacity-100" : "opacity-0"
        }`}
      >
        Shop
      </Link>
      <Link
        href="art"
        className={`${"text-center min-[550px]:-translate-x-5 translate-x-5 uppercase bg-black w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#efefef] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]"} ${
          isMenuOpened ? "opacity-100 !translate-x-0" : "opacity-0"
        }`}
      >
        Minimal Art
      </Link>
      <Link
        href="/lifestyle"
        className={`${"text-center min-[550px]:translate-y-5 max-[550px]:-translate-x-5 uppercase bg-black w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#efefef] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]"} ${
          isMenuOpened
            ? "opacity-100 min-[550px]:!translate-y-0 max-[550px]:!translate-x-0"
            : "opacity-0"
        }`}
      >
        Minimal Lifestyle
      </Link>
      <Link
        href="/desing"
        className={`${"text-center translate-x-5 uppercase bg-black w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#efefef] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]"} ${
          isMenuOpened ? "!translate-x-0 opacity-100" : "opacity-0"
        }`}
      >
        Minimal Desing
      </Link>
      <button
        className={`${"translate-y-5 uppercase bg-black w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#efefef] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef] menu-last-item"} ${
          isMenuOpened ? "opacity-100 !translate-y-0" : "opacity-0"
        }`}
      >
        Subscribe
      </button>
    </div>
  );
}

export default Menu;
