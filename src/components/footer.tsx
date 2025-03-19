import React from "react";
import FooterArrow from "./icons/footer-arrow";
import { fsMagistralBook } from "@/lib/font";
import FormContact from "./form/FormContact";
import FooterMobile from "./mobile/footer-mobile";
import FooterDestop from "./desktop/footer-desktop";

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

      <footer className="border-t-[3px] border-[#EA0033] border-solid pt-8 pb-16 px-6 bg-white hidden lg:block">
        <FooterDestop />
      </footer>
      <footer className="border-t-[3px] border-[#EA0033] border-solid pt-8 pb-8 px-4 bg-white block lg:hidden">
      <FooterMobile />
      </footer>
    </div>
  );
}

export default Footer;
