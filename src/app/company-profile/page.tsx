import React from 'react'
import BookWrapper from '../components/book-wrapper'
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Viettel Customer Services | Profile",
    description:
      "Viettel Customer Service cung cấp hệ sinh thái: dịch vụ tổng đài Contact center outsourcing, BPO, Upsell, telesales, tư vấn trải nghiệm khách hàng CX, loyalty, quà tặng…",
    openGraph: {
      siteName: "Viettel Customer Services",
      title: "Viettel Customer Services | Profile",
      description:
        "Viettel Customer Service cung cấp hệ sinh thái: dịch vụ tổng đài Contact center outsourcing, BPO, Upsell, telesales, tư vấn trải nghiệm khách hàng CX, loyalty, quà tặng…",
      url: "https://viettelcx.com.vn/company-profile",
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
      title: "Viettel Customer Services | Profile",
      description:
        "Viettel Customer Service cung cấp hệ sinh thái: dịch vụ tổng đài Contact center outsourcing, BPO, Upsell, telesales, tư vấn trải nghiệm khách hàng CX, loyalty, quà tặng…",
      images: ["https://viettelcx.com.vn/images/website.png"],
    },
    alternates: {
      canonical: "https://viettelcx.com.vn/images/services",
    },
    keywords: [
      "Viettel",
      "Viettel chăm sóc khách hàng",
      "Viettelcx services",
      "Viettel Customer Service",
      "Viettel Cx",
      "Chăm sóc khách hàng",
      "chăm sóc khách hàng Viettel",
      "dịch vụ khách hàng Viettel",
      "giải pháp CX",
    ],
    robots: "index, follow",
  };
}

const CompanyProfile = () => {
  return (
    <div className='pt-20'>
      <div className='w-full h-[500px]'></div>
      <BookWrapper />
    </div>
  )
}

export default CompanyProfile