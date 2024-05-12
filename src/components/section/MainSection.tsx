import Sidebar from "../Sidebar";
import React, { useEffect, useState } from "react";
import HikeButton from "../HikeBtn";
import TradingView from "../TradingView";
import { CoinDataProps, SpecificCoinProps } from "@/types/interface";
import { fetchCoin, fetchSpecificCoin } from "@/services/fetchData";

export const MainSection = () => {
  const [coinData, setCoinData] = useState<CoinDataProps>();
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState("bitcoin");
  const [specificCoin, setSpecificCoinData] = useState<SpecificCoinProps>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coinFetchData = await fetchCoin(coin);
        setCoinData(coinFetchData.bitcoin);
        setLoading(false);
      } catch (error) {
        console.log("Fetch error", error);
        setLoading(false);
      }
    };

    const specificCoinDetail = async () => {
      try {
        const newItem = await fetchSpecificCoin(coin);
        setSpecificCoinData(newItem);
      } catch (error) {
        console.log("Fetch error", error);
      }
    };
    specificCoinDetail();
    fetchData();
  }, []);
  console.log("specific coin", specificCoin);

  if (loading) {
    <div className="flex justify-center items-center">Loading...</div>;
  }
  return (
    <div className="md:flex md:gap-6 md:justify-between">
      <div className="bg-white dark:bg-gray-800 w-full md:w-2/3 rounded-xl p-4">
        <div className="py-2 ">
          <span className="font-semibold text-gray-500">
            Cryptocurrencies &gt;&gt;
          </span>{" "}
          <span className="font-bold">{coin}</span>
        </div>
        <div className="flex items-center flex-wrap gap-2 my-4">
          <div>
            <img src={specificCoin?.smallImage} alt="Coin-image" />
          </div>
          <div className="text-lg font-semibold">{specificCoin?.name}</div>
          <div className="font-semibold text-gray-500">
            {specificCoin?.symbol}
          </div>
          <div className="bg-gray-400  font-bold px-2 py-1 rounded-lg text-white">
            #{specificCoin?.rank}
          </div>
        </div>

        <div className="flex items-center gap-2 my-1">
          <div className="text-2xl font-bold">${coinData?.usd}</div>
          <HikeButton inc={213213} />
          <div className="font-semibold text-gray-500">(24h)</div>
        </div>
        <div className="text-lg font-semibold">₹{coinData?.inr}</div>

        <div className="border-b-2 my-6 border-gray-300"></div>

        <div className="my-4 rounded-xl w-full h-[400px] md:h-1/2">
          <TradingView />
        </div>
      </div>

      {/* sidebar */}
      <div className="w-1/3 hidden md:block">
        <Sidebar />
      </div>
    </div>
  );
};
