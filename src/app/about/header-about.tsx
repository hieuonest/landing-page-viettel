import React from "react";
import Image from "next/image";
import bgHeader from "../../../public/images/bg-header-about.png";
import titleThauHieu from "../../../public/images/title-thau-hieu.png";
import bgYear from "../../../public/images/Vector 1.png";
import iconLine2004 from "../../../public/svg/line-2004.svg";
import iconLine2013 from "../../../public/svg/line-2013.svg";
import { roboto, fsMagistralBook } from "@/lib/font";
import iconLoa from "../../../public/images/icon-loa.png";

export default function HeaderAbout() {
  return (
    <>
      <div className="bg-[#595959] h-[520px] mt-[245px] relative">
        <div className="max-w-[90%] xl:max-w-[1120px] flex justify-between mx-auto container">
          <div
            className={`${fsMagistralBook.className} text-[#FFFFFF] text-[30px] mt-[80px]`}
          >
            Về chúng tôi
          </div>
          <div className="relative mt-[-115px]">
            <Image src={bgHeader} alt="bgHeader" className="" />
            <div
              className={`${roboto.className} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] text-center`}
            >
              <div className="text-[30px] leading-[35px] text-[#C4C4C4] mb-1">
                Trưởng thành từ hai thập kỷ
              </div>
              <div className="flex items-center text-center justify-center">
                <span className="text-[#ffffff] text-[50px] pt-[2px]">
                  Chăm sóc và
                </span>{" "}
                <span>
                  <Image src={titleThauHieu} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1120px] flex justify-between mx-auto relative">
        <Image
          src={bgYear}
          alt="background year"
          className="relative h-[110px]"
        />
        <div className="px-[40px] absolute w-[100%]">
          <div className="flex">
            <div className="relative flex gap-[111.5px] h-[100%] w-[100%] text-[#9B9B9B] text-[30px] pt-[50px]">
              <div className="flex gap-[12px]">
                <Image
                  src={iconLine2004}
                  alt="line 2004"
                  className="mt-[12px] absolute"
                />
                <div className="pl-[12px]">2004</div>
              </div>
              <div>2009</div>
              <div className="text-[65px] text-[#A28F5D] relative w-[67px] h-[45px]">
                <Image
                  src={iconLine2013}
                  alt="line 2004"
                  className="absolute top-[-17px]"
                />
                <div className="absolute leading-[100px] top-[-40px] left-[40px]">
                  2013
                </div>
              </div>
            </div>
            <div className="absolute right-[40px] flex gap-[97px] h-[100%] text-[#9B9B9B] text-[30px] pt-[50px]">
              <div>2015</div>
              <div>2022</div>
              <div>2025</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[60px] max-w-[1120px] flex justify-between mx-auto">
        <div className="flex w-[100%]">
          <div className="relative w-35/100">
            <div className="bg-[#EA0033] absolute w-[100%] h-[100%] z-10 top-[-20px] rounded-[20px]" />
            <div
              className={`${roboto.className} h-[285px] text-[30px] text-[#000000] leading-[35px] px-[30px] rounded-[20px] bg-[#E7E7E7] pt-[45px] flex relative z-20`}
            >
              <div className="flex items-center h-fit gap-[14px]">
                <Image src={iconLoa} alt="icon" className="w-[56px] h-[56px]" />
                <div className="font-medium ">
                  Triển khai dịch vụ tổng đài & Telesales
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-75/100">
            <div className="bg-[#000000] absolute w-[100%] h-[100%] z-10 top-[-20px] rounded-[20px]" />
            <div
              className={`${roboto.className} h-[285px] text-[30px] text-[#000000] leading-[35px] px-[30px] rounded-[20px] bg-[#E7E7E7] pt-[45px]  relative z-20`}
            >
              <div className="font-medium text-[#EA0033]">
                Mở rộng <br />{" "}
                <span className="font-medium text-[#000000]">
                  từ phản hồi đến chủ động kết nối
                </span>
              </div>
              <div className="pt-[18px] text-[#595959] text-[18px] leading-[25px]">
                Triển khai kinh doanh các dịch vụ: tổng đài 106x, telesales và
                marketing. Mở rộng kết nối, gia tăng giá trị cho khách hàng.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
