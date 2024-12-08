import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { Button } from "@mui/material";
import Image from "next/image";

export type TrendingQuestionsType = {
  className?: string;
  trendingQuestionRow: string;
  willBeyoncsCowboyCarterWin?: string;

  /** Style props */
  willBeyoncsCowboyHeight?: CSSProperties["height"];
  willBeyoncsCowboyDisplay?: CSSProperties["display"];
  willBeyoncsCowboyAlignItems?: CSSProperties["alignItems"];

  /** Action props */
  onYesNoRowClick?: () => void;
};

const TrendingQuestions: NextPage<TrendingQuestionsType> = ({
  className = "",
  trendingQuestionRow,
  willBeyoncsCowboyCarterWin,
  willBeyoncsCowboyHeight,
  willBeyoncsCowboyDisplay,
  willBeyoncsCowboyAlignItems,
  onYesNoRowClick,
}) => {
  const willBeyoncsCowboyStyle: CSSProperties = useMemo(() => {
    return {
      height: willBeyoncsCowboyHeight,
      display: willBeyoncsCowboyDisplay,
      alignItems: willBeyoncsCowboyAlignItems,
    };
  }, [
    willBeyoncsCowboyHeight,
    willBeyoncsCowboyDisplay,
    willBeyoncsCowboyAlignItems,
  ]);

  const onYesNoRowClick1 = useCallback(() => {
    // Please sync "Home — Buy Yes" to the project
  }, []);

  return (
    <div
      className={`flex-1 rounded-3xl bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-[1.25rem] pb-[1rem] pl-[1rem] pr-[0.937rem] box-border gap-[0.593rem] min-w-[11.438rem] text-left text-[1rem] text-white font-manrope ${className}`}
    >
      <Image
        className="w-[13.256rem] h-[13.256rem] relative rounded-2xl overflow-hidden shrink-0 object-cover"
        width={212}
        height={212}
        alt=""
        src={trendingQuestionRow}
      />
      <div
        className="relative leading-[1.125rem] capitalize font-medium"
        style={willBeyoncsCowboyStyle}
      >
        {willBeyoncsCowboyCarterWin}
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[0.562rem]">
        <Button
          className="h-[2.375rem] flex-1 cursor-pointer"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#2fcfa4",
            fontSize: "16",
            background: "rgba(47, 207, 164, 0.15)",
            borderRadius: "100px",
            "&:hover": { background: "rgba(47, 207, 164, 0.15)" },
            height: 38,
          }}
          onClick={onYesNoRowClick}
        >
          Yes
        </Button>
        <Button
          className="h-[2.375rem] flex-1"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fc4a4a",
            fontSize: "16",
            background: "rgba(252, 74, 74, 0.15)",
            borderRadius: "100px",
            "&:hover": { background: "rgba(252, 74, 74, 0.15)" },
            height: 38,
          }}
        >
          No
        </Button>
      </div>
    </div>
  );
};

export default TrendingQuestions;
