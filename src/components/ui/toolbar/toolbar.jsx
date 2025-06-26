import React from "react";
import { Button } from "../button";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Zoom from "./zoom";
import useScreenSize from "@/hooks/use-screensize";
import { on } from "events";
import { Download } from "lucide-react";
import Link from "next/link";

const Toolbar = ({ flipbookRef, pdfDetails, viewerStates }) => {
  const { width: screenWidth } = useScreenSize();
  const pagesInFlipView =
    (viewerStates.currentPageIndex + 1) % 2 === 0 &&
    viewerStates.currentPageIndex + 1 !== pdfDetails.totalPages
      ? `${viewerStates.currentPageIndex + 1} - ${
          viewerStates.currentPageIndex + 2
        }`
      : viewerStates.currentPageIndex + 1;

  // Full screen >>>>>>>>>
  // const fullScreen = useCallback(() => {
  //     if (screenfull.isEnabled) {
  //         screenfull.toggle(containerRef.current, { navigationUI: "hide" });
  //     }
  //     screenfull.on('error', (event) => {
  //         alert('Failed to enable fullscreen', event);
  //     });
  // }, [screenfull, containerRef]);

  // Keyboard shortcuts >>>>>>>>>
  // useEffect(() => {
  //     const handleRight = () => flipbookRef.current.pageFlip().flipNext();
  //     const handleLeft = () => flipbookRef.current.pageFlip().flipPrev();

  //     keyboardjs.bind('right', null, handleRight);
  //     keyboardjs.bind('left', null, handleLeft);
  //     // keyboardjs.bind('f', null, fullScreen);

  //     return () => {
  //         keyboardjs.unbind('right', null, handleRight);
  //         keyboardjs.unbind('left', null, handleLeft);
  //         // keyboardjs.unbind('f', null, fullScreen);
  //     };
  // }, [flipbookRef, fullScreen]);
  // screenWidth < 768 ? flipbookRef.current.pageFlip().turnToPrevPage() :
  // screenWidth < 768 ? flipbookRef.current.pageFlip().turnToNextPage() :
  return (
    <div className="px-3 w-full bg-transparent">
      <div className="flex items-center gap-2 pb-2 max-xl:pt-2">
        <div className="hidden lg:block flex-1"></div>
        <Button
          onClick={() => {
            screenWidth < 768 ?
                flipbookRef.current.pageFlip().turnToPrevPage() :
            flipbookRef.current.pageFlip().flipPrev();
          }}
          disabled={viewerStates.currentPageIndex === 0}
          variant="default"
          size="icon"
          className="size-10 rounded-full bg-[#000000d3] border-[2px] border-white hover:border-[#EA0033] min-w-8 text-white hover:text-[#EA0033] absolute left-2 top-1/2 -translate-y-1/2"
        >
          <ArrowLeft className="size-4 min-w-4" />
        </Button>
        <Button
          onClick={() => {
            // screenWidth < 768 ?
            //     flipbookRef.current.pageFlip().turnToNextPage() :
            flipbookRef.current.pageFlip().flipNext();
          }}
          disabled={
            screenWidth < 768
              ? viewerStates.currentPageIndex === pdfDetails?.totalPages - 1 // Mobile: disable only on last page
              : viewerStates.currentPageIndex === pdfDetails?.totalPages - 1 ||
                viewerStates.currentPageIndex === pdfDetails?.totalPages - 2 // Desktop: disable on last 2 pages
          }
          variant="default"
          size="icon"
          className="size-10 rounded-full bg-[#000000d3] border-[2px] border-white hover:border-[#EA0033] min-w-8 text-white hover:text-[#EA0033] absolute right-2 top-1/2 -translate-y-1/2"
        >
          <ArrowRight className="size-4 min-w-4" />
        </Button>
        <Zoom zoomScale={viewerStates.zoomScale} screenWidth={screenWidth} />
        <Link href={"/PDFViewer"} target="_blank" rel="noopener noreferrer">
          <Button
            variant="default"
            size="icon"
            className="size-10 rounded-full min-w-8 text-white hover:text-[#EA0033]"
          >
            <Download className="size-4 min-w-4" />
          </Button>
        </Link>
        <div className="flex-1"></div>
        {pdfDetails?.totalPages > 0 && (
          <p className="text-sm font-medium absolute text-white top-2">
            {pagesInFlipView} of {pdfDetails?.totalPages}
          </p>
        )}
      </div>
    </div>
  );
};

export default Toolbar;
