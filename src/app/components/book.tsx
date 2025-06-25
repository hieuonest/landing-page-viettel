"use client";
import HTMLFlipBook from "react-pageflip";
import React, { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import {
  ArrowLeft,
  ArrowRight,
  Maximize,
  Minimize,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function Book() {
  const [numPages, setNumPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });
  const [zoomLevel, setZoomLevel] = useState(1);
  const bookRef = useRef(null);
  const containerRef = useRef(null);
  const transformComponentRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setCurrentPage(1);
  }

  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevPage = () => {
    if (bookRef.current && currentPage > 1) {
      bookRef.current.pageFlip().flipPrev();
      setCurrentPage((prev) => Math.max(prev - 2, 1));
    }
  };

  const handleNextPage = () => {
    if (bookRef.current && currentPage < numPages) {
      bookRef.current.pageFlip().flipNext();
      setCurrentPage((prev) => Math.min(prev + 2, numPages));
    }
  };

  const handleZoomIn = () => {
    if (transformComponentRef.current) {
      transformComponentRef.current.zoomIn(0.2);
      setZoomLevel((prev) => Math.min(prev + 0.2, 3));
    }
  };

  const handleZoomOut = () => {
    if (transformComponentRef.current) {
      transformComponentRef.current.zoomOut(0.2);
      setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));
    }
  };

  const handleResetZoom = () => {
    if (transformComponentRef.current) {
      transformComponentRef.current.resetTransform();
      setZoomLevel(1);
    }
  };

  const handlePageChange = (e) => {
    const pageNum = parseInt(e.target.value);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= numPages) {
      bookRef.current.pageFlip().turnToPage(pageNum - 1);
      setCurrentPage(pageNum);
    }
  };

  // Fixed dimensions for the HTMLFlipBook
  const flipBookWidth = windowSize.width * 0.5;
  const flipBookHeight = windowSize.height ;

  return (
    <div
      ref={containerRef}
      className={`flex flex-col items-center justify-center fixed inset-0 z-[9999] bg-[#000000e5]`}
      style={{ width: "100vw", height: "100vh" }}
    >
      <div
        className={`relative flex items-center justify-center w-full h-full`}
      >
        <TransformWrapper
          ref={transformComponentRef}
          initialScale={1}
          minScale={0.5}
          maxScale={3}
          centerOnInit={true}
          // wheel={{ smoothStep: 0.04 }}
          onZoom={(ref) => setZoomLevel(ref.state.scale)}
        >
          <TransformComponent
            contentStyle={{ width: "100%", height: "100%", justifyContent: "center" }}
          >
            <HTMLFlipBook
              ref={bookRef}
              width={flipBookWidth}
              height={flipBookHeight}
              usePortrait={false}
              autoSize={true}
              showCover={true}
              drawShadow={true}
              maxShadowOpacity={0.4}
              onFlip={(e) => setCurrentPage(e.data + 1)}
            >
              {[...Array(numPages).keys()].map((pageIndex) => (
                <div
                  key={pageIndex}
                  className='flex items-center justify-center bg-transparent'
                >
                  <Document
                    file='/sample.pdf'
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={<div className='text-center p-4'>Loading PDF...</div>}
                  >
                    <Page
                      pageNumber={pageIndex + 1}
                      width={windowSize.width * 0.35} 
                      renderTextLayer={false}
                    />
                  </Document>
                </div>
              ))}
            </HTMLFlipBook>
          </TransformComponent>
        </TransformWrapper>

        {/* Control Bar */}
        <div className='flex items-center justify-center space-x-4 p-4 bg-gray-800 bg-opacity-80 text-white rounded-lg absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300'>
          <button
            onClick={handlePrevPage}
            className='p-2 hover:bg-gray-700 rounded-full'
          >
            <ArrowLeft size={20} />
          </button>

          <div className='flex items-center space-x-2'>
            <input
              type='text'
              value={currentPage}
              onChange={handlePageChange}
              className='w-12 bg-gray-700 text-white text-center rounded py-1 px-2'
            />
            <span>/ {numPages}</span>
          </div>

          <button
            onClick={handleNextPage}
            className='p-2 hover:bg-gray-700 rounded-full'
          >
            <ArrowRight size={20} />
          </button>

          <div className='w-px h-6 bg-gray-600 mx-2'></div>

          <button
            onClick={handleZoomOut}
            className='p-2 hover:bg-gray-700 rounded-full'
          >
            <ZoomOut size={20} />
          </button>

          <span className='text-sm'>{Math.round(zoomLevel * 100)}%</span>

          <button
            onClick={handleZoomIn}
            className='p-2 hover:bg-gray-700 rounded-full'
          >
            <ZoomIn size={20} />
          </button>
          
          <button
            onClick={handleResetZoom}
            className='text-xs hover:bg-gray-700 rounded px-2 py-1'
          >
            Reset
          </button>

          <div className='w-px h-6 bg-gray-600 mx-2'></div>
        </div>
      </div>
    </div>
  );
}

export default Book;