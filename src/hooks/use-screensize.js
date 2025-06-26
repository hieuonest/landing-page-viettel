import { useState, useEffect } from "react";

function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const updateScreenSize = () => {
      if (window) {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  console.log("Screen Size:", screenSize);

  return screenSize;

}

export default useScreenSize;
