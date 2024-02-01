function DynamicFooter() {
  return (
    <div className="px-2">
      <div className="bg-black text-[#A3A3A3] lg:flex hidden items-center justify-between lg:max-w-[960px] md:max-w-[630px] mx-auto mt-[90px] px-5 py-4 rounded-xl min-[500px]:text-[14px] text-[12px] fixed left-0 right-0 bottom-5 z-10 border border-[#222] leading-[18px] tracking-wide">
        <ul className="flex gap-6">
          <li className="cursor-pointer transition-all hover:text-white">
            Instagram
          </li>
          <li className="cursor-pointer transition-all hover:text-white">
            Threads
          </li>
          <li className="cursor-pointer transition-all hover:text-white">
            Facebook
          </li>
          <li className="cursor-pointer transition-all hover:text-white">
            X (Twitter)
          </li>
        </ul>
        <ul className="flex gap-6">
          <li className="cursor-pointer transition-all hover:text-white">
            Newsletter
          </li>
          <li className="cursor-pointer transition-all hover:text-white">
            Manifesto
          </li>
          <li className="cursor-pointer transition-all hover:text-white">
            Contributors
          </li>
          <li className="cursor-pointer transition-all hover:text-white">
            Advisors
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DynamicFooter;
