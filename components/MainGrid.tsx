import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function MainGrid({ children }: Props) {
  return (
    <div className="md:max-w-[630px] lg:grid-cols-3 lg:grid-rows-2 lg:max-w-[960px] lg:gap-6 flex flex-col items-center justify-center gap-3 mx-auto py-10 max-w-[960px] px-2 min-[550px]:grid grid-cols-2 grid-rows-3">
      {children}
    </div>
  );
}

export default MainGrid;
