"use client";
import React from "react";
import CommonButtonList from "./common-button-list";
import CommonLayoutSwitch from "./common-layout-switch";
import CommonLayout from "./common-layout";
import bpo from "../../../public/images/service-bpo.png";
import upsell from "../../../public/images/sevice-upsell.png";
import cskh from "../../../public/images/sevice-cskh.png";
import voice from "../../../public/images/sevice-voice.png";
import cx from "../../../public/images/service-cx.png";
import baoHanh from "../../../public/images/service-bao-hanh.png";
import { Separator } from "@/components/ui/separator";
import { dataServicesLinks } from "@/lib/define-data";
import { roboto } from "@/lib/font";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import contact from "../../../public/images/contact.jpeg";
import Image from "next/image";
import ServicesCarousel from "../services/services-carousel";

const services = [
  {
    title: "Dịch vụ BPO",
    image: bpo,
    alt: "BPO",
    desc: (
      <>
        <p className="mt-[5px]">
          Tối ưu vận hành, tiết kiệm chi phí và nâng cao hiệu suất bằng dịch vụ
          BPO - thuê ngoài các quy trình, nhân sự nghiệp vụ.
        </p>
        <ul className="list-disc mt-4 ms-4 space-y-2">
          <li>IT helpdesk</li>
          <li>Quản lý tài chính kế toán</li>
          <li>Nhân viên lễ tân</li>
          <li>Dịch vụ tuyển dụng</li>
        </ul>
      </>
    ),
    href: "bpo",
  },
  {
    title: "Dịch vụ Gia tăng doanh số Upsell",
    image: upsell,
    alt: "Upsell",
    desc: (
      <>
        <p className="mt-[5px]">
          Tiếp cận khách hàng đa kênh, gia tăng độ phủ về kênh bán, thúc đẩy gia
          tăng doanh số cùng giải pháp từ Viettel CX:
        </p>
        <ul className="list-disc mt-4 ms-4 space-y-2">
          <li>
            Cung cấp dịch vụ Telesale với đội ngũ 1000++ nhân sự trên 15 năm
            kinh nghiệm
          </li>
          <li>Tư vấn chiến lược upsell, cross-sell bằng AI, Big Data</li>
          <li>
            Thực hiện 200.000++ cuộc gọi/ngày, năng suất trung bình 500++ dữ
            liệu/tư vấn viên/ngày
          </li>
          <li>Bán hàng kết hợp CSKH, quảng bá sản phẩm trên các kênh số</li>
        </ul>
      </>
    ),
    href: "upsale",
  },
  {
    title: "Dịch vụ CSKH VIP/ Ưu tiên",
    image: cskh,
    alt: "Chăm sóc khách hàng",
    desc: (
      <>
        <p className="mt-[5px]">
          Tiếp cận khách hàng đa kênh, gia tăng độ phủ về kênh bán, thúc đẩy gia
          tăng doanh số cùng giải pháp từ Viettel CX:
        </p>
        <ul className="list-disc mt-4 ms-4 space-y-2">
          <li>
            Cung cấp quà tặng (vật lý, evoucher) với đa dạng danh mục quà tặng,
            phù hợp với từng phân khúc khách hàng theo yêu cầu của doanh nghiệp
          </li>
          <li>
            Cung cấp dịch vụ tổ chức sự kiện chăm sóc khách hàng ưu tiên (Online
            và offline) đảm bảo cá nhân hoá trải nghiệm, nâng cao sự hài lòng,
            phù hợp với từng mô hình doanh nghiệp
          </li>
        </ul>
      </>
    ),
    href: "loyalty",
  },
  {
    title: "Dịch vụ Voice of Customer",
    image: voice,
    alt: "Voice of Customer",
    desc: (
      <>
        <p className="mt-[5px]">
          Bảo vệ và phát triển thương hiệu của doanh nghiệp trên môi trường số.
          Viettel CX giúp doanh nghiệp thu thập, phân tích và khai thác ý kiến
          khách hàng từ nhiều kênh khác nhau, từ đó phát hiện và cảnh báo khủng
          hoảng truyền thông; phản ánh, phàn nàn của khách hàng; đánh giá nâng
          cấp sản phẩm/dịch vụ, tư vấn doanh nghiệp nâng cấp sản phẩm/dịch vụ;
          cảnh báo nguy cơ bị trục lợi, thất thoát…
        </p>
        <ul className="list-disc mt-4 mb-4 ms-4 space-y-2">
          <li>
            Theo dõi các thông tin, bài viết, bình luận, phản hồi từ đa kênh MXH
            về thương hiệu của DN. Phân tích và tổng hợp báo cáo về sức khỏe của
            thương hiệu
          </li>
          <li>
            Dịch vụ phát triển thương hiệu và xử lý sự cố: Seeding/pha loãng/ xử
            lý sự cố
          </li>
          <li>Dịch vụ khảo sát khách hàng</li>
        </ul>

        <p>
          <span className="font-bold">20.000++</span> tương tác/tháng{" "}
        </p>
        <p>
          <span className="font-bold">12.000++</span> lượt seeding/tháng
        </p>
      </>
    ),
    href: "voice-of-customer",
  },
  {
    title: "Dịch vụ Customer Experience",
    image: cx,
    alt: "Customer Experience",
    desc: (
      <>
        <p className="mt-[5px]">
          Dịch vụ Đánh giá & Nâng cao Trải nghiệm Khách hàng (CX) của Viettel CX
          giúp doanh nghiệp đo lường, phân tích và tối ưu hóa hành trình khách
          hàng, từ đó cải thiện sự hài lòng và tăng tỷ lệ trung thành.
        </p>
        <p className="mt-4">Giải pháp của Viettel CX:</p>
        <ul className="list-disc mt-4 ms-4 space-y-2">
          <li>Đánh giá Trải nghiệm khách hàng</li>
          <li>Phân tích hành trình khách hàng</li>
          <li>Tư vấn và triển khai các giải pháp nâng cao trải nghiệm KH</li>
          <li>Cá nhân hoá dịch vụ bằng AI và Automation</li>
        </ul>
        <p className="mt-4">Giúp:</p>
        <ul className="list-disc mt-4 ms-4 space-y-2">
          <li>Tăng 25% tỷ lệ giữ chân khách hàng</li>
          <li>Cải thiện 30% chỉ số NPS</li>
          <li>
            Tối ưu quy trình chăm sóc khách hàng, giảm thời gian xử lý yêu cầu
            tối 40%
          </li>
        </ul>
      </>
    ),
    href: "customer-experience",
  },
  {
    title: "Dịch vụ Bảo hành",
    image: baoHanh,
    alt: "Bảo hành",
    desc: (
      <>
        <p className="mt-[5px]">
          Viettel CX cung cấp cho doanh nghiệp giải pháp bảo hành toàn diện, với
          đội ngũ nhân sự trên 10 năm kinh nghiệm và trạm sửa chữa trên 63 tỉnh
          thành, bao gồm
        </p>
        <ul className="list-disc mt-4 ms-4 space-y-2">
          <li>Bảo hành tiêu chuẩn</li>
          <li>Bảo hành mở rộng</li>
          <li>Bảo hành tại chỗ</li>
          <li>Bảo hành quốc tế</li>
          <li>Đảm bảo tỷ lệ bảo hành đúng hạn &gt;98%</li>
        </ul>
      </>
    ),
    href: "bao-hanh",
  },
];

function ServicesSection({ children }: { children?: React.ReactNode }) {
  return (
    <section className="max-w-[1596px] mx-auto">
      <div className="flex items-center justify-between py-8">
        <CommonButtonList items={dataServicesLinks} />
      </div>
      <article className="flex items-center h-[452px] gap-5">
        <div className={`${roboto.className} bg-white p-8 rounded-[20px] max-w-[950px] h-full`}
        >
          <h1 className="text-3xl font-medium text-[#9B9B9B]">
            Dịch vụ{" "}
            <span className="font-medium text-black">
              Outsourcing Contact Center
            </span>
          </h1>
          <p className="max-w-[645px] text-lg mt-3">
            Viettel CX cung cấp dịch vụ toàn trình, bao gồm: Nhân sự, nền tảng
            giải pháp, quy trình,... cho hệ thống tổng đài chăm sóc khách hàng
            của doanh nghiệp, giúp:
          </p>

          <div className="flex items-end justify-between gap-10 mt-12 text-[#595959] text-lg">
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
              <div className="space-y-6 mt-6">
                <div className="flex items-center gap-3">
                  <p className="flex items-end justify-end text-right text-[28px] text-black min-w-[130px]">
                    <ArrowUpRight size={18} color="#EA0033" />
                    30 - 40%
                  </p>
                  <p>chi phí vận hành</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="flex items-end justify-end text-right text-[28px] text-black min-w-[130px]">
                    <ArrowDownLeft size={18} color="#EA0033" />
                    95%
                  </p>
                  <p>tỷ lệ kết nối thành công</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-right text-[28px] text-black min-w-[130px]">
                    1 triệu
                  </p>
                  <p>cuộc gọi / ngày</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[20px] h-full">
          <Image src={contact} alt="Contact" className="max-w-[626px] min-h-[452px] " />
        </div>
      </article>

    </section>
  );
}

export default ServicesSection;
