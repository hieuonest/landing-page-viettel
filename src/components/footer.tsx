import React from "react";
import FooterArrow from "./icons/footer-arrow";
import { fsMagistralBook } from "@/lib/font";
import FormContact from "./form/FormContact";
import FooterMobile from "./mobile/footer-mobile";
import FooterDestop from "./desktop/footer-desktop";

function Footer() {
  return (
    <div>
      <div className="bg-[#595959] p-4 min-h-[175px] flex items-center flex-col xl:flex-row justify-start xl:justify-center gap-5 xl:gap-11">
        <div className="xl:max-w-[1572px] w-[100%] flex gap-[40px] min-[300px]:gap-5 flex-col xl:flex-row justify-start xl:justify-center ">
          <div
            className="flex items-start min-w-[80%] justify-center relative xl:min-w-[522px]"
            id="contact"
          >
            <span className="relative lg:absolute lg:left-[-45px] xl:left-[0] xl:relative mr-5 xl:mr-2 top-2 z-2 ">
              <FooterArrow />
            </span>
            <p
              className={`${fsMagistralBook.className} text-white text-base min-[400px]:text-[20px] sm:text-[22px] xl:text-[28px] leading-[25px] md:leading-[35px]  text-left xl:text-right`}
            >
              Hãy để Viettel CX đồng hành cùng bạn nâng tầm trải nghiệm khách
              hàng!
            </p>
          </div>
          <FormContact />
        </div>
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
