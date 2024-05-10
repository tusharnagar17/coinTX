import React from "react";
import { CarouselSize } from "../Carousel";
import CustomCarouselItem from "../CustomCarouselItem";

const OtherSection = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-md py-4">
      <div className="ml-8 md:ml-12 text-2xl font-semibold">
        You May Also Like
      </div>
      <div className="my-4 flex items-center justify-center">
        <CarouselSize />
      </div>
    </div>
  );
};

export default OtherSection;
