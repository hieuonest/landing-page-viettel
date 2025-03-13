import { fsMagistral, fsMagistralBook, roboto } from "@/lib/font";
import React from "react";
import aboutHero from "../../../public/images/about-page-hero.png";
import radialGraph from "../../../public/images/radial.png";
import Image from "next/image";
import { Metadata } from "next";
import settingIcon from "../../../public/svg/setting.svg";
import checkIcon from "../../../public/svg/check.svg";
import logicIcon from "../../../public/svg/logic.svg";
import shieldIcon from "../../../public/svg/shield.svg";
import { title } from "process";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description: "Công ty TNHH MTV dịch vụ khách hàng Viettel",
};

function About() {
  return (
    <div>
      <main className="bg-white">
        <section className="max-w-[1120px] mx-auto pt-36 pb-[84px]">
          <h1 className={`${fsMagistralBook.className} text-3xl`}>
            Về Viettel CX
          </h1>
        </section>

        <section className="max-h-[527px] bg-[#E7E7E7] flex pt-[77px] justify-center relative">
          <h2
            className={`${roboto.className} text-3xl font-light max-w-[365px]`}
          >
            <span className="text-[#EA0033]">Tiên phong</span> nâng tầm trải
            nghiệm khách hàng bằng công nghệ sáng tạo
          </h2>
          <Image
            src={aboutHero}
            alt="About Hero"
            className="relative -translate-y-[43.5%]"
            quality={100}
          />
        </section>
        <section
          className={`${roboto.className} grid grid-cols-6 bg-[#E7E7E7]`}
        >
          <div className="h-[100px] relative top-16">
            <p className="font-semibold text-3xl text-center">21/3/2004</p>
            <div className="border-t-[20px] border-[#D9D9D9] border-solid bg-white flex flex-col items-center p-4 pt-6 ps-8 h-[200px] gap-2">
              <h6 className="font-bold text-lg max-w-[160px]">
                Trung tâm Giải đáp Khách hàng ra đời
              </h6>
            </div>
          </div>
          <div className="h-[100px] relative top-11">
            <p className="font-semibold text-3xl ">03/2009</p>
            <div className="border-t-[20px] border-[#CCCCCC] border-solid bg-white flex flex-col items-start p-4 pt-8 ps-0 pe-10 h-[200px] gap-2">
              <h6 className="font-bold text-lg">Thành lập Trung tâm CSKH</h6>
              <p className="text-lg text-[#595959]">
                Tiếp nhận giải đáp, hỗ trợ xử lý lỗi, giải quyết khiếu nại,
                Triển khai các hoạt động CSKH
              </p>
            </div>
          </div>
          <div className="h-[100px] relative top-6">
            <p className="font-semibold text-3xl">2010 - 2014</p>
            <div className="border-t-[20px] border-[#9B9B9B] border-solid bg-white flex flex-col items-start p-4 pt-8 ps-0 pe-10 h-[200px] gap-2">
              <h6 className="font-bold text-lg">
                Triển khai mở rộng kinh doanh các dịch vụ tổng đài
              </h6>
              <p className="text-lg text-[#595959]">
                106x tư vấn thông tin kinh tế, văn hóa thể thao. Triển khai hoạt
                động telesales, marketing
              </p>
            </div>
          </div>
          <div className="h-[100px] relative top-[0.25rem]">
            <p className="font-semibold text-3xl ">2015 - 2017</p>
            <div className="border-t-[20px] border-[#858585] border-solid bg-white flex flex-col items-start p-4 pt-8 ps-0 pe-10 h-[200px] gap-2">
              <h6 className="font-bold text-lg">
                Hiện diện tại 10 thị trường Viettel đầu tư
              </h6>
              <p className="text-lg text-[#595959]">
                Triển khai, tư vấn, xây dựng các dịch vụ tổng đài và chăm sóc
                khách hàng
              </p>
            </div>
          </div>
          <div className="h-[100px] relative -top-4">
            <p className="font-semibold text-3xl ">2017 - 2022</p>
            <div className="border-t-[20px] border-[#595959] border-solid bg-white flex flex-col items-start p-4 pt-8 ps-0 pe-10 h-[200px] gap-2">
              <h6 className="font-bold text-lg">
                Thành lập Trung tâm Dịch vụ Khách hàng
              </h6>
              <p className="text-lg text-[#595959]">
                Mở rộng chăm sóc khách hàng cho cá Tổng công ty/ Công ty trong
                và ngoài Tập đoàn
              </p>
            </div>
          </div>
          <div className="h-[100px] relative -top-9">
            <p className="font-semibold text-3xl">2023 - 2025</p>
            <div className="border-t-[20px] border-black border-solid bg-white flex flex-col items-start p-4 pt-8 ps-0 pe-10 h-[200px] gap-2">
              <h6 className="font-bold text-lg">
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
            {[
              {
                title: "Chuyên nghiệp",
                icon: settingIcon,
                desc: [
                  "Hơn 20 năm kinh nghiệm",
                  "Đội ngũ quản lý chuyên nghiệp",
                  "Nhân sự chất lượng cao",
                  "Kho tri thức phong phú và đa dạng",
                ],
              },
              {
                title: "Hiệu quả",
                icon: checkIcon,
                desc: [
                  "Giám sát và quản lý chủ động, toàn diện mọi hoạt động",
                  "Quy trình chuyên nghiệp, nhanh chóng",
                  "Tối ưu quy trình và chi phí vận hành",
                ],
              },
              {
                title: "Công nghệ tiên phong",
                icon: logicIcon,
                desc: [
                  "Tích hợp công nghệ AI, Big Data, Robotics, Cloud computing",
                  "Phát triển hệ thống linh hoạt, bắt kịp xu hướng thế giới",
                  "Hệ thống tiêu biểu: Trung tâm điều hành thông minh vCOC",
                ],
              },
              {
                title: "Bảo mật",
                icon: shieldIcon,
                desc: [
                  "Bảo vệ dữ liệu và hệ thống bằng các biện pháp an ninh mạng tiên tiến",
                  "Tuân thủ các tiêu chuẩn bảo mật quốc tế: GDPR, ISO 27001",
                  "Kiểm toán và đánh giá định kỳ",
                  "Giám sát chủ động 24/7, phát hiện và xử lý mọi rủi ro tiềm ẩn",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${roboto.className} flex flex-col items-center gap-4 p-4`}
              >
                <div className="min-h-[100px]">
                  <Image src={item.icon} alt="Setting Icon" />
                </div>
                <h6 className={`text-center text-3xl font-semibold`}>
                  {item.title}
                </h6>
                <ul className="text-lg text-[#595959] flex flex-col p-10 gap-4">
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
            <div className={`${roboto.className} text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-[298px]`}>
              <h4 className="text-[60px] font-semibold">4.000+</h4>
              <p className="font-light text-2xl">nhân sự hỗ trợ khách hàng 24/7 trên 63 tỉnh/ thành</p>
            </div>
          </div>

          <div className={`${roboto.className} text-white max-w-[465px] flex flex-col gap-10 text-lg`}>
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
