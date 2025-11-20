'use client';

import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PageViewer() {
  const [isMobile, setIsMobile] = useState(false);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    // Kiểm tra màn hình nhỏ (mobile)
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      {isMobile ? (
        <Document
          file="/PROFILE VCX.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading="Đang tải PDF..."
        >
          {Array.from({ length: numPages }, (_, i) => (
            <Page
              key={`page_${i + 1}`}
              pageNumber={i + 1}
              width={window.innerWidth - 32} // margin responsive
            />
          ))}
        </Document>
      ) : (
        <iframe
          src="/PROFILE VCX.pdf"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      )}
    </div>
  );
}
