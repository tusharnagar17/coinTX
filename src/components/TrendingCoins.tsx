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
        // console.log("apiData",apiData)
        setCoinsData(apiData);
      } catch (error) {
        console.log("Trending Coins", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  console.log("Trending Coins", coinsData[0]);
  return (
    <div className="border-2 border-black my-4 rounded-2xl py-2 px-4">
      <div className="text-2xl font-semibold">Trending Coins (24h)</div>
      {coinsData.slice(0, 3).map((ptr: TrendingCoinsProps) => (
        <div className="flex justify-between my-2 mx-2 items-center">
          <img src={ptr.iconSmall} alt={ptr.name} />
          <div className="font-bold">{ptr.name}</div>
          <HikeButton inc={Math.round(ptr.priceChangePercentage)} />
        </div>
      ))}
    </div>
  );
};

export default TrendingCoins;
