"use client";
import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import bgHeader from "../../../public/images/bg-header-about.png";
import imgYear from "../../../public/images/img-year-desk.png";
import imgYearMobile from "../../../public/images/img-year-mobile.png";
import imgYearMobilexm from "../../../public/images/img-year-mobile-sm.png";
import bgYearMobile from "../../../public/images/vector-2.png";
import bgYear from "../../../public/images/Vector 1.png";
import iconLine2004 from "../../../public/svg/line-2004.svg";
import iconLine2013 from "../../../public/svg/line-2013.svg";
import { roboto, fsMagistralBook } from "@/lib/font";
import iconLoa from "../../../public/images/icon-loa.png";
import MotionWrapper from "@/components/ui/motion-wrapper";
import { easeInOut } from "framer-motion";
import { historyAbout, historyDetailAbout } from "@/lib/define-data";

type HistoryDetail = {
  year: number;
  id?: string;
  title: string;
  content: {
    header?: string;
    title: string;
    detail: string;
  };
};
export default function HeaderAbout() {
  const [yearActive, setYearActive] = useState(2025);
  const dataDetail: HistoryDetail | undefined = useMemo(() => {
    return historyDetailAbout.find((item) => item.year === yearActive);
  }, [yearActive]);

  return (
    <>
      <div className="bg-[#595959] h-[245px] xxs:h-[320px] container-about__year xm:h-[345px] lg:h-[520px] mt-[245px] relative">
        <div className="max-w-[90%] xl:max-w-[1120px]  xm:grid xm:grid-cols-[145px_auto] md:grid-cols-[185px_auto] lg:flex lg:justify-between mx-auto container">
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
              className="h-[235px] xxs:h-[300px] xm:h-[400px] lg:h-auto"
            />
            <div
              className={`${roboto.className} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] text-center`}
            >
              <div className="text-[16px] xxs:text-[20px] sm:text-[24px] lg:text-[30px] leading-[35px] text-[#C4C4C4] mb-1">
                Trưởng thành từ hai thập kỷ
              </div>
              <div className="flex items-center text-center justify-center">
                <p className="text-[#ffffff] text-[20px] xxs:text-[32px] sm:text-[38px] lg:text-[50px] pt-[2px]">
                  Chăm sóc và{" "}
                  <span className="bg-gradient-to-tr from-red-950 via-red-700 to-red-600 bg-clip-text text-transparent text-[20px] xxs:text-[32px] sm:text-[38px] lg:text-[50px] whitespace-nowrap">
                    thấu hiểu
                  </span>
                </p>
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper
            element="div"
            className={`${fsMagistralBook.className} block xm:hidden text-[#FFFFFF] text-[22px] xxs:text-[30px] mt-[-50px] text-center`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            Về chúng tôi
          </MotionWrapper>
        </div>
      </div>
      <MotionWrapper
        element="div"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-[90%]  xl:flex xl:max-w-[1120px] flex justify-between mx-auto relative"
      >
        <Image
          src={bgYear}
          alt="background year "
          className="relative h-[110px] hidden sm:block"
          quality={100}
        />
        <Image
          src={bgYearMobile}
          alt="background year"
          className="relative  block sm:hidden h-[60px] xs:h-auto"
          quality={100}
        />
        <div className="px-[10px] xs:px-[20px] lg:px-[40px] bottom-0 absolute w-[100%]">
          <div className="flex">
            <div className="relative flex justify-between h-[100%] w-[100%] text-[#9B9B9B] text-[14px] xs:text-[16px] sm:text-[24px] lg:text-[30px]">
              {historyAbout.map((year) => {
                return (
                  <div
                    key={year}
                    className={`flex gap-[6px] sm:gap-[12px] h-[32px] xs:h-[38px] sm:h-[60px]`}
                  >
                    {year === 2004 && yearActive !== year ? (
                      <Image
                        src={iconLine2004}
                        alt="line 2004"
                        className="h-[32px] xs:h-[38px] sm:h-auto sm:mt-[12px]"
                        quality={100}
                      />
                    ) : null}
                    {year === yearActive ? (
                      <Image
                        src={iconLine2013}
                        alt="line 2004"
                        className="h-[55px] sm:h-auto absolute bottom-0"
                        quality={100}
                      />
                    ) : null}
                    <div
                      className={`${
                        year === yearActive
                          ? "active-year__about ml-[10px] sm:ml-[30px]"
                          : ""
                      }  cursor-pointer`}
                      onClick={() => setYearActive(year)}
                    >
                      {year}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </MotionWrapper>
      <div className="max-w-[90%] mt-[60px] lg:max-w-[1120px]  block md:flex justify-between mx-auto">
        <div className="block md:grid md:grid-cols-10 w-[100%]">
          <MotionWrapper
            element="div"
            initial="hidden"
            viewport={{ once: true, amount: 0.4 }}
            whileInView="visible"
            transition={{ duration: 1 }}
            className="relative md:col-span-4 mb-[40px] md:mb-[0px]"
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, easeInOut },
              },
            }}
          >
            <div className="bg-[#EA0033] absolute w-[100%] h-[100%] z-9 top-[-20px] rounded-[20px]" />
            <div
              className={`${roboto.className} pb-[20px] md:pb-[0px] md:min-h-[230px] text-[24px] leading-[32px] lg:text-[30px] text-[#000000] lg:leading-[35px] px-[20px] lg:px-[30px] rounded-[20px] bg-[#E7E7E7] pt-[20px] md:pt-[30px] flex relative z-11 h-[100%]`}
            >
              <div className="flex items-center h-fit gap-[14px]">
                <Image
                  src={iconLoa}
                  alt="icon"
                  className="w-[56px] h-[56px]"
                  quality={100}
                />
                <div className="font-medium ">{dataDetail?.title}</div>
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
            className="relative md:col-span-6"
          >
            <div className="bg-[#000000] absolute w-[100%] h-[100%] z-10 top-[-20px] rounded-[20px]" />
            <div
              className={`${roboto.className} h-auto pb-[30px] md:min-h-[230px] text-[24px] lg:text-[30px] text-[#000000] leading-[32px] lg:leading-[35px] px-[30px] rounded-[20px] bg-[#E7E7E7] pt-[20px] md:pt-[30px]  relative z-10`}
            >
              <div className="font-medium text-[#EA0033]">
                {dataDetail?.content?.header ? <>{dataDetail?.content?.header} <br />{" "}</> : null}
                <span className="font-medium text-[#000000]">
                  {dataDetail?.content?.title}
                </span>
              </div>
              <div className="pt-[18px] text-[#595959] text-[16px] leading-[22px] lg:text-[18px] lg:leading-[25px]">
              {dataDetail?.content?.detail}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </>
  );
}
