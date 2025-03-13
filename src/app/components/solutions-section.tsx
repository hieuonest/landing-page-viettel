"use client";
import React from "react";
import CommonButtonList from "./common-button-list";
import CommonLayoutSwitch from "./common-layout-switch";
import CommonLayout from "./common-layout";
import Image from "next/image";
import xomni from "../../../public/images/x-omni.png";
import omni from "../../../public/images/solution-omni.png";
import Link from "next/link";
import { MoveRight } from "lucide-react";

function SolutionsSection() {
  const [layout, setLayout] = React.useState<"grid" | "list">("list");

  return (
    <section>
      <div className="flex items-center justify-between max-w-[1120px] mx-auto py-8">
        <CommonButtonList items={items} />
        <CommonLayoutSwitch layout={layout} setLayout={setLayout} />
      </div>

      <div className="max-w-[1120px] mx-auto">
        <CommonLayout items={solutions} layout={layout} />
      </div>
    </section>
  );
}

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
    title: (
      <div className="flex items-center gap-6">
        <Image src={xomni} alt="X-OMNI" quality={100} />
        <span className="text-[26px] text-[#595959]">Tổng đài đa kênh</span>
      </div>
    ),
    image: omni,
    alt: "X.Omni",
    desc: (
      <p className="text-[#595959]">
        Giải pháp tương tác đa kênh hợp nhất, tích hợp tương tác khách hàng qua
        nhiều kênh: VoIP, Livechat, email, social media message, text, video
        chat... trong một giao diện hợp nhất
      </p>
    ),
    href: "#x-omni",
    hrefText: (
      <div className="flex items-center gap-2">
        <MoveRight className="text-[#EA0033]" />
        <span className="">
          Tìm hiểu thêm
        </span>
      </div>
    ),
  },
];

export default SolutionsSection;
