import { roboto } from "@/lib/font";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

function CommonLayout({
  items = [],
  layout,
}: {
  items: Array<{
    title: string | React.ReactNode;
    image: StaticImageData;
    alt: string;
    desc: React.ReactNode;
    href?: string;
    hrefText?: string | React.ReactNode;
  }>;
  layout: "grid" | "list";
}) {
  return (
    <div>
      <ul
        className={
          layout === "grid"
            ? "grid grid-cols-3 gap-4 justify-items-center"
            : "flex flex-col gap-10"
        }
      >
        {layout === "grid"
          ? items.map(({ title, image, desc, href, hrefText, alt }) => (
              <li key={`${title}${image}${desc}`}>
                <div className={`${roboto.className} flex flex-col`}>
                <div className="overflow-hidden">
                <Image 
                    src={image} 
                    alt={alt} 
                    quality={100} 
                    className="w-full transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  />
                  </div>
                  <h3 className="h-[70px] leading-[1.1] text-[26px] mt-3 cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#e45d6f]">{title}</h3>
                  <div className={` p-4 pt-0 ps-0`}>{desc}</div>
                  {href && <Link href={href}>{hrefText}</Link>}
                </div>
              </li>
            ))
          : items.map(({ title, image, desc, href, hrefText, alt }) => (
              <li key={`${title}${image}${desc}`} className="p-10 border border-[#C4C4C4] border-solid rounded-xl">
                <div className={`${roboto.className} flex items-center gap-16`}>
                  <Image src={image} alt={alt} quality={100} className="h-fit" />
                  <div className="flex flex-col justify-between">
                    <h3 className={`text-[26px] mt-3 flex items-center gap-6`}>{title}</h3>
                    <div className={`p-4 ps-0 max-w-[625px]`}>{desc}</div>
                    {href && <Link href={href}>{hrefText}</Link>}
                  </div>
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
}

export default CommonLayout;
