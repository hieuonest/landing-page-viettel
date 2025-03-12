"use client";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { fsMagistral, roboto } from "@/lib/font";
import ExperienceIcon from "@/components/icons/experience-icon";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import ClientsIcon from "@/components/icons/clients-icon";
import SupportIcon from "@/components/icons/support-icon";
import React from "react";
import GlobeIcon from "@/components/icons/globe-icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import { EffectCards, Navigation } from "swiper/modules";

type ExpItem = {
  icon: React.JSX.Element;
  title: string;
  desc: string;
};
export default function Home() {
  const isMobile = useIsMobile();

  const expItems: ExpItem[] = [
    {
      icon: <ExperienceIcon />,
      title: "20 năm",
      desc: "kinh nghiệm",
    },
    {
      icon: <ClientsIcon />,
      title: "120 triệu",
      desc: "khách hàng",
    },
    {
      icon: <SupportIcon />,
      title: "4.000+",
      desc: "nhân sự hỗ trợ khách hàng 24/7 trên 63 tỉnh/thành",
    },
    {
      icon: <GlobeIcon />,
      title: "10",
      desc: "quốc gia sử dụng dịch vụ",
    },
  ];

  return (
    <main>
      <section className="bg-[#e7e7e7] h-[970px]"></section>
      <section className="relative pb-[200px]">
        <img
          src="/images/043.png"
          alt="043"
          className="absolute left-0 top-0"
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
              {expItems.map(({ icon, title, desc }, index) => (
                <li className="flex flex-col items-center" key={index}>
                  <div className="border-2 border-solid border-[#D8D8D8] rounded-full p-4 w-[80px] h-[80px] flex justify-center items-center">
                    {icon}
                  </div>

                  <p
                    className={`${roboto.className} text-[50px] text-[#EA0033]`}
                  >
                    {title}
                  </p>
                  <p
                    className={`${roboto.className} text-[20px] text-[#595959] text-center`}
                  >
                    {desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <img
          src="/images/044.png"
          alt="044"
          className="absolute right-0 top-0 translate-y-[18%]"
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
          className={`${roboto.className} flex items-center gap-6 border-solid border border-black rounded-sm px-4 py-2 mt-8 font-medium`}
        >
          <MoveRight color="#EA0033" />
          Tất cả dịch vụ Viettel CX
        </Link>

        <Tabs
          defaultValue="outsourcing"
          className="flex gap-[5.5rem] min-w-[1280px] mt-12"
        >
          <TabsList
            className={`inline-flex flex-col items-start ${roboto.className} h-fit`}
          >
            {[
              { value: "bpo", label: "BPO" },
              { value: "outsourcing", label: "Outsourcing Contact Center" },
              { value: "upsale", label: "Gia tăng doanh số Upsale" },
              { value: "loyalty", label: "Loyalty" },
              { value: "cskh", label: "CSKH VIP / Ưu tiên" },
              { value: "customer-experience", label: "Customer Experience" },
              { value: "voice-of-customer", label: "Voice of Customer" },
              { value: "bao-hanh", label: "Bảo hành" },
            ].map(({ value, label }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="text-3xl transition-colors duration-300 ease-in-out group font-medium
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
                  Viettel CX cung cấp dịch vụ toàn trình, bao gồm: Nhân sự, nền
                  tảng giải pháp, quy trình
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
          className={`${roboto.className} flex items-center gap-6 border-solid border border-black rounded-sm px-4 py-2 mt-8 font-medium`}
        >
          <MoveRight color="#EA0033" />
          Tất cả giải pháp Viettel CX
        </Link>

        <Swiper
          // effect={"coverflow"}
          // grabCursor={true}
          // centeredSlides={true}
          // slidesPerView={"auto"}
          // coverflowEffect={{
          //   rotate: 0,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 1,
          //   slideShadows: false,
          // }}
          // pagination={true}
          // modules={[EffectCoverflow, Pagination]}
          cardsEffect={{
            slideShadows: false,
            perSlideRotate: 0,
            perSlideOffset: 50
          }}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Navigation]}
          className="mySwiper w-full"
          centeredSlides={true}
          navigation={true}
          initialSlide={1}
        >
          <SwiperSlide className="!flex items-center justify-center">
            <div className="max-w-[1120px] rounded-[20px] flex">
              <div
                className={`${roboto.className} bg-[#DCDCDC] rounded-s-[20px] px-[54px] py-16 min-w-[408px] flex flex-col justify-between`}
              >
                <div>
                  <Image
                    src="/images/x-omni.png"
                    alt="x-omni"
                    width={182}
                    height={59}
                  />
                  <p className="text-[30px] text-[#595959]">Tổng đài đa kênh</p>
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
            </div>
          </SwiperSlide>
          <SwiperSlide className="!flex items-center justify-center">
            <div className="max-w-[1120px]  rounded-[20px] flex">
              <div
                className={`${roboto.className} bg-[#DCDCDC] rounded-s-[20px] px-[54px] py-16 min-w-[408px] flex flex-col justify-between`}
              >
                <div>
                  <Image
                    src="/images/x-omni.png"
                    alt="x-omni"
                    width={182}
                    height={59}
                  />
                  <p className="text-[30px] text-[#595959]">Tổng đài đa kênh</p>
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
            </div>
          </SwiperSlide>
          <SwiperSlide className="!flex items-center justify-center">
            <div className="max-w-[1120px]  rounded-[20px] flex">
              <div
                className={`${roboto.className} bg-[#DCDCDC] rounded-s-[20px] px-[54px] py-16 min-w-[408px] flex flex-col justify-between`}
              >
                <div>
                  <Image
                    src="/images/x-omni.png"
                    alt="x-omni"
                    width={182}
                    height={59}
                  />
                  <p className="text-[30px] text-[#595959]">Tổng đài đa kênh</p>
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
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
}
