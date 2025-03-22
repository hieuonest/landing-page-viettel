"use client";
import { roboto } from "@/lib/font";
import React from "react";
import radialGraph from "../../../public/images/radial.png";
import Image from "next/image";
import MotionWrapper from "@/components/ui/motion-wrapper";
import { useCountUp } from "../components/use-count-up";

export default function FooterAbout() {
  return (
    <section className="mt-[60px] xs:mt-[130px] min-h-[395px] xl:min-h-[510px] bg-[#191213] block sm:flex items-center justify-center p-8 gap-5 md:gap-10 xl:gap-20">
      <div className="relative mx-auto sm:mx-0 w-[316px] mb-[1.75rem] sm:mb-[0] xl:w-[auto]">
        <MotionWrapper
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, rotate: 180 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Image src={radialGraph} alt="Radial Graph" />
        </MotionWrapper>
        <div
          className={`${roboto.className} text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-[298px]`}
        >
          <h4 className="text-[40px] xl:text-[60px] font-semibold">
            {useCountUp(4000, 4000, 100).toLocaleString("de-DE")}+
          </h4>
          <MotionWrapper
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="font-light text-[18px] xl:text-2xl"
          >
            nhân sự hỗ trợ khách hàng 24/7 trên 63 tỉnh/ thành
          </MotionWrapper>
        </div>
      </div>
      <div
        className={`${roboto.className} flex-1  text-white max-w-[550px] flex flex-col gap-3 sm:gap-5 text-lg ml-0 sm:ml-5`}
      >
        <MotionWrapper
        element="p"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-[16px] md:text-[18px] text-[#858585]"
        >
          Với triết lý phụng sự, trong hơn 20 năm thành lập và phát triển, hành
          trình của chúng tôi không chỉ là hỗ trợ, giải đáp, mà là hành trình
          đồng hành, lắng nghe và thấu hiểu mọi câu chuyện của hơn 120 triệu
          khách hàng tại Việt Nam và trên 10 quốc gia/vùng lãnh thổ.
        </MotionWrapper>

        <MotionWrapper
        element="p"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }} className="text-[16px] md:text-[18px] text-[#858585]">
          Những kho báu vô giá từ hành trình lắng nghe đó là tiền đề vững chắc
          để chúng tôi làm tốt hơn, tiên phong nâng tầm trải nghiệm khách hàng
          bằng công nghệ sáng tạo.
        </MotionWrapper>
      </div>
    </section>
  );
}
