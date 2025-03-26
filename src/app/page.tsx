import Image from "next/image";
import Link from "next/link";
import { fsMagistralBook, roboto } from "@/lib/font";
import ExperienceIcon from "@/components/icons/experience-icon";
import { ArrowUpRight, MoveRight } from "lucide-react";
import ClientsIcon from "@/components/icons/clients-icon";
import SupportIcon from "@/components/icons/support-icon";
import React from "react";
import GlobeIcon from "@/components/icons/globe-icon";
import { fadeInBottomVariants } from "@/lib/utils";
import HomeSwiper from "./components/home-swiper";
import HomeCounUp from "./components/home-count-up";
import MotionWrapper from "@/components/ui/motion-wrapper";
import ArrowDownIcon from "@/components/icons/arrow-down-icon";
import { Metadata } from "next";
import gradientBg from "../../public/images/gradient-bg.png";
import gradientRedBg from "../../public/images/gradient-bg-red.png";
import HomeCarousel from "./components/home-carousel";

import HomePartnersCarousel from "./components/home-partners-carousel";
import HomeSolutionsCarousel from "./components/home-solutions-carousel";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Viettel Customer Service",
    description:
      "Viettel Customer Service - công ty công nghệ, cung cấp hệ sinh thái về dịch vụ khách hàng; nền tảng, giải pháp phần mềm đa kênh từ trực tiếp đến trực tuyến, AI bot, tổng đài thông minh…",
    openGraph: {
      title: "Viettel Customer Service",
      siteName: "Viettel Customer Service",
      description:
        "Viettel Customer Service - công ty công nghệ, cung cấp hệ sinh thái về dịch vụ khách hàng; nền tảng, giải pháp phần mềm đa kênh từ trực tiếp đến trực tuyến, AI bot, tổng đài thông minh…",
      url: "https://viettelcx.com.vn/",
      type: "website",
      images: [
        {
          url: "https://viettelcx.com.vn/images/website.png",
          width: 1151,
          height: 768,
          alt: "Viettel Cx",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Viettel Customer Service",
      description:
        "Viettel Customer Service - công ty công nghệ, cung cấp hệ sinh thái về dịch vụ khách hàng; nền tảng, giải pháp phần mềm đa kênh từ trực tiếp đến trực tuyến, AI bot, tổng đài thông minh…",
      images: ["https://viettelcx.com.vn/images/website.png"],
    },
    alternates: {
      canonical: "https://viettelcx.com.vn/",
    },
  };
}

type ExpItem = {
  icon: React.JSX.Element;
  title: string;
  tailing: string | React.ReactNode;
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
      tailing: (
        <>
          Quốc gia <br /> vùng lãnh thổ
        </>
      ),
      desc: "sử dụng dịch vụ",
    },
  ];

  return (
    <div>
      <main className="">
        <section className="lg:bg-[#e7e7e7] lg:h-[932px] relative">
          <video
            className="min-w-[100dvw] lg:w-full min-h-[300px] lg:h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/Intro_vr2.mp4" type="video/mp4" />
            Your browser does not support the video tag
          </video>
          <button className="absolute bottom-4 left-0 right-0 translate-x-1/2">
            <ArrowDownIcon />
          </button>
        </section>
        <section className="relative">
          <div className="relative">
            <div className="flex relative top-0 -translate-y-full">
              <div className="h-[80px] md:h-[108px] lg:h-[158px] w-[18px] xs:w-[28px] md:w-[62px] bg-transparent relative">
                <Image
                  src="/svg/cutout-left.svg"
                  alt="cutout"
                  width={20}
                  height={20}
                  className="absolute bottom-0 right-0"
                />
              </div>
              <div className="flex-1 bg-white rounded-t-[20px] relative max-h-[80px] md:max-h-[108px] lg:max-h-[158px] overflow-visible">
                <MotionWrapper
                  element="h1"
                  initial="hidden"
                  viewport={{ once: true, amount: 0.4 }}
                  whileInView="visible"
                  variants={fadeInBottomVariants}
                  className={`${fsMagistralBook.className} text-center font-semibold text-[21px] xs:text-[28px] sm:text-[35px] lg:text-[45px] pt-[24px] sm:pt-[32px] md:pt-[56px] lg:pt-[68px] sm:leading-[50px]`}
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
                    className="flex items-center relative see-more-link group transition-all duration-300 max-xs:text-sm"
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
              <div className="h-[80px] md:h-[108px] lg:h-[158px] w-[18px] xs:w-[28px] md:w-[62px] bg-transparent relative">
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
              viewport={{ once: true, amount: 0.3 }}
              whileInView="visible"
              variants={fadeInBottomVariants}
              className="flex justify-center mx-auto max-w-[1274px] "
            >
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5 max-sm:mx-3 mt-16 lg:mt-6">
                {expItems.map(
                  ({ icon, numberValue, title, tailing, desc }, index) => (
                    <li
                      className="flex flex-col items-center xs:min-h-[256px] sm:min-h-[356px] xl-2:min-w-[304px] bg-white rounded-[20px] py-[40px] lg:py-[52px] lg:px-8 px-4 pb-[32px] lg:pb-12 gap-[50px] max-md:shadow-md"
                      key={index}
                    >
                      {icon}

                      <div className="flex flex-col items-center">
                        <p
                          className={`${roboto.className} text-[45px] xs:text-[55px] xl:text-[65px] font-light text-[#A28F5D]`}
                        >
                          {numberValue ? (
                            <HomeCounUp numberValue={numberValue} />
                          ) : (
                            title
                          )}
                        </p>
                        <p
                          className={`${roboto.className} text-base sm:text-lg xl:text-2xl font-semibold uppercase text-[#595959] text-center`}
                        >
                          {tailing}
                        </p>
                        <p
                          className={`${roboto.className} text-base sm:text-base xl:text-[20px]  text-[#595959] text-center max-w-[256px]`}
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

          <div className="mt-24 lg:mt-36 relative">
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
              className={`${roboto.className} text-sm md:text-[20px] text-center text-black max-w-[95%] sm:max-w-[70%] md:max-w-[633px] mx-auto mt-4 leading-[25px] `}
            >
              Viettel Customer Service là chuyên gia dẫn đầu về dịch vụ khách
              hàng, mang đến trải nghiệm xuất sắc bằng việc lắng nghe, kết nối,
              thấu hiểu
            </MotionWrapper>
          </div>

          <Image
            src={gradientBg}
            alt="gradient-bg"
            quality={100}
            className="absolute bottom-0 translate-y-[40%] z-[-1] w-full max-md:h-full object-cover"
          />
        </section>

        <div>
          <section className="relative flex flex-col items-center justify-center mt-16">
            <MotionWrapper
              initial="hidden"
              viewport={{ once: true, amount: 0.4 }}
              whileInView="visible"
              variants={fadeInBottomVariants}
              className="relative flex flex-col items-center justify-center w-[100%] z-[2]"
            >
              <Link
                href="/services"
                className={`${roboto.className} text-[#D8D8D8] text-sm md:text-[20px] font-medium flex items-center gap-2 border-solid bg-black rounded-sm px-4 py-2 overflow-hidden group absolute top-0 -translate-y-1/2 z-10`}
              >
                <span className="absolute inset-0 bg-[#EA0033] transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0" />
                <MoveRight className="relative transition-colors duration-300 text-[#EA0033] group-hover:text-white" />
                <span className="relative transition-all duration-300 group-hover:text-white">
                  Tất cả dịch vụ
                </span>
              </Link>
            </MotionWrapper>
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
        </div>

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
                className={`${roboto.className} text-sm md:text-[20px] text-center text-black max-w-[95%] sm:max-w-[70%] md:max-w-[633px] mx-auto`}
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
              className={`${roboto.className} flex items-center justify-center text-sm md:text-[20px] gap-2 border-solid border border-black rounded-sm px-4 py-2 mt-8 
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

        <HomeSolutionsCarousel />
        
        <section className="relative flex flex-col lg:flex-row items-center gap-4 md:gap-3 max-w-[1560px] py-9 md:py-20 mx-auto px-3 md:px-8">
          <MotionWrapper
            element="h1"
            initial="hidden"
            viewport={{ once: true, amount: 0.4 }}
            whileInView="visible"
            variants={fadeInBottomVariants}
            className={`${fsMagistralBook.className} text-[28px] xl:text-[35px] max-lg:text-center lg:max-w-[245px] basis-1/3`}
          >
            Khách hàng <span className="whitespace-nowrap">của chúng tôi</span>
          </MotionWrapper>

          <div className="flex-1">
            <HomePartnersCarousel />
          </div>
        </section>
      </main>
    </div>
  );
}
