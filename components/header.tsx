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
  const [activeNav, setActiveNav] = useState<NavigationItem>('predictions');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNavigation = (nav: NavigationItem) => {
    setActiveNav(nav);
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
      <div className="w-[85rem] mx-auto flex flex-row items-start justify-between gap-[1.25rem]">
        <div id="brand" className="w-[16.813rem] flex flex-col items-start justify-start pt-[0.343rem] px-[0rem] pb-[0rem] box-border">
          <div className="flex flex-row items-end justify-start gap-[0.431rem]">
            <Image
              className="h-[2.663rem] w-[2.663rem] relative"
              loading="lazy"
              width={43}
              height={43}
              alt=""
              src="images/group-849.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.193rem]">
              <Image
                className="self-stretch h-[2.038rem] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                width={96}
                height={33}
                alt=""
                src="images/stage.svg"
              />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <div id="blury" className="absolute w-[33.3125rem] h-[3.5rem] [filter:blur(60px)] rounded-81xl bg-stage-primary opacity-20 z-0">
          </div>
          {!isSearchOpen ? (
            <div id="header_nav" className="relative w-[30.3125rem] h-[3.5rem] border-gradient bg-stage-background rounded-full flex items-center gap-[0.312rem] p-[0.5rem] z-10" >
              <Button
                className="h-[2.5rem] flex-1"
                startIcon={<img width="20px" height="20px" src="images/mp_icon.svg" />}
                disableElevation
                variant="contained"
                onClick={() => handleNavigation('predictions')}
                sx={{
                  ...buttonStyles,
                  background: activeNav === 'predictions' ? "var(--stage-primary)" : "var(--stage-primary-20)",
                  "&:hover": { background: "var(--stage-primary)" },
                }}
              >
                Music Predictions
              </Button>
              <Button
                className="h-[2.5rem] flex-1"
                startIcon={<img width="20px" height="20px" src="images/h2h_icon.svg" />}
                disableElevation
                variant="contained"
                onClick={() => handleNavigation('head-to-head')}
                sx={{
                  ...buttonStyles,
                  background: activeNav === 'head-to-head' ? "var(--stage-primary)" : "var(--stage-primary-20)",
                  "&:hover": { background: "var(--stage-primary)" },
                }}
              >
                Head To Head
              </Button>
            </div>
          ) : (
            <div className="relative w-[30.3125rem] h-[3.5rem] border-gradient bg-stage-background rounded-full flex items-center gap-[0.312rem] py-[0.5rem] pl-[1.5rem] pr-[0.5rem] z-10">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent border-none outline-none text-white text-[1.125rem] font-normal"
              />
              <div className="flex items-center gap-4">
                <div className="w-[2.25rem] h-[2.25rem] bg-stage-primary rounded-full flex items-center justify-center">
                  <Image
                    width={20}
                    height={20}
                    alt="search"
                    src="images/mag_glass.svg"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <Image
                width={20}
                height={20}
                alt="close"
                src="images/close.svg"
                className="cursor-pointer absolute -right-[2rem]"
                onClick={toggleSearch}
              />
            </div>
          )}
        </div>
        <div className="h-[3rem] w-[16.75rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[1rem]">
            <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
              <Image
                className="w-[1.25rem] h-[1.25rem] relative overflow-hidden shrink-0 cursor-pointer"
                width={20}
                height={20}
                alt=""
                src="images/mag_glass.svg"
                onClick={toggleSearch}
              />
            </div>
            <Button
              className="h-[2.5rem] flex-1"
              startIcon={<img width="20px" height="20px" src="images/h2h_icon.svg" />}
              disableElevation
              variant="contained"
              sx={{
                ...buttonStyles,
                background: "var(--stage-gray)",
                "&:hover": { background: "var(--stage-primary)" },
              }}
            >
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;