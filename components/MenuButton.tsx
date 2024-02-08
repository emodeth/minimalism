"use client";

import { useMenu } from "@/contexts/MenuContext";

function MenuButton() {
  const { setIsMenuOpened, isMenuOpened } = useMenu();

  return (
    <button
      onClick={() => setIsMenuOpened((state) => !state)}
      className="uppercase transition-all hover:bg-[#262626] rounded-md py-1 px-2 lg:mr-[95px] md:mr-[85px]"
    >
      {isMenuOpened === false ? "Menu" : "Close"}
    </button>
  );
}

export default MenuButton;
