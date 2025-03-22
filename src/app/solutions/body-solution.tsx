import { roboto } from "@/lib/font";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import imgSolution from "../../../public/images/image-solution.png";
import imgSolution1 from "../../../public/images/image-solution-1.png";
import imgSolution2 from "../../../public/images/image-solution-2.png";
import imgSolution3 from "../../../public/images/image-solution-3.png";
import imgSolution4 from "../../../public/images/image-solution-4.png";
import imgSolution5 from "../../../public/images/image-solution-5.png";
import imgBgFooter1 from "../../../public/images/shutterstock.png";
import imgBgFooter2 from "../../../public/images/shutterstock-1.png";
import MotionWrapper from "@/components/ui/motion-wrapper";

export default function BodySolution() {
  return (
    <main className="bg-white">
      <div className="max-w-[90%] pt-[50px] xl:max-w-[1120px] mx-auto container relative z-20">
        <div className="block sm:grid sm:grid-cols-7 justify-between gap-8">
          <MotionWrapper
            element="div"
            viewport={{ once: true, amount: 0.4 }}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
            }}
            className="col-span-3 mb-[12px] sm:mb[0]"
          >
            <Image src={imgSolution} alt="" />
          </MotionWrapper>
          <div className="col-span-4">
            <div
              className={`${roboto.className} font-medium text-[24px] leading-[30px] sm:text-[35px] sm:leading-[35px] font-medium`}
            >
              CXBot2
              <div className="text-[#858585] mt-[3px] font-medium">
                Nhân viên tổng đài AI ảo
              </div>
            </div>
            <div
              className={`${roboto.className} mt-[20px] sm:mt-[30px] text-[#595959] text-[14px] sm:text-[18px]`}
            >
              CXBot là trợ lý ảo AI giúp doanh nghiệp tự động hóa quy trình chăm
              sóc khách hàng. Giải quyết nhanh chóng yêu cầu, trả lời thông minh
              24/7 trên mọi kênh giao tiếp. Giảm tải công việc cho tổng đài
              viên, rút ngắn thời gian phản hồi và nâng cao trải nghiệm khách
              hàng trên kênh số.
            </div>
          </div>
        </div>

        <hr className="mt-[50px] mb-[50px] sm:mt-[74px] sm:mb-[74px]" />

        <div className="block sm:grid sm:grid-cols-2 justify-between gap-8">
          <div className="col-span-1 mb-[12px] sm:mb-[0]">
            <div
              className={`${roboto.className} font-medium text-[24px] leading-[30px] sm:text-[35px] sm:leading-[35px]`}
            >
              InsightCI
              <div className="text-[#858585] mt-[3px] font-medium">
                Nền tảng phân tích tương tác khách hàng
              </div>
            </div>
            <div
              className={`${roboto.className} mt-[20px] sm:mt-[30px] text-[#595959] text-[14px] sm:text-[18px]`}
            >
              InsightCI là nền tảng phân tích tương tác khách hàng mạnh mẽ, ứng
              dụng công nghệ Big Data để khai thác và phân tích mọi tương tác
              trên đa kênh. Giúp doanh nghiệp thấu hiểu nhu cầu khách hàng, tối
              ưu quy trình dịch vụ và nâng cao mức độ hài lòng, từ đó thúc đẩy
              tăng trưởng bền vững.
            </div>
          </div>

          <MotionWrapper
            element="div"
            // initial={{ opacity: 0, x: 100 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 1.5 }}

            viewport={{ once: true, amount: 0.4 }}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
            }}
            className="col-span-1"
          >
            <Image src={imgSolution1} alt="" />
          </MotionWrapper>
        </div>

        <hr className="mt-[50px] mb-[50px] sm:mt-[74px] sm:mb-[74px]" />

        <div className="block sm:grid sm:grid-cols-7 justify-between gap-8">
          <MotionWrapper
            element="div"
            // initial={{ opacity: 0, x: -100 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 1.5 }}

            viewport={{ once: true, amount: 0.4 }}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
            }}
            className="col-span-3 mb-[12px] sm:mb[0]"
          >
            <Image src={imgSolution2} alt="" className="h-[100%]" />
          </MotionWrapper>
          <div className="col-span-4">
            <div
              className={`${roboto.className} font-medium text-[24px] leading-[30px] sm:text-[35px] sm:leading-[35px]`}
            >
              vCOC
              <div className="text-[#858585] mt-[3px] font-medium">
                Điều hành dịch vụ khách hàng theo thời gian thực
              </div>
            </div>
            <div
              className={`${roboto.className} mt-[20px] sm:mt-[30px] text-[#595959] text-[14px] sm:text-[18px]`}
            >
              vCOC giúp doanh nghiệp giám sát và điều hành toàn bộ hoạt động
              dịch vụ khách hàng một cách trực quan và chính xác. Cung cấp KPI
              theo thời gian thực, cảnh báo sớm và hỗ trợ ra quyết định nhanh
              chóng, đảm bảo hiệu suất vận hành luôn ở mức tối ưu.
            </div>

            <div className={`${roboto.className} mt-[30px] `}>
              <Link
                href="#"
                className={`${roboto.className} w-[160px] sm:w-[180px] lg:w-[200px] text-[#000] text-[14px] sm:text-[16px] lg:text-[20px] flex items-center gap-2 border border-[#000000] rounded-[5px] bg-white px-4 py-2 overflow-hidden group relative justify-between z-10`}
              >
                <span className="absolute inset-0 bg-[#EA0033] transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0" />
                <MoveRight className="relative transition-colors duration-300 text-[#EA0033] group-hover:text-white" />
                <span className="relative font-medium transition-all duration-300 group-hover:text-white">
                  Yêu cầu Demo
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-[50px] sm:mt-[100px] pt-[30px] sm:pt-[80px]">
        <Image
          src={imgBgFooter1}
          alt=""
          className="absolute top-[0px] z-1 w-[100vw] h-[50%]"
        />
        <Image
          src={imgBgFooter2}
          alt=""
          className="absolute bottom-[0px] z-2 w-[100vw] h-[50%]"
        />
        <div className="max-w-[90%] xl:max-w-[1120px] mx-auto container relative z-20">
          <div className="block sm:grid  sm:grid-cols-2 justify-between gap-8">
            <div className="col-span-1  mb-[12px] sm:mb-[0px]">
              <div
                className={`${roboto.className} font-medium text-[24px] leading-[30px] sm:text-[35px] sm:leading-[35px]`}
              >
                KnowX Hub
                <div className="text-[#858585] mt-[3px] font-medium">
                  Quản lý tri thức thông minh
                </div>
              </div>
              <div
                className={`${roboto.className} mt-[20px] sm:mt-[30px] text-[#595959] text-[14px] sm:text-[18px]`}
              >
                KnowX Hub là trung tâm tri thức hiện đại giúp doanh nghiệp lưu
                trữ, tổ chức và truy xuất thông tin nhanh chóng. Tích hợp AI để
                hỗ trợ tìm kiếm thông minh, giúp nhân viên tổng đài và khách
                hàng tiếp cận thông tin chính xác tức thì, tối ưu hóa quy trình
                giải quyết vấn đề.
              </div>
            </div>

            <MotionWrapper
              element="div"
              // initial={{ opacity: 0, x: 100, rotate: 45 }}
              // animate={{ opacity: 1, x: 0, rotate: 0 }}
              // transition={{ duration: 2 }}
              viewport={{ once: true, amount: 0.4 }}
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, x: 100, rotate: 45 },
                visible: {
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                  transition: { duration: 2 },
                },
              }}
              className="col-span-1"
            >
              <Image src={imgSolution3} alt="" />
            </MotionWrapper>
          </div>

          <div className="block sm:grid  sm:grid-cols-7 justify-between mt-[50px] gap-8">
            <MotionWrapper
              element="div"
              className="col-span-3 mb-[12px] sm:mb-[0]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={{
                hidden: { opacity: 0, x: -100, rotate: -45 },
                visible: {
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                  transition: { duration: 2 },
                },
              }}
            >
              <Image src={imgSolution4} alt="" className="h-[100%]" />
            </MotionWrapper>
            <div className="col-span-4">
              <div
                className={`${roboto.className} font-medium text-[24px] leading-[30px] sm:text-[35px] sm:leading-[35px]`}
              >
                WorkforceX
                <div className="text-[#858585] mt-[3px] font-medium">
                  Quản lý nguồn nhân lực
                </div>
              </div>
              <div
                className={`${roboto.className} mt-[20px] sm:mt-[30px] text-[#595959] text-[14px] sm:text-[18px]`}
              >
                WorkforceX là hệ thống quản lý nhân sự chuyên biệt cho tổng đài,
                giúp tự động lên lịch, phân công nhân lực, giám sát hiệu suất và
                tối ưu hóa nguồn lực theo nhu cầu thực tế. Ứng dụng AI và phân
                tích dữ liệu để dự báo và điều phối nhân sự linh hoạt, đảm bảo
                chất lượng dịch vụ khách hàng luôn đạt chuẩn cao nhất.
              </div>
            </div>
          </div>

          <div className="block sm:grid  sm:grid-cols-2 justify-between mt-[50px] gap-8">
            <div className="col-span-1">
              <div
                className={`${roboto.className} font-medium text-[24px] leading-[30px] sm:text-[35px] sm:leading-[35px]`}
              >
                Reputa X
                <div className="text-[#858585] mt-[3px] font-medium">
                  Quản lý danh tiếng thương hiệu bằng AI
                </div>
              </div>
              <div
                className={`${roboto.className} mt-[20px] sm:mt-[30px] text-[#595959] text-[14px] sm:text-[18px]`}
              >
                ReputaX là công cụ giám sát và phân tích thương hiệu mạnh mẽ, sử
                dụng AI và Big Data để theo dõi phản hồi của khách hàng trên
                mạng xã hội. Giúp doanh nghiệp bảo vệ danh tiếng, ứng phó kịp
                thời với khủng hoảng truyền thông, đồng thời cung cấp báo cáo
                chi tiết về hình ảnh thương hiệu so với đối thủ cạnh tranh.
              </div>
              <div className={`${roboto.className} mt-[30px] `}>
                <Link
                  href="#"
                  className={`${roboto.className} w-[160px] sm:w-[180px] lg:w-[200px] text-[#000] text-[14px] sm:text-[16px] lg:text-[20px] flex items-center gap-2 border border-[#000000] rounded-[5px] bg-white px-4 py-2 overflow-hidden group relative justify-between z-10`}
                >
                  <span className="absolute inset-0 bg-[#EA0033] transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0" />
                  <MoveRight className="relative transition-colors duration-300 text-[#EA0033] group-hover:text-white" />
                  <span className="relative font-medium transition-all duration-300 group-hover:text-white">
                    Yêu cầu Demo
                  </span>
                </Link>
              </div>
            </div>

            <MotionWrapper
              element="div"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
              className="col-span-1"
            >
              <Image src={imgSolution5} alt="" />
            </MotionWrapper>
          </div>
        </div>
      </div>
    </main>
  );
}
