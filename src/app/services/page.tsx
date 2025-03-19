import { roboto } from "@/lib/font";
import React from "react";
import CommonHeading from "../components/common-heading";
import servicesHero from "../../../public/images/services-page-hero.png";
import ServicesSection from "../components/services-section";
import outsourcing from "../../../public/images/service-outsourcing.png"
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Viettel Cx",
    description: "Viettel CX cung cấp dịch vụ toàn trình, bao gồm: Nhân sự, nền tảng giải pháp, quy trình,... cho hệ thống tổng đài chăm sóc khách hàng của doanh nghiệp.",
    openGraph: {
      title: "Viettel Cx",
      description: "Viettel CX cung cấp dịch vụ toàn trình, bao gồm: Nhân sự, nền tảng giải pháp, quy trình,... cho hệ thống tổng đài chăm sóc khách hàng của doanh nghiệp.",
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
      description: "Viettel CX cung cấp dịch vụ toàn trình, bao gồm: Nhân sự, nền tảng giải pháp, quy trình,... cho hệ thống tổng đài chăm sóc khách hàng của doanh nghiệp.",
      images: ["https://chamsua.vn/wp-content/uploads/2024/12/300anh-gai-xinh-toc-ngang-vai-2k2-2k3-2k4-2k6-2k7-2k9-tuyen-49.jpg"],
    },
  };
}

function Services() {
  return (
    <div>
      <main className="bg-white pb-20">
        <CommonHeading
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
        />

        <ServicesSection>
          <section className="max-w-[1120px] mx-auto flex gap-20 mt-36" >
            <article className={`${roboto.className} space-y-6`} id="outsourcing-contact-center">
              <h1 className="text-[50px] font-light">
                Dịch vụ Outsourcing Contact Center
              </h1>

              <p>
                Viettel CX cung cấp dịch vụ toàn trình, bao gồm: Nhân sự, nền
                tảng giải pháp, quy trình,... cho hệ thống tổng đài chăm sóc
                khách hàng của doanh nghiệp, giúp:
              </p>

              <ul className="list-disc ms-4 space-y-2">
                <li>Tư vấn, hỗ trợ, giải đáp</li>
                <li>Giải quyết khiếu nại, xử lý sự cố, hỗ trợ kỹ thuật</li>
                <li>Chủ động CSKH</li>
                <li>Khảo sát khách hàng</li>
                <li>Kiểm duyệt nội dung, nhập liệu, xác minh thông tin KH</li>
              </ul>
            </article>
            <Image src={outsourcing} alt="Outsourcing" quality={100} className="pt-6"/>
          </section>
        </ServicesSection>
      </main>
    </div>
  );
}

export default Services;
