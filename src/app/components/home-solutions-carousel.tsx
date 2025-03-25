"use client";
import Image from "next/image";
import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
import { homeSolutions } from "@/lib/define-data";
import MarqueeWrapper from "@/components/ui/marquee-wrapper";

function HomeSolutionsCarousel() {
  // const plugin = React.useRef(Autoplay({ delay: 3000 }));
  // return (
  //   <Carousel
  //     opts={{
  //       loop: true,
  //     }}
  //     plugins={[plugin.current]}
  //     onMouseEnter={plugin.current.stop}
  //     onMouseLeave={() => plugin.current.play()}
  //     className="overflow-visible"
  //   >
  //     <CarouselContent className="overflow-visible">
        
  //     </CarouselContent>
  //   </Carousel>
  // );

  return (
    <MarqueeWrapper
      speed={100}
      // gradient
      pauseOnClick
      pauseOnHover
    >
      {homeSolutions.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-center min-h-[250px] max-w-fit relative overflow-visible px-10`}
          >
            <div className="flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.title}
                quality={100}
                className={`relative overflow-visible transition-all duration-300 ease-in-out cursor-pointer h-[170px] max-xs:w-[80%] ${
                  item.key === "insightci" || item.key === "reputax"
                    ? "top-[10px] xs:top-[20px]"
                    : ""
                } ${item.key === "vcoc" || item.key === "cxbot" ? "" : ""}`}
                draggable={false}
              />
              <div className="absolute !w-[16px] !h-[16px] rounded-full bg-[#D9D9D9] z-10 left-0 -translate-x-1/2"></div>
            </div>
          </div>
        ))}
    </MarqueeWrapper>
  )
}

export default HomeSolutionsCarousel;
