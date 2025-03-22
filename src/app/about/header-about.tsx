import React from "react";
import Image from "next/image";
import bgHeader from "../../../public/images/bg-header-about.png";
import titleThauHieu from "../../../public/images/title-thau-hieu2.png";
import imgYear from "../../../public/images/img-year-desk.png";
import imgYearMobile from "../../../public/images/img-year-mobile.png";
import imgYearMobilexm from "../../../public/images/img-year-mobile-sm.png";
import bgYear from "../../../public/images/Vector 1.png";
import iconLine2004 from "../../../public/svg/line-2004.svg";
import iconLine2013 from "../../../public/svg/line-2013.svg";
import { roboto, fsMagistralBook } from "@/lib/font";
import iconLoa from "../../../public/images/icon-loa.png";
import MotionWrapper from "@/components/ui/motion-wrapper";
import { easeInOut } from "framer-motion";

export default function HeaderAbout() {
  return (
    <>
      <div className="bg-[#595959] h-[320px] xm:h-[345px] lg:h-[520px] mt-[245px] relative">
        <div className="max-w-[90%] xl:max-w-[1120px]  xm:grid xm:grid-cols-[145px_auto] md:grid-cols-[185px_auto] lg:flex lg:justify-between mx-auto container">
          {/* web */}
          <MotionWrapper
            element="div"
            className={`${fsMagistralBook.className} hidden xm:block text-[#FFFFFF] text-[20px] md:text-[24px] lg:text-[30px] mt-[80px]`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            Về chúng tôi
          </MotionWrapper>
          <MotionWrapper
            element="div"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.25 }}
            className="relative top-[-70px] xm:top-auto mt-[-60px] xm:mt-[-115px]"
          >
            <Image
              src={bgHeader}
              alt="bgHeaders"
              className="h-[300px] xm:h-[400px] lg:h-auto"
            />
            <div
              className={`${roboto.className} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] text-center`}
            >
              <div className="text-[20px] sm:text-[24px] lg:text-[30px] leading-[35px] text-[#C4C4C4] mb-1">
                Trưởng thành từ hai thập kỷ
              </div>
              <div className="flex items-center text-center justify-center">
                <span className="text-[#ffffff] text-[32px] sm:text-[38px] lg:text-[50px] pt-[2px]">
                  Chăm sóc và
                </span>{" "}
                <span>
                  <Image
                    src={titleThauHieu}
                    alt=""
                    className="w-auto h-[35px] lg:w-auto lg:h-auto"
                  />
                </span>
              </div>
            </div>
          </MotionWrapper>
          {/* mobile */}
          <MotionWrapper
            element="div"
            className={`${fsMagistralBook.className} block xm:hidden text-[#FFFFFF] text-[30px] mt-[-50px] text-center`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            Về chúng tôi
          </MotionWrapper>
        </div>
      </div>

      {/* web */}
      <MotionWrapper
        element="div"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-[90%] hidden xl:flex xl:max-w-[1120px] flex justify-between mx-auto relative"
      >
        <Image
          src={bgYear}
          alt="background year"
          className="relative h-[110px]"
        />
        <div className="px-[40px] absolute w-[100%]">
          <div className="flex">
            <div className="relative flex gap-[10%] xl:gap-[111.5px] h-[100%] w-[100%] text-[#9B9B9B] text-[30px] pt-[50px]">
              <div className="flex gap-[12px]">
                <Image
                  src={iconLine2004}
                  alt="line 2004"
                  className="mt-[12px] absolute"
                />
                <div className="pl-[10px] xl:pl-[12px]">2004</div>
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
            <div className="absolute right-[40px] flex gap-[55px] xl:gap-[97px] h-[100%] text-[#9B9B9B] text-[30px] pt-[50px]">
              <div>2015</div>
              <div>2022</div>
              <div>2025</div>
            </div>
          </div>
        </div>
      </MotionWrapper>
      {/* mobile */}
      <MotionWrapper
        element="div"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="xl:hidden max-w-[90%] flex justify-between mx-auto"
      >
        <Image src={imgYear} alt="year" className="hidden md:block" />
        <Image
          src={imgYearMobile}
          alt="year"
          className="hidden xm:block md:hidden mx-auto"
        />
        <Image
          src={imgYearMobilexm}
          alt="year"
          className="block xm:hidden mx-auto"
        />
      </MotionWrapper>

      <div className="max-w-[90%] mt-[60px] lg:max-w-[1120px]  block md:flex justify-between mx-auto">
        <div className="block md:flex w-[100%]">
          <MotionWrapper
            element="div"
            initial="hidden"
            viewport={{ once: true, amount: 0.4 }}
            whileInView="visible"
            transition={{ duration: 1 }}
            className="relative w-35/100 mb-[40px] md:mb-[0px]"
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, easeInOut },
              },
            }}
          >
            <div className="bg-[#EA0033] absolute w-[100%] h-[100%] z-10 top-[-20px] rounded-[20px]" />
            <div
              className={`${roboto.className} h-auto pb-[20px] md:pb-[0px] md:h-[230px] lg:h-[285px] text-[24px] leading-[32px] lg:text-[30px] text-[#000000] lg:leading-[35px] px-[20px] lg:px-[30px] rounded-[20px] bg-[#E7E7E7] pt-[20px] md:pt-[45px] flex relative z-20`}
            >
              <div className="flex items-center h-fit gap-[14px]">
                <Image src={iconLoa} alt="icon" className="w-[56px] h-[56px]" />
                <div className="font-medium ">
                  Triển khai dịch vụ tổng đài & Telesales
                </div>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper
            element="div"
            initial="hidden"
            viewport={{ once: true, amount: 0.4 }}
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, easeInOut },
              },
            }}
            className="relative w-75/100"
          >
            <div className="bg-[#000000] absolute w-[100%] h-[100%] z-10 top-[-20px] rounded-[20px]" />
            <div
              className={`${roboto.className} h-auto pb-[30px] md:pb-[0px] md:h-[230px] lg:h-[285px] text-[24px] lg:text-[30px] text-[#000000] leading-[32px] lg:leading-[35px] px-[30px] rounded-[20px] bg-[#E7E7E7] pt-[20px] md:pt-[45px]  relative z-20`}
            >
              <div className="font-medium text-[#EA0033]">
                Mở rộng <br />{" "}
                <span className="font-medium text-[#000000]">
                  từ phản hồi đến chủ động kết nối
                </span>
              </div>
              <div className="pt-[18px] text-[#595959] text-[16px] leading-[22px] lg:text-[18px] lg:leading-[25px]">
                Triển khai kinh doanh các dịch vụ: tổng đài 106x, telesales và
                marketing. Mở rộng kết nối, gia tăng giá trị cho khách hàng.
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </>
  );
}
