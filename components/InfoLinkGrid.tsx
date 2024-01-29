import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function InfoLinkGrid({ children }: Props) {
  return (
    <div className="mx-auto lg:max-w-[960px] md:max-w-[630px] flex flex-col px-2 lg:flex-row lg:items-center justify-between gap-[30px]">
      {children}
    </div>
  );
}

export default InfoLinkGrid;
