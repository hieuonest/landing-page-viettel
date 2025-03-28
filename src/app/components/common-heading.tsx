import { fsMagistralBook } from "@/lib/font";
import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

function CommonHeading({
  title,
  image,
  video,
  imageAlt,
  heroContent,
  background = "bg-black",
  paddingBottomTitle = "pb-[84px]",
}: {
  title: string | ReactNode;
  video?: string;
  image?: StaticImageData;
  imageAlt?: string;
  heroContent: ReactNode;
  background?: string;
  paddingBottomTitle?: string;
}) {
  return (
    <div>
      <section className={`max-w-[1120px] mx-auto pt-36 ${paddingBottomTitle}`}>
        <h1 className={`${fsMagistralBook.className} text-3xl max-w-[400px]`}>
          {title}
        </h1>
      </section>

      <section
        className={`h-[401px] ${background}
        } bg-no-repeat bg-cover bg-center pt-[77px] z-[1] relative`}
      >
        <div className="max-w-[1120px] mx-auto flex justify-center gap-11">
          {heroContent}
          {image && imageAlt ? (
            <div className="relative w-[712px]">
              <Image
                src={image}
                alt={imageAlt}
                className="absolute bottom-[42%] transform translate-y-1/2"
                quality={100}
              />
            </div>
          ) : video ? (
            <div className="relative w-[712px]">
              <video
                autoPlay
                loop
                muted
                className="w-full h-[522px] overflow-hidden object-cover absolute bottom-[42%] transform translate-y-1/2"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag
              </video>
            </div>
          ) : (
            <div className="w-[712px]" />
          )}
        </div>
      </section>
    </div>
  );
}

export default CommonHeading;
