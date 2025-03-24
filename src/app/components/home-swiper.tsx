"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/styles/pages/home.scss";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { roboto } from "@/lib/font";
import Link from "next/link";
import homeInsightCi from "../../../public/images/home-insight-ci.png";
import { ArrowUpRight } from "lucide-react";
function HomeSwiper() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Swiper
      cardsEffect={{
        slideShadows: false,
        perSlideRotate: 0,
        perSlideOffset: 15,
      }}
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Navigation, Pagination]}
      className="solution-swiper max-w-[90dvw] md:max-w-[95dvw] xl:max-w-[1120px] mt-14"
      centeredSlides={true}
      navigation={{
        nextEl: ".solution-swiper__swiper-button-next",
        prevEl: ".solution-swiper__swiper-button-prev",
      }}
      initialSlide={1}
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.activeIndex);
      }}
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
        renderBullet: function (index, className) {
          return `<span class="${className} custom-bullet"></span>`;
        },
      }}
      
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <SwiperSlide
          className={`!flex items-center justify-center`}
          key={index}
        >
          <div className="w-full lg:min-h-[650px] rounded-[20px] bg-[#3E3E3E] flex max-sm:flex-col max-sm:gap-3 relative justify-between pt-4 sm:py-[32px] md:py-[48px] lg:py-[70px] pl-0 sm:pl-[36px]">
            <div
              className={`${roboto.className} max-w-[408px] flex flex-col pr-2 md:pr-[42px] flex-1 pl-4 sm:pl-0`}
            >
              <div>
                <h1 className="text-[35px] md:text-[40px] lg:text-[55px] text-white font-light">
                  Insight CI
                </h1>
                <h2 className="text-[#C4C4C4] text-xs md:text-base lg:text-lg font-medium uppercase mt-4">
                  Hiểu khách hàng sâu hơn,
                  <br /> tối ưu dịch vụ tốt hơn
                </h2>
                <p className="mt-7 md:mt-11 text-[#C4C4C4] text-xs md:text-base lg:text-lg">
                  InsightCI là nền tảng phân tích tương tác khách hàng mạnh mẽ,
                  ứng dụng công nghệ Big Data để khai thác và phân tích mọi
                  tương tác trên đa kênh. Giúp doanh nghiệp thấu hiểu nhu cầu
                  khách hàng, tối ưu quy trình dịch vụ và nâng cao mức độ hài
                  lòng, từ đó thúc đẩy tăng trưởng bền vững.
                </p>
              </div>

              <Link
                href="/solutions"
                className="flex items-center relative text-white text-lg group transition-all duration-300 mt-6 see-more-link w-fit"
              >
                Tìm hiểu thêm
                <ArrowUpRight
                  color="#EA0033"
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
            <div className="max-sm:w-full relative flex self-center justify-end overflow-hidden rounded-b-[20px] sm:rounded-s-[20px]">
              <Image src={homeInsightCi} alt="swipe-1" quality={100} className="w-full md:w-[424px] lg:w-[548px] xl:w-[648px] "/>
            </div>
            
            <div className={`absolute bottom-0 left-0 right-0 w-full h-full bg-[#c5c5c5] rounded-[20px] pointer-events-none transition-opacity duration-700 ease-in-out ${activeIndex === index ? "opacity-0" : "opacity-60"}`} />
            
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

      <div className="swiper-pagination !absolute !w-fit px-4 min-h-[20px] bg-black rounded-full !bottom-2 md:!bottom-9 !left-2 md:!left-16 flex items-center gap-3"></div>
    </Swiper>
  );
}

export default HomeSwiper;
