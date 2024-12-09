import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import Header from "../components/header";
import Navigation from "../components/navigation";
import TopPredictions from "../components/top-predictions";
import BalanceCard from "../components/balance-card";
// import TrendingQuestions from "../components/trending-questions";
// import PredictionList from "../components/prediction-list";
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
    <div className="relative bg-whitesmoke w-full h-[1080px] overflow-hidden">
      <Header />
      <main className="flex flex-row items-start justify-start gap-[1.5rem] max-w-[90rem] mx-auto text-white">
        <Navigation />
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem] pt-[1.5rem]">
          <section className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] max-w-[48.75rem]">
            <TopPredictions />
            {/* <TrendingQuestions /> */}
            {/* <CompareSection /> */}
          </section>
          <aside className="w-[22.4375rem] h-full bg-stage-card-light flex flex-col items-start justify-start gap-[1.5rem]">
            <BalanceCard />
            {/* <RecentActivities /> */}
            {/* <TopValueWeek /> */}
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Home;