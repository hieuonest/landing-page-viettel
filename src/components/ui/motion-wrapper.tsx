"use client";
import React, { forwardRef, JSX } from "react";
import { motion, MotionProps } from "framer-motion";

type MotionWrapperProps<T extends keyof JSX.IntrinsicElements> = {
  children: React.ReactNode;
  element?: T;
  className?: string;
} & MotionProps;

const MotionWrapper = forwardRef<HTMLElement, MotionWrapperProps<any>>(
  ({ children, element, className, ...props }, ref) => {
    const Component = element ? motion[element as keyof typeof motion] as React.ElementType : motion.div;

    return (
      <Component ref={ref} {...props} className={className}>
        {children}
      </Component>
    );
  }
);

MotionWrapper.displayName = "MotionWrapper";

export default MotionWrapper;
