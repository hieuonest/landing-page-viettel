'use client';
import React, { useCallback, useRef, useState } from "react";
import { pdfjs, Document } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import Toolbar from "./toolbar/toolbar";
import { cn } from "@/lib/utils";
import Flipbook from "./flipbook/flipbook";
import screenfull from 'screenfull';
import { TransformWrapper } from "react-zoom-pan-pinch";
import PdfLoading from "./pad-loading/pdf-loading";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const FlipbookViewer = ({ pdfUrl, shareUrl, className, disableShare }) => {
  const containerRef = useRef();
  const flipbookRef = useRef();
  const [pdfLoading, setPdfLoading] = useState(true);
  const [pdfDetails, setPdfDetails] = useState(null);
  const [viewerStates, setViewerStates] = useState({
    currentPageIndex: 0,
    zoomScale: 1,
  });

  // Setting pdf details on document load
  const onDocumentLoadSuccess = useCallback(async (document) => {
    try {
      const pageDetails = await document.getPage(1);
      setPdfDetails({
        totalPages: document.numPages,
        width: pageDetails.view[2],
        height: pageDetails.view[3],
      });
      setPdfLoading(false);
    } catch (error) {
      console.error('Error loading document:', error);
    }
  }, []);
  
  // h-[20.163rem] xs:h-[25.163rem] lg:h-[33.163rem] xl:h-[34.66rem]
  return (
    <div ref={containerRef} className={cn("relative w-full h-full overflow-hidden", className)}> 
      {pdfLoading && <PdfLoading />}
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess} loading={<></>} className="flex flex-col w-full h-full justify-between">
        {(pdfDetails && !pdfLoading) &&
          <TransformWrapper
            doubleClick={{ disabled: true }}
            pinch={{ step: 2 }}
            disablePadding={viewerStates?.zoomScale <= 1}
            initialScale={1}
            minScale={1}
            maxScale={5}
            onTransformed={({ state }) => setViewerStates({ ...viewerStates, zoomScale: state.scale })}
          >
            <div className="w-full relative bg-transparent flex flex-col justify-between h-full gap-2">
              <Flipbook
                viewerStates={viewerStates}
                setViewerStates={setViewerStates}
                flipbookRef={flipbookRef}
                screenfull={screenfull}
                pdfDetails={pdfDetails}
              />
              <Toolbar
                viewerStates={viewerStates}
                setViewerStates={setViewerStates}
                containerRef={containerRef}
                flipbookRef={flipbookRef}
                screenfull={screenfull}
                pdfDetails={pdfDetails}
                shareUrl={shareUrl}
                disableShare={disableShare}
              />
            </div>
          </TransformWrapper >
        }
      </Document>
    </div>
  );
}

export default FlipbookViewer;
