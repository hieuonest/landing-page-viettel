"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "@/app/styles/pages/home.scss";
import { EffectCards, Navigation } from "swiper/modules";
import Image from "next/image";
import { roboto } from "@/lib/font";
import Link from "next/link";
import homeInsightCi from "../../../public/images/home-insight-ci.png";
import { ArrowUpRight } from "lucide-react";
function HomeSwiper() {
  return (
    <Swiper
      cardsEffect={{
        slideShadows: false,
        perSlideRotate: 0,
        perSlideOffset: 15,
      }}
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Navigation]}
      className="solution-swiper w-full mt-14"
      centeredSlides={true}
      navigation={{
        nextEl: ".solution-swiper__swiper-button-next",
        prevEl: ".solution-swiper__swiper-button-prev",
      }}
      initialSlide={1}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <SwiperSlide className="!flex items-center justify-center" key={index}>
          <div className="min-w-[1120px] min-h-[650px] rounded-[20px] bg-[#3E3E3E] flex relative justify-between py-[70px] pl-[48px]">
            <div
              className={`${roboto.className} max-w-[408px] flex flex-col pr-[42px] flex-1`}
            >
              <div>
                <h1 className="text-[55px] text-white font-light">
                  Insight CI
                </h1>
                <h2 className="text-[#C4C4C4] text-lg font-medium uppercase mt-4">
                  Hiểu khách hàng sâu hơn,
                  <br /> tối ưu dịch vụ tốt hơn
                </h2>
                <p className="mt-11 text-[#C4C4C4] text-lg">
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
            <div className="w-[648px] relative flex self-center justify-end overflow-hidden rounded-s-[20px]">
              <Image src={homeInsightCi} alt="swipe-1" quality={100} />
            </div>
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
    </Swiper>
  );
}

export default HomeSwiper;
