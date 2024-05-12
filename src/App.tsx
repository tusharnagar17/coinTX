import { useEffect, useState } from "react";

import NavBar from "./components/section/NavBar";
import { MainSection } from "./components/section/MainSection";
import { Space } from "lucide-react";
import AboutSection from "./components/section/AboutSection";
import OtherSection from "./components/section/OtherSection";
import Sidebar from "./components/Sidebar";
import { fetchCoin } from "./services/fetchData";
import { CoinDataProps } from "./types/interface";
import HikeButton from "./components/HikeBtn";
import TrendingCoins from "./components/TrendingCoins";

const number = 1231312132131;

function App() {
  const [coinData, setCoinData] = useState<CoinDataProps>({});
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState("bitcoin");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coinFetchData = await fetchCoin(coin);
        setCoinData(coinFetchData);
        setLoading(false);
      } catch (error) {
        console.log("Fetch error", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex  h-screen justify-center items-center">
          <div className="text-5xl">Loading...</div>
          {/* <TrendingCoins /> */}
        </div>
      ) : (
        <div className="bg-gray-200">
          <NavBar />
          <div className="px-2 md:px-12 mt-10">
            <MainSection data={coinData} />
            <div className="md:w-2/3">
              <AboutSection />
              <OtherSection />
            </div>
          </div>
          <div className="sm:hidden">
            <Sidebar />
          </div>

          <div>Not loading</div>
        </div>
      )}
    </>
  );
}

export default App;
