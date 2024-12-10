import Image from "next/image";
import { Button } from "@mui/material";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  useEffect(() => {
    // Establecer la fecha objetivo 18 de Diciembre a las 5pm UTC
    const targetDate = new Date('2024-12-18T17:00:00Z');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds
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
        onClick={() => window.open('https://www.stage.community/', '_blank', 'noopener,noreferrer')}
      >
        <div className="px-6 py-2 rounded-full text-[#7949F6] font-medium bg-white hover:bg-[#865CF7] hover:text-white">
          <span>Stake Now</span>
        </div>
      </button>
    );
  }

  return (
    <div className="p-[1px] rounded-full bg-gradient-to-r from-[#865CF7] to-[#5435AA]">
      <div className="px-6 py-3 rounded-full bg-[#12152F]">
        <span className="text-white">
          {`${formatNumber(timeLeft.days)}d ${formatNumber(timeLeft.hours)}h ${formatNumber(timeLeft.minutes)}m ${formatNumber(timeLeft.seconds)}s`}
        </span>
      </div>
    </div>
  );
};

const prizes = [
  {
    name: "Tesla Model S",
    suffix: "White(1x)",
    image: "/Stage_Campaign/images/grid/01.png"
  },
  {
    name: "Rolex",
    suffix: "(1x)",
    image: "/Stage_Campaign/images/grid/02.png"
  },
  {
    name: "Play Station",
    suffix: "(1x)",
    image: "/Stage_Campaign/images/grid/03.png"
  },
  {
    name: "iPhone 15",
    suffix: "(1x)",
    image: "/Stage_Campaign/images/grid/04.png"
  },
  {
    name: "1,00,000 $Stage",
    image: "/Stage_Campaign/images/grid/05.png"
  },
  {
    name: "100 $Stage",
    image: "/Stage_Campaign/images/grid/05.png"
  },
  {
    name: "25 $Stage",
    image: "/Stage_Campaign/images/grid/05.png"
  },
  {
    name: "10 $Stage",
    image: "/Stage_Campaign/images/grid/05.png"
  },
  {
    name: "10 USDT",
    image: "/Stage_Campaign/images/grid/09.png"
  },
  {
    name: "5 USDT",
    image: "/Stage_Campaign/images/grid/09.png"
  }
];

const SuperCampHome: React.FC = () => {
  return (
    <section className="flex-1 flex flex-col gap-6">
      <article>
        <div id="topCard" className="self-stretch rounded-3xl relative w-full h-[18.0625rem] p-[2rem]" style={{ backgroundColor: '#865CF7' }}>
          {/* Background image with 10% opacity */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 rounded-3xl"
            style={{
              backgroundImage: 'url(/Stage_Campaign/images/bg-01.png)',
              opacity: '0.1'
            }}
          />
          <div className="relative z-10 flex justify-between items-center h-full">
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-block bg-[#D0BEFF] bg-opacity-20 rounded-full px-6 py-2 mb-[1.5rem] text-white font-medium text-[1rem] tracking-3percent">
                10 December 2024, 10AM UTC — 18 December 2024, 10AM UTC
              </div>
              <h1 className="text-[2rem] font-bold text-white mb-[20px] leading-[0.8]">
                Spin And Win $COOKIE And More!
              </h1>
              <p className="text-white max-w-[605px] mb-[2rem] leading-[1.3]">
              Complete Tasks & Spin to win $COOKIE other prizes include: tesla model S white, iPhone 15, Rolex, playstation, USDT and more!
              </p>
              <button 
                className="p-[1px] rounded-full bg-gradient-to-r from-[#D0BEFF] to-[#A98AF9] hover:opacity-90 transition-opacity cursor-pointer w-fit"
                onClick={() => window.open('https://www.stage.community/', '_blank', 'noopener,noreferrer')}
              >
                <div className="px-6 py-2 rounded-full text-[#7949F6] font-medium bg-white hover:bg-[#865CF7] hover:text-white">
                  <span>Stake Now</span>
                </div>
              </button>
            </motion.div>
            <motion.div 
              className="relative w-[400px] h-[200px]"
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Image
                src="/Stage_Campaign/images/prizes.png" 
                alt="Prizes" 
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </article>
      <article>
        <h2 className="h2-title">
          Claim Your Prize in 3 Steps
        </h2>
        <div id="middleCard" className="self-stretch rounded-3xl relative w-full h-[18.0625rem] p-[2rem] flex items-center" style={{ backgroundColor: '#12152F' }}>
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <motion.div 
              className="absolute inset-[-50%] w-[200%] h-[200%] z-0"
              initial={{ opacity: 0, scale: 1.4, rotate: 0, x: 400 }}
              animate={{ 
                opacity: 1, 
                scale: 1.4,
                rotate: 360,
                x: 400
              }}
              transition={{
                opacity: { duration: 0.8, ease: "easeOut" },
                scale: { duration: 0.8, ease: "easeOut" },
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              style={{
                backgroundImage: 'url(/Stage_Campaign/images/looper_bg.svg)',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <div 
              className="absolute inset-0 z-10"
              style={{
                background: 'linear-gradient(to right, #12152F 50%, rgba(18, 21, 47, 0.5) 75%, transparent 100%)'
                // Otras opciones de control:
                // 1. Degradado simple: 'linear-gradient(to right, #12152F, transparent)'
                // 2. Con punto medio: 'linear-gradient(to right, #12152F 30%, transparent)'
                // 3. Múltiples pasos: 'linear-gradient(to right, #12152F, rgba(18, 21, 47, 0.8) 40%, rgba(18, 21, 47, 0.3) 70%, transparent)'
                // 4. Ángulo específico: 'linear-gradient(45deg, #12152F, transparent)'
              }}
            />
          </div>
          
          <div className="relative z-10 container mx-auto">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6 relative">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <Image src="/Stage_Campaign/images/bg-bullet-active.svg" alt="bullet" fill />
                  <span className="relative z-10 text-white">01</span>
                </div>
                <span className="text-white text-xl">Stake stage Tokens on www.demo.com</span>
                {/* Línea vertical al siguiente bullet */}
                <div className="absolute left-5 top-10 w-[2px] h-[2.5rem] bg-gradient-to-b from-[#865CF7] to-[#5435AA]"></div>
              </div>
              
              <div className="flex items-center gap-6 relative">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <Image src="/Stage_Campaign/images/bg-bullet.svg" alt="bullet" fill />
                  <span className="relative z-10 text-white">02</span>
                </div>
                <span className="text-stage-lightGray text-xl">Snapshop on the 17th of December at demo</span>
                {/* Línea vertical al siguiente bullet */}
                <div className="absolute left-5 top-10 w-[2px] h-[2.5rem] bg-gradient-to-b from-[#865CF7] to-[#5435AA]"></div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <Image src="/Stage_Campaign/images/bg-bullet.svg" alt="bullet" fill />
                  <span className="relative z-10 text-white">03</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-stage-lightGray text-xl">Claim Your Price In:</span>
                  <CountdownTimer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article>
        <h2 className="h2-title">
          Spin and win $COOKIE and More!
        </h2>
        <div id="lastCard" className="self-stretch rounded-3xl relative w-full bg-stage-card-dark p-8">
          <div className="grid grid-cols-5 gap-4 justify-between w-full">
            {prizes.map((prize, index) => (
              <div key={index} className="flex justify-center w-full">
                <div className="w-[192px] h-[148px] bg-[#212043] rounded-xl p-4 flex flex-col items-center shadow-[1px_1px_0px_0px_rgba(255,255,255,0.1)]">
                  <div className="relative w-24 h-24 mb-2">
                    <Image src={prize.image} alt={prize.name} fill className="object-contain" />
                  </div>
                  <p className="text-white text-center font-medium text-[1rem] leading-3">{prize.name}</p>
                  {prize.suffix && <p className="text-white text-center">{prize.suffix}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
      
    </section>
  );
};

export default SuperCampHome;
