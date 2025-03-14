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
            ? "grid grid-cols-3 gap-6 justify-items-center"
            : "flex flex-col gap-10"
        }
      >
        {layout === "grid"
          ? items.map(({ title, image, desc, href, hrefText, alt }) => (
              <li key={`${title}${image}${desc}`}>
                <article
                  className={`${roboto.className} flex flex-col`}
                  id={href}
                >
                  <div className="overflow-hidden">
                    <Image
                      src={image}
                      alt={alt}
                      quality={100}
                      className="w-full transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-col gap-2 min-h-[350px]">
                    <h3 className="min-h-[70px] max-h-[80px] leading-[1.1] text-[24px] mt-3 cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#EA0033]">
                      {title}
                    </h3>
                    <div className={`p-4 pt-0 ps-0`}>{desc}</div>
                    {href && <Link href={href} className="flex mt-auto">{hrefText}</Link>}
                  </div>
                </article>
              </li>
            ))
          : items.map(({ title, image, desc, href, hrefText, alt }) => (
              <li
                key={`${title}${image}${desc}`}
                className="border border-[#C4C4C4] border-solid rounded-xl"
              >
                <article
                  className={`${roboto.className} flex items-start p-10 justify-between relative `}
                  id={href}
                >
                  <div className="overflow-hidden">
                    <Image
                      src={image}
                      alt={alt}
                      quality={100}
                      
                      className="h-fit  transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-col justify-between max-w-[663px] flex-1 min-h-[208px] space-y-2">
                    <h3 className={`text-[26px] flex items-center gap-6 cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#EA0033]`}>
                      {title}
                    </h3>
                    <div className="">{desc}</div>
                    {href && <Link href={href} className="relative flex-1 flex">{hrefText}</Link>}
                  </div>
                </article>
              </li>
            ))}
      </ul>
    </div>
  );
}

export default CommonLayout;
