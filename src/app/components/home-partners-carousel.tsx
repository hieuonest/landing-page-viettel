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
  const plugin = React.useRef(
    Autoplay({ delay: 2500})
  );

  React.useEffect(() => {
    plugin.current.reset();
  }, []);

  const handlePlay = () => {
    plugin.current.play();
  }

  const handleStop = () => {
    plugin.current.stop();
  }

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={handleStop}
      onMouseLeave={handlePlay}
      onTouchStart={handleStop}
      onTouchEnd={handlePlay}
      onTouchCancel={handlePlay}
    >
      <CarouselContent
        
      >
        {dataPartners.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/3 md:basis-1/5 gap-3 flex items-center justify-center"
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
