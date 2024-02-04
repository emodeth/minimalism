"use client";

import { MenuContext } from "@/contexts/MenuContext";
import { useContext } from "react";

function MenuOverlay() {
  const menuCtx = useContext(MenuContext);

  return (
    <div
      className={`${"w-full h-full absolute inset-0 bg-black z-[999]"} ${
        menuCtx?.isMenuOpened === false ? "hidden" : null
      }`}
    ></div>
  );
}

export default MenuOverlay;
