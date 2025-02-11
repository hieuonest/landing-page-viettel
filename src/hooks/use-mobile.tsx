import * as React from "react";
import { MOBILE_BREAKPOINT } from "@/constants";

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  const onChange = () => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  };

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    mql.addEventListener("change", onChange);
    onChange();
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
