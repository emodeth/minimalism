function StaticFooter() {
  return (
    <div className="px-2">
      <div className="bg-black text-[#A3A3A3] flex items-center justify-between lg:max-w-[960px] md:max-w-[630px] mx-auto mt-[90px] px-5 py-4 rounded-xl min-[500px]:text-[14px] text-[12px] relative z-[999] border border-[#222] leading-[18px] tracking-wide">
        <p>©minimalism.com</p>
        <li className="flex gap-6">
          <ul className="cursor-pointer transition-all hover:text-white">
            Privacy
          </ul>
          <ul className="cursor-pointer transition-all hover:text-white">
            Contact
          </ul>
        </li>
      </div>
    </div>
  );
}

export default StaticFooter;
