import Sidebar from "../Sidebar";
import React from "react";

export const MainSection = () => {
  return (
    <div className="md:flex md:gap-6 md:justify-between">
      <div className="bg-white  w-full md:w-2/3 rounded-xl p-4">
        <div className="py-2">
          Cryptocurrencies &gt;&gt; <span className="font-bold">$Bitcoin</span>
        </div>
        <div className="flex items-center flex-wrap gap-2 my-4">
          <div>$Bitcoin Icon</div>
          <div className="text-lg font-semibold">$Bitcoin_name</div>
          <div className="font-semibold text-gray-500">$bitcoin_symbol</div>
          <div className="bg-gray-400 font-semibold px-2 py-1 rounded-lg text-white">
            $bitcoin_rank
          </div>
        </div>

        <div className="flex items-center gap-2 my-1">
          <div className="text-2xl font-bold">$bitcoin_USD</div>
          <div className="bg-green-100 px-1 font-semibold text-green-700">
            $bitcoin_inc
          </div>
          <div className="font-semibold text-gray-500">($time)</div>
        </div>
        <div className="text-lg font-semibold">$bitcoin_INR</div>

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
