import React from "react";
import { Metadata } from "next";
import HeaderSolution from "./header-solution";
import BodySolution from "./body-solution";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Giải pháp | Viettel Cx",
    description:
      "Viettel Customer Service cung cấp giải pháp, phần mềm tương tác đa kênh hợp nhất OmniX, tổng đài ảo AI bot, tổng đài thông minh, hệ thống điều hành thông minh, phần mềm CSKH,…",
    openGraph: {
      title: "Giải pháp | Viettel Cx",
      description:
        "Viettel Customer Service cung cấp giải pháp, phần mềm tương tác đa kênh hợp nhất OmniX, tổng đài ảo AI bot, tổng đài thông minh, hệ thống điều hành thông minh, phần mềm CSKH,…",
      url: "http://171.244.63.137:8280/solutions",
      type: "website",
      images: [
        {
          url: "http://171.244.63.137:8280/images/website.png",
          width: 1151,
          height: 768,
          alt: "Giải pháp | Viettel Cx",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Viettel Cx",
      description:
        "Viettel Customer Service cung cấp giải pháp, phần mềm tương tác đa kênh hợp nhất OmniX, tổng đài ảo AI bot, tổng đài thông minh, hệ thống điều hành thông minh, phần mềm CSKH,…",
      images: ["http://171.244.63.137:8280/images/website.png"],
    },
    alternates: {
      canonical: "http://171.244.63.137:8280/images/website.png",
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
