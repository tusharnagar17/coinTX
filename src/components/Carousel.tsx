import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CustomCarouselItem from "./CustomCarouselItem";

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-10/12"
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="flex items-center px0=-4 justify-center py-1 border-2 rounded-xl border-gray-200">
              <CustomCarouselItem />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-6 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute -right-6 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
}
