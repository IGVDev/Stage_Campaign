import type { NextPage } from "next";
import Image from "next/image";
import { Button } from "@mui/material";

const BalanceCard: NextPage = () => {
  return (
    <div className="self-stretch rounded-3xl bg-stage-card-dark overflow-hidden flex flex-row items-start justify-start pt-[1.5rem] px-[1.5rem] pb-[1.437rem] text-lightsteelblue mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
      <div className="relative flex-1 flex flex-col items-start justify-start gap-[1.5rem]">
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[1rem]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
            <div className="w-[9.438rem] flex flex-col items-start justify-start gap-[0.25rem]">
              <div className="self-stretch relative capitalize font-medium">
                Available Balance
              </div>
              <b className="self-stretch relative text-[1.5rem] text-white mq450:text-[1.188rem]">
                $ 12,503.22
              </b>
            </div>            
          </div>
          <Image
            className="w-[1.1875rem] h-[1.875rem] absolute !m-[0] top-[0] right-[0] z-[1]"
            width={19}
            height={19}
            alt=""
            src="/images/dots.svg"
          />
          <hr className="w-full h-[1px] border-bottom-gradient" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[1.5rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
            <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq450:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                <Image
                  className="h-[1.25rem] w-[1.25rem] relative object-contain"
                  width={20}
                  height={20}
                  alt=""
                  src="images/vuesaxlineararrowright.svg"
                />
                <div className="relative">Total Deposits</div>
              </div>
              <div className="relative font-medium text-white text-right inline-block min-w-[7.375rem]">
                USD $ 3,450.34
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq450:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                <Image
                  className="h-[1.25rem] w-[1.25rem] relative"
                  width={20}
                  height={20}
                  alt=""
                  src="images/vuesaxlineararrowright-1.svg"
                />
                <div className="relative">Total Withdrawals</div>
              </div>
              <div className="relative font-medium text-white text-right inline-block min-w-[7.688rem]">
                USD $ 4,400.00
              </div>
            </div>
          </div>
          <hr className="w-full h-[1px] border-bottom-gradient" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
          <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
            <div className="flex flex-row items-center justify-start">
              <div className="relative">{`Total Predictions `}</div>
            </div>
            <div className="relative font-medium text-white text-right">
              55
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
            <div className="flex flex-row items-center justify-start">
              <div className="relative">Total Wins</div>
            </div>
            <div className="relative font-medium text-white text-right inline-block min-w-[1.25rem]">
              32
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
            <div className="flex flex-row items-center justify-start">
              <div className="relative">Total Losses</div>
            </div>
            <div className="relative font-medium text-white text-right inline-block min-w-[1.25rem]">
              23
            </div>
          </div>
        </div>
        <Button
          className="self-stretch h-[2.5rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "1.125rem",
            background: "#7949f6",
            borderRadius: "100px",
            "&:hover": { background: "#7949f6" },
            height: "40px",
          }}
        >
          Deposit
        </Button>        
      </div>
    </div>
  );
};

export default BalanceCard;
