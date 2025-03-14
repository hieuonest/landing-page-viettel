"use client";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { fsMagistral, roboto } from "@/lib/font";
import ExperienceIcon from "@/components/icons/experience-icon";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import ClientsIcon from "@/components/icons/clients-icon";
import SupportIcon from "@/components/icons/support-icon";
import React from "react";
import GlobeIcon from "@/components/icons/globe-icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { NextSeo } from "next-seo";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import "@/app/styles/pages/home.scss";

import { EffectCards, Navigation } from "swiper/modules";
import { useCountUp } from "./use-count-up";
import { dataPartners, dataServicesHome } from "@/lib/define-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import client1 from "../../../public/images/image 2.png";

type ExpItem = {
  icon: React.JSX.Element;
  title: string;
  desc: string;
  numberValue: number;
};
export default function Home() {
  const isMobile = useIsMobile();

  const expItems: ExpItem[] = [
    {
      icon: <ExperienceIcon color="#858585" />,
      numberValue: 20,
      title: "20 năm",
      desc: "kinh nghiệm",
    },
    {
      icon: <ClientsIcon color="#858585" />,
      numberValue: 120,
      title: "120 triệu",
      desc: "khách hàng",
    },
    {
      icon: <SupportIcon color="#858585" />,
      numberValue: 4000,
      title: "4.000+",
      desc: "nhân sự hỗ trợ khách hàng 24/7 trên 63 tỉnh/thành",
    },
    {
      icon: <GlobeIcon color="#858585" />,
      numberValue: 10,
      title: "10",
      desc: "quốc gia/ vùng lãnh thổ sử dụng dịch vụ",
    },
  ];

  const partners = [];
  for (let i = 0; i < dataPartners.length; i += 5) {
    partners.push(dataPartners.slice(i, i + 5));
  }

  return (
    <div>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
      />
      <main className="bg-white">
        <section className="bg-[#e7e7e7] h-[970px]"></section>
        <section className="relative pb-[200px]">
          <img
            src="/images/line-1.png"
            alt="043"
            className="absolute left-0 top-0 max-[1472px]:w-[40%] max-[1472px]:max-w-[500px] h-auto"
          />
          <div className="relative left-0 right-0 translate-y-[24%]">
            <h1
              className={`${fsMagistral.className} text-center font-semibold text-[45px]`}
            >
              Viettel CX <br /> nâng tầm trải nghiệm khách hàng
            </h1>
            <p
              className={`${roboto.className} font-light text-3xl text-center text-[#858585] mt-1`}
            >
              bằng công nghệ sáng tạo và sự thấu hiểu trái tim
            </p>

            <div className="flex justify-center mt-[85px] max-w-[1122px] mx-auto">
              <ul className="grid grid-cols-4 gap-28">
                {expItems.map(({ icon, numberValue, title, desc }, index) => (
                  <li className="flex flex-col items-center" key={index}>
                    <div className="border-2 border-solid border-[#858585] rounded-full p-4 w-[80px] h-[80px] flex justify-center items-center">
                      {icon}
                    </div>

                    <p
                      className={`${roboto.className} text-[50px] text-[#EA0033]`}
                    >
                      {numberValue ? (
                        <>
                          {useCountUp(numberValue)}
                          {numberValue === 120 && " triệu"}
                          {numberValue === 4000 && "+"}
                        </>
                      ) : (
                        title
                      )}
                    </p>
                    <p
                      className={`${roboto.className} text-[20px] text-[#595959] text-center w-[256px]`}
                    >
                      {desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <img
            src="/images/line-2.png"
            alt="044"
            className="absolute right-0 top-0 translate-y-[45%] max-[1472px]:translate-y-[75%] max-[1472px]:w-[40%] max-[1472px]:max-w-[500px] h-auto"
          />
        </section>

        <section className="relative flex flex-col items-center justify-center py-20">
          <div className="">
            <h1
              className={`${fsMagistral.className} text-center font-semibold text-[45px]`}
            >
              Hệ sinh thái dịch vụ
            </h1>
            <p
              className={`${roboto.className} font-light text-3xl text-center text-[#858585] max-w-[850px] mx-auto mt-4`}
            >
              Viettel CX là chuyên gia dẫn đầu về dịch vụ khách hàng, mang đến
              trải nghiệm xuất sắc bằng việc lắng nghe, kết nối, thấu hiểu
            </p>
          </div>

          <Link
            href="/"
            className={`${roboto.className} flex items-center gap-6 border-solid border border-black rounded-sm px-4 py-2 mt-8 font-medium
            relative overflow-hidden group hover:border-white`}
          >
            <span className="absolute inset-0 bg-[#EA0033] transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0" />
            <MoveRight className="relative z-10 transition-colors duration-300 text-[#EA0033] group-hover:text-white" />
            <span className="relative z-10 transition-all duration-300 group-hover:text-white">
              Tất cả dịch vụ Viettel CX
            </span>
          </Link>

          <Tabs
            defaultValue="outsourcing"
            className="flex gap-[5.5rem] min-w-[1280px] mt-12"
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
                          data-[state=active]:py-6 transform
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

            <TabsContent value="outsourcing" className="flex gap-5 items-end">
              <div className="w-[304px] h-[304px] rounded-[20px] bg-[url(/images/bg-1.png)] bg-cover bg-no-repeat flex flex-col justify-between self-end px-8 pt-7 pb-4">
                <div className="bg-white w-fit p-3 rounded-full">
                  <SupportIcon color="#EA0033" small />
                </div>
                <div className={`flex flex-col gap-4 ${roboto.className}`}>
                  <p>
                    Viettel CX cung cấp dịch vụ toàn trình, bao gồm: Nhân sự,
                    nền tảng giải pháp, quy trình
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
            </TabsContent>
          </Tabs>
        </section>

        <section className="relative flex flex-col items-center justify-center py-20">
          <div className="">
            <h1
              className={`${fsMagistral.className} text-center font-semibold text-[45px]`}
            >
              Nền tảng, giải pháp <br /> phần mềm dịch vụ Khách hàng
            </h1>
            <p
              className={`${roboto.className} font-light text-3xl text-center text-[#858585] max-w-[850px] mx-auto mt-4`}
            >
              Công nghệ dẫn lối, mở ra mọi kết nối với khách hàng
            </p>
          </div>

          <Link
            href="/"
            className={`${roboto.className} flex items-center gap-6 border-solid border border-black rounded-sm px-4 py-2 mt-8 font-medium
            relative overflow-hidden group hover:border-white`}
          >
            <span className="absolute inset-0 bg-[#EA0033] transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0" />
            <MoveRight className="relative z-10 transition-colors duration-300 text-[#EA0033] group-hover:text-white" />
            <span className="relative z-10 transition-all duration-300 group-hover:text-white">
              Tất cả dịch vụ Viettel CX
            </span>
          </Link>

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
                    <p className="text-[30px] text-[#595959]">
                      Tổng đài đa kênh
                    </p>
                    <p className="mt-16 text-[#595959] text-lg">
                      Giải pháp tương tác đa kênh hợp nhất, tích hợp tương tác
                      khách hàng qua nhiều kênh: VoIP, Livechat, email, social
                      media message, text, video chat... trong một giao diện hợp
                      nhất
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
                    <p className="text-[30px] text-[#595959]">
                      Tổng đài đa kênh
                    </p>
                    <p className="mt-16 text-[#595959] text-lg">
                      Giải pháp tương tác đa kênh hợp nhất, tích hợp tương tác
                      khách hàng qua nhiều kênh: VoIP, Livechat, email, social
                      media message, text, video chat... trong một giao diện hợp
                      nhất
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
                    <p className="text-[30px] text-[#595959]">
                      Tổng đài đa kênh
                    </p>
                    <p className="mt-16 text-[#595959] text-lg">
                      Giải pháp tương tác đa kênh hợp nhất, tích hợp tương tác
                      khách hàng qua nhiều kênh: VoIP, Livechat, email, social
                      media message, text, video chat... trong một giao diện hợp
                      nhất
                    </p>
                  </div>

                  <Link href="/" className="text-[#EA0033] text-lg">
                    Tìm hiểu thêm
                  </Link>
                  <button className="swiper-button-prev">
                </button>
                <button className="swiper-button-next">
                </button>
                </div>
                <img src="/images/swipe-1.png" alt="swipe-1" />
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="relative flex flex-col items-center justify-center py-20">
          <div className="">
            <h1
              className={`${fsMagistral.className} text-center font-semibold text-[45px]`}
            >
              Khách hàng của chúng tôi
            </h1>
            <div className="max-w-[1405px] mx-auto">
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
            </div>
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
