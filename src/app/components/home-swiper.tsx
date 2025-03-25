"use client";
import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/styles/pages/home.scss";
import { EffectCards, Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { roboto } from "@/lib/font";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homeSolutions } from "@/lib/define-data";
import { Swiper as SwiperType } from "swiper";

function HomeSwiper() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative container-swiper-home">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        centeredSlides={true}
        cardsEffect={{
          slideShadows: false,
          perSlideRotate: 0,
          perSlideOffset: 15,
        }}
        effect={"cards"}
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        grabCursor={true}
        modules={[EffectCards, Navigation, Pagination, Autoplay]}
        className="solution-swiper max-w-[90dvw] md:max-w-[95dvw] xl:max-w-[1120px] mt-14"
        navigation={{
          nextEl: ".solution-swiper__swiper-button-next",
          prevEl: ".solution-swiper__swiper-button-prev",
        }}
        initialSlide={0}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        watchSlidesProgress={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          renderBullet: function (index, className) {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
      >
        {homeSolutions.map((item, index) => (
          <SwiperSlide
            className={`!flex items-center justify-center `}
            key={index}
          >
            <div className="w-full min-h-[520px] lg:min-h-[650px] rounded-[20px] bg-[#3E3E3E] flex max-lg:flex-col max-sm:gap-3 relative justify-between pt-4 sm:py-[20px] md:py-[48px] lg:py-[70px] pl-0 sm:pl-[36px] sm:pr-[36px] lg:pr-[0px] gap-[10px] md:gap-[0]">
              <div
                className={`${roboto.className} lg:max-w-[408px] flex flex-col pr-2 md:pr-[42px] flex-1 pl-4 sm:pl-0`}
              >
                <div>
                  <h1 className="text-[35px] md:text-[40px] lg:text-[55px] text-white font-light">
                    {item.title}
                  </h1>
                  <h2 className="text-[#C4C4C4] text-[13px] md:text-base lg:text-lg font-medium uppercase mt-2 md:mt-4 h-[39px] flex items-center">
                    {item.desc}
                  </h2>
                  <p className="mt-4 md:mt-11 text-[#C4C4C4] text-[13px] md:text-base lg:text-lg h-[130px] xxs:h-[120px] sm:h-[87px] lg:h-auto">
                    {item.detail}
                  </p>
                </div>

                <Link
                  href="/solutions"
                  className="flex items-center relative text-white text-lg group transition-all duration-300 mt-3 md:mt-6 see-more-link w-fit"
                >
                  Tìm hiểu thêm
                  <ArrowUpRight
                    color="#EA0033"
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
              <div className="relative flex self-center lg:w-auto justify-center items-center overflow-hidden sm:rounded-[20px] lg:rounded-none lg:rounded-b-[20px] lg:rounded-s-[20px] lg:rounded-br-none mb-[60px] sm:mb-[40px] lg:mb-[0] h-[275px] md:h-[350px] lg:h-[475px] xl:h-[510px] w-full lg:min-w-[548px] lg:max-w-[548px] xl:min-w-[648px] bg-white max-lg:mt-3">
                <Image
                  src={item.image}
                  alt="swipe-1"
                  quality={100}
                  className="object-contain w-[90%] h-[90%]"
                />
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 w-full h-full bg-[#c5c5c5] rounded-[20px] pointer-events-none transition-opacity duration-700 ease-in-out ${
                  activeIndex === index ? "opacity-0" : "opacity-60"
                }`}
              />
            </div>
          </SwiperSlide>
        ))}
        <button className="solution-swiper__swiper-button-prev swiper-button-prev absolute">
          <Image
            src="/svg/swipe-arrow-prev.svg"
            alt="swiper-prev"
            width={40}
            height={40}
          />
        </button>
        <button className="solution-swiper__swiper-button-next swiper-button-next absolute">
          <Image
            src="/svg/swipe-arrow-next.svg"
            alt="swiper-next"
            width={40}
            height={40}
          />
        </button>

        <div className="swiper-pagination !absolute !w-fit px-4 min-h-[20px] bg-black rounded-full !bottom-[15px] md:!bottom-6 !left-[36px] md:!left-16 flex items-center gap-3"></div>
      </Swiper>
      {/* BUTTON BÊN PHẢI */}
      <div className="absolute w-[100%] container-btn-action">
        <button
          className="home-carousel__swiper-button-next swiper-button-next relative"
          onClick={() => swiperRef.current?.slideNext()}
        />
        <button
          className="home-carousel__swiper-button-prev swiper-button-prev relative right-[60px] left-auto"
          onClick={() => swiperRef.current?.slidePrev()}
        />
      </div>
    </div>
  );
}

export default HomeSwiper;
