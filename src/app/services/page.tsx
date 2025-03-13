import { roboto } from "@/lib/font";
import React, { lazy } from "react";
import CommonHeading from "../components/common-heading";
import servicesHero from "../../../public/images/services-page-hero.png";
import ServicesSection from "../components/services-section";
import outsourcing from "../../../public/images/service-outsourcing.png"
import Image from "next/image";

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
          <section className="max-w-[1120px] mx-auto flex gap-20 mt-36">
            <div className={`${roboto.className} space-y-6`}>
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
            </div>
            <Image src={outsourcing} alt="Outsourcing" quality={100}/>
          </section>
        </ServicesSection>
      </main>
    </div>
  );
}

export default Services;
