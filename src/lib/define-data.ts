import { StaticImageData } from "next/image";
import settingIcon from "../../public/svg/setting.svg";
import checkIcon from "../../public/svg/check.svg";
import logicIcon from "../../public/svg/logic.svg";
import shieldIcon from "../../public/svg/shield.svg";
import dvc from "../../public/images/image 2.png";
import dvc2 from "../../public/images/image 3.png";
import boyte from "../../public/images/bo-y-te.png";
import be from "../../public/images/be.png";
import longan from "../../public/images/long-an.png";
import bachmai from "../../public/images/bach-mai.png";
import mb from "../../public/images/mb.png";
import vttelecom from "../../public/images/viettel-telecom.png";
import vtcyberspace from "../../public/images/viettel-cyberspace.png";
import vtdigital from "../../public/images/viettel-digital.png";
import vthightech from "../../public/images/viettel-hightech.png";
import vtmedia from "../../public/images/viettel-media.png";
import vtpost from "../../public/images/viettel-post.png";
import vtsolutions from "../../public/images/viettel-solutions.png";
import insightci from "../../public/svg/insight-ci.svg";
import workforcex from "../../public/svg/workforce-x.svg";
import vcoc from "../../public/svg/vcoc.svg";
import cxbot from "../../public/svg/cxbot.svg";
import knowxhub from "../../public/svg/knowx-hub.svg";
import reputax from "../../public/svg/reputa-x.svg";

import outsourcing from "../../public/images/01. Outsousce Contact center.png";
import bpo from "../../public/images/02. BPO.png";
import upsale from "../../public/images/03. Upsale.png";
import baohanh from "../../public/images/04. BAO HANH.png";
import loyalty from "../../public/images/05. Loyalty.png";
import vip from "../../public/images/06. VIP.png";
import voiceofcustomer from "../../public/images/07. Voice of Customer.png";
import customerexperience from "../../public/images/08. Customer Experience.png";

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
  image: StaticImageData;
  desc: string;
  detail: string;
}[] = [
  {
    value: "outsourcing",
    label: "Outsourcing Contact Center",
    image: outsourcing,
    desc: "Dịch vụ Outsourcing Contact Center",
    detail:
      "Viettel Customer Service cung cấp dịch vụ toàn trình, bao gồm: Nhân sự, nền tảng giải pháp, quy trình,... cho hệ thống tổng đài chăm sóc khách hàng của doanh nghiệp",
  },
  {
    value: "bpo",
    label: "BPO",
    image: bpo,
    desc: "Dịch vụ BPO",
    detail:
      "Tối ưu vận hành, tiết kiệm chi phí và nâng cao hiệu suất bằng dịch vụ BPO - thuê ngoài các quy trình, nhân sự nghiệp vụ",
  },
  {
    value: "upsale",
    label: "Upsale",
    image: upsale,
    desc: "Dịch vụ gia tăng doanh số",
    detail:
      "Tiếp cận khách hàng đa kênh, gia tăng độ phủ về kênh bán, thúc đẩy gia tăng doanh số cùng giải pháp từ Viettel Customer Service",
  },
  {
    value: "bao-hanh",
    label: "Bảo hành",
    image: baohanh,
    desc: "Dịch vụ Bảo hành",
    detail:
      "Viettel Customer Service cung cấp cho doanh nghiệp giải pháp bảo hành toàn diện, với đội ngũ nhân sự trên 10 năm kinh nghiệm và trạm sửa chữa trên 63 tỉnh thành",
  },
  {
    value: "loyalty",
    label: "Loyalty",
    image: loyalty,
    desc: "Dịch vụ Loyalty",
    detail:
      "Giải pháp của Viettel Customer Service giúp doanh nghiệp xây dựng, duy trì và gia tăng sự gắn bó của khách hàng thông qua các chương trình tích điểm, ưu đãi, đặc quyền và cá nhân hóa trải nghiệm",
    },
  {
    value: "cskh",
    label: "CSKH VIP / Ưu tiên",
    image: vip,
    desc: "Dịch vụ CSKH VIP / Ưu tiên",
    detail:
      "Giải pháp cung cấp quà tặng cá nhân hóa theo từng nhóm khách hàng, dịch vụ sự kiện giúp doanh nghiệp tri ân, gắn kết và nâng cao trải nghiệm khách hàng",
  },
  {
    value: "voice-of-customer",
    label: "Voice of Customer",
    image: voiceofcustomer,
    desc: "Dịch vụ Voice of Customer",
    detail:
      "Bảo vệ và phát triển thương hiệu của doanh nghiệp trên môi trường số. Viettel Customer Service giúp doanh nghiệp thu thập, phân tích và khai thác ý kiến khách hàng từ nhiều kênh khác nhau, từ đó phát hiện và cảnh báo khủng hoảng truyền thông",
  },
  {
    value: "customer-experience",
    label: "Customer Experience",
    image: customerexperience,
    desc: "Dịch vụ Customer Experience",
    detail:
      "Dịch vụ Đánh giá & Nâng cao Trải nghiệm Khách hàng (CX) của Viettel CX giúp doanh nghiệp đo lường, phân tích và tối ưu hóa hành trình khách hàng, từ đó cải thiện sự hài lòng và tăng tỷ lệ trung thành",
  },
];

export const dataServicesLinks: {
  href: string;
  label: string;
}[] = [
  {
    href: "#",
    label: "Outsourcing Contact center",
  },
  {
    href: "#",
    label: "BPO",
  },
  {
    href: "#",
    label: "UPSALE",
  },
  {
    href: "#",
    label: "LOYATY",
  },
  {
    href: "#",
    label: "VOICE OF CUSTOMER",
  },
  {
    href: "#",
    label: "CUSTOMER EXPRIENCE",
  },
  {
    href: "#",
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
];

export const dataPartners: {
  image: StaticImageData;
  name: string;
}[] = [
  {
    image: mb,
    name: "MB",
  },
  {
    image: bachmai,
    name: "Bạch Mai",
  },
  {
    image: be,
    name: "Bộ Giáo Dục",
  },
  {
    image: vttelecom,
    name: "Viettel Telecom",
  },
  {
    image: boyte,
    name: "Bộ Y Tế",
  },
  {
    image: longan,
    name: "Long An",
  },
  {
    image: vtcyberspace,
    name: "Viettel Cyberspace",
  },
  {
    image: vtdigital,
    name: "Viettel Digital",
  },
  {
    image: vthightech,
    name: "Viettel Hightech",
  },
  {
    image: vtmedia,
    name: "Viettel Media",
  },
  {
    image: vtpost,
    name: "Viettel Post",
  },
  {
    image: vtsolutions,
    name: "Viettel Solutions",
  },
  {
    image: dvc,
    name: "DVC",
  },
  {
    image: dvc2,
    name: "DVC",
  },
];

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

export const homeSolutions: {
  key: string;
  icon: StaticImageData;
  title: string;
  desc: string;
}[] = [
  {
    key: "insightci",
    icon: insightci,
    title: "Insight CI",
    desc: "Giải pháp quản lý danh tiếng và khảo sát thị trường",
  },
  {
    key: "workforcex",
    icon: workforcex,
    title: "Workforce X",
    desc: "Giải pháp quản lý nhân sự và tương tác khách hàng",
  },
  {
    key: "vcoc",
    icon: vcoc,
    title: "vCOC",
    desc: "Giải pháp tổng đài điều hành thông minh",
  },
  {
    key: "cxbot",
    icon: cxbot,
    title: "CXBOT",
    desc: "Giải pháp quản lý tri thức và tương tác khách hàng",
  },
  {
    key: "knowxhub",
    icon: knowxhub,
    title: "KnowX Hub",
    desc: "Giải pháp quản lý tri thức và tương tác khách hàng",
  },
  {
    key: "reputax",
    icon: reputax,
    title: "Reputa X",
    desc: "Giải pháp quản lý danh tiếng và khảo sát thị trường",
  },
];
