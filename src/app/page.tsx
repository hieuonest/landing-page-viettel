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
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Viettel Cx",
    description:
      "Viettel CX là chuyên gia dẫn đầu về dịch vụ khách hàng, mang đến trải nghiệm xuất sắc bằng việc lắng nghe, kết nối, thấu hiểu.",
    openGraph: {
      title: "Viettel Cx",
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

  const partners = [];
  for (let i = 0; i < dataPartners.length; i += 5) {
    partners.push(dataPartners.slice(i, i + 5));
  }

  return (
    <div>
      <main className="">
        <section className="lg:bg-[#e7e7e7] lg:h-[932px] relative">
          <video
            className="lg:w-full min-h-[400px] lg:h-full object-cover"
            autoPlay
            loop
            muted
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
              <div className="h-[158px] w-[62px] bg-transparent relative">
                <Image
                  src="/svg/cutout-left.svg"
                  alt="cutout"
                  width={20}
                  height={20}
                  className="absolute bottom-0 right-0"
                />
              </div>
              <div className="flex-1 bg-white rounded-t-[20px] relative max-h-[158px] overflow-visible">
                <MotionWrapper
                  element="h1"
                  initial="hidden"
                  viewport={{ once: true, amount: 0.4 }}
                  whileInView="visible"
                  variants={fadeInTopVariants}
                  className={`${fsMagistralBook.className} text-center font-semibold text-[34px] md:text-[45px] pt-[68px] leading-[50px]`}
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
                  className={`${roboto.className} text-[20px] text-center text-[#595959] mt-3`}
                >
                  bằng công nghệ sáng tạo và sự thấu hiểu trái tim
                </MotionWrapper>
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
              </div>
              <div className="h-[158px] w-[62px] bg-transparent relative">
                <Image
                  src="/svg/cutout-right.svg"
                  alt="cutout"
                  width={20}
                  height={20}
                  className="absolute bottom-0 left-0"
                />
              </div>
            </div>

            <div className="flex justify-center mx-auto max-w-[1274px]">
              <ul className="grid grid-cols-4 gap-5">
                {expItems.map(
                  ({ icon, numberValue, title, tailing, desc }, index) => (
                    <li
                      className="flex flex-col items-center  min-w-[304px] min-h-[356px] bg-white rounded-[20px] p-[52px] pb-8 gap-[50px]"
                      key={index}
                    >
                      {icon}

                      <div className="flex flex-col items-center">
                        <p
                          className={`${roboto.className} text-[65px] font-light text-[#A28F5D]`}
                        >
                          {numberValue ? (
                            <HomeCounUp numberValue={numberValue} />
                          ) : (
                            title
                          )}
                        </p>
                        <p
                          className={`${roboto.className} text-2xl font-semibold uppercase text-[#595959] text-center max-w-[187px]`}
                        >
                          {tailing}
                        </p>
                        <p
                          className={`${roboto.className} text-[20px] text-[#595959] text-center w-[256px]`}
                        >
                          {desc}
                        </p>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="mt-36 relative">
            <MotionWrapper
              element="h1"
              initial="hidden"
              viewport={{ once: true, amount: 0.4 }}
              whileInView="visible"
              variants={fadeInBottomVariants}
              className={`${fsMagistralBook.className} text-center font-semibold text-[45px] leading-[50px]`}
            >
              Hệ sinh thái dịch vụ
            </MotionWrapper>
            <MotionWrapper
              element="p"
              initial="hidden"
              viewport={{ once: true, amount: 0.5 }}
              whileInView="visible"
              variants={fadeInBottomVariants}
              className={`${roboto.className} text-[20px] text-center text-black max-w-[633px] mx-auto mt-4`}
            >
              Viettel CX là chuyên gia dẫn đầu về dịch vụ khách hàng, mang đến
              trải nghiệm xuất sắc bằng việc lắng nghe, kết nối, thấu hiểu
            </MotionWrapper>
          </div>

          <Image
            src={gradientBg}
            alt="gradient-bg"
            quality={100}
            className="absolute bottom-0 translate-y-1/2 z-[-1]"
          />
        </section>

        <section className="relative flex flex-col items-center justify-center mt-16">
          <Link
            href="/services"
            className={`${roboto.className} text-[#D8D8D8] text-[20px] font-medium flex items-center gap-6 border-solid bg-black rounded-sm px-4 py-2 overflow-hidden group absolute top-0 -translate-y-1/2 z-10`}
          >
            <span className="absolute inset-0 bg-[#EA0033] transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0" />
            <MoveRight className="relative transition-colors duration-300 text-[#EA0033] group-hover:text-white" />
            <span className="relative transition-all duration-300 group-hover:text-white">
              Tất cả dịch vụ
            </span>
          </Link>
          <HomeCarousel />

          {/* <Tabs
            defaultValue="outsourcing"
            className="flex gap-[5.5rem] min-w-[1280px] mt-12"
            orientation="vertical"
          >
            <MotionWrapper
              initial="hidden"
              viewport={{ once: true, amount: 0.3 }}
              whileInView="visible"
              variants={fadeInLeftVariants}
              className=""
            >
              <TabsList
                className={`inline-flex flex-col items-start ${roboto.className} h-fit`}
              >
                {dataServicesHome.map(({ value, label }) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    className="text-3xl transition-all duration-300 ease-in-out group font-medium
                        data-[state=active]:text-[#EA0033] 
                          data-[state=active]:shadow-none 
                          data-[state=active]:bg-transparent
                        data-[state=inactive]:text-[#9B9B9B]
                          data-[state=active]:py-6 data-[state=active]:pb-2 transform
                          flex flex-col items-start"
                  >
                    <p className="opacity-0 translate-y-2 text-lg font-medium text-black transition-all duration-300 ease-in-out group-data-[state=active]:opacity-100 group-data-[state=active]:translate-y-0">
                      Dịch vụ
                    </p>

                    <span className="transition-all duration-300 ease-in-out font-medium">
                      {label}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </MotionWrapper>
            <MotionWrapper
              initial="hidden"
              viewport={{ once: true, amount: 0.3 }}
              whileInView="visible"
              variants={fadeInRightVariants}
              className="flex flex-col justify-end"
            >
              {dataServicesHome.map((item, index) => (
                <TabsContent value={item.value} className="" key={index}>
                  <div className="flex gap-5 items-end h-full">
                    <div className="w-[304px] h-[304px] rounded-[20px] bg-[url(/images/bg-1.png)] bg-cover bg-no-repeat flex flex-col justify-between self-end px-8 pt-7 pb-4">
                      <div className="bg-white w-fit p-3 rounded-full">
                        <SupportIcon color="#EA0033" small />
                      </div>
                      <div
                        className={`flex flex-col gap-4 ${roboto.className}`}
                      >
                        <p>
                          Viettel CX cung cấp dịch vụ toàn trình, bao gồm: Nhân
                          sự, nền tảng giải pháp, quy trình
                        </p>
                        <Link href="/" className="text-[#EA0033]">
                          Khám phá dịch vụ
                        </Link>
                      </div>
                    </div>

                    <Image
                      src="/images/img-1.png"
                      alt="outsourcing"
                      width={389}
                      height={493}
                      className="rounded-[20px]"
                    />
                  </div>
                </TabsContent>
              ))}
            </MotionWrapper>
          </Tabs> */}
        </section>

        <section className="relative flex flex-col items-center justify-center">
          <div className="pt-32 relavtive w-full bg-white">
            <Image
              src={gradientRedBg}
              alt="Gradient Red"
              className="absolute top-0 left-1/2 -translate-x-[50%] bottom-0 -translate-y-[70%] z-0"
            />
            <MotionWrapper
              initial="hidden"
              viewport={{ once: true, amount: 0.4 }}
              whileInView="visible"
              variants={fadeInBottomVariants}
              className="relative z-1"
            >
              <h1
                className={`${fsMagistralBook.className} text-center font-semibold text-[45px]`}
              >
                Nền tảng - Giải pháp
              </h1>
              <p
                className={`${roboto.className} text-[20px] text-center text-black max-w-[633px] mx-auto`}
              >
                Công nghệ dẫn lối, mở ra mọi kết nối với khách hàng
              </p>
            </MotionWrapper>
          </div>

          <Link
            href="/solutions"
            className={`${roboto.className} flex items-center text-[20px] gap-6 border-solid border border-black rounded-sm px-4 py-2 mt-8 
            relative overflow-hidden group hover:border-white`}
          >
            <span className="absolute inset-0 bg-[#EA0033] transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0" />
            <MoveRight className="relative z-10 transition-colors duration-300 text-[#EA0033] group-hover:text-white" />
            <span className="relative z-10 transition-all duration-300 group-hover:text-white font-medium">
              Tất cả Nền tảng - Giải pháp
            </span>
          </Link>
          <div className="max-w-[1120px]">
            <HomeSwiper />
          </div>
        </section>

        <MarqueeWrapper
          className="items-start justify-between"
          // pauseOnHover={true}
          autoFill={true}
          gradient={true}
        >
          <div className="flex items-center justify-between w-full gap-16 overflow-visible h-[332px]">
              <Image
                src={insightci}
                alt="Insight CI"
                quality={100}
                className="flex items-start relative top-[20px]"
              />
            <div className="w-[16px] h-[16px] rounded-full bg-[#D9D9D9]"></div>
              <Image
                src={workforcex}
                alt="Workforce X"
                quality={100}
                className="flex items-start"
              />
              <div className="w-[16px] h-[16px] rounded-full bg-[#D9D9D9]"></div>
          </div>
        </MarqueeWrapper>

        <section className="relative flex items-center max-w-[1560px] py-20 mx-auto">
          <div className="">
            <MotionWrapper
              element="h1"
              initial="hidden"
              viewport={{ once: true, amount: 0.4 }}
              whileInView="visible"
              variants={fadeInBottomVariants}
              className={`${fsMagistralBook.className} text-[45px]`}
            >
              Khách hàng <br/> của chúng tôi
            </MotionWrapper>
            {/* <div className="max-w-[1405px] mx-auto">
              <Carousel className="mt-12">
                <CarouselContent>
                  <CarouselItem className="">
                    {partners.map((group, slideIndex) => (
                      <div className="grid grid-cols-5" key={slideIndex}>
                        {group.map((item, index) => (
                          <div
                            key={index}
                            className={`first:border-s-0 border border-t-0 border-solid border-e-0 border-[#DCDCDC] relative ${
                              slideIndex === partners.length - 1
                                ? "border-b-0"
                                : ""
                            }`}
                          >
                            <div
                              key={index}
                              className=" relative flex items-center justify-center h-[163px] w-[270px] bg-white"
                            >
                              <Image
                                src={item.image}
                                alt={item.name}
                                quality={100}
                              />
                              <div className="w-[45px] h-[45px] rounded-full bg-white absolute right-0 bottom-0 translate-x-[50%] translate-y-[50%] z-10"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div> */}
          </div>

          <div className="grid grid-cols-5 ">

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
