import React from "react";
import { Metadata } from "next";
import HeaderSolution from "./header-solution";
import BodySolution from "./body-solution";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Giải pháp | Viettel Cx",
    description:
      "Viettel CX tiên phong nâng tầm trải nghiệm khách hàng bằng công nghệ sáng tạo và đổi mới trên mọi lĩnh vực.",
    openGraph: {
      title: "Giải pháp | Viettel Cx",
      description:
        "Viettel CX tiên phong nâng tầm trải nghiệm khách hàng bằng công nghệ sáng tạo và đổi mới trên mọi lĩnh vực.",
      url: "",
      type: "website",
      images: [
        {
          url: "/images/contact.jpeg",
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
        "Viettel CX tiên phong nâng tầm trải nghiệm khách hàng bằng công nghệ sáng tạo và đổi mới trên mọi lĩnh vực.",
      images: ["/images/contact.jpeg"],
    },
    alternates: {
      canonical: "/images/contact.jpeg",
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
