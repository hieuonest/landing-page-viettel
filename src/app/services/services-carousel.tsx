"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { roboto } from "@/lib/font";
import Link from "next/link";
import loyalty from "../../../public/images/loyalty.png";

function ServicesCarousel({}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div className="w-[1596px] relative mt-28">
      <Swiper
        modules={[Navigation]}
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
        loop={true}
        watchSlidesProgress={true}
        slidesPerView={"auto"}
        centeredSlides={false}
        dir="rtl"
      >
        {Array.from({ length: 7 }).map((_, index) => (
          <SwiperSlide className="!w-[465px]" key={index}>
            <div
              className={`${roboto.className} w-[465px] h-[465px] overflow-hidden bg-white rounded-[20px] relative p-8 !text-left`}
            >
              <Image
                src={loyalty}
                alt=""
                className={`absolute top-0 right-0 left-0 bottom-0 z-1 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300 ease-in-out`}
              />

              <h1 className="text-3xl font-medium text-[#D8D8D8] relative z-[2]">
                Dịch vụ{" "}
                <span
                  className={`font-medium ${
                    activeIndex === index ? "text-white" : "text-black"
                  }`}
                >
                  Loyalty
                </span>
              </h1>

              <p
                className={`text-lg relative z-[2] mt-14   ${
                  activeIndex === index ? "text-white" : "text-[#595959]"
                }`}
              >
                Giải pháp của Viettel CX giúp doanh nghiệp xây dựng, duy trì và
                gia tăng sự gắn bó của khách hàng thông qua các chương trình
                tích điểm, ưu đãi, đặc quyền và cá nhân hóa trải nghiệm.
              </p>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute !top-0 !right-[-10%] !translate-x-[10%] flex justify-between min-h-[40px] min-w-[92px] z-10">
          <button className="services-carousel__swiper-button-next swiper-button-next !relative !translate-y-0 !top-0 !mt-0"></button>
          <button className="services-carousel__swiper-button-prev swiper-button-prev !relative !translate-y-0 !top-0 !mt-0"></button>
        </div>
      </Swiper>
    </div>
  );
}

export default ServicesCarousel;
