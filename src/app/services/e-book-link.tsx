"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useBookWrapper } from "@/contexts/book-wrapper-context";

interface EBookLink {
  className?: string;
}

export default function EBookLink({ className = "" }: EBookLink) {
  const { openBook } = useBookWrapper();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        openBook();
      }}
      className={`flex items-center relative see-more-link group transition-all duration-300 ${className}`}
    >
      Tìm hiểu thêm
      <ArrowUpRight
        color="#000"
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </button>
  );
}