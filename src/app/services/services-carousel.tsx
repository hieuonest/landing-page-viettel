"use client";
import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { roboto } from "@/lib/font";
import { dataServicesHome } from "@/lib/define-data";

function ServicesCarousel({}) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="max-[350px]:w-[100dvw] w-[97dvw] xl:w-[85dvw] 2xl:w-[85dvw] 3xl:w-[85dvw] mt-28 overflow-visible">
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
          setActiveIndex(swiper.realIndex);
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
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
              className="!w-[368px] xs:!w-[475px] lg:!w-[510px]"
              key={item.value}
            >
              <div
                className={`${roboto.className} w-[350px] h-[450px] xs:w-[475px] xs:h-[475px] lg:w-[510px] lg:h-[510px] overflow-hidden bg-white rounded-[20px] relative p-8 !text-left`}
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

                {/* <p
                  className={`text-[13px] xs:text-base relative z-[2] mt-4 lg:mt-6 ${
                    activeIndex === index ? "text-white" : "text-[#595959]"
                  }`}
                >
                  {item.detailHome}
                </p> */}
                <div
                  className={`${
                    activeIndex === index ? "text-white" : "text-[#595959]"
                  }`}
                >
                  {Array.isArray(item.detailHome) ? (
                    item.detailHome.map((sentence, index) => (
                      <p
                        key={index}
                        className={`text-[13px] xs:text-base relative z-[2] mt-4 lg:mt-6 `}
                      >
                        {sentence.map((part, i) =>
                          typeof part === "string" ? (
                            part
                          ) : (
                            <span key={i} className="whitespace-nowrap ">
                              {part.text}
                            </span>
                          )
                        )}
                      </p>
                    ))
                  ) : (
                    <p
                      className={`text-[13px] xs:text-base relative z-[2] mt-4 lg:mt-6 ${
                        activeIndex === index ? "text-white" : "text-[#595959]"
                      }`}
                    >
                      {item.detailHome}
                    </p>
                  )}
                </div>
                <div
                  className={`${
                    activeIndex === index ? "text-white" : "text-[#595959]"
                  } mt-2 relative z-[2] text-[13px] xs:text-sm lg:text-base text-left`}
                  style={{
                    direction: "ltr",
                  }}
                >
                  {Array.isArray(item.detail) &&
                    item.detail.map((item, index) => (
                      <Fragment key={`detail_${index}`}>
                        <p className="font-medium">{item.title}</p>
                        <ul className="ml-4 space-y-1">
                          {item.list.map((item, index) => (
                            <li key={`list_${index}`} className="list-disc">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Fragment>
                    ))}

                  {Array.isArray(item.additional) ? (
                    <ul className="mt-2 ml-4 space-y-1">
                      {item.additional.map((item, index) => (
                        <li key={`add_${index}`} className="">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2">{item.additional}</p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        <div className="!absolute !top-[-10%] xs:[!top-0] !translate-y-[-100%] xl:!translate-y-[100%] !right-[0] !translate-x-1/2 flex justify-between min-h-[40px] min-w-[92px] z-10">
          <button className="services-carousel__swiper-button-next swiper-button-next !relative !translate-y-0 !top-0 !mt-0"></button>
          <button className="services-carousel__swiper-button-prev swiper-button-prev !relative !translate-y-0 !top-0 !mt-0"></button>
        </div>
      </Swiper>
    </div>
  );
}

export default ServicesCarousel;
