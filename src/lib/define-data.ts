import { StaticImageData } from "next/image";
import settingIcon from "../../public/svg/setting.svg";
import checkIcon from "../../public/svg/check.svg";
import logicIcon from "../../public/svg/logic.svg";
import shieldIcon from "../../public/svg/shield.svg";
import dvc from "../../public/images/image 2.png"
import dvc2 from "../../public/images/image 3.png"
import dvc3 from "../../public/images/image 4.png"
import dvc4 from "../../public/images/image 6.png"
import dvc5 from "../../public/images/image 7.png"
import dvc6 from "../../public/images/image 8.png"
import dvc7 from "../../public/images/image 9.png"
import dvc8 from "../../public/images/Layer_1.png"
import dvc9 from "../../public/images/Layer_1-1.png"
import dvc10 from "../../public/images/Layer_1-2.png"
import dvc11 from "../../public/images/Layer_1-3.png"
import dvc12 from "../../public/images/Layer_1-4.png"
import dvc13 from "../../public/images/Layer_1-5.png"
import dvc14 from "../../public/images/Layer_1-6.png"

export const dataLink: {
  href: string;
  label: string;
}[] = [
  { href: "/about", label: "Về chúng tôi" },
  { href: "/services", label: "Dịch vụ" },
  { href: "/solutions", label: "Giải pháp" },
  { href: "/contact", label: "Liên hệ" },
];

export const dataServicesHome: {
  value: string;
  label: string;
}[] = [
  { value: "bpo", label: "BPO" },
  { value: "outsourcing", label: "Outsourcing Contact Center" },
  { value: "upsale", label: "Gia tăng doanh số Upsale" },
  { value: "loyalty", label: "Loyalty" },
  { value: "cskh", label: "CSKH VIP / Ưu tiên" },
  { value: "customer-experience", label: "Customer Experience" },
  { value: "voice-of-customer", label: "Voice of Customer" },
  { value: "bao-hanh", label: "Bảo hành" },
];

export const dataServicesLinks: {
  href: string;
  label: string;
}[] = [
  {
    href: "#outsourcing-contact-center",
    label: "Outsourcing Contact center",
  },
  {
    href: "#bpo",
    label: "BPO",
  },
  {
    href: "#upsale",
    label: "UPSALE",
  },
  {
    href: "#loyalty",
    label: "LOYATY",
  },
  {
    href: "#voice-of-customer",
    label: "VOICE OF CUSTOMER",
  },
  {
    href: "#customer-experience",
    label: "CUSTOMER EXPRIENCE",
  },
  {
    href: "#bao-hanh",
    label: "BẢO HÀNH",
  },
];

export const dataWhyUs: {
  icon: StaticImageData;
  title: string;
  desc: string[];
}[] = [
  {
    title: "Chuyên nghiệp",
    icon: settingIcon,
    desc: [
      "Hơn 20 năm kinh nghiệm triển khai dịch vụ, đội ngũ quản lý chuyên nghiệp, chất lượng cao",
      "Kho tri thức phong phú và đa dạng",
    ],
  },
  {
    title: "Hiệu quả",
    icon: checkIcon,
    desc: [
      "Giám sát và quản lý chủ động, toàn diện mọi hoạt động",
      "Quy trình chuyên nghiệp, nhanh chóng",
      "Tối ưu quy trình và chi phí vận hành",
    ],
  },
  {
    title: "Công nghệ tiên phong",
    icon: logicIcon,
    desc: [
      "Tích hợp công nghệ AI, Big Data, Robotics, Cloud computing",
      "Phát triển hệ thống linh hoạt, bắt kịp xu hướng thế giới",
      "Hệ thống tiêu biểu: Trung tâm điều hành thông minh vCOC",
    ],
  },
  {
    title: "Bảo mật",
    icon: shieldIcon,
    desc: [
      "Bảo vệ dữ liệu và hệ thống bằng các biện pháp an ninh mạng tiên tiến",
      "Tuân thủ các tiêu chuẩn bảo mật quốc tế: GDPR, ISO 27001",
      "Kiểm toán, đánh giá định kỳ, chủ động 24/7, phát hiện và xử lý mọi rủi ro",
    ],
  },
]

export const dataPartners: {
  image: StaticImageData;
  name: string;
}[] = [
  {
    image: dvc,
    name: "Dịch vụ công"
  },
  {
    image: dvc2,
    name: "Bảo hiểm"
  },
  {
    image: dvc2,
    name: "Bảo hiểm"
  },
  {
    image: dvc3,
    name: "Ngân hàng"
  },
  {
    image: dvc4,
    name: "Bán lẻ"
  },
  {
    image: dvc5,
    name: "Du lịch"
  },
  {
    image: dvc6,
    name: "Giao thông"
  },
  {
    image: dvc7,
    name: "Y tế"
  },
  {
    image: dvc8,
    name: "Dịch vụ công"
  },
  {
    image: dvc9,
    name: "Bảo hiểm"
  },
  {
    image: dvc10,
    name: "Ngân hàng"
  },
  {
    image: dvc11,
    name: "Bán lẻ"
  },
  {
    image: dvc12,
    name: "Du lịch"
  },
  {
    image: dvc13,
    name: "Giao thông"
  },
  {
    image: dvc14,
    name: "Y tế"
  }
]
