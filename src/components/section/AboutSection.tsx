import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl px-8 py-4 my-4">
      <div className="text-xl font-bold my-4">About $bitcoin</div>
      <div className="text-lg font-bold">What is $bitcoin ?</div>
      <div className="my-2 font-semibold text-md">
        Bitcoins price today is US$16,951.82, with a 24 hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently 7.70% from
        its 7 day all time high of $18,366.66, and 3.40% from its 7 day all time
        low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max
        supply of 21 M BTC.
      </div>
      <div className="border-b-2 border-gray-300 "></div>
      <div>
        <div className="text-lg font-bold my-4">Lorem ipsum dolor sit amet</div>
        <div className="my-2 font-semibold">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.
        </div>
      </div>
      <div className="my-4">
        <div className="text-2xl font-bold">Already Holding Crypto?</div>
        {/* calculate */}
        <div className="md:flex justify-between">
          <div className="p-2 flex gap-4 rounded-xl my-5 bg-sky-300 py-8">
            <div>
              <img
                className="rounded-md"
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="calculate"
                height={180}
                width={180}
              />
            </div>
            <div>
              <div className="text-white font-bold text-xl">
                Calculate your profits
              </div>
              <div className="mt-4">
                <a
                  href=""
                  className="font-bold px-2 py-1  rounded-xl bg-white dark:bg-gray-800"
                >
                  {" "}
                  Check Now &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="p-2 flex gap-4 rounded-xl my-5 bg-sky-300 py-8">
            <div>
              <img
                className="rounded-md"
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="calculate"
                height={180}
                width={180}
              />
            </div>
            <div>
              <div className="text-white font-bold text-xl ">
                Calculate your profits
              </div>
              <div className="mt-4">
                <a
                  href=""
                  className="font-bold px-2 py-1 dark:bg-gray-800 rounded-xl bg-white"
                >
                  {" "}
                  Check Now &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
