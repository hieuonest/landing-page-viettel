import { roboto } from "@/lib/font";
import React from "react";
import CommonHeading from "../components/common-heading";
import SolutionsSection from "../components/solutions-section";
import { Metadata } from "next";
import HeaderSolution from "./header-solution";
import BodySolution from "./body-solution";

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
      <HeaderSolution />
      <BodySolution />


    </div>
  );
}

export default Solutions;
