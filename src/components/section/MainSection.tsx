import Sidebar from "../Sidebar";
import React, { useEffect, useState } from "react";
import HikeButton from "../HikeBtn";
import TradingView from "../TradingView";
import { CoinDataProps } from "@/types/interface";
import { fetchCoin, fetchSpecificCoin } from "@/services/fetchData";

export const MainSection = () => {
  const [coinData, setCoinData] = useState<CoinDataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState("bitcoin");

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
        await fetchSpecificCoin(coin);
      } catch (error) {
        console.log("Fetch error", error);
      }
    };
    specificCoinDetail();
    fetchData();
  }, []);
  console.log(coinData);

  if (loading) {
    <div className="flex justify-center items-center">Loading...</div>;
  }
  return (
    <div className="md:flex md:gap-6 md:justify-between">
      <div className="bg-white dark:bg-gray-800 w-full md:w-2/3 rounded-xl p-4">
        <div className="py-2">
          Cryptocurrencies &gt;&gt; <span className="font-bold"></span>
        </div>
        <div className="flex items-center flex-wrap gap-2 my-4">
          <div>$Bitcoin Icon</div>
          <div className="text-lg font-semibold">$bitcoin_name</div>
          <div className="font-semibold text-gray-500">$bitcoin_symbol</div>
          <div className="bg-gray-400 font-semibold px-2 py-1 rounded-lg text-white">
            $bitcoin_rank
          </div>
        </div>

        <div className="flex items-center gap-2 my-1">
          <div className="text-2xl font-bold">{coinData.bitcoin.usd}</div>
          <HikeButton inc={213213} />
          <div className="font-semibold text-gray-500">(24h)</div>
        </div>
        <div className="text-lg font-semibold">₹{bitcoin.inr}</div>

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
