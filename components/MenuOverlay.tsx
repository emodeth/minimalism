"use client";

import { useMenu } from "@/contexts/MenuContext";

function MenuOverlay() {
  const { isMenuOpened } = useMenu();

  return (
    <div
      className={`${"w-full h-full absolute inset-0 bg-black z-[999]"} ${
        isMenuOpened === false ? "hidden" : null
      }`}
    ></div>
  );
}

export default MenuOverlay;
