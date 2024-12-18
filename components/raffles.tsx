import Image from "next/image";
import { Button, Dialog } from "@mui/material";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SpinWheel from "./SpinWheel";

interface CountdownTimerProps {
  onOpenDialog: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ onOpenDialog }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  useEffect(() => {
    // Establecer la fecha objetivo 18 de Diciembre a las 14hs UTC
    const targetDate = new Date("2024-12-18T14:00:00Z");
    // const targetDate = new Date("2024-12-16T14:00:00Z");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isExpired) {
    return (
      <button
        className="p-[1px] rounded-full bg-gradient-to-r from-[#D0BEFF] to-[#A98AF9] hover:opacity-90 transition-opacity cursor-pointer w-fit"
        onClick={onOpenDialog}
      >
        <div className="px-6 py-2 rounded-full text-white font-bold bg-gradient-to-r from-[#A98AF9] to-[#D0BEFF] hover:bg-[#865CF7] hover:text-white">
          <span>Spin to Claim Prize</span>
        </div>
      </button>
    );
  }

  return (
    <div className="p-[1px] rounded-full bg-gradient-to-r from-[#865CF7] to-[#5435AA]">
      <div className="px-6 py-3 rounded-full bg-[#12152F]">
        <span className="text-white">
          {`${formatNumber(timeLeft.days)}d ${formatNumber(
            timeLeft.hours
          )}h ${formatNumber(timeLeft.minutes)}m ${formatNumber(
            timeLeft.seconds
          )}s`}
        </span>
      </div>
    </div>
  );
};

const prizes = [
  {
    name: "Tesla Model S",
    suffix: "White(1x)",
    image: "/images/grid/01.png",
  },
  {
    name: "Rolex",
    suffix: "(2x)",
    image: "/images/grid/02.png",
  },
  {
    name: "Playstation 5",
    suffix: "(10x)",
    image: "/images/grid/03.png",
  },
  {
    name: "iPhone 16 Pro",
    suffix: "(5x)",
    image: "/images/grid/04.png",
  },
  {
    name: "50 $Stage",
    image: "/images/grid/05.png",
  },
  {
    name: "25 $Stage",
    image: "/images/grid/05.png",
  },
  {
    name: "10 $Stage",
    image: "/images/grid/05.png",
  },
  {
    name: "5 $Stage",
    image: "/images/grid/05.png",
  },
  {
    name: "10 USDT",
    image: "/images/grid/09.png",
  },
  {
    name: "5 USDT",
    image: "/images/grid/09.png",
  },
];

const RafflesComponent: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSpinEnd = () => {
    // Aquí puedes manejar lo que sucede cuando termina el giro
    console.log("El giro ha terminado!");
  };

  return (
    <section className="flex-1 flex flex-col gap-6">
      <article>
        <div
          id="topCard"
          className="self-stretch rounded-3xl relative w-full min-h-[18.0625rem] p-8 md:p-8 lg:p-[2rem]"
          style={{ backgroundColor: "#865CF7" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center z-0 rounded-3xl"
            style={{
              backgroundImage: "url(/images/bg-01.png)",
              opacity: "0.1",
            }}
          />
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center lg:justify-between h-full gap-6">
            <motion.div
              className="lg:hidden relative w-full max-w-[408px] aspect-[408/249]"
              initial={{ opacity: 0, y: -50, x: 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="/images/prizes.png"
                alt="Prizes"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block relative w-full max-w-[408px] aspect-[408/249] lg:order-2"
            >
              <Image
                src="/images/prizes.png"
                alt="Prizes"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <motion.div
              className="flex flex-col justify-between items-center lg:items-start text-center lg:text-left w-full h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-fit bg-[#D0BEFF] bg-opacity-20 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-[1.5rem] text-white font-medium text-sm md:text-[1rem] tracking-3percent">
                11 December 2024, 2PM UTC - 18 December 2024, 2PM UTC
              </div>
              <h1 className="text-3xl md:text-3xl lg:text-[2rem] font-bold text-white mb-3 md:mb-[20px] leading-tight">
                Spin And Win $STAGE And More!
              </h1>
              <p className="text-white font-medium text-sm md:text-[1rem] sm:w-9/12 lg:w-[600px] sm:text-[1.1rem] mb-4 md:mb-[2rem] leading-[1.4]">
                Spin to win $STAGE & other prizes such as: Tesla Model S white,
                iPhone 16 Pro, Rolex, Playstation 5 And USDT.
              </p>
              <button
                className="mt-[25px] lg:mt-[0] rounded-full bg-gradient-to-r from-[#D0BEFF] to-[#A98AF9] hover:opacity-90 transition-opacity cursor-pointer w-fit mb-4 md:mb-0"
                onClick={() =>
                  window.open(
                    "https://staking.stage.community/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <div className="px-12 py-4 lg:px-6 lg:py-2 rounded-full text-[#7949F6] font-medium bg-white hover:bg-[#865CF7] hover:text-white text-[1.3rem] lg:text-[1rem]">
                  <span>Stake Now</span>
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </article>
      <article>
        <h2 className="h2-title">Claim Your Prize in 3 Steps</h2>
        <div
          id="middleCard"
          className="self-stretch rounded-3xl relative w-full min-h-[18.0625rem] py-[4rem] px-[1.5rem] md:p-[2rem] flex items-center"
          style={{ backgroundColor: "#12152F" }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <motion.div
              className="absolute inset-[-50%] w-[200%] h-[200%] z-0"
              initial={{ opacity: 0, scale: 1.4, rotate: 0, x: 400 }}
              animate={{
                opacity: 1,
                scale: 1.4,
                rotate: 360,
                x: 400,
              }}
              transition={{
                opacity: { duration: 0.8, ease: "easeOut" },
                scale: { duration: 0.8, ease: "easeOut" },
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              style={{
                backgroundImage: "url(/images/looper_bg.svg)",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(to right, #12152F 50%, rgba(18, 21, 47, 0.5) 75%, transparent 100%)",
                // Otras opciones de control:
                // 1. Degradado simple: 'linear-gradient(to right, #12152F, transparent)'
                // 2. Con punto medio: 'linear-gradient(to right, #12152F 30%, transparent)'
                // 3. Múltiples pasos: 'linear-gradient(to right, #12152F, rgba(18, 21, 47, 0.8) 40%, rgba(18, 21, 47, 0.3) 70%, transparent)'
                // 4. Ángulo específico: 'linear-gradient(45deg, #12152F, transparent)'
              }}
            />
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="flex flex-col gap-8 max-w-[100%]">
              <div className="flex flex-row items-start gap-6 relative min-w-0">
                <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                  <Image src="/images/bg-bullet-active.svg" alt="bullet" fill />
                  <span className="relative z-10 text-white">01</span>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-white text-base sm:text-xl break-words">
                    Stake $STAGE Tokens on{" "}
                    <a
                      href="https://staking.stage.community"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D0BEFF] hover:opacity-80 transition-opacity break-all"
                    >
                      staking.stage.community
                    </a>
                  </span>
                </div>
                <div className="absolute left-5 top-10 w-[2px] h-[2.5rem] bg-gradient-to-b from-[#865CF7] to-[#5435AA]"></div>
              </div>

              <div className="flex flex-row items-start gap-6 relative min-w-0">
                <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                  <Image src="/images/bg-bullet.svg" alt="bullet" fill />
                  <span className="relative z-10 text-white">02</span>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-stage-lightGray text-base sm:text-xl break-words">
                    Snapshot on the 18th of December at 2PM UTC
                  </span>
                </div>
                <div className="absolute left-5 top-10 w-[2px] h-[2.5rem] bg-gradient-to-b from-[#865CF7] to-[#5435AA]"></div>
              </div>

              <div className="flex flex-row items-start gap-6 min-w-0">
                <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                  <Image src="/images/bg-bullet.svg" alt="bullet" fill />
                  <span className="relative z-10 text-white">03</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <span className="text-stage-lightGray text-base sm:text-xl whitespace-normal sm:whitespace-nowrap">
                      Claim Your Prize In:
                    </span>
                    <CountdownTimer onOpenDialog={() => setOpenDialog(true)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article>
        <h2 className="h2-title">Spin and win $STAGE and More!</h2>
        <div
          id="lastCard"
          className="self-stretch rounded-3xl relative w-full bg-stage-card-dark p-4 sm:p-6 md:p-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 justify-between w-full">
            {prizes.map((prize, index) => (
              <div key={index} className="flex justify-center w-full">
                <div className="w-full max-w-[192px] h-auto min-h-[148px] bg-[#212043] rounded-xl p-3 sm:p-4 flex flex-col items-center shadow-[1px_1px_0px_0px_rgba(255,255,255,0.1)]">
                  <div className="relative w-16 sm:w-20 md:w-24 aspect-square mb-2">
                    <Image
                      src={prize.image}
                      alt={prize.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-white text-center font-medium text-sm sm:text-base md:text-[1rem] leading-tight">
                    {prize.name}
                  </p>
                  <p className="text-stage-lightGray text-center text-xs sm:text-sm">
                    {prize.suffix}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          },
        }}
      >
        <SpinWheel 
          finalAngle={45} 
          onSpinEnd={handleSpinEnd}
          isVisible={openDialog}
        />
      </Dialog>
    </section>
  );
};

export default RafflesComponent;
