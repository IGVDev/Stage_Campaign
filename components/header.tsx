import type { NextPage } from "next";
import { useCallback, useState } from "react";
import { Button } from "@mui/material";
import Image from "next/image";

type HeaderProps = {
  className?: string;
};

type NavigationItem = 'predictions' | 'head-to-head';

const buttonStyles = {
  textTransform: "none" as const,
  color: "#fff",
  fontSize: "1.125rem",
  borderRadius: "100px",
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Header: NextPage<HeaderProps> = ({
  className = "",
}) => {
  const [activeNav, setActiveNav] = useState<NavigationItem[]>(['predictions', 'head-to-head']);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNavigation = (nav: NavigationItem) => {
    if (activeNav.includes(nav)) {
      setActiveNav(activeNav.filter(item => item !== nav));
    } else {
      setActiveNav([...activeNav, nav]);
    }
    switch(nav) {
      case 'predictions':
        console.log('Navegando a Music Predictions');
        break;
      case 'head-to-head':
        console.log('Navegando a Head to Head');
        break;
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header
        className={`self-stretch border-bottom-gradient box-border overflow-hidden h-[6.25rem] px-[2.5rem] top-[0] z-[99] sticky flex items-center ${className}`}
      >
      <div className="w-[85rem] mx-auto flex flex-row items-center justify-between gap-[1.25rem]">
        <div id="brand" >
          <div id="stage-icon" className="block lg:hidden">          
              <Image
                className="h-[2.625rem] w-[2.625rem] relative"
                loading="lazy"
                width={42}
                height={42}
                alt="Stage Community"
                src="/images/stage-icon.svg"
              />
          </div>
          <div id="stage_logo" className="hidden lg:block">
            <Image
              className="h-[2.625rem] w-[9.0625rem] relative"
              loading="lazy"
              width={145}
              height={42}
              alt="Stage Community"
              src="/images/logo.svg"
            />
          </div>                   
        </div>   
        <div className="relative flex flex-col items-center justify-center">
          <div id="blury" className="absolute w-[33.3125rem] h-[3.5rem] [filter:blur(60px)] rounded-81xl bg-stage-primary opacity-20 z-0" />
          <div id="header_nav" className="relative w-[30.3125rem] h-[3.5rem] border-gradient bg-stage-background rounded-full flex items-center gap-[0.312rem] p-[0.5rem] z-10 opacity-70" >
            <Button
              className="h-[2.5rem] flex-1"
              startIcon={<img width="20px" height="20px" src="/images/mp_icon.svg" />}
              disableElevation
              disabled
              variant="contained"
              sx={{
                ...buttonStyles,
                background: "var(--stage-primary) !important",
                opacity: "1 !important",
                cursor: "default",
                color: "white !important"
              }}
            >
              Music Predictions
            </Button>
            <Button
              className="h-[2.5rem] flex-1"
              startIcon={<img width="20px" height="20px" src="/images/h2h_icon.svg" />}
              disableElevation
              disabled
              variant="contained"
              sx={{
                ...buttonStyles,
                background: "var(--stage-primary) !important",
                opacity: "1 !important",
                cursor: "default",
                color: "white !important"
              }}
            >
              Head To Head
            </Button>
          </div>          
        </div>
        <div id="spacer" className="h-[2.625rem] w-[2.625rem] lg:w-[9.0625rem] relative" />
      </div>
    </header>
  );
};

export default Header;