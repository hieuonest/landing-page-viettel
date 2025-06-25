import React, { forwardRef, memo, useCallback } from 'react'
import HTMLFlipBook from 'react-pageflip'
import PdfPage from './pdf-page'
import { useDebounce } from '@/hooks/use-debounce';
import { cn } from '@/lib/utils';
import useScreenSize from '@/hooks/use-screensize';
const MemoizedPdfPage = memo(PdfPage)

const FlipbookLoader = forwardRef(({ pdfDetails, scale, viewerStates, setViewerStates, viewRange, setViewRange }, ref) => {
    const { width } = useScreenSize();
    const debouncedZoom = useDebounce(viewerStates.zoomScale, 500);
    const isMobile = width < 768;
    
    // Check if page is in view range or in view window 
    const isPageInViewRange = (index) => { return index >= viewRange[0] && index <= viewRange[1] };
    const isPageInView = (index) => { 
        if (isMobile) {
            return viewerStates.currentPageIndex === index;
        }
        return viewerStates.currentPageIndex === index || viewerStates.currentPageIndex + 1 === index;
    };

    // Update pageViewRange on page flip
    const onFlip = useCallback((e) => {
        let newViewRange;
        if (e.data > viewerStates.currentPageIndex) {
            newViewRange = [viewRange[0], Math.max(Math.min(e.data + 4, pdfDetails.totalPages), viewRange[1])]
        } else if (e.data < viewerStates.currentPageIndex) {
            newViewRange = [Math.min(Math.max(e.data - 4, 0), viewRange[0]), viewRange[1]]
        } else {
            newViewRange = viewRange
        }
        setViewRange(newViewRange);
        setViewerStates({
            ...viewerStates,
            currentPageIndex: e.data,
        });
    }, [viewerStates, viewRange, setViewRange, setViewerStates, pdfDetails.totalPages]);

    return (
        <div className="relative">
            <HTMLFlipBook
                ref={ref}
                key={scale}
                startPage={viewerStates.currentPageIndex}
                width={pdfDetails.width * scale}
                height={pdfDetails.height * scale}
                size={isMobile ? 'fixed' : 'stretch'}
                drawShadow={true}
                maxShadowOpacity={0.5}
                flippingTime={1000}
                usePortrait={isMobile}
                showCover={false}
                mobileScrollSupport={false}
                showPageCorners={false}
                onFlip={onFlip}
                disableFlipByClick={isMobile}
                className={cn(
                    viewerStates.zoomScale > 1 && 'pointer-events-none md:pointer-events-none',
                    isMobile && 'touch-none select-none'
                )}
            >
                {
                    Array.from({ length: pdfDetails.totalPages }, (_, index) => (
                        <MemoizedPdfPage
                            key={index}
                            height={pdfDetails.height * scale}
                            zoomScale={debouncedZoom}
                            page={index + 1}
                            isPageInViewRange={isPageInViewRange(index)}
                            isPageInView={isPageInView(index)}
                        />
                    ))
                }
            </HTMLFlipBook >
        </div>
    )
})

FlipbookLoader.displayName = 'FlipbookLoader'

export default FlipbookLoader