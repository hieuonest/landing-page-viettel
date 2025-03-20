"use client";
import React from "react";
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
        // autoplay={{
        //   delay: 250,
        //   disableOnInteraction: false,
        // }}
        navigation={{
          nextEl: ".services-carousel__swiper-button-next",
          prevEl: ".services-carousel__swiper-button-prev",
        }}
        // navigation={{
        //   enabled: true,
        // }}
        className="services-carousel"
        slidesPerView={"auto"}
        // initialSlide={6}
        spaceBetween={20}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
      >
        <div className="">
          {Array.from({ length: 7 }).map((_, index) => (
            <SwiperSlide className="!w-[465px]" key={index}>
              <div className="w-[465px] h-[465px] overflow-hidden bg-white rounded-[20px] relative">
                {activeIndex === index && <Image src={loyalty} alt="" className="absolute top-0 right-0 left-0 bottom-0 z-1" />}
                <h1 className="text-3xl font-medium text-[#D8D8D8] relative z-[2]">
                  Dịch vụ
                  <span
                    className={`font-medium ${
                      activeIndex === index ? "text-white" : "text-black"
                    }`}
                  >
                    Loyalty
                  </span>
                </h1>

                <p
                  className={`text-lg relative z-[2] ${
                    activeIndex === index ? "text-white" : "text-[#595959]"
                  }`}
                >
                  Giải pháp của Viettel CX giúp doanh nghiệp xây dựng, duy trì
                  và gia tăng sự gắn bó của khách hàng thông qua các chương
                  trình tích điểm, ưu đãi, đặc quyền và cá nhân hóa trải nghiệm.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </div>
        <div className="absolute !top-0 !right-[-10%] translate-x-[10%] flex justify-between min-h-[40px] min-w-[92px] z-10">
          <button className="services-carousel__swiper-button-prev swiper-button-prev"></button>
          <button className="services-carousel__swiper-button-next swiper-button-next"></button>
        </div>
      </Swiper>
    </div>
  );
}

export default ServicesCarousel;
