import React from "react";

function DynamicFooterResponsive() {
  return (
    <div className="px-2 lg:hidden">
      <div className="lg:max-w-[960px] md:max-w-[630px] mx-auto mt-[80px] p-[10px] rounded-lg flex gap-[10px] outline-1 outline outline-[#222] ">
        <ul className="flex flex-col flex-1 gap-[10px]">
          <li>
            <button className="w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#a3a3a3] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]">
              Instagram
            </button>
          </li>
          <li>
            <button className="w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#a3a3a3] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]">
              Threads
            </button>
          </li>
          <li>
            <button className="w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#a3a3a3] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]">
              Facebook
            </button>
          </li>
          <li>
            <button className="w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#a3a3a3] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]">
              X (Twitter)
            </button>
          </li>
        </ul>
        <ul className="flex flex-col flex-1 gap-[10px]">
          <li>
            <button className="w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#a3a3a3] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]">
              Newsletter
            </button>
          </li>
          <li>
            <button className="w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#a3a3a3] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]">
              Manifesto
            </button>
          </li>
          <li>
            <button className="w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#a3a3a3] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]">
              Contributors
            </button>
          </li>
          <li>
            <button className="w-full border border-[#222] py-[15px] px-5 rounded-lg text-[#a3a3a3] text-[12px] leading-[18px] font-medium transition-all hover:bg-[#262626] hover:text-[#efefef]">
              Advisors
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DynamicFooterResponsive;
