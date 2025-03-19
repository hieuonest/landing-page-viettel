import { roboto } from "@/lib/font";
import React from "react";
import CommonHeading from "../components/common-heading";
import SolutionsSection from "../components/solutions-section";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Viettel Cx",
    description: "Viettel CX kế thừa nền tảng công nghệ tiên tiến, hạ tầng viễn thông vững chắc và kinh nghiệm phục vụ hàng triệu khách hàng trên toàn quốc.",
    openGraph: {
      title: "Viettel Cx",
      description: "Viettel CX kế thừa nền tảng công nghệ tiên tiến, hạ tầng viễn thông vững chắc và kinh nghiệm phục vụ hàng triệu khách hàng trên toàn quốc.",
      url: "https://chamsua.vn/wp-content/uploads/2024/12/300anh-gai-xinh-toc-ngang-vai-2k2-2k3-2k4-2k6-2k7-2k9-tuyen-49.jpg",
      type: "website",
      images: [
        {
          url: "https://chamsua.vn/wp-content/uploads/2024/12/300anh-gai-xinh-toc-ngang-vai-2k2-2k3-2k4-2k6-2k7-2k9-tuyen-49.jpg",
          width: 1200,
          height: 630,
          alt: "Viettel Cx",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Viettel Cx",
      description: "Viettel CX kế thừa nền tảng công nghệ tiên tiến, hạ tầng viễn thông vững chắc và kinh nghiệm phục vụ hàng triệu khách hàng trên toàn quốc.",
      images: ["https://chamsua.vn/wp-content/uploads/2024/12/300anh-gai-xinh-toc-ngang-vai-2k2-2k3-2k4-2k6-2k7-2k9-tuyen-49.jpg"],
    },
  };
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
