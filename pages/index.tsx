import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import Header from "../components/header";
// import Navigation from "../components/navigation";
// import TrendingQuestions from "../components/trending-questions";
// import TopPredictions from "../components/top-predictions";
// import PredictionList from "../components/prediction-list";
// import BalanceCard from "../components/balance-card";
// import RecentActivities from "../components/recent-activities";
// import TopValueWeek from "../components/top-value-week";
// import CompareSection from "../components/compare-section";
import { Prediction } from "../types/predictions";

const Home: NextPage = () => {
  // Mock data
  const mockPredictions: Prediction[] = [
    {
      id: "1",
      question: "Who's winning rap album of the year?",
      volume: "$1.3M USDT",
      endTime: "19h 24min 43sec",
      image: "/images/frame-16@2x.png",
      options: [
        {
          id: "1",
          name: "Drake",
          image: "/images/frame-872@2x.png"
        },
        {
          id: "2",
          name: "Kendrick Lamar",
          image: "/images/frame-872-1@2x.png"
        },
        {
          id: "3",
          name: "Doja Cat",
          image: "/images/frame-872-2@2x.png"
        }
      ]
    },
    {
      id: "2",
      question: "Most streamed artist December 2023",
      volume: "$892.2K USDT",
      endTime: "4d 12h 54min",
      image: "/images/frame-16-1@2x.png",
      options: [
        {
          id: "1",
          name: "Bad Bunny",
          image: "/images/frame-872-3@2x.png"
        },
        {
          id: "2",
          name: "Taylor Swift",
          image: "/images/frame-872-4@2x.png"
        }
      ]
    }
  ];

  const [activeCompareButtons, setActiveCompareButtons] = useState<{ [key: string]: string | null }>({});

  const handleCompareClick = (groupId: string, option: string) => {
    setActiveCompareButtons(prev => ({
      ...prev,
      [groupId]: prev[groupId] === option ? null : option
    }));
  };

  return (
    <div className="relative bg-whitesmoke w-full h-[1080px] overflow-hidden text-left text-base text-gray-200 font-inter">
      <Header />
      {/* <Navigation /> */}
      <main className="absolute top-[104px] left-[80px] w-[1840px] flex flex-col items-start justify-start gap-[32px] text-17xl">
        <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
            {/* <TrendingQuestions /> */}
            {/* <TopPredictions predictions={mockPredictions} onCompareClick={handleCompareClick} /> */}
            {/* <PredictionList /> */}
          </div>
          <div className="w-[384px] flex flex-col items-start justify-start gap-[32px] text-base">
            {/* <BalanceCard /> */}
            {/* <RecentActivities /> */}
            {/* <TopValueWeek /> */}
          </div>
        </div>
        {/* <CompareSection
          activeCompareButtons={activeCompareButtons}
          onCompareClick={handleCompareClick}
          predictions={mockPredictions}
        /> */}
      </main>
    </div>
  );
};

export default Home;