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
import omnix from "../../public/svg/omnix.svg";
import outsourcing from "../../public/images/01. Outsousce Contact center.png";
import bpo from "../../public/images/02. BPO.png";
import upsale from "../../public/images/03. Upsale.png";
import baohanh from "../../public/images/04. BAO HANH.png";
import loyalty from "../../public/images/05. Loyalty.png";
import vip from "../../public/images/06. VIP.png";
import voiceofcustomer from "../../public/images/07. Voice of Customer.png";
import customerexperience from "../../public/images/08. Customer Experience.png";
import { JSX } from "react";

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
  detailHome: string;
  detail?: {
    list: string[];
    title?: string;
  }[];
  additional?: string | string[];
}[] = [
  {
    value: "outsourcing",
    label: "Outsourcing Contact Center",
    image: outsourcing,
    desc: "Dịch vụ Outsourcing Contact Center",
    detailHome:
      "Viettel Customer Service cung cấp dịch vụ toàn trình, bao gồm: Nhân sự, nền tảng giải pháp, quy trình,... cho hệ thống tổng đài chăm sóc khách hàng của doanh nghiệp",
  },
  {
    value: "bpo",
    label: "BPO",
    image: bpo,
    desc: "Dịch vụ BPO",
    detailHome:
      "Tối ưu vận hành, tiết kiệm chi phí và nâng cao hiệu suất bằng dịch vụ BPO - thuê ngoài các quy trình, nhân sự nghiệp vụ",
    detail: [
      {
        list: [
          "IT helpdesk",
          "Quản lý tài chính kế toán",
          "Nhân viên lễ tân",
          "Dịch vụ tuyển dụng",
        ],
      },
    ],
  },
  {
    value: "upsale",
    label: "Upsale",
    image: upsale,
    desc: "Dịch vụ gia tăng doanh số",
    detailHome:
      "Tiếp cận khách hàng đa kênh, gia tăng độ phủ về kênh bán, thúc đẩy gia tăng doanh số cùng giải pháp từ Viettel Customer Service",
    detail: [
      {
        list: [
          "Cung cấp dịch vụ Telesale với đội ngũ 1000++ nhân sự trên 15 năm kinh nghiệm",
          "Tư vấn chiến lược upsell, cross-sell bằng AI, Big Data",
          "Thực hiện 200.000++ cuộc gọi/ngày, năng suất trung bình 500++ dữ liệu/tư vấn viên/ngày",
          "Bán hàng kết hợp CSKH, quảng bá sản phẩm trên các kênh số",
        ],
      },
    ],
  },
  {
    value: "bao-hanh",
    label: "Bảo hành",
    image: baohanh,
    desc: "Dịch vụ Bảo hành",
    detailHome:
      "Viettel Customer Service cung cấp cho doanh nghiệp giải pháp bảo hành toàn diện, với đội ngũ nhân sự trên 10 năm kinh nghiệm và trạm sửa chữa trên 63 tỉnh thành",
    detail: [
      {
        list: [
          "Bảo hành tiêu chuẩn",
          "Bảo hành mở rộng",
          "Bảo hành tại chỗ",
          "Bảo hành quốc tế",
        ],
      },
    ],
    additional: "Đảm bảo tỷ lệ bảo hành đúng hạn >98%",
  },
  {
    value: "loyalty",
    label: "Loyalty",
    image: loyalty,
    desc: "Dịch vụ Loyalty",
    detailHome:
      "Giải pháp của Viettel Customer Service giúp doanh nghiệp xây dựng, duy trì và gia tăng sự gắn bó của khách hàng thông qua các chương trình tích điểm, ưu đãi, đặc quyền và cá nhân hóa trải nghiệm",
    detail: [
      {
        list: [
          "Tư vấn và triển khai chương trình loyalty",
          "Cung cấp giải pháp, hệ thống Loyalty",
        ],
      },
    ],
  },

  {
    value: "cskh",
    label: "CSKH VIP / Ưu tiên",
    image: vip,
    desc: "Dịch vụ CSKH VIP / Ưu tiên",
    detailHome:
      "Giải pháp cung cấp quà tặng cá nhân hóa theo từng nhóm khách hàng, dịch vụ sự kiện giúp doanh nghiệp tri ân, gắn kết và nâng cao trải nghiệm khách hàng",
    detail: [
      {
        list: [
          "Cung cấp quà tặng (vật lý, evoucher) với đa dạng danh mục quà tặng, phù hợp với từng phân khúc khách hàng theo yêu cầu của doanh nghiệp",
          "Cung cấp dịch vụ tổ chức sự kiện chăm sóc khách hàng ưu tiên (Online và offline) đảm bảo cá nhân hoá trải nghiệm, nâng cao sự hài lòng, phù hợp với từng mô hình doanh nghiệp",
        ],
      },
    ],
  },
  {
    value: "voice-of-customer",
    label: "Voice of Customer",
    image: voiceofcustomer,
    desc: "Dịch vụ Voice of Customer",
    detailHome:
      "Bảo vệ và phát triển thương hiệu của doanh nghiệp trên môi trường số. Viettel Customer Service giúp doanh nghiệp thu thập, phân tích và khai thác ý kiến khách hàng từ nhiều kênh khác nhau, từ đó phát hiện và cảnh báo khủng hoảng truyền thông",
    detail: [
      {
        list: [
          "Theo dõi các thông tin, bài viết, bình luận, phản hồi từ đa kênh MXH về thương hiệu của DN. Phân tích và tổng hợp báo cáo về sức khỏe của thương hiệu",
          "Dịch vụ phát triển thương hiệu và xử lý sự cố:  Seeding/pha loãng/ xử lý sự cố",
          "Dịch vụ khảo sát khách hàng",
        ],
      },
    ],
    additional: ["20.000++ tương tác/tháng", "12.000++ lượt seeding/tháng"],
  },
  {
    value: "customer-experience",
    label: "Customer Experience",
    image: customerexperience,
    desc: "Dịch vụ Customer Experience",
    detailHome:
      "Dịch vụ Đánh giá & Nâng cao Trải nghiệm Khách hàng (CX) của Viettel Customer Service giúp doanh nghiệp đo lường, phân tích và tối ưu hóa hành trình khách hàng, từ đó cải thiện sự hài lòng và tăng tỷ lệ trung thành",
    detail: [
      {
        title: "Giải pháp của Viettel Customer Service:",
        list: [
          "Đánh giá Trải nghiệm khách hàng",
          "Phân tích hành trình khách hàng",
          "Tư vấn và triển khai các giải pháp nâng cao trải nghiệm khách hàng",
          "Cá nhân hoá dịch vụ bằng AI và Automation",
        ],
      },
      {
        title: "Giúp:",
        list: [
          "Tăng 25% tỷ lệ giữ chân khách hàng",
          "Cải thiện 30% chỉ số NPS",
          "Tối ưu quy trình chăm sóc khách hàng, giảm thời gian xử lý yêu cầu tối 40%",
        ],
      },
    ],
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

// export const dataWhyUs: {
//   icon: StaticImageData;
//   title: string;
//   desc: string[];
// }[] = [
//   {
//     title: "Chuyên nghiệp",
//     icon: settingIcon,
//     desc: [
//       "Hơn 20 năm kinh nghiệm triển&nbsp;khai&nbsp;dịch&nbsp;vụ",
//       "Đội ngũ quản lý chuyên nghiệp, chất&nbsp;lượng&nbsp;cao",
//       "Kho tri thức phong phú và&nbsp;đa&nbsp;dạng",
//     ],
//   },
//   {
//     title: "Hiệu quả",
//     icon: checkIcon,
//     desc: [
//       "Giám sát và quản lý chủ động, toàn&nbsp;diện&nbsp;mọi&nbsp;hoạt&nbsp;động",
//       "Quy trình chuyên nghiệp, nhanh&nbsp;chóng",
//       "Tối ưu quy trình và chi&nbsp;phí&nbsp;vận&nbsp;hành",
//     ],
//   },
//   {
//     title: "Công nghệ tiên phong",
//     icon: logicIcon,
//     desc: [
//       "Tích hợp công nghệ AI, Big Data, Robotics, Cloud&nbsp;computing",
//       "Phát triển hệ thống linh hoạt, bắt kịp xu&nbsp;hướng&nbsp;thế&nbsp;giới",
//       "Hệ thống tiêu biểu: Trung tâm điều hành thông&nbsp;minh&nbsp;vCOC",
//     ],
//   },
//   {
//     title: "Bảo mật",
//     icon: shieldIcon,
//     desc: [
//       "Bảo vệ dữ liệu và hệ thống bằng các biện pháp an ninh mạng tiên&nbsp;tiến",
//       "Tuân thủ các tiêu chuẩn bảo mật quốc tế: GDPR,&nbsp;ISO&nbsp;27001",
//       "Kiểm toán, đánh giá định kỳ, chủ động 24/7, phát hiện và xử lý mọi&nbsp;rủi&nbsp;ro",
//     ],
//   },
// ];

export const dataWhyUs: {
  icon: StaticImageData;
  title: string;
  desc: Array<string | { text: string; nowrap: boolean }>[]; // Each sentence is an array of fragments
}[] = [
  {
    title: "Chuyên nghiệp",
    icon: settingIcon,
    desc: [
      ["Hơn 20 năm kinh nghiệm ", { text: "triển khai dịch vụ", nowrap: true }],
      [
        "Đội ngũ quản lý chuyên nghiệp, ",
        { text: "chất lượng cao", nowrap: true },
      ],
      ["Kho tri thức phong phú ", { text: "và đa dạng", nowrap: true }],
    ],
  },
  {
    title: "Hiệu quả",
    icon: checkIcon,
    desc: [
      [
        "Giám sát và quản lý chủ động, ",
        { text: "toàn diện mọi hoạt động", nowrap: true },
      ],
      ["Quy trình chuyên nghiệp, ", { text: "nhanh chóng", nowrap: true }],
      ["Tối ưu quy trình và ", { text: "chi phí vận hành", nowrap: true }],
    ],
  },
  {
    title: "Công nghệ tiên phong",
    icon: logicIcon,
    desc: [
      [
        "Tích hợp công nghệ AI, Big Data, Robotics, ",
        { text: "Cloud computing", nowrap: true },
      ],
      [
        "Phát triển hệ thống linh hoạt, bắt kịp ",
        { text: "xu hướng thế giới", nowrap: true },
      ],
      [
        "Hệ thống tiêu biểu: Trung tâm điều hành ",
        { text: "thông minh vCOC", nowrap: true },
      ],
    ],
  },
  {
    title: "Bảo mật",
    icon: shieldIcon,
    desc: [
      [
        "Bảo vệ dữ liệu và hệ thống bằng các biện pháp an ninh mạng ",
        { text: "tiên tiến", nowrap: true },
      ],
      [
        "Tuân thủ các tiêu chuẩn bảo mật quốc tế: ",
        { text: "GDPR, ISO 27001", nowrap: true },
      ],
      [
        "Kiểm toán, đánh giá định kỳ, chủ động 24/7, phát hiện và xử lý ",
        { text: "mọi rủi ro", nowrap: true },
      ],
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
  desc: string | JSX.Element;
  detail: string;
}[] = [
  {
    key: "omni-x",
    icon: omnix,
    title: "Omni-X",
    desc: "Tổng đài đa kênh hợp nhất, nâng tầm trải nghiệm khách hàng",
    detail:
      "OmniX là nền tảng tổng đài thông minh trên nền tảng điện toán đám mây, tích hợp AI giúp doanh nghiệp quản lý tất cả các tương tác khách hàng trên một hệ thống duy nhất, từ thoại, email, SMS, OTT đến mạng xã hội. Cung cấp trải nghiệm liền mạch, tối ưu hiệu suất vận hành và đảm bảo an toàn dữ liệu vượt trội.",
  },
  {
    key: "insightci",
    icon: insightci,
    title: "Insight CI",
    desc: "Hiểu khách hàng sâu hơn, tối ưu dịch vụ tốt hơn",
    detail:
      "InsightCI là nền tảng phân tích tương tác khách hàng mạnh mẽ, ứng dụng công nghệ Big Data để khai thác và phân tích mọi tương tác trên đa kênh. Giúp doanh nghiệp thấu hiểu nhu cầu khách hàng, tối ưu quy trình dịch vụ và nâng cao mức độ hài lòng, từ đó thúc đẩy tăng trưởng bền vững.",
  },
  {
    key: "workforcex",
    icon: workforcex,
    title: "Workforce X",
    desc: "Quản lý nguồn lực thông minh, tối ưu hiệu suất tổng đài",
    detail:
      "WorkforceX là hệ thống quản lý nhân sự chuyên biệt cho tổng đài, giúp tự động lên lịch, phân công nhân lực, giám sát hiệu suất và tối ưu hóa nguồn lực theo nhu cầu thực tế. Ứng dụng AI và phân tích dữ liệu để dự báo và điều phối nhân sự linh hoạt, đảm bảo chất lượng dịch vụ khách hàng luôn đạt chuẩn cao nhất.",
  },
  {
    key: "vcoc",
    icon: vcoc,
    title: "vCOC",
    desc: "Điều hành dịch vụ khách hàng theo thời gian thực",
    detail:
      "vCOC giúp doanh nghiệp giám sát và điều hành toàn bộ hoạt động dịch vụ khách hàng một cách trực quan và chính xác. Cung cấp KPI theo thời gian thực, cảnh báo sớm và hỗ trợ ra quyết định nhanh chóng, đảm bảo hiệu suất vận hành luôn ở mức tối ưu.",
  },
  {
    key: "cxbot",
    icon: cxbot,
    title: "CXBOT",
    desc: "Nhân viên tổng đài AI ảo, tăng tốc hỗ trợ khách hàng",
    detail:
      "CXBot là trợ lý ảo AI giúp doanh nghiệp tự động hóa quy trình chăm sóc khách hàng. Giải quyết nhanh chóng yêu cầu, trả lời thông minh 24/7 trên mọi kênh giao tiếp. Giảm tải công việc cho tổng đài viên, rút ngắn thời gian phản hồi và nâng cao trải nghiệm khách hàng trên kênh số.",
  },
  {
    key: "knowxhub",
    icon: knowxhub,
    title: "KnowX Hub",
    desc: "Quản lý tri thức thông minh, hỗ trợ nhân viên & khách hàng",
    detail:
      "KnowX Hub là trung tâm tri thức hiện đại giúp doanh nghiệp lưu trữ, tổ chức và truy xuất thông tin nhanh chóng. Tích hợp AI để hỗ trợ tìm kiếm thông minh, giúp nhân viên tổng đài và khách hàng tiếp cận thông tin chính xác tức thì, tối ưu hóa quy trình giải quyết vấn đề.",
  },
  {
    key: "reputax",
    icon: reputax,
    title: "Reputa X",
    desc: " Theo dõi & quản lý danh tiếng thương hiệu bằng AI",
    detail:
      "ReputaX là công cụ giám sát và phân tích thương hiệu mạnh mẽ, sử dụng AI và Big Data để theo dõi phản hồi của khách hàng trên mạng xã hội. Giúp doanh nghiệp bảo vệ danh tiếng, ứng phó kịp thời với khủng hoảng truyền thông, đồng thời cung cấp báo cáo chi tiết về hình ảnh thương hiệu so với đối thủ cạnh tranh.",
  },
];
