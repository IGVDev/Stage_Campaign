import type { NextPage } from "next";
import Image from "next/image";

type NavigationProps = {
  className?: string;
};

const Navigation: NextPage<NavigationProps> = ({
  className = "",
}) => {
  return (
    <div className="w-[13.313rem] relative">
      <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-[rgba(121,73,246,0.2)] via-[rgba(121,73,246,0.5)] to-[rgba(121,73,246,0.2)]" />
      <div className="w-full flex flex-col items-start justify-start pt-[2.5rem] pl-[2.5rem]">
        <div className="flex flex-col items-start justify-start gap-[3rem]">
          <div className="flex flex-row items-start justify-start gap-[0.687rem]">
            <Image
              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/images/home.svg"
            />
            <a className="[text-decoration:none] relative tracking-[0.03em] capitalize font-bold text-[inherit]">
              Home
            </a>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.687rem] text-white">
            <Image
              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
              width={24}
              height={24}
              alt=""
              src="/images/wallet_regular.svg"
            />
            <div className="relative tracking-[0.03em] capitalize">
              Wallet
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.687rem] text-white">
            <Image
              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
              width={24}
              height={24}
              alt=""
              src="/images/delete_regular.svg"
            />
            <div className="relative tracking-[0.03em] capitalize">
              Delete
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.687rem] text-white">
            <Image
              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
              width={24}
              height={24}
              alt=""
              src="/images/heart_regular.svg"
            />
            <div className="relative tracking-[0.03em] capitalize">
              Favourites
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.687rem] text-white">
            <Image
              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
              width={24}
              height={24}
              alt=""
              src="/images/settings_regular.svg"
            />
            <div className="relative tracking-[0.03em] capitalize">
              Settings
            </div>
          </div>
        </div>      
      </div>
    </div>
  );
};

export default Navigation;
