import { StaticImageData } from "next/image";
import settingIcon from "../../public/svg/setting.svg";
import checkIcon from "../../public/svg/check.svg";
import logicIcon from "../../public/svg/logic.svg";
import shieldIcon from "../../public/svg/shield.svg";
import dvc from "../../public/images/image 2.png"
import dvc2 from "../../public/images/image 3.png"
import boyte from "../../public/images/bo-y-te.png"
import be from "../../public/images/be.png"
import longan from "../../public/images/long-an.png"
import bachmai from "../../public/images/bach-mai.png"
import mb from "../../public/images/mb.png"
import vttelecom from "../../public/images/viettel-telecom.png"
import vtcyberspace from "../../public/images/viettel-cyberspace.png"
import vtdigital from "../../public/images/viettel-digital.png"
import vthightech from "../../public/images/viettel-hightech.png"
import vtmedia from "../../public/images/viettel-media.png"
import vtpost from "../../public/images/viettel-post.png"
import vtsolutions from "../../public/images/viettel-solutions.png"

export const dataLink: {
  href: string;
  label: string;
}[] = [
  { href: "/about", label: "Về chúng tôi" },
  { href: "/services", label: "Dịch vụ" },
  { href: "/solutions", label: "Giải pháp" },
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
    image: mb,
    name: "MB"
  },
  {
    image: bachmai,
    name: "Bạch Mai"
  },
  {
    image: be,
    name: "Bộ Giáo Dục"
  },
  {
    image: vttelecom,
    name: "Viettel Telecom"
  },
  {
    image: boyte,
    name: "Bộ Y Tế"
  },
  {
    image: mb,
    name: "MB"
  },
  {
    image: bachmai,
    name: "Bạch Mai"
  },
  {
    image: be,
    name: "Bộ Giáo Dục"
  },
  {
    image: vttelecom,
    name: "Viettel Telecom"
  },
  {
    image: boyte,
    name: "Bộ Y Tế"
  },
]

export const slug_solution: {
    href: string;
    label: string;
    id: number;
}[] = [
  {
    href: "TỔNG ĐÀI ĐA KÊNH",
    label: "TỔNG ĐÀI ĐA KÊNH",
    id: 1,
  },
  {
    href: "TỔNG ĐÀI ẢO",
    label: "TỔNG ĐÀI ẢO",
    id: 2,
  },
  {
    href: "QUẢN LÝ DANH TIẾNG",
    label: "QUẢN LÝ DANH TIẾNG",
    id: 3,
  },
  {
    href: "TƯƠNG TÁC KHÁCH HÀNG",
    label: "TƯƠNG TÁC KHÁCH HÀNG",
    id: 4,
  },
  {
    href: "QUẢN LÝ TRI THỨC",
    label: "QUẢN LÝ TRI THỨC",
    id: 5,
  },
  {
    href: "BẢO HÀNH",
    label: "BẢO HÀNH",
    id: 6,
  },
];