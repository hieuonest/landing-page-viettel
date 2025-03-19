import React from "react";
import { Metadata } from "next";
import HeaderAbout from "./header-about";
import BodyAbout from "./body-about";
import FooterAbout from "./footer-about";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Viettel Cx",
    description:
      "Viettel CX tiên phong nâng tầm trải nghiệm khách hàng bằng công nghệ sáng tạo.",
    openGraph: {
      title: "Viettel Cx",
      description:
        "Viettel CX tiên phong nâng tầm trải nghiệm khách hàng bằng công nghệ sáng tạo.",
      url: "",
      type: "website",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "Viettel Cx",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Viettel Cx",
      description:
        "Viettel CX tiên phong nâng tầm trải nghiệm khách hàng bằng công nghệ sáng tạo.",
      images: [""],
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
