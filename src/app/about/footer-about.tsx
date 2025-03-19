import { roboto } from "@/lib/font";
import React from "react";
import radialGraph from "../../../public/images/radial.png";
import Image from "next/image";

export default function FooterAbout() {
  return (
    <section className="mt-[130px] min-h-[510px] bg-[#191213] flex items-center justify-center p-8 gap-20">
      <div className="relative">
        <Image src={radialGraph} alt="Radial Graph" />
        <div
          className={`${roboto.className} text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-[298px]`}
        >
          <h4 className="text-[60px] font-semibold">4.000+</h4>
          <p className="font-light text-2xl">
            nhân sự hỗ trợ khách hàng 24/7 trên 63 tỉnh/ thành
          </p>
        </div>
      </div>
      <div
        className={`${roboto.className} text-white max-w-[550px] flex flex-col gap-5 text-lg ml-5`}
      >
        <p className="text-[18px] text-[#858585]">
          Với triết lý phụng sự, trong hơn 20 năm thành lập và phát triển, hành
          trình của chúng tôi không chỉ là hỗ trợ, giải đáp, mà là hành trình
          đồng hành, lắng nghe và thấu hiểu mọi câu chuyện của hơn 120 triệu
          khách hàng tại Việt Nam và trên 10 quốc gia/vùng lãnh thổ.
        </p>

        <p className="text-[18px] text-[#858585]">
          Những kho báu vô giá từ hành trình lắng nghe đó là tiền đề vững chắc
          để chúng tôi làm tốt hơn, tiên phong nâng tầm trải nghiệm khách hàng
          bằng công nghệ sáng tạo.
        </p>
      </div>
    </section>
  );
}
