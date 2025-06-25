import React from 'react'
import './style.css';

const PdfLoading = () => {
    return (
        <div className="absolute top-0 left-0 flex items-center justify-center h-full w-full bg-transparent">
            <div className="flex items-center gap-3 p-2 rounded-md">
                <div className="text-base font-semibold text-white">
                    Loading PDF...
                </div>
            </div>
        </div>
    )
}

export default PdfLoading