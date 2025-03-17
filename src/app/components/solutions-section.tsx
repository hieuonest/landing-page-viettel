"use client";
import React from "react";
import CommonButtonList from "./common-button-list";
import CommonLayoutSwitch from "./common-layout-switch";
import CommonLayout from "./common-layout";
import omni from "../../../public/images/solution-omni.png";
import bot from "../../../public/images/solution-bot.png";
import reputa from "../../../public/images/solution-reputa.png";
import coc from "../../../public/images/solution-coc.png";
import interaction from "../../../public/images/solution-interaction.png";
import knowledge from "../../../public/images/solution-knowledge.png";
import workforce from "../../../public/images/solution-workforce.png";
import crm from "../../../public/images/solution-crm.png";
import loyalty from "../../../public/images/solution-loyalty.png";
import { MoveRight } from "lucide-react";

function SolutionsSection() {
  const [layout, setLayout] = React.useState<"grid" | "list">("list");

  return (
    <section>
      <div className="flex items-center justify-between max-w-[1120px] mx-auto py-8">
        <CommonButtonList items={items} />
        <CommonLayoutSwitch layout={layout} setLayout={setLayout} />
      </div>

      <div className="max-w-[1120px] mx-auto pt-36">
        <CommonLayout items={solutions} layout={layout} />
      </div>
    </section>
  );
}

const NextComponent = () => (
  <div className="flex items-center self-end gap-2">
    <MoveRight className="text-[#EA0033]" />
    <span className="">Tìm hiểu thêm</span>
  </div>
);

const items = [
  {
    href: "TỔNG ĐÀI ĐA KÊNH",
    label: "TỔNG ĐÀI ĐA KÊNH",
  },
  {
    href: "TỔNG ĐÀI ẢO",
    label: "TỔNG ĐÀI ẢO",
  },
  {
    href: "QUẢN LÝ DANH TIẾNG",
    label: "QUẢN LÝ DANH TIẾNG",
  },
  {
    href: "TƯƠNG TÁC KHÁCH HÀNG",
    label: "TƯƠNG TÁC KHÁCH HÀNG",
  },
  {
    href: "QUẢN LÝ TRI THỨC",
    label: "QUẢN LÝ TRI THỨC",
  },
  {
    href: "BẢO HÀNH",
    label: "BẢO HÀNH",
  },
];

const solutions = [
  {
    title: "OmniX - Tổng đài đa kênh hợp nhất, nâng tầm trải nghiệm khách hàng",
    image: omni,
    alt: "OmniX",
    desc: (
      <p className="text-[#595959]">
        OmniX là nền tảng tổng đài thông minh trên nền tảng điện toán đám mây,
        tích hợp AI giúp doanh nghiệp quản lý tất cả các tương tác khách hàng
        trên một hệ thống duy nhất, từ thoại, email, SMS, OTT đến mạng xã hội.
        Cung cấp trải nghiệm liền mạch, tối ưu hiệu suất vận hành và đảm bảo an
        toàn dữ liệu vượt trội.
      </p>
    ),
    href: "#x-omni",
    hrefText: <NextComponent />,
  },
  {
    title: "CXBot - Nhân viên tổng đài AI ảo, tăng tốc hỗ trợ khách hàng",
    image: bot,
    alt: "CXBot",
    desc: (
      <p className="text-[#595959]">
        CXBot là trợ lý ảo AI giúp doanh nghiệp tự động hóa quy trình chăm sóc
        khách hàng. Giải quyết nhanh chóng yêu cầu, trả lời thông minh 24/7 trên
        mọi kênh giao tiếp. Giảm tải công việc cho tổng đài viên, rút ngắn thời
        gian phản hồi và nâng cao trải nghiệm khách hàng trên kênh số.
      </p>
    ),
    href: "#x-omni",
    hrefText: <NextComponent />,
  },
  {
    title: "InsightCI – Hiểu khách hàng sâu hơn, tối ưu dịch vụ tốt hơn",
    image: reputa,
    alt: "InsightCI",
    desc: (
      <p className="text-[#595959]">
        InsightCI là nền tảng phân tích tương tác khách hàng mạnh mẽ, ứng dụng
        công nghệ Big Data để khai thác và phân tích mọi tương tác trên đa kênh.
        Giúp doanh nghiệp thấu hiểu nhu cầu khách hàng, tối ưu quy trình dịch vụ
        và nâng cao mức độ hài lòng, từ đó thúc đẩy tăng trưởng bền vững.
      </p>
    ),
    href: "#x-omni",
    hrefText: <NextComponent />,
  },
  {
    title: "vCOC – Điều hành dịch vụ khách hàng theo thời gian thực",
    image: interaction,
    alt: "vCOC",
    desc: (
      <p className="text-[#595959]">
        vCOC giúp doanh nghiệp giám sát và điều hành toàn bộ hoạt động dịch vụ
        khách hàng một cách trực quan và chính xác. Cung cấp KPI theo thời gian
        thực, cảnh báo sớm và hỗ trợ ra quyết định nhanh chóng, đảm bảo hiệu
        suất vận hành luôn ở mức tối ưu.
      </p>
    ),
    href: "#x-omni",
    hrefText: <NextComponent />,
  },
  {
    title:
      "KnowX Hub – Quản lý tri thức thông minh, hỗ trợ nhân viên & khách hàng",
    image: coc,
    alt: "KnowX Hub",
    desc: (
      <p className="text-[#595959]">
        KnowX Hub là trung tâm tri thức hiện đại giúp doanh nghiệp lưu trữ, tổ
        chức và truy xuất thông tin nhanh chóng. Tích hợp AI để hỗ trợ tìm kiếm
        thông minh, giúp nhân viên tổng đài và khách hàng tiếp cận thông tin
        chính xác tức thì, tối ưu hóa quy trình giải quyết vấn đề.
      </p>
    ),
    href: "#x-omni",
    hrefText: <NextComponent />,
  },
  {
    title:
      "WorkforceX – Quản lý nguồn lực thông minh, tối ưu hiệu suất tổng đài",
    image: knowledge,
    alt: "WorkforceX",
    desc: (
      <p className="text-[#595959]">
        WorkforceX là hệ thống quản lý nhân sự chuyên biệt cho tổng đài, giúp tự
        động lên lịch, phân công nhân lực, giám sát hiệu suất và tối ưu hóa
        nguồn lực theo nhu cầu thực tế. Ứng dụng AI và phân tích dữ liệu để dự
        báo và điều phối nhân sự linh hoạt, đảm bảo chất lượng dịch vụ khách
        hàng luôn đạt chuẩn cao nhất.
      </p>
    ),
    href: "#x-omni",
    hrefText: <NextComponent />,
  },
  {
    title: "ReputaX – Theo dõi & quản lý danh tiếng thương hiệu bằng AI",
    image: workforce,
    alt: "ReputaX",
    desc: (
      <p className="text-[#595959]">
        ReputaX là công cụ giám sát và phân tích thương hiệu mạnh mẽ, sử dụng AI
        và Big Data để theo dõi phản hồi của khách hàng trên mạng xã hội. Giúp
        doanh nghiệp bảo vệ danh tiếng, ứng phó kịp thời với khủng hoảng truyền
        thông, đồng thời cung cấp báo cáo chi tiết về hình ảnh thương hiệu so
        với đối thủ cạnh tranh.
      </p>
    ),
    href: "#x-omni",
    hrefText: <NextComponent />,
  },
  {
    title: "LiteCRM – Xây dựng mối quan hệ khách hàng bền vững",
    image: crm,
    alt: "LiteCRM",
    desc: (
      <p className="text-[#595959]">
        LiteCRM giúp doanh nghiệp lưu trữ và quản lý toàn diện dữ liệu khách
        hàng, cung cấp góc nhìn 360 độ để cá nhân hóa trải nghiệm và duy trì mối
        quan hệ lâu dài. Dễ dàng tích hợp với các hệ thống khác, tối ưu hóa
        chiến lược chăm sóc khách hàng và gia tăng giá trị vòng đời khách hàng.
      </p>
    ),
    href: "#x-omni",
    hrefText: <NextComponent />,
  },
  {
    title: "LoyaltyX – Gắn kết khách hàng, tạo dựng lòng trung thành",
    image: loyalty,
    alt: "LoyaltyX",
    desc: (
      <p className="text-[#595959]">
        LoyaltyX là nền tảng quản lý khách hàng trung thành, giúp doanh nghiệp
        xây dựng chương trình tích điểm, ưu đãi và đặc quyền hấp dẫn. Thúc đẩy
        sự gắn bó của khách hàng thông qua trải nghiệm cá nhân hóa, tăng tỷ lệ
        giữ chân khách hàng và tối đa hóa giá trị thương hiệu.
      </p>
    ),
    href: "#x-omni",
    hrefText: <NextComponent />,
  },
];

export default SolutionsSection;
