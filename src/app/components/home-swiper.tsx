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
function HomeSwiper() {
  return (
    <Swiper
      cardsEffect={{
        slideShadows: false,
        perSlideRotate: 0,
        perSlideOffset: 50,
      }}
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Navigation]}
      className="solution-swiper w-full mt-14"
      centeredSlides={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      initialSlide={1}
    >
      <SwiperSlide className="!flex items-center justify-center">
        <div className="max-w-[1120px] rounded-[20px] flex relative">
          <div
            className={`${roboto.className} bg-[#DCDCDC] rounded-s-[20px] px-[54px] py-16 max-w-[408px] flex flex-col justify-between`}
          >
            <div>
              <Image
                src="/images/x-omni.png"
                alt="x-omni"
                width={182}
                height={59}
              />
              <p className="text-[30px] text-[#595959]">Tổng đài đa kênh</p>
              <p className="mt-16 text-[#595959] text-lg">
                Giải pháp tương tác đa kênh hợp nhất, tích hợp tương tác khách
                hàng qua nhiều kênh: VoIP, Livechat, email, social media
                message, text, video chat... trong một giao diện hợp nhất
              </p>
            </div>

            <Link href="/" className="text-[#EA0033] text-lg">
              Tìm hiểu thêm
            </Link>
          </div>
          <img src="/images/swipe-1.png" alt="swipe-1" />
          <button className="swiper-button-prev absolute"></button>
          <button className="swiper-button-next absolute"></button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="!flex items-center justify-center">
        <div className="max-w-[1120px] rounded-[20px] flex relative">
          <div
            className={`${roboto.className} bg-[#DCDCDC] rounded-s-[20px] px-[54px] py-16 max-w-[408px] flex flex-col justify-between`}
          >
            <div>
              <Image
                src="/images/x-omni.png"
                alt="x-omni"
                width={182}
                height={59}
              />
              <p className="text-[30px] text-[#595959]">Tổng đài đa kênh</p>
              <p className="mt-16 text-[#595959] text-lg">
                Giải pháp tương tác đa kênh hợp nhất, tích hợp tương tác khách
                hàng qua nhiều kênh: VoIP, Livechat, email, social media
                message, text, video chat... trong một giao diện hợp nhất
              </p>
            </div>

            <Link href="/" className="text-[#EA0033] text-lg">
              Tìm hiểu thêm
            </Link>
            <button className="swiper-button-prev absolute"></button>
            <button className="swiper-button-next absolute"></button>
          </div>
          <img src="/images/swipe-1.png" alt="swipe-1" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="!flex items-center justify-center">
        <div className="max-w-[1120px]  rounded-[20px] flex relative">
          <div
            className={`${roboto.className} bg-[#DCDCDC] rounded-s-[20px] px-[54px] py-16 max-w-[408px] flex flex-col justify-between`}
          >
            <div>
              <Image
                src="/images/x-omni.png"
                alt="x-omni"
                width={182}
                height={59}
              />
              <p className="text-[30px] text-[#595959]">Tổng đài đa kênh</p>
              <p className="mt-16 text-[#595959] text-lg">
                Giải pháp tương tác đa kênh hợp nhất, tích hợp tương tác khách
                hàng qua nhiều kênh: VoIP, Livechat, email, social media
                message, text, video chat... trong một giao diện hợp nhất
              </p>
            </div>

            <Link href="/" className="text-[#EA0033] text-lg">
              Tìm hiểu thêm
            </Link>
            <button className="swiper-button-prev"></button>
            <button className="swiper-button-next"></button>
          </div>
          <img src="/images/swipe-1.png" alt="swipe-1" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HomeSwiper;
