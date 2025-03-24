"use client";
import React from "react";
import CommonButtonList from "./common-button-list";
// import bpo from "../../../public/images/service-bpo.png";
// import upsell from "../../../public/images/sevice-upsell.png";
// import cskh from "../../../public/images/sevice-cskh.png";
// import voice from "../../../public/images/sevice-voice.png";
// import cx from "../../../public/images/service-cx.png";
// import baoHanh from "../../../public/images/service-bao-hanh.png";
import { dataServicesLinks } from "@/lib/define-data";
import { roboto } from "@/lib/font";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
// import contact from "../../../public/images/contact.png";
import MotionWrapper from "@/components/ui/motion-wrapper";
import { fadeInBottomVariants } from "@/lib/utils";

// const services = [
//   {
//     title: "Dịch vụ BPO",
//     image: bpo,
//     alt: "BPO",
//     desc: (
//       <>
//         <p className="mt-[5px]">
//           Tối ưu vận hành, tiết kiệm chi phí và nâng cao hiệu suất bằng dịch vụ
//           BPO - thuê ngoài các quy trình, nhân sự nghiệp vụ.
//         </p>
//         <ul className="list-disc mt-4 ms-4 space-y-2">
//           <li>IT helpdesk</li>
//           <li>Quản lý tài chính kế toán</li>
//           <li>Nhân viên lễ tân</li>
//           <li>Dịch vụ tuyển dụng</li>
//         </ul>
//       </>
//     ),
//     href: "bpo",
//   },
//   {
//     title: "Dịch vụ Gia tăng doanh số Upsell",
//     image: upsell,
//     alt: "Upsell",
//     desc: (
//       <>
//         <p className="mt-[5px]">
//           Tiếp cận khách hàng đa kênh, gia tăng độ phủ về kênh bán, thúc đẩy gia
//           tăng doanh số cùng giải pháp từ Viettel CX:
//         </p>
//         <ul className="list-disc mt-4 ms-4 space-y-2">
//           <li>
//             Cung cấp dịch vụ Telesale với đội ngũ 1000++ nhân sự trên 15 năm
//             kinh nghiệm
//           </li>
//           <li>Tư vấn chiến lược upsell, cross-sell bằng AI, Big Data</li>
//           <li>
//             Thực hiện 200.000++ cuộc gọi/ngày, năng suất trung bình 500++ dữ
//             liệu/tư vấn viên/ngày
//           </li>
//           <li>Bán hàng kết hợp CSKH, quảng bá sản phẩm trên các kênh số</li>
//         </ul>
//       </>
//     ),
//     href: "upsale",
//   },
//   {
//     title: "Dịch vụ CSKH VIP/ Ưu tiên",
//     image: cskh,
//     alt: "Chăm sóc khách hàng",
//     desc: (
//       <>
//         <p className="mt-[5px]">
//           Tiếp cận khách hàng đa kênh, gia tăng độ phủ về kênh bán, thúc đẩy gia
//           tăng doanh số cùng giải pháp từ Viettel CX:
//         </p>
//         <ul className="list-disc mt-4 ms-4 space-y-2">
//           <li>
//             Cung cấp quà tặng (vật lý, evoucher) với đa dạng danh mục quà tặng,
//             phù hợp với từng phân khúc khách hàng theo yêu cầu của doanh nghiệp
//           </li>
//           <li>
//             Cung cấp dịch vụ tổ chức sự kiện chăm sóc khách hàng ưu tiên (Online
//             và offline) đảm bảo cá nhân hoá trải nghiệm, nâng cao sự hài lòng,
//             phù hợp với từng mô hình doanh nghiệp
//           </li>
//         </ul>
//       </>
//     ),
//     href: "loyalty",
//   },
//   {
//     title: "Dịch vụ Voice of Customer",
//     image: voice,
//     alt: "Voice of Customer",
//     desc: (
//       <>
//         <p className="mt-[5px]">
//           Bảo vệ và phát triển thương hiệu của doanh nghiệp trên môi trường số.
//           Viettel CX giúp doanh nghiệp thu thập, phân tích và khai thác ý kiến
//           khách hàng từ nhiều kênh khác nhau, từ đó phát hiện và cảnh báo khủng
//           hoảng truyền thông; phản ánh, phàn nàn của khách hàng; đánh giá nâng
//           cấp sản phẩm/dịch vụ, tư vấn doanh nghiệp nâng cấp sản phẩm/dịch vụ;
//           cảnh báo nguy cơ bị trục lợi, thất thoát…
//         </p>
//         <ul className="list-disc mt-4 mb-4 ms-4 space-y-2">
//           <li>
//             Theo dõi các thông tin, bài viết, bình luận, phản hồi từ đa kênh MXH
//             về thương hiệu của DN. Phân tích và tổng hợp báo cáo về sức khỏe của
//             thương hiệu
//           </li>
//           <li>
//             Dịch vụ phát triển thương hiệu và xử lý sự cố: Seeding/pha loãng/ xử
//             lý sự cố
//           </li>
//           <li>Dịch vụ khảo sát khách hàng</li>
//         </ul>

//         <p>
//           <span className="font-bold">20.000++</span> tương tác/tháng{" "}
//         </p>
//         <p>
//           <span className="font-bold">12.000++</span> lượt seeding/tháng
//         </p>
//       </>
//     ),
//     href: "voice-of-customer",
//   },
//   {
//     title: "Dịch vụ Customer Experience",
//     image: cx,
//     alt: "Customer Experience",
//     desc: (
//       <>
//         <p className="mt-[5px]">
//           Dịch vụ Đánh giá & Nâng cao Trải nghiệm Khách hàng (CX) của Viettel CX
//           giúp doanh nghiệp đo lường, phân tích và tối ưu hóa hành trình khách
//           hàng, từ đó cải thiện sự hài lòng và tăng tỷ lệ trung thành.
//         </p>
//         <p className="mt-4">Giải pháp của Viettel CX:</p>
//         <ul className="list-disc mt-4 ms-4 space-y-2">
//           <li>Đánh giá Trải nghiệm khách hàng</li>
//           <li>Phân tích hành trình khách hàng</li>
//           <li>Tư vấn và triển khai các giải pháp nâng cao trải nghiệm KH</li>
//           <li>Cá nhân hoá dịch vụ bằng AI và Automation</li>
//         </ul>
//         <p className="mt-4">Giúp:</p>
//         <ul className="list-disc mt-4 ms-4 space-y-2">
//           <li>Tăng 25% tỷ lệ giữ chân khách hàng</li>
//           <li>Cải thiện 30% chỉ số NPS</li>
//           <li>
//             Tối ưu quy trình chăm sóc khách hàng, giảm thời gian xử lý yêu cầu
//             tối 40%
//           </li>
//         </ul>
//       </>
//     ),
//     href: "customer-experience",
//   },
//   {
//     title: "Dịch vụ Bảo hành",
//     image: baoHanh,
//     alt: "Bảo hành",
//     desc: (
//       <>
//         <p className="mt-[5px]">
//           Viettel CX cung cấp cho doanh nghiệp giải pháp bảo hành toàn diện, với
//           đội ngũ nhân sự trên 10 năm kinh nghiệm và trạm sửa chữa trên 63 tỉnh
//           thành, bao gồm
//         </p>
//         <ul className="list-disc mt-4 ms-4 space-y-2">
//           <li>Bảo hành tiêu chuẩn</li>
//           <li>Bảo hành mở rộng</li>
//           <li>Bảo hành tại chỗ</li>
//           <li>Bảo hành quốc tế</li>
//           <li>Đảm bảo tỷ lệ bảo hành đúng hạn &gt;98%</li>
//         </ul>
//       </>
//     ),
//     href: "bao-hanh",
//   },
// ];

function ServicesSection() {
  return (
    <section className="max-w-[90%] mx-auto">
      <MotionWrapper
        initial="hidden"
        viewport={{ once: true, amount: 0.4 }}
        whileInView="visible"
        variants={fadeInBottomVariants}
        className="flex items-center justify-between pt-8 pb-3 mb-8 overflow-x-auto common-list"
      >
        <CommonButtonList items={dataServicesLinks} />
      </MotionWrapper>
      <MotionWrapper
        element="article"
        initial="hidden"
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
        variants={fadeInBottomVariants}
        className="flex items-center flex-col min-[896px]:flex-row min-[896px]:h-[452px] min-[896px]:gap-3 lg:gap-5"
      >
        <div
          className={`${roboto.className} bg-white p-8 rounded-t-[20px] min-[896px]:rounded-[20px] max-w-[950px] h-full basis-[65%] xl:basis-[60%] flex flex-col justify-between`}
        >
          <div>
            <h1 className="text-lg xs:text-2xl lg:text-3xl font-medium text-[#9B9B9B]">
              Dịch vụ{" "}
              <span className="font-medium text-black">
                Outsourcing Contact Center
              </span>
            </h1>
            <p className="max-w-[645px] text-sm xs:text-base xl:text-lg mt-3">
              Viettel Customer Service cung cấp dịch vụ toàn trình, bao gồm: Nhân sự, nền tảng
              giải pháp, quy trình,... cho hệ thống tổng đài chăm sóc khách hàng
              của doanh nghiệp, giúp:
            </p>
          </div>

          <div className="flex items-start justify-between flex-col sm:flex-row mt-3 gap-3 lg:gap-10 text-[#595959] text-sm xs:text-base 1080px:text-lg ">
            <ul className="list-disc ml-6 space-y-2 max-w-[375px]">
              <li>Tư vấn, hỗ trợ, giải đáp</li>
              <li>Giải quyết khiếu nại, xử lý sự cố, hỗ trợ kỹ thuật</li>
              <li>Chủ động CSKH</li>
              <li>Khảo sát khách hàng</li>
              <li>Kiểm duyệt nội dung, nhập liệu, xác minh thông tin KH </li>
            </ul>

            <div>
              <p>
                Với hệ thống tổng đài hiện đại và đội ngũ chuyên nghiệp, Viettel
                CX giúp:
              </p>
              <div className="space-y-3 1080px:space-y-6 mt-2 1080px:mt-6">
                <div className="flex items-center gap-2 xl:gap-3">
                  <p className="flex items-end text-right text-[20px] lg:text-[24px] xl:text-[28px] text-black">
                    <ArrowDownLeft size={18} color="#EA0033" />
                    30 - 40%
                  </p>
                  <p>chi phí vận hành</p>
                </div>
                <div className="flex items-center gap-2 xl:gap-3">
                  <p className="flex items-end text-right text-[20px] lg:text-[24px] xl:text-[28px] text-black ">
                    <ArrowUpRight size={18} color="#EA0033" />
                    95%
                  </p>
                  <p>tỷ lệ kết nối thành công</p>
                </div>
                <div className="flex items-center gap-2 xl:gap-3">
                  <p className="text-right text-[20px] lg:text-[24px] xl:text-[28px] text-black">
                    1 triệu
                  </p>
                  <p>cuộc gọi / ngày</p>
                </div>
              </div>

              
            </div>
          </div>
        </div>

        <div className="bg-[url(/images/contact.jpeg)] bg-cover bg-no-repeat bg-center overflow-hidden w-full min-h-[252px] xs:min-h-[352px] min-[896px]:min-h-[452px] max-w-full min-[896px]:max-w-[626px] rounded-b-[20px] min-[896px]:rounded-[20px] basis-1/2 1080px:basis-[40%]">
          {/* <Image
            src={contact}
            alt="Contact"
            className="w-full lg:max-w-[626px] min-h-[452px]"
          /> */}
        </div>
      </MotionWrapper>
    </section>
  );
}

export default ServicesSection;
