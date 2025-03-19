import Image from "next/image";
import Link from "next/link";
import { fsMagistral, roboto } from "@/lib/font";
import ExperienceIcon from "@/components/icons/experience-icon";
import { MoveRight } from "lucide-react";
import ClientsIcon from "@/components/icons/clients-icon";
import SupportIcon from "@/components/icons/support-icon";
import React from "react";
import GlobeIcon from "@/components/icons/globe-icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
} from "@/lib/utils";
import HomeSwiper from "./components/home-swiper";
import HomeCounUp from "./components/home-count-up";
import MotionWrapper from "@/components/ui/motion-wrapper";
import line1 from "../../public/images/line-1.png";
import line2 from "../../public/images/line-2.png";
import ArrowDownIcon from "@/components/icons/arrow-down-icon";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Viettel Cx",
    description: "Viettel CX là chuyên gia dẫn đầu về dịch vụ khách hàng, mang đến trải nghiệm xuất sắc bằng việc lắng nghe, kết nối, thấu hiểu.",
    openGraph: {
      title: "Viettel Cx",
      description: "Viettel CX là chuyên gia dẫn đầu về dịch vụ khách hàng, mang đến trải nghiệm xuất sắc bằng việc lắng nghe, kết nối, thấu hiểu.",
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
      description: "Viettel CX là chuyên gia dẫn đầu về dịch vụ khách hàng, mang đến trải nghiệm xuất sắc bằng việc lắng nghe, kết nối, thấu hiểu.",
      images: [""],
    },
  };
}

type ExpItem = {
  icon: React.JSX.Element;
  title: string;
  desc: string;
  numberValue: number;
};
export default function Home() {

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
      
      <main className="bg-white">
        <section className="lg:bg-[#e7e7e7] lg:h-[970px] relative">
          <video className="lg:w-full min-h-[400px] lg:h-full object-cover" autoPlay loop muted>
            <source src="/videos/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag
          </video>
          <button className="absolute bottom-4 left-0 right-0 translate-x-1/2">
            <ArrowDownIcon />
          </button>
        </section>
        <section className="relative pb-[200px]">
          <Image
            src={line1}
            alt="043"
            className="absolute left-0 top-0 max-[1472px]:w-[40%] max-[1472px]:max-w-[500px] max-[1400px]:max-h-[185px] h-[110px] md:h-auto"
            quality={100}
          />
          <div className="relative left-0 right-0 translate-y-[50px] md:translate-y-[105px]">
            <MotionWrapper
              element="h1"
              initial="hidden"
              viewport={{ once: true, amount: 0.5 }}
              whileInView="visible"
              variants={fadeInBottomVariants}
              className={`${fsMagistral.className} text-center font-semibold text-[34px] md:text-[45px]`}
            >
              Viettel CX <br /> nâng tầm trải nghiệm khách hàng
            </MotionWrapper>
            <MotionWrapper
              element="p"
              initial="hidden"
              viewport={{ once: true, amount: 0.5 }}
              whileInView="visible"
              variants={fadeInBottomVariants}
              className={`${roboto.className} font-light text-[20px] md:text-3xl text-center text-[#858585] mt-1`}
            >
              bằng công nghệ sáng tạo và sự thấu hiểu trái tim
            </MotionWrapper>

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
                        <HomeCounUp numberValue={numberValue} />
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

          <Image
            src={line2}
            alt="044"
            className="absolute right-0 top-[0px] translate-y-[45%] max-[1472px]:translate-y-[75%] max-[1472px]:w-[40%] max-[1472px]:max-w-[500px] max-[1300px]:right-[-60px] max-[1300px]:w-[490px] max-[1200px]:top-[-120px] max-[768px]:w-[305px] max-[768px]:top-[-80px] max-[768px]:right-[0px] max-[576px]:right-[-10%] max-[500px]:right-[-20%] max-[500px]:right-[-30%] max-[500px]:hidden h-auto"
            quality={100}
          />
        </section>

        <section className="relative flex flex-col items-center justify-center py-20">
          <div className="">
            <MotionWrapper
              element="h1"
              initial="hidden"
              viewport={{ once: true, amount: 0.4 }}
              whileInView="visible"
              variants={fadeInBottomVariants}
              className={`${fsMagistral.className} text-center font-semibold text-[45px]`}
            >
              Hệ sinh thái dịch vụ
            </MotionWrapper>
            <MotionWrapper
              element="p"
              initial="hidden"
              viewport={{ once: true, amount: 0.5 }}
              whileInView="visible"
              variants={fadeInBottomVariants}
              className={`${roboto.className} font-light text-3xl text-center text-[#858585] max-w-[850px] mx-auto mt-4`}
            >
              Viettel CX là chuyên gia dẫn đầu về dịch vụ khách hàng, mang đến
              trải nghiệm xuất sắc bằng việc lắng nghe, kết nối, thấu hiểu
            </MotionWrapper>
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
          </Tabs>
        </section>

        <section className="relative flex flex-col items-center justify-center py-20">
          <div className="">
            <MotionWrapper
              element="h1"
              initial="hidden"
              viewport={{ once: true, amount: 0.4 }}
              whileInView="visible"
              variants={fadeInBottomVariants}
              className={`${fsMagistral.className} text-center font-semibold text-[45px]`}
            >
              Nền tảng, giải pháp <br /> phần mềm dịch vụ Khách hàng
            </MotionWrapper>
            <MotionWrapper
              element="p"
              initial="hidden"
              viewport={{ once: true, amount: 0.5 }}
              whileInView="visible"
              variants={fadeInBottomVariants}
              className={`${roboto.className} font-light text-3xl text-center text-[#858585] max-w-[850px] mx-auto mt-4`}
            >
              Công nghệ dẫn lối, mở ra mọi kết nối với khách hàng
            </MotionWrapper>
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

          <HomeSwiper />
        </section>

        <section className="relative flex flex-col items-center justify-center py-20">
          <div className="">
            <MotionWrapper
              element="h1"
              initial="hidden"
              viewport={{ once: true, amount: 0.4 }}
              whileInView="visible"
              variants={fadeInBottomVariants}
              className={`${fsMagistral.className} text-center font-semibold text-[45px]`}
            >
              Khách hàng của chúng tôi
            </MotionWrapper>
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
