import Image from "next/image";
import infoImg from "@/public/info.svg";

function InfoIcon() {
  return (
    <Image
      src={infoImg}
      width={20}
      height={20}
      className="w-[22px] h-[22px] p-1 border border-[#222] rounded"
      alt="info icon"
    />
  );
}

export default InfoIcon;
