import React from "react";
import { fsMagistral, roboto } from "@/lib/font";
import Image from "next/image";
import logo from "../../../public/images/viettel-cx-logo.png";
import Link from "next/link";
import viettelCert from "../../../public/images/viettel-certificate.png";
import thongTinDienTu from "../../../public/images/thong-tin-dien-tu.png";
import dichVuCong from "../../../public/images/dich-vu-cong.png";
import boCongThuong from "../../../public/images/bo-cong-thuong.png";
import { dataLink } from "@/lib/define-data";

export default function FooterMobile() {
  return (
    <div className=" relative">
      <div className="flex flex-col gap-4 ">
        <Image src={logo} alt="Viettel CX" priority width={155} />
        <h3 className={`${fsMagistral.className} uppercase`}>
          Công ty TNHH MTV dịch vụ khách hàng Viettel
        </h3>

        <div className={`${roboto.className} text-xs text-[#636060] space-y-3`}>
          <p>
            Cơ quan chủ quản: Công ty TNHH MTV Dịch vụ Khách hàng Viettel, trực
            thuộc Tập đoàn Công nghiệp - Viễn thông Quân đội.
          </p>
          <p>
            Mã số doanh nghiệp: 0110917293 do Sở Kế hoạch và Đầu tư Thành phố Hà
            Nội cấp lần đầu ngày 18/12/2024.
          </p>
          <p>Chịu trách nhiệm nội dung: Ông Nguyễn Tiến Dũng.</p>
        </div>
      </div>
      <hr />
      <div className="flex justify-between">
        <div
          className={`${roboto.className} space-y-1 flex flex-col max-w-[297px] min-w-[110px] uppercase`}
        >
          {dataLink.map(({ href, label }) => (
            <Link
              key={`${href}${label}`}
              href={href}
              className="hover:text-[#EA0033] transition-colors duration-300 ease-in-out text-sm text-black"
            >
              {label}
            </Link>
          ))}
        </div>
        <div
          className={`${roboto.className} text-sm text-black space-y-2 flex flex-col max-w-[297px] self-end`}
        >
          <div>
            Điện thoại: <a href="tel:02462656168">02462656168</a>
          </div>
          <div>
            Email: <a href="mailto:viettelcx.com.vn">viettelcx.com.vn</a>
          </div>
          <div>
            Địa chỉ: Toà nhà OCT 3B Khu Đô thị mới Resco, Cổ Nhuế, Xuân Đỉnh,
            Bắc Từ Liêm, Hà Nội
          </div>
        </div>


      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-[6px] sm:gap-[8px] absolute top-0 right-0 xl:relative xl:top-auto xl:right-auto">
          <div className="flex items-center gap-1 justify-center">
            <Link href="/" className="w-fit">
              <Image
                src="/svg/facebook.svg"
                alt="Facebook"
                width={22}
                height={22}
                className="sm:w-[28px] sm:h-[28px]"
              />
            </Link>
            <Link
              href="https://zalo.me/1570758701534064697"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/svg/zalo.svg" alt="Zalo" width={22}
                height={22}
                className="sm:w-[28px] sm:h-[28px]" />
            </Link>
            <Link
              href="https://www.tiktok.com/@viettelcskh?_t=ZS-8ufLkoN6e1q&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/svg/tiktok.svg"
                alt="Tiktok"
                width={22}
                height={22}
                className="sm:w-[28px] sm:h-[28px]"
              />
            </Link>
          </div>
          <Image
            src={viettelCert}
            alt="Viettel Certificate"
            width={100}
            className="flex xl:self-end sm:w-[140px]"
            quality={100}
          />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Image
            src={thongTinDienTu}
            alt="Cổng thông tin điện tử - Bộ Quốc Phòng"
            width={142}
            quality={100}
          />
          <Image
            src={dichVuCong}
            alt="Cổng dịch vụ công - Bộ Quốc Phòng"
            width={143}
            quality={100}
          />
          <Image
            src={boCongThuong}
            alt="Đã thông báo Bộ Công Thương"
            width={132}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
