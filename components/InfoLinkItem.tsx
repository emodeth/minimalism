import Link from "next/link";
import InfoIcon from "./InfoIcon";

type Props = {
  description: string;
  path: string;
};

export default function InfoLinkItem({ description, path }: Props) {
  return (
    <Link
      href={path}
      className="flex flex-1 justify-between cursor-pointer transition-all duration-[250ms] hover:border-[#fff] px-5 py-[15px] border border-[#222] rounded-xl text-[14px]"
    >
      <p>{description}</p>
      <InfoIcon />
    </Link>
  );
}
