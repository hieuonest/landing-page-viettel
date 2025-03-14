import React from "react";
import { Button } from "./ui/button";
import FooterArrow from "./icons/footer-arrow";
import { fsMagistral, fsMagistralBook, roboto, sarabun } from "@/lib/font";
import Image from "next/image";
import logo from "../../public/images/viettel-cx-logo.png";
import Link from "next/link";
import viettelCert from "../../public/images/viettel-certificate.png";
import thongTinDienTu from "../../public/images/thong-tin-dien-tu.png";
import dichVuCong from "../../public/images/dich-vu-cong.png";
import boCongThuong from "../../public/images/bo-cong-thuong.png";
import { dataLink } from "@/lib/define-data";
import FormContact from "./form/FormContact";

function Footer() {
  return (
    <div>
      <div className="bg-[#595959] p-4 min-h-[141px] flex items-center justify-center gap-11 max-3xl:gap-8 ">
        <div className="flex items-start w-[522px]" id="contact">
          <span className="relative top-2">
            <FooterArrow />
          </span>
          <p
            className={`${fsMagistralBook.className} text-white text-[26px] text-right max-[1560px]:text-[24px] `}
          >
            Hãy để Viettel CX đồng hành cùng bạn nâng tầm trải nghiệm khách
            hàng!
          </p>
        </div>
      <FormContact />
      </div>

      <footer className="border-t-[3px] border-[#EA0033] border-solid pt-8 pb-16 px-6 bg-white">
        <div className="max-w-[1572px] mx-auto flex justify-between">
          <div className="flex flex-col gap-4 ">
            <Image src={logo} alt="Viettel CX" priority width={155} />
            <h3 className={`${fsMagistral.className} uppercase`}>
              Công ty TNHH MTV dịch vụ khách hàng Viettel
            </h3>

            <div
              className={`${roboto.className} text-xs text-[#9B9B9B] max-w-[421px] space-y-3`}
            >
              <p>
                Cơ quan chủ quản: Công ty TNHH MTV Dịch vụ Khách hàng Viettel,
                trực thuộc Tập đoàn Công nghiệp - Viễn thông Quân đội.
              </p>
              <p>
                Mã số doanh nghiệp: 0110917293 do Sở Kế hoạch và Đầu tư Thành
                phố Hà Nội cấp lần đầu ngày 18/12/2024.
              </p>
              <p>Chịu trách nhiệm nội dung: Ông Nguyễn Tiến Dũng.</p>
            </div>
          </div>
          <div
            className={`${roboto.className} text-sm text-black space-y-3 flex flex-col max-w-[297px] self-end`}
          >
            <p>Điện thoại: <a href="tel:02462656168">
              02462656168
            </a></p>
            <p>Email: <a href="mailto:viettelcx.com.vn" >viettelcx.com.vn</a></p>
            <p>
              Địa chỉ: Toà nhà OCT 3B Khu Đô thị mới Resco, Cổ Nhuế, Xuân Đỉnh,
              Bắc Từ Liêm, Hà Nội
            </p>
          </div>

          <div
            className={`${roboto.className} space-y-1 flex flex-col max-w-[297px] uppercase  self-end`}
          >
            {
              dataLink.map(({ href, label }) => (
                <Link
                  key={`${href}${label}`}
                  href={href}
                  className="hover:text-[#EA0033] transition-colors duration-300 ease-in-out text-sm text-black"
                >
                  {label}
                </Link>
              ))
            }
          </div>

          <div
            className="flex flex-col justify-between"
          >
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-1 justify-end">
                <Link href="/" className="w-fit">
                  <Image src="/svg/facebook.svg" alt="Facebook" width={28} height={28} />
                </Link>
                <Link href="/">
                  <Image src="/svg/zalo.svg" alt="Zalo" width={28} height={28} />
                </Link>
                <Link href="/">
                  <Image src="/svg/tiktok.svg" alt="Tiktok" width={28} height={28} />
                </Link>
              </div>
              <Image src={viettelCert} alt="Viettel Certificate" width={140} className="flex self-end" quality={100} />
            </div>

            <div className="flex items-center gap-3">
              <Image src={thongTinDienTu} alt="Cổng thông tin điện tử - Bộ Quốc Phòng" width={142} quality={100} />
              <Image src={dichVuCong} alt="Cổng dịch vụ công - Bộ Quốc Phòng" width={143} quality={100} />
              <Image src={boCongThuong} alt="Đã thông báo Bộ Công Thương" width={132} quality={100} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
