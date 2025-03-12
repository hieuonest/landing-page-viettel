import React from "react";
import { Button } from "./ui/button";
import FooterArrow from "./icons/footer-arrow";
import { fsMagistralBook, roboto, sarabun } from "@/lib/font";

function Footer() {
  return (
    <div>
      <div className="bg-[#595959] p-4 min-h-[141px] flex items-center justify-center gap-11">
        <div className="flex items-start max-w-[522px]">
          <span className="relative top-2">
            <FooterArrow />
          </span>
          <p
            className={`${fsMagistralBook.className} text-white text-[28px] text-right`}
          >
            Hãy để Viettel CX đồng hành cùng bạn nâng tầm trải nghiệm khách
            hàng!
          </p>
        </div>
        <form className={`flex items-center gap-2 [&>div]:min-h-10 ${roboto.className}`}>
          <div>
            <input type="text" id="name" name="name" placeholder="Họ và tên" className="h-10 px-4 min-w-[267px] rounded-sm bg-transparent border border-[#858585] border-solid placeholder:text-[#858585] active:outline-none focus:outline-none" />
          </div>
          <div>
            <input type="email" id="email" name="email" placeholder="Email" className="h-10 px-4 min-w-[267px] rounded-sm bg-transparent border border-[#858585] border-solid placeholder:text-[#858585] active:outline-none focus:outline-none"/>
          </div>
          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Số điện thoại"
              className="h-10 px-4 min-w-[267px] rounded-sm bg-transparent border border-[#858585] border-solid placeholder:text-[#858585] active:outline-none focus:outline-none cursor-[#858585]"
            />
          </div>

          <Button type="submit" className={`h-10 px-16 bg-white uppercase text-[#EA0033] !font-bold ${sarabun.className} text-lg hover:bg-white`}>Liên hệ</Button>
        </form>
      </div>

      <footer></footer>
    </div>
  );
}

export default Footer;
