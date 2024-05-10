import React from "react";

const Sidebar = () => {
  return (
    <div className="">
      <div className="bg-blue-800 rounded-2xl py-10">
        <div className="font-semibold text-wrap text-white text-3xl text-center">
          Get Started with coinTX <br />
          for FREE
        </div>
        <div className="text-white text-center mx-12 mt-10">
          With our range of features that you can equip for free, coinTX allows
          you to be more educated and aware of your tax reports.
        </div>

        <div className="flex justify-center py-4 rounded full">
          <div className="bg-white px-4 py-2 font-semibold rounded-lg">
            <a href="">Getting Started for Free &rarr;</a>
          </div>
        </div>
      </div>
      <div className="border-2 border-black my-4 rounded-2xl py-2 px-4">
        <div className="text-2xl font-semibold">Trending Coins ($time)</div>
        <div className="flex justify-between my-2 mx-2">
          <div className="flex gap-4">
            <div>$icon</div>
            <div className="font-bold">$name</div>
          </div>
          <div>$inc</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
