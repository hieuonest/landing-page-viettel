import React from "react";
import { fsMagistralBook, roboto } from "@/lib/font";
import { dataWhyUs } from "@/lib/define-data";
import Image from "next/image";
import MotionWrapper from "@/components/ui/motion-wrapper";
import { fadeInBottomVariants } from "@/lib/utils";

export default function BodyAbout() {
  return (
    <section className="mt-[60px] xs:mt-[80px] md:mt-[100px] lg:mt-[150px] max-w-[95%] mx-auto lg:px-20 big-pc:px-5 3xl:px-20 flex flex-col items-center gap-3 lg:gap-10">
      <MotionWrapper
        element="h1"
        initial="hidden"
        viewport={{ once: true, amount: 0.4 }}
        whileInView="visible"
        variants={fadeInBottomVariants}
        className={`${fsMagistralBook.className} text-[26px] xxs:text-[32px] xm:text-[38px] lg:text-[45px] text-center`}
      >
        Vì sao lựa chọn Viettel Customer Service?
      </MotionWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 big-pc:grid-cols-4 w-full mt-3 xs:mt-10 gap-3 xs:gap-5 lg:gap-10">
        {dataWhyUs.map((item, index) => (
          <MotionWrapper
            initial="hidden"
            viewport={{ once: true, amount: 0.5 }}
            whileInView="visible"
            variants={fadeInBottomVariants}
            key={index}
            className={`${roboto.className} flex flex-col items-center gap-2 xs:gap-6 p-2 px-0 xs:px-2 lg:p-4`}
          >
            <div className="min-h-[91px] flex align-bottom">
              <Image src={item.icon} alt="Setting Icon" quality={100} />
            </div>
            <h6 className="text-center text-[22px] xxs:text-[18px] xs:text-[18px] xm:text-[22px] md:text-3xl xl-2:text-[26px] font-semibold">
              {item.title}
            </h6>
            <ul className="text-lg text-[#595959] leading-[23px] flex flex-col w-full space-y-4">
              {item.desc.map((sentence, index) => (
                <li key={index} className="">
                  <p
                    className="text-center text-[16px] md:text-[18px] text-[#595959] break-keep whitespace-normal"
                    // dangerouslySetInnerHTML={{ __html: desc }}
                  >
                    {sentence.map((part, i) =>
                      typeof part === "string" ? (
                        part
                      ) : (
                        <span key={i} className="whitespace-nowrap">
                          {part.text}
                        </span>
                      )
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}
