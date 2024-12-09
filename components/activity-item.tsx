import Image from "next/image";

type ActivityItemProps = {
  userImage: string;
  question: string;
  userAvatar: string;
  userId: string;
  action: "bought" | "created";
  decision: "Yes" | "No";
  price: string;
  amount: string;
  decisionColor?: string;
  frameDivPadding?: string;
  userIdDisplay?: string;
  userIdMinWidth?: string;
  frameDivWidth?: string;
  frameDivGap?: string;
  priceDisplay?: string;
  priceMinWidth?: string;
};

const ActivityItem = ({
  userImage,
  question,
  userAvatar,
  userId,
  action,
  decision,
  price,
  amount,
  decisionColor = "#2fcfa4",
  frameDivPadding = "0rem 0.437rem",
  userIdDisplay = "inline-block",
  userIdMinWidth = "6.313rem",
  frameDivWidth = "17.125rem",
  frameDivGap = "0.125rem 0.162rem",
  priceDisplay = "inline-block",
  priceMinWidth = "2.188rem"
}: ActivityItemProps) => {
  return (
    <div className="self-stretch flex flex-col gap-3">
      <div className="flex items-start gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            className="object-cover"
            fill
            alt=""
            src={userImage}
          />
        </div>
        <div className="flex-1 max-w-[16.6875rem]">
          <div className="text-white text-sm leading-[1.125rem]">
            {question}
          </div>
          <div className="flex items-center gap-2 mt-2 ">
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 rounded-full overflow-hidden">
                <Image
                  className="object-cover"
                  width={20}
                  height={20}
                  alt=""
                  src={userAvatar}
                />
              </div>
              <span 
                className="text-[0.75rem] text-stage-lightGray"
                style={{
                  display: userIdDisplay,
                  minWidth: userIdMinWidth
                }}
              >
                {userId}
              </span>
            </div>
            <span className="text-[0.75rem] text-stage-lightGray">
              {action}
            </span>
            <span 
              className="text-[0.75rem]"
              style={{ color: decisionColor }}
            >
              {decision}
            </span>
            <span className="text-[0.75rem] text-white">at</span>
            <div 
              className="flex items-center"
              style={{
                width: frameDivWidth,
                gap: frameDivGap,
                padding: frameDivPadding
              }}
            >
              <span 
                className="text-[0.75rem] text-white"
                style={{
                  display: priceDisplay,
                  minWidth: priceMinWidth
                }}
              >
                {price}
              </span>
              <span className="text-[0.75rem] text-stage-lightGray">
                {amount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
