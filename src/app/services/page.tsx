import { roboto } from "@/lib/font";
import React from "react";
import CommonHeading from "../components/common-heading";
import servicesHero from "../../../public/images/services-page-hero.png";
import ServicesSection from "../components/services-section";
import outsourcing from "../../../public/images/service-outsourcing.png";
import Image from "next/image";
import { Metadata } from "next";
import hero from "../../../public/images/Group_8919.png";
import MotionWrapper from "@/components/ui/motion-wrapper";
import { fadeInBottomVariants } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ServicesCarousel from "./services-carousel";
import "../styles/pages/services.scss";
import { Separator } from "@/components/ui/separator";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Viettel Cx",
    description:
      "Viettel CX cung cấp dịch vụ toàn trình, bao gồm: Nhân sự, nền tảng giải pháp, quy trình,... cho hệ thống tổng đài chăm sóc khách hàng của doanh nghiệp.",
    openGraph: {
      title: "Viettel Cx",
      description:
        "Viettel CX cung cấp dịch vụ toàn trình, bao gồm: Nhân sự, nền tảng giải pháp, quy trình,... cho hệ thống tổng đài chăm sóc khách hàng của doanh nghiệp.",
      url: "https://chamsua.vn/wp-content/uploads/2024/12/300anh-gai-xinh-toc-ngang-vai-2k2-2k3-2k4-2k6-2k7-2k9-tuyen-49.jpg",
      type: "website",
      images: [
        {
          url: "https://chamsua.vn/wp-content/uploads/2024/12/300anh-gai-xinh-toc-ngang-vai-2k2-2k3-2k4-2k6-2k7-2k9-tuyen-49.jpg",
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
        "Viettel CX cung cấp dịch vụ toàn trình, bao gồm: Nhân sự, nền tảng giải pháp, quy trình,... cho hệ thống tổng đài chăm sóc khách hàng của doanh nghiệp.",
      images: [
        "https://chamsua.vn/wp-content/uploads/2024/12/300anh-gai-xinh-toc-ngang-vai-2k2-2k3-2k4-2k6-2k7-2k9-tuyen-49.jpg",
      ],
    },
  };
}

function Services() {
  return (
    <div>
      <main className="bg-[#E6E7E9] pb-20">
        {/* <CommonHeading
          title={
            <span>
              Hệ sinh thái <br /> Dịch vụ của chúng tôi
            </span>
          }
          image={servicesHero}
          imageAlt="Services Hero"
          heroContent={
            <h2
              className={`${roboto.className} text-3xl font-light max-w-[365px] text-white`}
            >
              Bạn có chắc mình đã kết nối với khách hàng trên mọi điểm chạm?
            </h2>
          }
            
          paddingBottomTitle="pb-[50px]"
        /> */}

        <div
          className={`${roboto.className} bg-[url(/images/Group_8919.png)]  bg-cover bg-center bg-no-repeat min-h-[769px] max-w-[100dvw] flex flex-col items-center justify-center text-center`}
        >
          <h1 className="text-[#9B9B9B] text-[40px] mt-10">
            <p className="font-medium">
              Bạn có chắc mình đã kết nối với khách hàng
            </p>
            <p className="font-medium">
              trên{" "}
              <span className="text-black font-medium">mọi điểm chạm?</span>
            </p>
          </h1>

          <MotionWrapper
            element="p"
            initial="hidden"
            viewport={{ once: true, amount: 0.5 }}
            whileInView="visible"
            variants={fadeInBottomVariants}
            className={`${roboto.className} text-sm md:text-[20px] text-center text-black mt-3 w-[496px]`}
          >
            Viettel Customer services sẽ giúp bạn kết nối, lắng nghe khách hàng
            trên mọi hành trình trải nghiệm
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

        <ServicesSection></ServicesSection>

        <ServicesCarousel />

        <Separator className="mt-16 bg-[#D9D9D9]" />
      </main>
    </div>
  );
}

export default Services;
