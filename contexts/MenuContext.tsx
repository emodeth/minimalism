"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useContext,
} from "react";

type Props = {
  children: ReactNode;
};

export interface IMenuContext {
  isMenuOpened: boolean;
  setIsMenuOpened: Dispatch<SetStateAction<boolean>>;
}

const initialState = {
  isMenuOpened: false,
  setIsMenuOpened: () => {},
};

const MenuContext = createContext<IMenuContext>(initialState);

function MenuProvider({ children }: Props) {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ isMenuOpened, setIsMenuOpened }}>
      {children}
    </MenuContext.Provider>
  );
}

function useMenu() {
  return useContext(MenuContext);
}

export { MenuProvider, useMenu };
