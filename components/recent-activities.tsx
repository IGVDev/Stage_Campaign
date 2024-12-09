import Image from "next/image";
import ActivityItem from "./activity-item";
import React from "react";

const RecentActivities: React.FC = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
        <h2 className="h2-title">Recent Activities</h2>
        <a className="[text-decoration:none] relative font-medium text-primary text-right inline-block min-w-[3.563rem]">View all</a>
      </div>
      <div className="self-stretch rounded-3xl bg-stage-card-dark flex flex-row items-start justify-start p-4 box-border mq450:h-auto">
        <div className="flex-1 flex flex-col items-start justify-start gap-2">
          <ActivityItem
            userImage="/images/frame-1261153080-4@2x.png"
            question={'Will Beyoncé\'s "Cowboy Carter" win Album of the Year at the 2024 Grammys?'}
            userAvatar="/images/frame-1261153080-4@2x.png"
            userId="R74otx5qJUV4"
            action="bought"
            decision="Yes"
            price="100¢"
            amount="($100.00)"
            decisionColor="#2fcfa4"
          />
          <div className="w-full h-[1px] bg-[#1E2B3D]" />
          <ActivityItem
            userImage="/images/frame-1261153080-4@2x.png"
            question={'Can Miley Cyrus\'s "Something Beautiful" debut at #1 on Billboard 200 chart?'}
            userAvatar="/images/frame-872-4@2x.png"
            userId="45nj98HF43ff"
            action="bought"
            decision="No"
            price="91¢"
            amount="($10.00)"
            decisionColor="#FC4A4A"
          />
          <div className="w-full h-[1px] bg-[#1E2B3D]" />
          <ActivityItem
            userImage="/images/frame-1261153080-4@2x.png"
            question="100B Streams within the next 2 years?"
            userAvatar="/images/frame-872-1@2x.png"
            userId="8Eotx5qJmuUVd"
            action="bought"
            decision="Yes"
            price="471¢"
            amount="($471.00)"
            decisionColor="#2fcfa4"
          />
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
