import React, { useEffect, useState } from "react";
import HikeButton from "./HikeBtn";
import { fetchTrending } from "@/services/fetchData";
import { TrendingCoinsProps } from "@/types/interface";

const TrendingCoins = () => {
  const [coinsData, setCoinsData] = useState<TrendingCoinsProps[]>([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const apiData = await fetchTrending();
        setCoinsData(apiData);
      } catch (error) {
        console.log("Trending Coins", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className=" bg-white dark:bg-gray-800 dark:border-blue-500 mx-2 md:m-4 rounded-2xl py-4 px-4">
      <div className="text-2xl font-semibold">Trending Coins (24h)</div>
      {coinsData.slice(0, 3).map((ptr: TrendingCoinsProps, index: number) => (
        <div
          key={index}
          className="flex flex-wrap justify-between my-2 mx-2 items-center"
        >
          <div className="flex justify-center items-center gap-2">
            <img src={ptr.iconSmall} alt={ptr.name} className="rounded-xl" />
            <div className="font-bold">{ptr.name}</div>
          </div>
          <HikeButton inc={Math.round(ptr.priceChangePercentage)} />
        </div>
      ))}
    </div>
  );
};

export default TrendingCoins;
