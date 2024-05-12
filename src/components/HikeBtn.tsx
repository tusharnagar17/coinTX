import { Divide } from "lucide-react";
import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const HikeButton = ({ inc }: { inc: number }) => {
  // const result = Math.round(inc * 100) / 100;
  return (
    <div
      className={
        inc > 0
          ? "bg-green-200 flex gap-1 items-center rounded-lg px-2 text-sm font-bold text-green-700"
          : "bg-red-200 flex gap-1 items-center rounded-lg px-2 font-bold text-sm text-red-900"
      }
    >
      {inc > 0 ? <FaArrowUp /> : <FaArrowDown />} {inc}
    </div>
  );
};

export default HikeButton;
