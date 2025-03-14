import { fsMagistral, fsMagistralBook, roboto } from "@/lib/font";
import React from "react";
import aboutHero from "../../../public/images/about-page-hero.png";
import radialGraph from "../../../public/images/radial.png";
import Image from "next/image";
import { Metadata } from "next";

import { title } from "process";
import CommonHeading from "../components/common-heading";
import { dataWhyUs } from "@/lib/define-data";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description: "Công ty TNHH MTV dịch vụ khách hàng Viettel",
};

function About() {
  return (
    <div>
      <main className="bg-white">
        <CommonHeading
          title="Về Viettel CX"
          image={aboutHero}
          imageAlt="About Hero"
          heroContent={
            <h2
              className={`${roboto.className} text-3xl font-light max-w-[365px]`}
            >
              <span className="text-[#EA0033]">Tiên phong</span> nâng tầm trải
              nghiệm khách hàng bằng công nghệ sáng tạo
            </h2>
          }
          background="bg-[#E7E7E7]"
        />
        <section
          className={`${roboto.className} grid grid-cols-6 bg-[#E7E7E7] pt-[80px]`}
        >
          <div className="h-[100px] relative top-16">
            <p className="font-semibold text-3xl text-center">21/3/2004</p>
            <div className="border-t-[20px] border-[#D9D9D9] border-solid bg-white flex flex-col items-center p-4 pt-6 ps-8 h-[200px] gap-2">
              <h6 className="font-medium text-lg leading-[23px] max-w-[160px]">
                Trung tâm Giải đáp Khách hàng ra đời
              </h6>
            </div>
          </div>
          <div className="h-[100px] relative top-11">
            <p className="font-semibold text-3xl ">03/2009</p>
            <div className="border-t-[20px] border-[#CCCCCC] border-solid bg-white flex flex-col items-start p-4 pt-8 ps-0 pe-10 h-[200px] gap-2">
              <h6 className="font-medium text-lg leading-[23px]">Thành lập Trung tâm CSKH</h6>
              <p className="text-lg text-[#595959] leading-[23px]">
                Tiếp nhận giải đáp, hỗ trợ xử lý lỗi, giải quyết khiếu nại,
                Triển khai các hoạt động CSKH
              </p>
            </div>
          </div>
          <div className="h-[100px] relative top-6">
            <p className="font-semibold text-3xl">2010 - 2014</p>
            <div className="border-t-[20px] border-[#9B9B9B] border-solid bg-white flex flex-col items-start p-4 pt-8 ps-0 pe-10 h-[200px] gap-2">
              <h6 className="font-medium text-lg leading-[23px]">
                Triển khai mở rộng kinh doanh các dịch vụ tổng đài
              </h6>
              <p className="text-lg text-[#595959] leading-[23px]">
                106x tư vấn thông tin kinh tế, văn hóa thể thao. Triển khai hoạt
                động telesales, marketing
              </p>
            </div>
          </div>
          <div className="h-[100px] relative top-[0.25rem]">
            <p className="font-semibold text-3xl ">2015 - 2017</p>
            <div className="border-t-[20px] border-[#858585] border-solid bg-white flex flex-col items-start p-4 pt-8 ps-0 pe-10 h-[200px] gap-2">
              <h6 className="font-medium text-lg leading-[23px]">
                Hiện diện tại 10 thị trường Viettel đầu tư
              </h6>
              <p className="text-lg text-[#595959] leading-[23px]">
                Triển khai, tư vấn, xây dựng các dịch vụ tổng đài và chăm sóc
                khách hàng
              </p>
            </div>
          </div>
          <div className="h-[100px] relative -top-4">
            <p className="font-semibold text-3xl ">2017 - 2022</p>
            <div className="border-t-[20px] border-[#595959] border-solid bg-white flex flex-col items-start p-4 pt-8 ps-0 pe-10 h-[200px] gap-2">
              <h6 className="font-medium text-lg leading-[23px]">
                Thành lập Trung tâm Dịch vụ Khách hàng
              </h6>
              <p className="text-lg text-[#595959] leading-[23px]">
                Mở rộng chăm sóc khách hàng cho cá Tổng công ty/ Công ty trong
                và ngoài Tập đoàn
              </p>
            </div>
          </div>
          <div className="h-[100px] relative -top-9">
            <p className="font-semibold text-3xl">2023 - 2025</p>
            <div className="border-t-[20px] border-black border-solid bg-white flex flex-col items-start p-4 pt-8 ps-0 pe-10 h-[200px] gap-2">
              <h6 className="font-medium text-lg leading-[23px]">
                Thành lập Công ty TNHH MTV Dịch vụ Khách hàng Viettel
              </h6>
            </div>
          </div>
        </section>

        <section className="mt-[250px] p-10 px-20 flex flex-col items-center gap-10">
          <h1
            className={`${fsMagistralBook.className} text-[45px] text-center`}
          >
            Vì sao lựa chọn Viettel CX?
          </h1>

          <div className="grid grid-cols-4 w-full mt-10">
            {dataWhyUs.map((item, index) => (
              <div
                key={index}
                className={`${roboto.className} flex flex-col items-center gap-4 p-4`}
              >
                <div className="min-h-[100px]">
                  <Image src={item.icon} alt="Setting Icon" />
                </div>
                <h6 className={`text-center text-3xl max-[1478px]:text-[26px] font-semibold`}>
                  {item.title}
                </h6>
                <ul className="text-lg text-[#595959] leading-[23px] flex flex-col p-10 max-[1478px]:px-5 gap-4">
                  {item.desc.map((desc, index) => (
                    <li key={index}>
                      <p className="text-center text-lg">{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="min-h-[650px] bg-gradient-to-b from-[#585858] to-[#252525] flex items-center justify-center p-8 gap-20">
          <div className="relative">
            <Image src={radialGraph} alt="Radial Graph" />
            <div
              className={`${roboto.className} text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-[298px]`}
            >
              <h4 className="text-[60px] font-semibold">4.000+</h4>
              <p className="font-light text-2xl">
                nhân sự hỗ trợ khách hàng 24/7 trên 63 tỉnh/ thành
              </p>
            </div>
          </div>

          <div
            className={`${roboto.className} text-white max-w-[465px] flex flex-col gap-10 text-lg`}
          >
            <p>
              Với triết lý phụng sự, trong hơn 20 năm thành lập và phát triển,
              hành trình của chúng tôi không chỉ là hỗ trợ, giải đáp, mà là hành
              trình đồng hành, lắng nghe và thấu hiểu mọi câu chuyện của hơn 120
              triệu khách hàng tại Việt Nam và trên 10 quốc gia/vùng lãnh thổ.
            </p>

            <p>
              Những kho báu vô giá từ hành trình lắng nghe đó là tiền đề vững
              chắc để chúng tôi làm tốt hơn, tiên phong nâng tầm trải nghiệm
              khách hàng bằng công nghệ sáng tạo.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
