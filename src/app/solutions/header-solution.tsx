"use client";
import React from "react";
import Image from "next/image";
import BgHeader from "../../../public/images/bg-solution.png";
import Omni from "../../../public/images/Omni.png";
import { roboto } from "@/lib/font";
import MotionWrapper from "@/components/ui/motion-wrapper";
import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";
import iconOnix from "../../../public/svg/icon-omnix.svg";
import { slug_solution } from "@/lib/define-data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function HeaderSolution() {
  return (
    <div className="w-[100%] h-[100%] pb-[40px] lg:pb-[80px] bg-[#E6E7E9] relative">
      <Image
        src={BgHeader}
        alt="Solutions header background"
        className="absolute top-0 right-0 z-10"
        style={{ width: "110%", height: "auto" }}
      />
      <div className="max-w-[90%] pt-[130px] xl:max-w-[1120px] mx-auto container relative z-20 xm:max-w-[90%]">
        <MotionWrapper
          element="div"
          viewport={{ once: true, amount: 0.4 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
          }}
          className={`${roboto.className} text-[#9B9B9B] text-[24px] xs:text-[32px] sm:text-[39px] text-center mx-auto leading-[30px] xs:leading-[38px] sm:leading-[46px]`}
        >
          <div className={`font-medium inline md:block`}>
            Tiên phong nâng tầm trải nghiệm khách hàng
          </div>
          <div className={`font-medium inline md:block`}>
            {" "}
            bằng{" "}
            <span className="text-[#000000] font-medium">
              công nghệ sáng tạo
            </span>
          </div>
        </MotionWrapper>

        <MotionWrapper
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className={`${roboto.className} text-lg text-center text-[#EA0033] flex justify-center mt-2 sm:mt-6`}
        >
          <Link
            href="/about"
            className="text-[14px] sm:text-[18px] flex items-center relative see-more-link group transition-all duration-300"
          >
            Tìm hiểu thêm
            <ArrowUpRight
              color="#000"
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </MotionWrapper>

        <div className="w-full px-5 py-5 xs:px-7 lg:px-10 xs:py-[30px] lg:py-[45px] bg-[#ffffff] mt-[40px] sm:mt-[60px] rounded-[20px]">
          <div className="block md:grid md:grid-cols-2  justify-between gap-8">
            <MotionWrapper
              element="div"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="flex items-center justify-center md:hidden mb-[12px]"
            >
              <Image src={Omni} alt="" />
            </MotionWrapper>
            <div>
              <Image src={iconOnix} alt="" />
              <div
                className={`${roboto.className} font-medium text-[24px] sm:text-[30px] leading-[35px]`}
              >
                Tổng đài đa kênh hợp nhất
              </div>
              <div
                className={`${roboto.className}  text-[#595959] mt-[20px] lg:mt-[30px] text-[14px] lg:text-[18px]`}
              >
                OmniX là nền tảng tổng đài thông minh trên nền tảng điện toán
                đá30m mây, tích hợp AI giúp doanh nghiệp quản lý tất cả các
                tương tác khách hàng trên một hệ thống duy nhất, từ thoại,
                email, SMS, OTT đến mạng xã hội. Cung cấp trải nghiệm liền mạch,
                tối ưu hiệu suất vận hành và đảm bảo an toàn dữ liệu vượt trội.
              </div>

              <div className={`${roboto.className} mt-[20px] lg:mt-[30px] `}>
                <Link
                  href="#"
                  className={`${roboto.className} w-[160px] sm:w-[180px] lg:w-[200px] text-[#000] text-[14px] sm:text-[16px] lg:text-[20px] flex items-center gap-2 border border-[#000000] rounded-[5px] bg-white px-4 py-2 overflow-hidden group relative justify-between z-10`}
                >
                  <span className="absolute inset-0 bg-[#EA0033] transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0" />
                  <MoveRight className="relative transition-colors duration-300 text-[#EA0033] group-hover:text-white" />
                  <span className="relative font-medium transition-all duration-300 group-hover:text-white">
                    Yêu cầu Demo
                  </span>
                </Link>
              </div>
            </div>
            <MotionWrapper
              element="div"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="items-center justify-center hidden md:block"
            >
              <Image src={Omni} alt="" />
            </MotionWrapper>
          </div>
        </div>

        <div className="mt-[35px]">
          {/* show destop */}
          <div className="hidden lg:flex gap-[10px]">
            {slug_solution.map((item) => {
              return (
                <div
                  className={`${
                    roboto.className
                  } cursor-pointer h-[30px] text-[12px] lg:text-[13px] xl:text-[14px] flex items-center justify-center px-[14px] border rounded-[100px] border-solid ${
                    item.id === 1
                      ? "text-[#fff] border-[#000000] bg-[#000000]"
                      : "text-[#858585] border-[#858585]"
                  }`}
                  key={item.id}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
          {/* show mobile */}
          <div className="lg:hidden">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              navigation={false}
              pagination={false}
              breakpoints={{
                0: { slidesPerView: 2.25 },
                576: { slidesPerView: 3.25 },
                768: { slidesPerView: 4.25 },
              }}
              // className="flex gap-[10px]"
            >
              {slug_solution.map((item) => {
                return (
                  <SwiperSlide
                    style={{
                      height: "30px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    className={`${
                      roboto.className
                    } cursor-pointer h-[30px] text-[12px] lg:text-[13px] xl:text-[14px] flex items-center justify-center border rounded-[100px] border-solid ${
                      item.id === 1
                        ? "text-[#fff] border-[#000000] bg-[#000000]"
                        : "text-[#858585] border-[#858585]"
                    }`}
                    key={item.id}
                  >
                    {item.label}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
