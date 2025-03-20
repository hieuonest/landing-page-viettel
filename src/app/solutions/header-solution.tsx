import React from "react";
import Image from "next/image";
import BgHeader from "../../../public/images/bg-solution.png";
import Omni from "../../../public/images/Omni.png";
import { roboto } from "@/lib/font";
import MotionWrapper from "@/components/ui/motion-wrapper";
import { fadeInBottomVariants } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";
import iconOnix from "../../../public/svg/icon-omnix.svg";
import { slug_solution } from "@/lib/define-data";

export default function HeaderSolution() {
  return (
    <div className="w-screen h-screen bg-[#E6E7E9] relative">
      <Image
        src={BgHeader}
        alt="Solutions header background"
        className="absolute top-0 right-0 z-10"
        style={{ width: "110%", height: "auto" }}
      />
      <div className="max-w-[90%] pt-[130px] xl:max-w-[1120px] mx-auto container relative z-20">
        <div
          className={`${roboto.className} text-[#9B9B9B] text-[39px] text-center mx-auto leading-[46px]`}
        >
          <div className="font-medium">
            Tiên phong nâng tầm trải nghiệm khách hàng
          </div>
          <div className="font-medium">
            {" "}
            bằng{" "}
            <span className="text-[#000000] font-medium">
              công nghệ sáng tạo
            </span>
          </div>
        </div>

        <MotionWrapper
          initial="hidden"
          viewport={{ once: true, amount: 0.5 }}
          whileInView="visible"
          variants={fadeInBottomVariants}
          className={`${roboto.className} text-lg text-center text-[#EA0033] flex justify-center mt-6`}
        >
          <Link
            href="/about"
            className="flex items-center relative see-more-link group transition-all duration-300"
          >
            Tìm hiểu thêm
            <ArrowUpRight
              color="#000"
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </MotionWrapper>

        <div className="w-full px-10 py-[45px] bg-[#ffffff] mt-[60px] rounded-[20px]">
          <div className="grid grid-cols-2  justify-between gap-8">
            <div>
              <Image src={iconOnix} alt="" />
              <div
                className={`${roboto.className} font-medium text-[30px] leading-[35px]`}
              >
                Tổng đài đa kênh hợp nhất
              </div>
              <div
                className={`${roboto.className} mt-[30px] text-[#595959] text-[18px]`}
              >
                OmniX là nền tảng tổng đài thông minh trên nền tảng điện toán
                đá30m mây, tích hợp AI giúp doanh nghiệp quản lý tất cả các
                tương tác khách hàng trên một hệ thống duy nhất, từ thoại,
                email, SMS, OTT đến mạng xã hội. Cung cấp trải nghiệm liền mạch,
                tối ưu hiệu suất vận hành và đảm bảo an toàn dữ liệu vượt trội.
              </div>

              <div className={`${roboto.className} mt-[30px] `}>
                <Link
                  href="#"
                  className={`${roboto.className} w-[200px] text-[#000] text-[20px] flex items-center gap-2 border border-[#000000] rounded-[5px] bg-white px-4 py-2 overflow-hidden group relative justify-between z-10`}
                >
                  <span className="absolute inset-0 bg-[#EA0033] transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0" />
                  <MoveRight className="relative transition-colors duration-300 text-[#EA0033] group-hover:text-white" />
                  <span className="relative  font-medium transition-all duration-300 group-hover:text-white">
                    Yêu cầu Demo
                  </span>
                </Link>
              </div>
            </div>
            <div>
              <Image src={Omni} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-[35px]">
          <div className="flex gap-[10px]">
            {slug_solution.map((item) => {
              return (
                <div
                  className={`${
                    roboto.className
                  } cursor-pointer h-[30px] flex items-center justify-center px-[14px] border rounded-[100px] border-solid ${
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
        </div>
      </div>
    </div>
  );
}
