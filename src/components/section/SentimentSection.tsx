import { Progress } from "@/components/ui/progress";
import { FaCircleInfo } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";

const SentimentSection = () => {
  return (
    <div className="bg-white  dark:bg-gray-800 my-4 rounded-lg p-6">
      <div className="text-2xl font-bold">Sentiment</div>
      <div className="">
        {/* Key analytics */}
        <div className="text-xl font-semibold flex gap-2 items-center">
          Key Events <FaCircleInfo className="text-gray-500" size={20} />{" "}
        </div>
        <div className="md:flex gap-6 mt-4">
          <div className="bg-sky-200 dark:bg-sky-700 p-4 rounded-xl ">
            <div className="flex gap-2 items-center">
              <div>
                <FaNewspaper size={40} className="text-blue-800 " />
              </div>
              <div className="font-semibold">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </div>
            </div>
            <div className="text-sm mt-4">
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
              faucibus metus quis. Amet sapien quam viverra adipiscing
              condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
              sit nisi viverra natoque lacinia libero enim.
            </div>
          </div>

          <div className="bg-green-200 dark:bg-green-700 p-4 my-8 md:my-0 rounded-xl ">
            <div className="flex gap-2 items-center">
              <div>
                <GiProgression size={40} className="text-green-500" />
              </div>
              <div className="font-semibold">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </div>
            </div>
            <div className="text-sm mt-4">
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
              faucibus metus quis. Amet sapien quam viverra adipiscing
              condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
              sit nisi viverra natoque lacinia libero enim.
            </div>
          </div>
        </div>
      </div>
      {/* Key analytics */}
      <div className="text-xl font-semibold flex my-4 gap-2 items-center">
        Analyst Estimates <FaCircleInfo className="text-gray-500" size={20} />{" "}
      </div>

      <div className="flex flex-wrap gap-8 mt-4 items-center">
        <div className="bg-green-300 p-12 rounded-full">76%</div>
        <div>
          <div className="my-2">
            Buy
            <Progress value={76} className="w-[300px]  color-green-400" />
            76%
          </div>
          <div className="my-2">
            Hold <Progress value={8} className="w-[300px]" />
            8%
          </div>
          <div className="my-2">
            Sell
            <Progress value={16} className="w-[300px]" />
            16%
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentSection;
