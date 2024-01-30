function Newsletter() {
  return (
    <div className="lg:max-w-[960px] md:max-w-[630px] mx-auto">
      <div className="flex flex-col gap-[10px]  px-2 min-[550px]:gap-5 min-[550px]:flex-row w-full">
        <input
          placeholder="Enter your email"
          type="email"
          className="lg:flex-[7] flex-1 text-[14px] bg-black outline-none border border-[#222] py-[15px] px-5 rounded-xl duration-100 focus:placeholder-[#595959] placeholder-[#A3A3A3] focus:border-white transition-all"
        />
        <button className="lg:flex-[3] flex-1 py-[15px] px-5 bg-[#262626] rounded-xl text-[14px] hover:bg-white hover:text-black transition-all duration-300">
          Subscribe
        </button>
      </div>
      <p className="text-[12px] text-[#A3A3A3] pl-5 pt-[15px] leading-[18px] block pr-5">
        Stay updated and subscribe to our free newsletter
      </p>
    </div>
  );
}

export default Newsletter;
