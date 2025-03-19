import React from "react";
import { fsMagistralBook, roboto } from "@/lib/font";
import { dataWhyUs } from "@/lib/define-data";
import Image from "next/image";

export default function BodyAbout() {
  return (
    <section className="mt-[150px] px-20 flex flex-col items-center gap-10">
      <h1 className={`${fsMagistralBook.className} text-[45px] text-center`}>
        Vì sao lựa chọn Viettel CX?
      </h1>

      <div className="grid grid-cols-4 w-full mt-10 gap-10">
        {dataWhyUs.map((item, index) => (
          <div
            key={index}
            className={`${roboto.className} flex flex-col items-center gap-6 p-4`}
          >
            <div className="min-h-[80px]">
              <Image src={item.icon} alt="Setting Icon" />
            </div>
            <h6
              className={`text-center text-3xl max-[1478px]:text-[26px] font-semibold`}
            >
              {item.title}
            </h6>
            <ul className="text-lg text-[#595959] leading-[23px] flex flex-col p-5 max-[1478px]:px-5 gap-4">
              {item.desc.map((desc, index) => (
                <li key={index}>
                  <p className="text-center text-[18px] text-[#595959]">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
