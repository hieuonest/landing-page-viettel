"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import upsale from "../../../public/images/upsale.png";
import { ArrowUpRight} from "lucide-react";
import { roboto } from "@/lib/font";
import Link from "next/link";

function HomeCarousel() {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      loop={true}
      autoplay={{
        delay: 250,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
        renderBullet: function (index, className) {
          return `<span class="${className} custom-bullet"></span>`;
        },
      }}
      navigation={{
        nextEl: ".home-carousel__swiper-button-next",
        prevEl: ".home-carousel__swiper-button-prev",
      }}
      className="w-full relative home-carousel "
    >
      {Array.from({ length: 7 }).map((_, index) => (
        <SwiperSlide className="relative !w-full" key={index}>
          <div className="relative overflow-hidden">
            <Image src={upsale} alt="upsale" className="object-cover w-full min-h-[350px]" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black min-h-[351px] flex items-end justify-center">
            <div
              className={`${roboto.className} flex flex-col gap-4 items-center text-center justify-end pb-12 md:pb-9 text-white max-w-[485px]`}
            >
              <h1 className="text-[45px] md:text-[55px] font-light leading-[60px]">Upsale</h1>
              <h2 className="text-sm md:text-lg font-medium uppercase">
                Dịch vụ gia tăng doanh số
              </h2>

              <p className="text-[#D9D9D9] text-sm md:text-lg">
                Tiếp cận khách hàng đa kênh, gia tăng độ phủ về kênh bán, thúc
                đẩy gia tăng doanh số cùng giải pháp từ Viettel CX
              </p>
              <Link
                href="/solutions"
                className="flex items-center relative text-[#EA0033] text-lg group transition-all duration-300 see-more-link"
              >
                Tìm hiểu thêm
                <ArrowUpRight
                  color="#cccccc"
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className="swiper-pagination !absolute !w-fit px-4 min-h-[20px] bg-black rounded-full !bottom-2 md:!bottom-9 !left-2 md:!left-16 flex items-center gap-3"></div>
      <div className="absolute !bottom-2 md:!bottom-9 !right-2 md:!right-16 flex justify-between min-h-[40px] min-w-[92px]">
        <button className="home-carousel__swiper-button-prev swiper-button-prev"></button>
        <button className="home-carousel__swiper-button-next swiper-button-next"></button>
      </div>
    </Swiper>
  );
}

export default HomeCarousel;
