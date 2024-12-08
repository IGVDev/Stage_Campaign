import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import Image from "next/image";

export type MusicPredictionsLayoutType = {
  className?: string;
};

const MusicPredictionsLayout: NextPage<MusicPredictionsLayoutType> = ({
  className = "",
}) => {
  const onHeadToHeadTitleClick = useCallback(() => {
    // Please sync "Home — Head to head" to the project
  }, []);

  const onSidebarElementIconClick = useCallback(() => {
    // Please sync "Home — Music Predictions: Search" to the project
  }, []);

  const onSidebarActionsClick = useCallback(() => {
    // Please sync "Home — After connecting Wallet Address" to the project
  }, []);

  return (
    <header
      className={`self-stretch bg-gray-300 border-mediumslateblue-200 border-b-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-between pt-[1.375rem] pb-[1.25rem] pl-[2.5rem] pr-[2.437rem] top-[0] z-[99] sticky gap-[1.25rem] max-w-full text-center text-[1.125rem] text-white font-manrope ${className}`}
    >
      <div className="w-[16.813rem] flex flex-col items-start justify-start pt-[0.343rem] px-[0rem] pb-[0rem] box-border">
        <div className="flex flex-row items-end justify-start gap-[0.431rem]">
          <Image
            className="h-[2.663rem] w-[2.663rem] relative"
            loading="lazy"
            width={43}
            height={43}
            alt=""
            src="/group-849.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.193rem]">
            <Image
              className="self-stretch h-[2.038rem] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              width={96}
              height={33}
              alt=""
              src="/stage.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[33.375rem] [filter:blur(60px)] rounded-81xl bg-blueviolet border-mediumslateblue-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0rem] px-[1.437rem] max-w-full">
        <div className="self-stretch flex-1 rounded-81xl bg-gray-300 border-mediumslateblue-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.375rem] pl-[0.5rem] pr-[0.437rem] gap-[0.312rem] max-w-full z-[1]">
          <Button
            className="h-[2.5rem] flex-1"
            startIcon={<img width="20px" height="20px" src="/union.png" />}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#7949f6",
              borderRadius: "100px",
              "&:hover": { background: "#7949f6" },
              height: 40,
            }}
          >
            Music Predictions
          </Button>
          <div
            className="w-[14.5rem] rounded-81xl bg-blueviolet flex flex-row items-start justify-start py-[0.5rem] pl-[2.5rem] pr-[2.437rem] box-border gap-[0.5rem] cursor-pointer"
            onClick={onHeadToHeadTitleClick}
          >
            <Image
              className="h-[1.5rem] w-[1.25rem] relative object-cover"
              loading="lazy"
              width={20}
              height={24}
              alt=""
              src="/frame-45@2x.png"
            />
            <a className="[text-decoration:none] flex-1 relative tracking-[0.03em] capitalize font-medium text-[inherit]">
              Head to head
            </a>
          </div>
        </div>
      </div>
      <div className="h-[3rem] w-[16.75rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[1rem]">
          <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
            <Image
              className="w-[1.25rem] h-[1.25rem] relative overflow-hidden shrink-0 cursor-pointer"
              width={20}
              height={20}
              alt=""
              src="/sidebar-element.svg"
              onClick={onSidebarElementIconClick}
            />
          </div>
          <Button
            className="self-stretch flex-1 cursor-pointer"
            startIcon={<img width="20px" height="20px" src="/frame-1.svg" />}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "rgba(255, 255, 255, 0.15)",
              borderRadius: "100px",
              "&:hover": { background: "rgba(255, 255, 255, 0.15)" },
            }}
            onClick={onSidebarActionsClick}
          >
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
};

export default MusicPredictionsLayout;
