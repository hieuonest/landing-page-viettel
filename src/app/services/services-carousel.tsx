"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { roboto } from "@/lib/font";
import MotionWrapper from "@/components/ui/motion-wrapper";
import { fadeInBottomVariants } from "@/lib/utils";
import { dataServicesHome } from "@/lib/define-data";

function ServicesCarousel({}) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <MotionWrapper
      initial="hidden"
      viewport={{ once: true, amount: 0.5 }}
      whileInView="visible"
      variants={fadeInBottomVariants}
      className="max-[350px]:w-[100dvw] w-[97dvw] xl:w-[85dvw] 2xl:w-[85dvw] 3xl:w-[85dvw] mt-28 overflow-visible"
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".services-carousel__swiper-button-next",
          prevEl: ".services-carousel__swiper-button-prev",
        }}
        className="services-carousel"
        initialSlide={6}
        spaceBetween={20}
        onSlideChange={(swiper) => {
          console.log("Active index:", swiper.activeIndex);
          console.log("Is at end?", swiper.isEnd);
          console.log("Is at beginning?", swiper.isBeginning);
          setActiveIndex(swiper.realIndex);
        }}
        // autoplay={{
        //   delay: 5000,
        // }}
        loop={true}
        watchSlidesProgress={true}
        slidesPerView={"auto"}
        centeredSlides={false}
        dir="rtl"
      >
        {dataServicesHome
          .filter((item) => item.value !== "outsourcing")
          .map((item, index) => (
            <SwiperSlide
              className="!w-[350px] xs:!w-[450px] lg:!w-[465px]"
              key={index}
            >
              <div
                className={`${roboto.className} w-[350px] h-[350px] xs:w-[450px] xs:h-[450px] lg:w-[465px] lg:h-[465px] overflow-hidden bg-white rounded-[20px] relative p-8 !text-left`}
              >
                <div className="overflow-hidden absolute top-0 right-0 left-0 bottom-0 z-1 ">
                  <Image
                    src={item.image}
                    alt=""
                    className={`w-full h-full object-cover ${
                      activeIndex === index ? "opacity-100" : "opacity-0"
                    } ${item.value === "bpo" ? "object-[85%_0]" : ""}${
                      item.value === "upsale" ? "object-[55%_0]" : ""
                    }${item.value === "loyalty" ? "object-[40%_0]" : ""}${
                      item.value === "cskh" ? "object-[80%_0]" : ""
                    }${
                      item.value === "customer-experience"
                        ? "object-[70%_0]"
                        : ""
                    }`}
                    quality={100}
                  />
                </div>
                {activeIndex === index && (
                  <div className="absolute top-0 right-0 left-0 bottom-0 z-[2] bg-black opacity-60"></div>
                )}
                <h1 className="text-lg xs:text-2xl lg:text-3xl font-medium text-[#D8D8D8] relative z-[3]">
                  Dịch vụ{" "}
                  <span
                    className={`font-medium ${
                      activeIndex === index ? "text-white" : "text-black"
                    } `}
                  >
                    {item.label}
                  </span>
                </h1>

                <p
                  className={`text-sm xs:text-base lg:text-lg relative z-[2] mt-4 lg:mt-6 ${
                    activeIndex === index ? "text-white" : "text-[#595959]"
                  }`}
                >
                  {item.detailHome}
                </p>
                {Array.isArray(item.detail) && (
                  <ul
                    className={`${
                      activeIndex === index ? "text-white" : "text-[#595959]"
                    } mt-2 ml-4 space-y-1 relative z-[2] text-[13px] xs:text-base lg:text-lg text-left`}
                    style={{ direction: "ltr", listStylePosition: "outside" }}
                  >
                    {item.detail.map((item, index) => (
                      <>
                        <p>{item.title}</p>
                        <li key={index} className="list-disc">
                          {item.list}
                        </li>
                      </>
                    ))}
                  </ul>
                )}

                <p
                  className={`text-sm xs:text-base lg:text-lg relative z-[2] mt-4 lg:mt-6 ${
                    activeIndex === index ? "text-white" : "text-[#595959]"
                  }`}
                >
                  {item.additional}
                </p>
              </div>
            </SwiperSlide>
          ))}
        <div className="absolute !top-[-10%] xs:[!top-0] !translate-y-[-100%] xl:!translate-y-[100%] !right-[0] !translate-x-1/2 flex justify-between min-h-[40px] min-w-[92px] z-10">
          <button className="services-carousel__swiper-button-next swiper-button-next !relative !translate-y-0 !top-0 !mt-0"></button>
          <button className="services-carousel__swiper-button-prev swiper-button-prev !relative !translate-y-0 !top-0 !mt-0"></button>
        </div>
      </Swiper>
    </MotionWrapper>
  );
}

export default ServicesCarousel;
