import React from "react";
import { Metadata } from "next";
import HeaderAbout from "./header-about";
import BodyAbout from "./body-about";
import FooterAbout from "./footer-about";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Viettel Customer Service | Về chúng tôi",
    description:
      "Viettel Customer Service tiên phong nâng tầm trải nghiệm khách hàng bằng công nghệ sáng tạo. Chúng tôi là chuyên gia dẫn đầu về các giải pháp, dịch vụ khách hàng.",
    openGraph: {
      title: "Viettel Customer Service | Về chúng tôi",
      description:
        "Viettel Customer Service tiên phong nâng tầm trải nghiệm khách hàng bằng công nghệ sáng tạo. Chúng tôi là chuyên gia dẫn đầu về các giải pháp, dịch vụ khách hàng.",
      url: "https://viettelcx.com.vn/about",
      type: "website",
      images: [
        {
          url: "https://viettelcx.com.vn/images/website.png",
          width: 1151,
          height: 768,
          alt: "Viettel Customer Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Viettel Customer Service | Về chúng tôi",
      description:
        "Viettel Customer Service tiên phong nâng tầm trải nghiệm khách hàng bằng công nghệ sáng tạo. Chúng tôi là chuyên gia dẫn đầu về các giải pháp, dịch vụ khách hàng.",
      images: ["https://viettelcx.com.vn/images/website.png"],
    },
    alternates: {
      canonical: "https://viettelcx.com.vn/about",
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
