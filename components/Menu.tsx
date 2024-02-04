"use client";

import { MenuContext } from "@/contexts/MenuContext";
import { useContext } from "react";

function Menu() {
  const menuCtx = useContext(MenuContext);

  return (
    <div
      className={`${"transition-opacity lg:max-w-[960px] md:max-w-[630px] mx-auto fixed left-0 right-0 top-[88px] grid min-[550px]:grid-cols-3 gap-[10px] z-[9999] max-md:px-2 grid-cols-2 grid-rows-4"} ${
        menuCtx?.isMenuOpened === false
          ? "-translate-y-96 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <button
        className={`${"-translate-x-5 uppercase bg-black w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#efefef] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]"} ${
          menuCtx?.isMenuOpened ? "opacity-100 !translate-x-0" : "opacity-0"
        }`}
      >
        Projects
      </button>
      <button
        className={`${"min-[550px]:translate-y-5 max-[550px]:translate-x-5 uppercase bg-black w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#efefef] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]"} ${
          menuCtx?.isMenuOpened
            ? "opacity-100 min-[550px]:!translate-y-0 max-[550px]:!translate-x-0"
            : "opacity-0"
        }`}
      >
        Journal
      </button>
      <button
        className={`${"min-[550px]:translate-x-5 -translate-x-5 uppercase bg-black w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#efefef] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]"} ${
          menuCtx?.isMenuOpened ? "!translate-x-0 opacity-100" : "opacity-0"
        }`}
      >
        Shop
      </button>
      <button
        className={`${"min-[550px]:-translate-x-5 translate-x-5 uppercase bg-black w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#efefef] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]"} ${
          menuCtx?.isMenuOpened ? "opacity-100 !translate-x-0" : "opacity-0"
        }`}
      >
        Minimal Art
      </button>
      <button
        className={`${"min-[550px]:translate-y-5 max-[550px]:-translate-x-5 uppercase bg-black w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#efefef] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]"} ${
          menuCtx?.isMenuOpened
            ? "opacity-100 min-[550px]:!translate-y-0 max-[550px]:!translate-x-0"
            : "opacity-0"
        }`}
      >
        Minimal Lifestyle
      </button>
      <button
        className={`${"translate-x-5 uppercase bg-black w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#efefef] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]"} ${
          menuCtx?.isMenuOpened ? "!translate-x-0 opacity-100" : "opacity-0"
        }`}
      >
        Minimal Desing
      </button>
      <button
        className={`${"translate-y-5 uppercase bg-black w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#efefef] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef] menu-last-item"} ${
          menuCtx?.isMenuOpened ? "opacity-100 !translate-y-0" : "opacity-0"
        }`}
      >
        Subscribe
      </button>
    </div>
  );
}

export default Menu;
