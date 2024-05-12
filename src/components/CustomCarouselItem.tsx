import { TrendingCoinsProps } from "@/types/interface";
import HikeButton from "@/components/HikeBtn";

const CustomCarouselItem = ({ item }: { item: TrendingCoinsProps }) => {
  const showRoundOff = (num1: number) => {
    if (Number(num1.toFixed(4)) != 0) {
      return num1.toFixed(4);
    } else if (Number(num1.toFixed(8)) != 0) {
      return num1.toFixed(10);
    } else {
      return num1.toFixed(12);
    }
  };

  return (
    <div className="flex items-center justify-center w-5/6 md:w-1/4 my-2 py-4 border-2 dark:border-gray-700 rounded-xl">
      <div className="mx-2 rounded-2xl">
        <div className="flex flex-wrap items-center gap-4">
          <img src={item.iconSmall} className="rounded-full" />
          <div className="font-semibold">{item.symbol}</div>
          <div className="flex justify-center items-center">
            <HikeButton inc={Math.round(item.priceChangePercentage)} />
          </div>
        </div>
        <div className="text-lg font-semibold my-2">
          ${showRoundOff(item.priceUSD)}
        </div>
        <img src={item.sparkline} alt="sparkline" className="my-2" />
      </div>
    </div>
  );
};

export default CustomCarouselItem;
