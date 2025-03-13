'use client'
import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

function ButtonToTop() {
  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button className="fixed bottom-9 right-4 z-50 bg-[#A2A2A2] rounded-full shadow-lg" onClick={handleOnClick}>
      <FaCircleArrowUp color="white" size={40} />
    </button>
  );
}

export default ButtonToTop;
