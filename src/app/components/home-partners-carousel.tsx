"use client";
import React from "react";
import Image from "next/image";
import { dataPartners } from "@/lib/define-data";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function HomePartnersCarousel({}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 3000})
  );
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {dataPartners.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/5 gap-3 flex items-center justify-center"
          >
            <Image
              src={item.image}
              alt={item.name}
              quality={100}
              className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out cursor-pointer object-contain"
              draggable={false}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default HomePartnersCarousel;
