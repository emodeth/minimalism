import React from "react";

type Props = {
  children: React.ReactNode;
};

function ShopGrid({ children }: Props) {
  return (
    <div className="md:max-w-[1024px] lg:max-w-[1300px] mx-auto px-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[30px] max-[550px]:gap-[10px]">
      {children}
    </div>
  );
}

export default ShopGrid;
