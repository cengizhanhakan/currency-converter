import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { MobileHeader } from "/components/Header/Mobile";

import { DesktopHeader } from "/components/Header/Desktop";

export interface HeaderProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const Header = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const isMobile = useMediaQuery("(max-width: 960px)");

  const Component = isMobile ? MobileHeader : DesktopHeader;

  return (
    <Component activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
  );
};
