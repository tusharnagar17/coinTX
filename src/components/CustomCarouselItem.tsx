import { TrendingCoinsProps } from "@/types/interface";
import React from "react";
import HikeButton from "@/components/HikeBtn";

const CustomCarouselItem = ({ item }: { item: TrendingCoinsProps }) => {
  return (
    <div className="flex items-center justify-center w-1/3 m-1 py-4 border-2 rounded-xl">
      <div className="mx-4 rounded-2xl">
        <div className="flex gap-2">
          <img src={item.iconSmall} className="rounded-full" />
          <div className="font-semibold">{item.symbol}</div>
          <div className="flex justify-center items-center">
            <HikeButton inc={Math.round(item.priceChangePercentage)} />
          </div>
        </div>
        <div className="text-lg font-semibold my-2">${item.priceUSD}</div>
        <img src={item.sparkline} alt="sparkline" className="my-2" />
      </div>
    </div>
  );
};

export default CustomCarouselItem;
