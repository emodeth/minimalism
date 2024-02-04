"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

export interface IMenuContext {
  isMenuOpened: boolean;
  setIsMenuOpened: Dispatch<SetStateAction<boolean>>;
}

const MenuContext = createContext<IMenuContext | null>(null);

function MenuProvider({ children }: Props) {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ isMenuOpened, setIsMenuOpened }}>
      {children}
    </MenuContext.Provider>
  );
}

export { MenuProvider, MenuContext };
