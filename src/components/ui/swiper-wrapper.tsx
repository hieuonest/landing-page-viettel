"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { roboto } from "@/lib/font";
import Link from "next/link";
import loyalty from "../../../public/images/loyalty.png";
import MotionWrapper from "@/components/ui/motion-wrapper";
import { fadeInBottomVariants } from "@/lib/utils";

type SwiperWrapperTypes = {
  children: React.ReactNode
}

function SwiperWrapper({
  children,
  ...props
}: SwiperWrapperTypes) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <MotionWrapper
      initial="hidden"
      viewport={{ once: true, amount: 0.5 }}
      whileInView="visible"
      variants={fadeInBottomVariants}
      className="relative"
    >
      <Swiper
        {...props}
      >
        {children}
      </Swiper>
    </MotionWrapper>
  );
}

export default SwiperWrapper;
