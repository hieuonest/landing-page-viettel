import React from "react";
import { Metadata } from "next";
import HeaderAbout from "./header-about";
import BodyAbout from "./body-about";
import FooterAbout from "./footer-about";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Viettel Cx | về chúng tôi",
    description:
      "Viettel CX tiên phong nâng tầm trải nghiệm khách hàng bằng công nghệ sáng tạo.",
    openGraph: {
      title: "Viettel Cx | về chúng tôi",
      description:
        "Viettel CX tiên phong nâng tầm trải nghiệm khách hàng bằng công nghệ sáng tạo.",
      url: "",
      type: "website",
      images: [
        {
          url: "/images/contact.jpeg",
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
        "Viettel CX tiên phong nâng tầm trải nghiệm khách hàng bằng công nghệ sáng tạo.",
      images: ["/images/contact.jpeg"],
    },
    alternates: {
      canonical: "/images/contact.jpeg",
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
