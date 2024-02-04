function StaticFooter() {
  return (
    <div className="px-2 relative z-[99]">
      <div className="bg-black text-[#A3A3A3] flex items-center justify-between lg:max-w-[960px] md:max-w-[630px] mx-auto mt-[90px] px-5 py-4 rounded-xl min-[500px]:text-[14px] text-[12px] relative z-[999] border border-[#222] leading-[18px] tracking-wide">
        <p>©minimalism.com</p>
        <ul className="flex gap-6">
          <li className="cursor-pointer transition-all hover:text-white">
            Privacy
          </li>
          <li className="cursor-pointer transition-all hover:text-white">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StaticFooter;
