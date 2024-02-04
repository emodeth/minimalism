import Image from "next/image";
import logo from "@/public/logo.svg";
import MenuButton from "./MenuButton";

function Navbar() {
  return (
    <nav className="bg-black border border-[#222] rounded-lg md:max-w-[630px] py-[15px] px-5 lg:px-6 lg:max-w-[960px] mx-auto">
      <ul className="flex items-center justify-between text-[12px]">
        <li className="uppercase transition-all cursor-pointer hover:text-[#A3A3A3]">
          Minimalism Life®
        </li>
        <li>
          <MenuButton />
        </li>
        <li className="hidden md:block lg:block">
          <Image src={logo} width={20} height={20} alt="logo" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
