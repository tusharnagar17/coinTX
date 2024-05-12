import { CustomCarousel } from "../CustomCarousel";

const OtherSection = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl py-4">
      <div className="ml-8 md:ml-12 text-2xl font-semibold">
        You May Also Like
      </div>
      <div className="my-4 px-10">
        {/* <CarouselSize /> */}
        <CustomCarousel />
      </div>
    </div>
  );
};

export default OtherSection;
