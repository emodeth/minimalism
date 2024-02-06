import React from "react";

type Props = {
  tag: string;
};

function TagItem({ tag }: Props) {
  return (
    <p className="text-[12px] text-[#A3A3A3] bg-[#262626] rounded-full py-px px-2">
      {tag}
    </p>
  );
}

export default TagItem;
