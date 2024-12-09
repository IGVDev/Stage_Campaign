import type { NextPage } from "next";
import Image from "next/image";
import { Button } from "@mui/material";
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({ hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2024-12-18T17:00:00Z'); // 18 December 5pm UTC

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setIsExpired(true);
        return { hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
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
        className="p-[1px] rounded-xl bg-gradient-to-r from-[#865CF7] to-[#5435AA] hover:opacity-90 transition-opacity"
        onClick={() => console.log('Claim now!')}
      >
        <div className="px-6 py-3 rounded-xl bg-[#12152F]">
          <span className="text-white">Claim Now</span>
        </div>
      </button>
    );
  }

  return (
    <div className="p-[1px] rounded-full bg-gradient-to-r from-[#865CF7] to-[#5435AA]">
      <div className="px-6 py-3 rounded-full bg-[#12152F]">
        <span className="text-white">{`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</span>
      </div>
    </div>
  );
};

const SpHome: NextPage = () => {
  return (
    <section className="flex-1 flex flex-col gap-6">
      <article>
        <div id="topCard" className="self-stretch rounded-3xl relative w-full h-[18.0625rem] p-[2rem]" style={{ backgroundColor: '#865CF7' }}>
          {/* Background image with 10% opacity */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 rounded-3xl"
            style={{
              backgroundImage: 'url(/images/bg-01.png)',
              opacity: '0.1'
            }}
          />
          <div className="relative z-10 container mx-auto px-4">
          </div>
        </div>
      </article>
      <article>
        <h2 className="h2-title">
          Claim Your Prize in 3 Steps
        </h2>
        <div id="middleCard" className="self-stretch rounded-3xl relative w-full h-[18.0625rem] p-[2rem] flex items-center" style={{ backgroundColor: '#12152F' }}>
          <div 
            className="absolute inset-0 bg-right z-0 rounded-3xl"
            style={{
              backgroundImage: 'url(/images/bg-02.png)',
              opacity: '1',
              backgroundSize: 'auto 100%',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="relative z-10 container mx-auto">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6 relative">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <Image src="/images/bg-bullet-active.svg" alt="bullet" layout="fill" />
                  <span className="relative z-10 text-white">01</span>
                </div>
                <span className="text-white text-xl">Stake stage Tokens on www.demo.com</span>
                {/* Línea vertical al siguiente bullet */}
                <div className="absolute left-5 top-10 w-[2px] h-[2.5rem] bg-gradient-to-b from-[#865CF7] to-[#5435AA]"></div>
              </div>
              
              <div className="flex items-center gap-6 relative">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <Image src="/images/bg-bullet.svg" alt="bullet" layout="fill" />
                  <span className="relative z-10 text-white">02</span>
                </div>
                <span className="text-stage-lightGray text-xl">Snapshop on the 17th of December at demo</span>
                {/* Línea vertical al siguiente bullet */}
                <div className="absolute left-5 top-10 w-[2px] h-[2.5rem] bg-gradient-to-b from-[#865CF7] to-[#5435AA]"></div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <Image src="/images/bg-bullet.svg" alt="bullet" layout="fill" />
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
        <div id="lastCard" className="self-stretch rounded-3xl relative w-full h-[18.0625rem] bg-stage-card-dark p-[2rem]">
          
          <div className="relative z-10 container mx-auto px-4">
            
          </div>
        </div>
      </article>
      
    </section>
  );
};

export default SpHome;
