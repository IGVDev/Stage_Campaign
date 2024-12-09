import type { NextPage } from "next";
import Image from "next/image";
import { Button } from "@mui/material";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

const BalanceCard: NextPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyles = "h-[25.1875rem] w-[22.4375rem] relative self-stretch rounded-3xl bg-stage-card-dark overflow-hidden flex flex-row items-center justify-start p-[1.5rem]";

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front of the card */}
      <div id="balance-card-front" className={cardStyles}>
        <Image
          className="absolute top-[1.5rem] right-[1.5rem] z-[1]"
          width={19}
          height={30}
          alt="Options menu"
          src="/images/dots.svg"
        />
        <div className="relative flex-1 flex flex-col items-start justify-start gap-[1.5rem]">
          <div className="h-[4.625rem] self-stretch flex flex-col items-start justify-start gap-[1rem]">          
            <div className="w-[9.438rem] flex flex-col items-start justify-start gap-[0.25rem]">
              <div className="self-stretch relative capitalize font-medium text-lightsteelblue">
                Available Balance
              </div>
              <b className="self-stretch relative text-[1.5rem] text-white">
                $ 12,503.22
              </b>                        
            </div>
            <hr className="w-full h-[1px] border-bottom-gradient" />
          </div>
          <div className="h-[5rem] self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
              <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
                <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                  <Image
                    className="h-[1.25rem] w-[1.25rem] relative"
                    width={20}
                    height={20}
                    alt="Deposit icon"
                    src="/images/arrow-right-green.svg"
                  />
                  <div className="relative text-lightsteelblue">Total Deposits</div>
                </div>
                <div className="relative font-medium text-white">$ 3,450.34</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
                <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                  <Image
                    className="h-[1.25rem] w-[1.25rem] relative"
                    width={20}
                    height={20}
                    alt="Withdraw icon"
                    src="/images/arrow-right-red.svg"
                  />
                  <div className="relative text-lightsteelblue">Total Withdrawals</div>
                </div>
                <div className="relative font-medium text-white">$ 4,400.00</div>
              </div>
            </div>
            <hr className="w-full h-[1px] border-bottom-gradient" />
          </div>
          <div className="h-[5.625rem] self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
            <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
              <div className="flex flex-row items-center justify-start">
                <div className="relative text-lightsteelblue">Total Predictions</div>
              </div>
              <div className="relative font-medium text-white">55</div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
              <div className="flex flex-row items-center justify-start">
                <div className="relative text-lightsteelblue">Total Wins</div>
              </div>
              <div className="relative font-medium text-white">32</div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
              <div className="flex flex-row items-center justify-start">
                <div className="relative text-lightsteelblue">Total Losses</div>
              </div>
              <div className="relative font-medium text-white">23</div>
            </div>
          </div>
          <Button
            className="self-stretch h-[2.5rem]"
            disableElevation
            variant="contained"
            onClick={handleFlip}
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "1.125rem",
              background: "#7949f6",
              borderRadius: "100px",
              "&:hover": { background: "#8b61f7" },
            }}
          >
            Deposit
          </Button>
        </div>
      </div>

      {/* Back of the card */}
      <div id="balance-card-back" className={cardStyles}>
        <div className="relative flex-1 flex flex-col items-center justify-start gap-[1.5rem] h-[85%]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] ">
            <div className="w-full flex flex-col items-center justify-start gap-[0.25rem] mb-[1.25rem]">
              <h2 className="text-[1.5rem] font-bold text-white mb-[1rem]">Deposit Options</h2>
              <hr className="w-full h-[1px] border-bottom-gradient" />
            </div>
            <div className="self-stretch flex flex-col gap-6 w-9/12 mx-auto">
              <Button
                className="self-stretch h-[2.5rem]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "1.125rem",
                  background: "var(--stage-primary-20)",
                  borderRadius: "100px",
                  "&:hover": { background: "var(--stage-primary)" },
                }}
              >
                Credit Card
              </Button>
              <Button
                className="self-stretch h-[2.5rem]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "1.125rem",
                  background: "var(--stage-primary-20)",
                  borderRadius: "100px",
                  "&:hover": { background: "var(--stage-primary)" },
                }}
              >
                Crypto Wallet
              </Button>
              <Button
                className="self-stretch h-[2.5rem]"
                disableElevation
                variant="contained"
                onClick={handleFlip}
                sx={{
                  textTransform: "none",
                  color: "white",
                  fontSize: "1.125rem",
                  background: "var(--stage-gray)",
                  borderRadius: "100px",
                  "&:hover": { background: "rgba(252, 74, 74, 0.25)" },
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default BalanceCard;
