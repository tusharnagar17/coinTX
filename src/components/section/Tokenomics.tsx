import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const TokenomicsSection = () => {
  const data = {
    labels: ["Crowd Investors", "Foundation"],
    datasets: [
      {
        label: "My First Dataset",
        data: [80, 20],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 my-4">
      <div className="text-2xl font-bold my-2">Tokenomics</div>
      <div className="text-xl font-semibold my-2">Initial Distribution</div>
      <div className="w-1/3 my-4 auto">
        <Pie data={data} />
      </div>
      <div className="font-semibold my-4">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </div>
    </div>
  );
};

export default TokenomicsSection;
