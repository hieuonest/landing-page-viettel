import { roboto } from "@/lib/font";
import React from "react";
import CommonHeading from "../components/common-heading";
import SolutionsSection from "../components/solutions-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giải pháp",
  description: "Nền tảng giải pháp, phần mềm của Viettel CX",
}

function Solutions() {
  return (
    <div>
      <main className="bg-white pb-36">
        <CommonHeading
          title={
            <span>
              Nền tảng Giải pháp,<br />
              phần mềm của Viettel CX
            </span>
          }
          heroContent={
            <h2
              className={`${roboto.className} text-3xl font-light max-w-[560px] text-black`}
            >
              Là thành viên thuộc hệ sinh thái của Tập đoàn Viettel, Viettel CX
              kế thừa nền tảng công nghệ tiên tiến, hạ tầng viễn thông vững chắc
              và kinh nghiệm phục vụ hàng triệu khách hàng trên toàn quốc.
            </h2>
          }
          paddingBottomTitle="pb-[50px]"
          background="bg-[url(/images/solution-page-hero.png)]"
        />

        <SolutionsSection />
      </main>
    </div>
  );
}

export default Solutions;
