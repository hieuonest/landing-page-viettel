import Image from "next/image";
import Link from "next/link";
import { fsMagistral, fsMagistralBook, roboto } from "@/lib/font";
import ExperienceIcon from "@/components/icons/experience-icon";
import { ArrowUpRight, MoveRight } from "lucide-react";
import ClientsIcon from "@/components/icons/clients-icon";
import SupportIcon from "@/components/icons/support-icon";
import React from "react";
import GlobeIcon from "@/components/icons/globe-icon";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dataPartners, dataServicesHome } from "@/lib/define-data";

import {
  fadeInBottomVariants,
  fadeInLeftVariants,
  fadeInRightVariants,
  fadeInTopVariants,
} from "@/lib/utils";
import HomeSwiper from "./components/home-swiper";
import HomeCounUp from "./components/home-count-up";
import MotionWrapper from "@/components/ui/motion-wrapper";
import ArrowDownIcon from "@/components/icons/arrow-down-icon";
import { Metadata } from "next";
import gradientBg from "../../public/images/gradient-bg.png";
import gradientRedBg from "../../public/images/gradient-bg-red.png";
import HomeCarousel from "./components/home-carousel";
import MarqueeWrapper from "@/components/ui/marquee-wrapper";
import insightci from "../../public/svg/insight-ci.svg";
import workforcex from "../../public/svg/workforce-x.svg";
import HomePartnersCarousel from "./components/home-partners-carousel";

export async function generateMetadata(): Promise<Metadata> {
  
  return {
    title: "Viettel Customer Services",
    description:
      "Viettel CX là chuyên gia dẫn đầu về dịch vụ khách hàng, mang đến trải nghiệm xuất sắc bằng việc lắng nghe, kết nối, thấu hiểu.",
    openGraph: {
      title: "Viettel Customer Services",
      description:
        "Viettel CX là chuyên gia dẫn đầu về dịch vụ khách hàng, mang đến trải nghiệm xuất sắc bằng việc lắng nghe, kết nối, thấu hiểu.",
      url: "",
      type: "website",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "Viettel Cx",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Viettel Cx",
      description:
        "Viettel CX là chuyên gia dẫn đầu về dịch vụ khách hàng, mang đến trải nghiệm xuất sắc bằng việc lắng nghe, kết nối, thấu hiểu.",
      images: [""],
    },
  };
}

type ExpItem = {
  icon: React.JSX.Element;
  title: string;
  tailing: string;
  desc: string;
  numberValue: number;
};
export default function Home() {
  

  const expItems: ExpItem[] = [
    {
      icon: <ExperienceIcon color="#858585" />,
      numberValue: 20,
      title: "20",
      tailing: "năm",
      desc: "kinh nghiệm",
    },
    {
      icon: <ClientsIcon color="#858585" />,
      numberValue: 120,
      title: "120",
      tailing: "Triệu",
      desc: "khách hàng",
    },
    {
      icon: <SupportIcon color="#858585" />,
      numberValue: 4000,
      title: "4.000+",
      tailing: "Nhân sự",
      desc: "hỗ trợ khách hàng 24/7 trên 63 tỉnh/thành",
    },
    {
      icon: <GlobeIcon color="#858585" />,
      numberValue: 10,
      title: "10",
      tailing: "Quốc gia vùng lãnh thổ",
      desc: "sử dụng dịch vụ",
    },
  ];

  return (
    <div>
      <main className="">
        <section className="lg:bg-[#e7e7e7] lg:h-[932px] relative">
          <video
            className="min-w-[100dvw] lg:w-full min-h-[80dvh] lg:h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag
          </video>
          <button className="absolute bottom-4 left-0 right-0 translate-x-1/2">
            <ArrowDownIcon />
          </button>
        </section>
        <section className="relative">
          <div className="relative z-[2]">
            <div className="flex relative top-0 -translate-y-full">
              <div className="h-[108px] md:h-[158px] w-[28px] md:w-[62px] bg-transparent relative">
                <Image
                  src="/svg/cutout-left.svg"
                  alt="cutout"
                  width={20}
                  height={20}
                  className="absolute bottom-0 right-0"
                />
              </div>
              <div className="flex-1 bg-white rounded-t-[20px] relative max-h-[108px] md:max-h-[158px] overflow-visible">
                <MotionWrapper
                  element="h1"
                  initial="hidden"
                  viewport={{ once: true, amount: 0.4 }}
                  whileInView="visible"
                  variants={fadeInBottomVariants}
                  className={`${fsMagistralBook.className} text-center font-semibold text-[22px] sm:text-[35px] md:text-[45px] pt-[32px] md:pt-[68px] leading-[50px]`}
                >
                  <span className="">
                    Viettel Customer Service <br /> nâng tầm trải nghiệm khách
                    hàng
                  </span>
                </MotionWrapper>
                <MotionWrapper
                  element="p"
                  initial="hidden"
                  viewport={{ once: true, amount: 0.5 }}
                  whileInView="visible"
                  variants={fadeInBottomVariants}
                  className={`${roboto.className} text-sm md:text-[20px] text-center text-[#595959] mt-3`}
                >
                  bằng công nghệ sáng tạo và sự thấu hiểu trái tim
                </MotionWrapper>
                <MotionWrapper
                  initial="hidden"
                  viewport={{ once: true, amount: 0.5 }}
                  whileInView="visible"
                  variants={fadeInBottomVariants}
                  className={`${roboto.className} text-base md:text-lg text-center text-[#EA0033] flex justify-center mt-6`}
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
              </div>
              <div className="h-[108px] md:h-[158px] w-[28px] md:w-[62px] bg-transparent relative">
                <Image
                  src="/svg/cutout-right.svg"
                  alt="cutout"
                  width={20}
                  height={20}
                  className="absolute bottom-0 left-0"
                />
              </div>
            </div>

            <MotionWrapper
              initial="hidden"
              viewport={{ once: true, amount: 0.5 }}
              whileInView="visible"
              variants={fadeInBottomVariants}
              className="flex justify-center mx-auto max-w-[1274px]"
            >
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5">
                {expItems.map(
                  ({ icon, numberValue, title, tailing, desc }, index) => (
                    <li
                      className="flex flex-col items-center min-w-[204px] min-h-[256px] sm:min-h-[356px] xl-2:min-w-[304px] bg-white rounded-[20px] py-[40px] sm:py-[52px] lg:px-8 px-4 pb-8 gap-[50px]"
                      key={index}
                    >
                      {icon}

                      <div className="flex flex-col items-center">
                        <p
                          className={`${roboto.className} text-[45px] sm:text-[55px] xl:text-[65px] font-light text-[#A28F5D]`}
                        >
                          {numberValue ? (
                            <HomeCounUp numberValue={numberValue} />
                          ) : (
                            title
                          )}
                        </p>
                        <p
                          className={`${roboto.className} xl:text-2xl text-lg font-semibold uppercase text-[#595959] text-center max-w-[187px]`}
                        >
                          {tailing}
                        </p>
                        <p
                          className={`${roboto.className} xl:text-[20px] text-base text-[#595959] text-center max-w-[256px]`}
                        >
                          {desc}
                        </p>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </MotionWrapper>
          </div>

          <div className="mt-6 md:mt-36 relative px-8 md:px-0">
            <MotionWrapper
              element="h1"
              initial="hidden"
              viewport={{ once: true, amount: 0.4 }}
              whileInView="visible"
              variants={fadeInBottomVariants}
              className={`${fsMagistralBook.className} text-center font-semibold text-[30px] md:text-[45px] leading-[50px]`}
            >
              Hệ sinh thái dịch vụ
            </MotionWrapper>
            <MotionWrapper
              element="p"
              initial="hidden"
              viewport={{ once: true, amount: 0.5 }}
              whileInView="visible"
              variants={fadeInBottomVariants}
              className={`${roboto.className} text-sm md:text-[20px] text-center text-black max-w-[633px] mx-auto mt-4`}
            >
              Viettel CX là chuyên gia dẫn đầu về dịch vụ khách hàng, mang đến
              trải nghiệm xuất sắc bằng việc lắng nghe, kết nối, thấu hiểu
            </MotionWrapper>
          </div>

          <Image
            src={gradientBg}
            alt="gradient-bg"
            quality={100}
            className="absolute bottom-0 translate-y-[40%] z-[-1] w-full max-md:h-full object-cover"
          />
        </section>

        <MotionWrapper
          initial="hidden"
          viewport={{ once: true, amount: 0.4 }}
          whileInView="visible"
          variants={fadeInBottomVariants}
        >
          <section className="relative flex flex-col items-center justify-center mt-16">
            <Link
              href="/services"
              className={`${roboto.className} text-[#D8D8D8] text-sm md:text-[20px] font-medium flex items-center gap-6 border-solid bg-black rounded-sm px-4 py-2 overflow-hidden group absolute top-0 -translate-y-1/2 z-10`}
            >
              <span className="absolute inset-0 bg-[#EA0033] transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0" />
              <MoveRight className="relative transition-colors duration-300 text-[#EA0033] group-hover:text-white" />
              <span className="relative transition-all duration-300 group-hover:text-white">
                Tất cả dịch vụ
              </span>
            </Link>
            <div className="relative bg-white">
              <HomeCarousel />
              <Image
                src={gradientRedBg}
                alt="Gradient Red"
                quality={100}
                className="absolute left-1/2 -translate-x-[50%] bottom-0 translate-y-[30%] z-[-2] w-full h-full object-contain"
              />
            </div>
          </section>
        </MotionWrapper>

        <section className="relative flex flex-col items-center justify-center">
          <div className="pt-14 md:pt-32 relavtive w-full">
            <MotionWrapper
              initial="hidden"
              viewport={{ once: true, amount: 0.4 }}
              whileInView="visible"
              variants={fadeInBottomVariants}
              className="relative z-1"
            >
              <h1
                className={`${fsMagistralBook.className} text-center font-semibold text-[30px] md:text-[45px]`}
              >
                Nền tảng - Giải pháp
              </h1>
              <p
                className={`${roboto.className} text-sm md:text-[20px] text-center text-black max-w-[633px] mx-auto`}
              >
                Công nghệ dẫn lối, mở ra mọi kết nối với khách hàng
              </p>
            </MotionWrapper>
          </div>

          <MotionWrapper
            initial="hidden"
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
            variants={fadeInBottomVariants}
          >
            <Link
              href="/solutions"
              className={`${roboto.className} flex items-center justify-center text-sm md:text-[20px] gap-6 border-solid border border-black rounded-sm px-4 py-2 mt-8 
            relative overflow-hidden group hover:border-white w-fit mx-auto`}
            >
              <span className="absolute inset-0 bg-[#EA0033] transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0" />
              <MoveRight className="relative z-10 transition-colors duration-300 text-[#EA0033] group-hover:text-white" />
              <span className="relative z-10 transition-all duration-300 group-hover:text-white font-medium">
                Tất cả Nền tảng - Giải pháp
              </span>
            </Link>
            <HomeSwiper />
          </MotionWrapper>
        </section>

        <MarqueeWrapper
          className="items-start justify-between"
          // pauseOnHover={true}
          autoFill={true}
        >
          <div className="flex items-center justify-between w-full gap-16 overflow-visible h-[232px] md:h-[332px]">
            <Image
              src={insightci}
              alt="Insight CI"
              quality={100}
              className="flex items-start relative top-[10px] md:top-[20px] max-md:w-[400px]"
            />
            <div className="w-[16px] h-[16px] rounded-full bg-[#D9D9D9]"></div>
            <Image
              src={workforcex}
              alt="Workforce X"
              quality={100}
              className="flex items-start max-md:max-w-[500px]"
            />
            <div className="w-[16px] h-[16px] rounded-full bg-[#D9D9D9]"></div>
          </div>
        </MarqueeWrapper>

        <section className="relative flex flex-col md:flex-row items-center gap-2 md:gap-0 max-w-[1560px] py-9 md:py-20 mx-auto justify-between px-3 md:px-8">
          <MotionWrapper
            element="h1"
            initial="hidden"
            viewport={{ once: true, amount: 0.4 }}
            whileInView="visible"
            variants={fadeInBottomVariants}
            className={`${fsMagistralBook.className} text-[22px] md:text-[26px] lg:text-[28px] xl:text-[35px] max-w-[287px]`}
          >
            Khách hàng của chúng tôi
          </MotionWrapper>

          <div
            
          >
            <HomePartnersCarousel />
          </div>
        </section>
      </main>

      <Image
        src="/images/footer-pic-1.png"
        alt="Footer Image 1"
        width={1920}
        height={506}
        quality={100}
      />
    </div>
  );
}
