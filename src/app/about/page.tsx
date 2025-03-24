import React from "react";
import { Metadata } from "next";
import HeaderAbout from "./header-about";
import BodyAbout from "./body-about";
import FooterAbout from "./footer-about";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Viettel Cx | về chúng tôi",
    description:
      "Viettel Customer Service tiên phong nâng tầm trải nghiệm khách hàng bằng công nghệ sáng tạo. Chúng tôi là chuyên gia dẫn đầu về các giải pháp, dịch vụ khách hàng.",
    openGraph: {
      title: "Viettel Cx | về chúng tôi",
      description:
        "Viettel Customer Service tiên phong nâng tầm trải nghiệm khách hàng bằng công nghệ sáng tạo. Chúng tôi là chuyên gia dẫn đầu về các giải pháp, dịch vụ khách hàng.",
      url: "http://171.244.63.137:8280/about",
      type: "website",
      images: [
        {
          url: "http://171.244.63.137:8280/images/website.png",
          width: 1151,
          height: 768,
          alt: "Viettel Cx",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Viettel Cx | về chúng tôi",
      description:
        "Viettel Customer Service tiên phong nâng tầm trải nghiệm khách hàng bằng công nghệ sáng tạo. Chúng tôi là chuyên gia dẫn đầu về các giải pháp, dịch vụ khách hàng.",
      images: ["http://171.244.63.137:8280/images/website.png"],
    },
    alternates: {
      canonical: "http://171.244.63.137:8280/images/website.png",
    },
  };
}

function About() {
  return (
    <main className="bg-white">
      <HeaderAbout />
      <BodyAbout />
      <FooterAbout />
    </main>
  );
}

export default About;
