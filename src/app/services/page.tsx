import { roboto } from "@/lib/font";
import React from "react";
import ServicesSection from "../components/services-section";
import Image from "next/image";
import { Metadata } from "next";
import MotionWrapper from "@/components/ui/motion-wrapper";
import { fadeInBottomVariants } from "@/lib/utils";
import ServicesCarousel from "./services-carousel";
import "../styles/pages/services.scss";
import { Separator } from "@/components/ui/separator";
import guy from "../../../public/images/guy.png";
import woman from "../../../public/images/woman.png";
import woman2 from "../../../public/images/woman-2.png";
import lady from "../../../public/images/lady.png";
import EBookLink from "./e-book-link";
import { BookWrapperProvider } from "@/contexts/book-wrapper-context";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Viettel Customer Services | Dịch vụ",
    description:
      "Viettel Customer Service cung cấp hệ sinh thái: dịch vụ tổng đài Contact center outsourcing, BPO, Upsell, telesales, tư vấn trải nghiệm khách hàng CX, Voice of Customer, loyalty, quà tặng…",
    openGraph: {
      siteName: "Viettel Customer Services",
      title: "Viettel Customer Services | Dịch vụ",
      description:
        "Viettel Customer Service cung cấp hệ sinh thái: dịch vụ tổng đài Contact center outsourcing, BPO, Upsell, telesales, tư vấn trải nghiệm khách hàng CX, Voice of Customer, loyalty, quà tặng…",
      url: "https://viettelcx.com.vn/services",
      type: "website",
      images: [
        {
          url: "https://viettelcx.com.vn/images/website.png",
          width: 1151,
          height: 768,
          alt: "Viettel Customer Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Viettel Customer Services | Dịch vụ",
      description:
        "Viettel Customer Service cung cấp hệ sinh thái: dịch vụ tổng đài Contact center outsourcing, BPO, Upsell, telesales, tư vấn trải nghiệm khách hàng CX, Voice of Customer, loyalty, quà tặng…",
      images: ["https://viettelcx.com.vn/images/website.png"],
    },
    alternates: {
      canonical: "https://viettelcx.com.vn/images/services",
    },
    keywords: [
      "Viettel",
      "Viettel chăm sóc khách hàng",
      "Viettelcx services",
      "Viettel Customer Service",
      "Viettel Cx",
      "Chăm sóc khách hàng",
      "chăm sóc khách hàng Viettel",
      "dịch vụ khách hàng Viettel",
      "giải pháp CX",
    ],
    robots: "index, follow",
  };
}

function Services() {
  return (
    <BookWrapperProvider>
      <div>
        <main className='bg-[#E6E7E9] pb-20'>
          <div
            className={`relative ${roboto.className} bg-[url(/images/Group_8919.png)] max-sm:bg-[url(/images/bgr_1.png)]  bg-cover bg-center bg-no-repeat min-h-[769px] max-w-[100dvw] flex flex-col items-center justify-center text-center`}
          >
            <MotionWrapper
              element='h1'
              initial='hidden'
              viewport={{ once: true, amount: 0.5 }}
              whileInView='visible'
              variants={fadeInBottomVariants}
              className='text-[#9B9B9B] text-lg xs:text-[20px] md:text-[30px] lg:text-[40px] mt-10 md:leading-[50px] font-medium'
            >
              Bạn có chắc mình đã kết nối với khách hàng <br />
              trên {""}
              <span className='text-black font-medium'>mọi điểm chạm?</span>
            </MotionWrapper>

            <MotionWrapper
              element='p'
              initial='hidden'
              viewport={{ once: true, amount: 0.5 }}
              whileInView='visible'
              variants={fadeInBottomVariants}
              className={`${roboto.className} text-sm md:text-[20px] text-center text-black mt-3 max-w-[85dvw] md:max-w-[496px]`}
            >
              Viettel Customer Service sẽ giúp bạn kết nối, lắng nghe khách hàng
              trên mọi hành trình trải nghiệm
            </MotionWrapper>
            <MotionWrapper
              initial='hidden'
              viewport={{ once: true, amount: 0.5 }}
              whileInView='visible'
              variants={fadeInBottomVariants}
              className={`${roboto.className} text-base md:text-lg text-center text-[#EA0033] flex justify-center mt-6`}
            >
              {/* <Link
              href="/about"
              className="flex items-center relative see-more-link group transition-all duration-300"
            >
              Tìm hiểu thêm
              <ArrowUpRight
                color="#000"
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link> */}

              <EBookLink />
            </MotionWrapper>

            <Image
              src={guy}
              alt='guy'
              quality={100}
              className='absolute top-[15%] right-[20%] translate-x-1/2 sm:hidden'
            />
            <Image
              src={lady}
              alt='lady'
              quality={100}
              className='absolute top-[25%] -translate-x-1/2 left-[20%] sm:hidden'
            />
            <Image
              src={woman}
              alt='woman'
              quality={100}
              className='absolute bottom-[10%] translate-x-1/4 right-[15%] sm:hidden'
            />
            <Image
              src={woman2}
              alt='woman2'
              quality={100}
              className='absolute bottom-[15%] -translate-x-1/2 left-[20%] sm:hidden'
            />
          </div>

          <ServicesSection />

          <MotionWrapper
            initial='hidden'
            viewport={{ once: true, amount: 0.3 }}
            whileInView='visible'
            variants={fadeInBottomVariants}
            className='relative w-[85%] xs:w-[90%] lg:w-[90%] xl:w-[93%] min-[1596px]:w-[90%]'
          >
            <ServicesCarousel />
          </MotionWrapper>

          <Separator className='mt-16 bg-[#D9D9D9] w-[90dvw] mx-auto' />
        </main>

      </div>
    </BookWrapperProvider>
  );
}

export default Services;
