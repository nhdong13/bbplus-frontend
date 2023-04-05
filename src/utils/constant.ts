import { useEffect, useState } from "react";
import useWindowSize from "./windowResize"

export const isMobileResponsive = () => {
  const screenWidth = useWindowSize()
  const [isMobile, setIsMobile] = useState<boolean>(false)
  useEffect(() => {
    if (screenWidth < 1024) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, [screenWidth, isMobile])
  return isMobile
}