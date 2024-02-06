import { IShopItem } from "@/utils/shopItem";
import Image from "next/image";
import TagItem from "./TagItem";

function ShopItem({ name, brand, price, tags, image }: IShopItem) {
  return (
    <div>
      <div className="relative group cursor-pointer">
        <div className="absolute flex items-center gap-1 lg:top-5 lg:left-5 md:top-3 md:left-3 left-2 top-2 transition-all opacity-0 group-hover:!opacity-100 flex-wrap">
          {tags.map((tag, i) => (
            <TagItem key={i} tag={tag} />
          ))}
        </div>
        <Image src={image} alt={name} className="rounded-lg" />
      </div>
      <div className="py-[5px]">
        <div className="flex items-center justify-between">
          <p className="text-[14px] text-[#efefef]">{name}</p>
          <p className="text-[12px] text-[#A3A3A3] py-px px-[6px] rounded-full bg-[#262626]">
            ${price}
          </p>
        </div>
        <p className="text-[14px] text-[#A3A3A3]">{brand}</p>
      </div>
    </div>
  );
}

export default ShopItem;
