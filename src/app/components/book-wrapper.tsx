"use client";
import CloseIcon from "@/components/icons/close-icon";
import { Button } from "@/components/ui/button";
import { CrossIcon, X } from "lucide-react";
import { useState } from "react";
import { FlipbookViewer } from "react-pdf-flipbook-viewer";

interface BookWrapperProps {
  onClose?: () => void;
}

export default function BookWrapper({ onClose }: BookWrapperProps) {
  return (
    <div className='book-wrapper flex flex-col md:items-center md:justify-center fixed inset-0 z-[10000] bg-[#000000e5]'>
      <Button
        className='absolute top-4 right-4 z-50 p-2 h-[32px] w-[32px] !text-black'
        variant='outline'
        onClick={onClose}
      >
        <X />
      </Button>
      <FlipbookViewer pdfUrl='/sample.pdf' disableShare className="page-flip-book" />
    </div>
  );
}
