"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import iconScroll from "../../../public/scroll-top.svg";

function ButtonToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return showButton ? (
    <button
      className="w-[40px] h-[40px] bg-[#fff] rounded-full fixed bottom-9 right-4 z-50 flex items-center justify-center shadow-[0_4px_4px_0_rgba(0,0,0,0.1)]"
      onClick={handleOnClick}
    >
      <Image src={iconScroll} alt="Scroll to top" width={17.5} height={23} />
    </button>
  ) : null;
}

export default ButtonToTop;
