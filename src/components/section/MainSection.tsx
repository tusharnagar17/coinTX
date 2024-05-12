import { CoinDataProps } from "@/types/interface";
import Sidebar from "../Sidebar";
import React from "react";
import HikeButton from "../HikeBtn";

export const MainSection = ({ data }: { data: CoinDataProps }) => {
  console.log("in main section");
  const { bitcoin } = data;

  return (
    <div className="md:flex md:gap-6 md:justify-between">
      <div className="bg-white  w-full md:w-2/3 rounded-xl p-4">
        <div className="py-2">
          Cryptocurrencies &gt;&gt;{" "}
          <span className="font-bold">
            {Object.keys(data)[0].toUpperCase()}
          </span>
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
          <div className="text-2xl font-bold">$ {bitcoin.usd}</div>
          <HikeButton inc={bitcoin.usd_24h_change} />
          <div className="font-semibold text-gray-500">(24h)</div>
        </div>
        <div className="text-lg font-semibold">₹ {bitcoin.inr}</div>

        <div className="border-b-2 my-6 border-gray-300"></div>
        <div>Bitcoin Price Chart (USD)</div>
        <div className="h-96 max-96 bg-gray-800 p-2"></div>
      </div>

      {/* sidebar */}
      <div className="w-1/3 hidden md:block">
        <Sidebar />
      </div>
    </div>
  );
};
