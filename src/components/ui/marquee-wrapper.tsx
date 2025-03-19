"use client";
import React from "react";
import Marquee from "react-fast-marquee";

type MarqueeWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const MarqueeWrapper: React.FC<MarqueeWrapperProps & React.ComponentProps<typeof Marquee>> = 
({ children, className, ...props }: MarqueeWrapperProps & React.ComponentProps<typeof Marquee>) => {
  return <Marquee {...props} className={className}>{children}</Marquee>;
};

MarqueeWrapper.displayName = "MarqueeWrapper";

export default MarqueeWrapper;
