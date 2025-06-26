import React from "react";
import { useControls } from "react-zoom-pan-pinch";
import { Button } from "../button";
import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react";

const Zoom = ({ zoomScale, screenWidth }) => {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <>
      {screenWidth > 768 && (
        <>
          <Button
            onClick={() => zoomOut(0.25)}
            disabled={zoomScale == 1}
            variant="default"
            size="icon"
            className="size-10 rounded-full  min-w-8 text-white hover:text-[#EA0033]"
          >
            <ZoomOut className="size-4 min-w-4" />
          </Button>
          <Button
            onClick={() => zoomIn(0.25)}
            disabled={zoomScale >= 5}
            variant="default"
            size="icon"
            className="size-10 rounded-full  min-w-8 text-white hover:text-[#EA0033]"
          >
            <ZoomIn className="size-4 min-w-4" />
          </Button>
          <Button
            onClick={() => resetTransform()}
            variant="default"
            size="icon"
            className="size-10 rounded-full  min-w-8 text-white hover:text-[#EA0033]"
          >
            <RotateCcw className="size-4 min-w-4" />
          </Button>
        </>
      )}
    </>
  );
};

export default Zoom;
