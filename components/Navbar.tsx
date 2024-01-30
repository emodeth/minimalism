import Image from "next/image";
import logo from "@/public/logo.svg";

function Navbar() {
  return (
    <nav className="bg-black border border-[#222] rounded-lg md:max-w-[630px] py-3 px-4 lg:px-6 lg:max-w-[960px] mx-auto">
      <ul className="flex items-center justify-between text-[12px]">
        <li className="uppercase transition-all cursor-pointer hover:text-[#A3A3A3]">
          Minimalism Life®
        </li>
        <li>
          <button className="uppercase transition-all hover:bg-[#262626] rounded-md py-1 px-2 lg:mr-[95px]">
            Menu
          </button>
        </li>
        <li className="hidden lg:block">
          <Image src={logo} width={20} height={20} alt="logo" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
