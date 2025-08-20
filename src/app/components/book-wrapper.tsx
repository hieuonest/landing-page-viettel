"use client";
// import { Button } from "@/components/ui/button";
import FlipbookViewer from "@/components/ui/flipbook-viewer";
// import { X } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";
interface BookWrapperProps {
  onClose?: () => void;
  pdfUrl?: string;
  initialPage?: number;
  width?: number;
  height?: number;
}

export default function BookWrapper({
  // onClose,
  pdfUrl = "/PROFILE_VCX.pdf",
}: BookWrapperProps) {
  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.style.overflowY = "hidden";
    }

    return () => {
      if (htmlElement) {
        htmlElement.style.overflowY = "auto";
      }
    };
  }, []);
  return (
    <div
      className="fixed inset-0 z-[10000] top-0 left-0 right-0 bottom-0 w-screen h-[100%] overflow-hidden "
      // initial={{ opacity: 0, scale: 1.1, rotateX: -10 }}
      // animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      // exit={{ opacity: 0, scale: 0.9, rotateX: 10 }}
      // transition={{
      //   duration: 0.6,
      //   ease: [0.16, 1, 0.3, 1]
      // }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* <motion.div
        className="absolute top-4 right-4 z-50"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0, rotate: 180 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      >
        <Button
          aria-label="Close"
          data-testid="close-button"
          className="bg-black rounded-full size-10 text-white px-4 py-2 hover:text-[#EA0033] shadow-lg"
          onClick={() => {
            window.history.back();
          }}
        >
          <X />
        </Button>
      </motion.div> */}

      <motion.div
        className="h-full w-full flex items-center justify-center bg-[#000000be]"
        style={{ transformOrigin: "center center" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <FlipbookViewer
          pdfUrl={pdfUrl}
          className=""
          disableShare={false}
          shareUrl=""
        />
      </motion.div>
    </div>
  );
}
