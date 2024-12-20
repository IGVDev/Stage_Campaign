import type { NextPage } from "next";
import { useCallback, useState } from "react";
import { Button, Tooltip } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

type HeaderProps = {
  className?: string;
};

type NavigationItem = "predictions" | "head-to-head";

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

const Header: NextPage<HeaderProps> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState<NavigationItem[]>([
    "predictions",
    "head-to-head",
  ]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNavigation = (nav: NavigationItem) => {
    if (activeNav.includes(nav)) {
      setActiveNav(activeNav.filter((item) => item !== nav));
    } else {
      setActiveNav([...activeNav, nav]);
    }
    switch (nav) {
      case "predictions":
        console.log("Navegando a Music Predictions");
        break;
      case "head-to-head":
        console.log("Navegando a Head to Head");
        break;
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`self-stretch border-bottom-gradient box-border overflow-hidden h-[6.25rem] px-[2.5rem] top-[0] z-[99] sticky flex items-center pl-[0.625rem] md:pl-[2.5rem] ${className}`}
    >
      <div className="w-[85rem] mx-auto flex flex-row items-center justify-between gap-[1.25rem]">
        <div id="brand">
          <div id="stage_logo">
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
        <div
          id="main_nav_container"
          className="relative hidden ipad:flex flex-col items-center justify-center"
        >
          <div
            id="blury"
            className="absolute w-[33.3125rem] h-[3.5rem] [filter:blur(60px)] rounded-81xl bg-stage-primary opacity-20 z-0"
          />
          <div
            id="header_nav"
            className="relative w-[30.3125rem] h-[3.5rem] border-gradient bg-[#0A0A0A] rounded-full flex items-center gap-[0.312rem] p-[0.5rem] z-10"
          >
            <Tooltip title="Coming soon" arrow placement="bottom">
              <span className="flex-1">
                <Button
                  className="h-[2.5rem] w-full"
                  startIcon={
                    <img width="20px" height="20px" src="/images/mp_icon.svg" />
                  }
                  disableElevation
                  disabled
                  variant="contained"
                  sx={{
                    ...buttonStyles,
                    background: "transparent !important",
                    opacity: "1 !important",
                    cursor: "default",
                    color: "#A48EF9 !important",
                    "&:hover": {
                      background: "rgba(164, 142, 249, 0.1) !important",
                    },
                  }}
                >
                  Music Predictions
                </Button>
              </span>
            </Tooltip>
            <Tooltip title="Coming soon" arrow placement="bottom">
              <span className="flex-1">
                <Button
                  className="h-[2.5rem] w-full"
                  startIcon={
                    <img
                      width="20px"
                      height="20px"
                      src="/images/h2h_icon.svg"
                    />
                  }
                  disableElevation
                  disabled
                  variant="contained"
                  sx={{
                    ...buttonStyles,
                    background: "transparent !important",
                    opacity: "1 !important",
                    cursor: "default",
                    color: "#A48EF9 !important",
                    "&:hover": {
                      background: "rgba(164, 142, 249, 0.1) !important",
                    },
                  }}
                >
                  Head To Head
                </Button>
              </span>
            </Tooltip>
          </div>
        </div>
        <div
          id="spacer"
          className="h-[2.625rem] w-[2.625rem] ipad:w-[9.0625rem] relative hidden ipad:block"
        />
      </div>
    </motion.header>
  );
};

export default Header;
