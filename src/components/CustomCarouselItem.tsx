import React from "react";

const CustomCarouselItem = () => {
  return (
    <div className="flex px-2 my-2">
      <div className=" mx-6 rounded-2xl">
        <div className="flex gap-2">
          <div>$icon</div>
          <div className="font-semibold">$SYMBOL</div>
          <div>$inc</div>
        </div>
        <div className="text-lg font-semibold">$PRICE</div>
        <div>$Graph</div>
        <div>$Graph</div>

        <div>$Graph</div>
      </div>
    </div>
  );
};

export default CustomCarouselItem;
