"use client";

import { MenuContext } from "@/contexts/MenuContext";
import { useContext } from "react";

function MenuButton() {
  const menuCtx = useContext(MenuContext);

  return (
    <button
      onClick={() => menuCtx?.setIsMenuOpened((state) => !state)}
      className="uppercase transition-all hover:bg-[#262626] rounded-md py-1 px-2 lg:mr-[95px] md:mr-[85px]"
    >
      {menuCtx?.isMenuOpened === false ? "Menu" : "Close"}
    </button>
  );
}

export default MenuButton;
