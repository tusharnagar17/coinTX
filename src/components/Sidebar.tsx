import TrendingCoins from "./TrendingCoins";

const Sidebar = () => {
  return (
    <div className="">
      <div className="bg-blue-700 rounded-2xl py-10 m-2">
        <div className="font-semibold text-wrap text-white text-3xl text-center">
          Get Started with coinTX <br />
          for FREE
        </div>
        <div className="text-white text-center mx-12 mt-10">
          With our range of features that you can equip for free, coinTX allows
          you to be more educated and aware of your tax reports.
        </div>

        <div className="flex justify-center py-4 rounded full">
          <div className="bg-white dark:bg-black px-1 text-wrap md:px-4 py-2 font-semibold rounded-lg">
            <a href="">Getting Started for Free &rarr;</a>
          </div>
        </div>
      </div>
      <TrendingCoins />
    </div>
  );
};

export default Sidebar;
