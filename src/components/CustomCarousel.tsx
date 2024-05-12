import React, { useState, useEffect } from "react";

import CustomCarouselItem from "./CustomCarouselItem";
import { TrendingCoinsProps } from "@/types/interface";
import { fetchTrending } from "@/services/fetchData";

export function CustomCarousel() {
  const [coinsData, setCoinsData] = useState<TrendingCoinsProps[]>([]);
  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const apiData = await fetchTrending();
        // console.log("apiData",apiData)
        setCoinsData(apiData);
      } catch (error) {
        console.log("Trending Coins", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  console.log("carousel coins", coinsData);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
        {coinsData.map((ptr: TrendingCoinsProps, index: number) => (
          <CustomCarouselItem item={ptr} key={index} />
        ))}
      </div>
    </div>
  );
}
