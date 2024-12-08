import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type PredictionListType = {
  className?: string;
  frame1261153080: string;
  canMileyCyrussSomethingBeautif?: string;
  frame12611530801: string;
  nj98HF43ff?: string;
  no?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  frameDivPadding?: CSSProperties["padding"];
  nj98HF43ffDisplay?: CSSProperties["display"];
  nj98HF43ffMinWidth?: CSSProperties["minWidth"];
  noColor?: CSSProperties["color"];
  frameDivWidth?: CSSProperties["width"];
  frameDivGap?: CSSProperties["gap"];
  bDisplay?: CSSProperties["display"];
  bMinWidth?: CSSProperties["minWidth"];
};

const PredictionList: NextPage<PredictionListType> = ({
  className = "",
  frame1261153080,
  canMileyCyrussSomethingBeautif,
  frame12611530801,
  nj98HF43ff,
  no,
  prop,
  prop1,
  frameDivPadding,
  nj98HF43ffDisplay,
  nj98HF43ffMinWidth,
  noColor,
  frameDivWidth,
  frameDivGap,
  bDisplay,
  bMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
      width: frameDivWidth,
      gap: frameDivGap,
    };
  }, [frameDivPadding, frameDivWidth, frameDivGap]);

  const nj98HF43ffStyle: CSSProperties = useMemo(() => {
    return {
      display: nj98HF43ffDisplay,
      minWidth: nj98HF43ffMinWidth,
    };
  }, [nj98HF43ffDisplay, nj98HF43ffMinWidth]);

  const noStyle: CSSProperties = useMemo(() => {
    return {
      color: noColor,
    };
  }, [noColor]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      display: bDisplay,
      minWidth: bMinWidth,
    };
  }, [bDisplay, bMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-[0.5rem] text-left text-[0.875rem] text-lightsteelblue font-manrope ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-[0.75rem] mq450:flex-wrap">
        <Image
          className="h-[1.969rem] w-[1.969rem] relative rounded-mid-7 overflow-hidden shrink-0 object-cover"
          width={32}
          height={32}
          alt=""
          src={frame1261153080}
        />
        <div className="flex-1 relative leading-[1.125rem] inline-block min-w-[10.875rem]">
          {canMileyCyrussSomethingBeautif}
        </div>
      </div>
      <div
        className="w-[16.688rem] flex flex-row items-center justify-start flex-wrap content-center py-[0rem] pl-[0rem] pr-[1.812rem] box-border gap-x-[0.156rem] gap-y-[0.125rem]"
        style={frameDivStyle}
      >
        <Image
          className="h-[1.075rem] w-[1.063rem] relative rounded-3xs-7 overflow-hidden shrink-0 object-cover"
          width={17}
          height={17}
          alt=""
          src={frame12611530801}
        />
        <b
          className="relative inline-block text-white min-w-[5.813rem]"
          style={nj98HF43ffStyle}
        >
          {nj98HF43ff}
        </b>
        <div className="relative">bought</div>
        <b className="relative text-tomato" style={noStyle}>
          {no}
        </b>
        <div className="relative">at</div>
        <b className="relative text-white" style={bStyle}>
          {prop}
        </b>
        <div className="relative">{prop1}</div>
      </div>
    </div>
  );
};

export default PredictionList;
