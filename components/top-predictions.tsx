import type { NextPage } from "next";
import Image from "next/image";
import { Button } from "@mui/material";

interface Prediction {
  id: number;
  artist: string;
  image: string;
}

const mockPredictions: Prediction[] = [
  {
    id: 1,
    artist: "Drake",
    image: "/frame-872@2x.png"
  },
  {
    id: 2,
    artist: "Kendrick Lamar",
    image: "/frame-872-1@2x.png"
  },
  {
    id: 3,
    artist: "Doja Cat",
    image: "/frame-872-2@2x.png"
  },
  {
    id: 4,
    artist: "Nicki Minaj",
    image: "/frame-872-3@2x.png"
  },
  {
    id: 5,
    artist: "Lil Durk",
    image: "/frame-872-4@2x.png"
  }
];

const TopPredictions: NextPage = () => {
  return (
    <section>
      <h2 className="h2-title">
        Top Prediction of the day
      </h2>
      <div id="top-predictions-card" className="self-stretch rounded-3xl bg-stage-card-light overflow-hidden flex flex-row items-start justify-start p-[1.5rem] gap-[1.5rem] max-w-full h-[25.1875rem] text-[1.5rem]">
        <Image
          className="h-[22.188rem] w-[17.688rem] relative rounded-[12.2px] overflow-hidden shrink-0 object-cover mq750:flex-1"
          loading="lazy"
          width={283}
          height={355}
          alt=""
          src="/frame-16@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] min-w-[17.25rem] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <h3 className="self-stretch leading-[1.8125rem] capitalize font-bold text-[1.5rem]">
              <p>Who's winning rap album of the year?</p>
            </h3>
            <div className="self-stretch rounded-lg bg-stage-card-detail overflow-x-auto flex flex-row items-center justify-between py-[0.75rem] px-[1rem] gap-[1.062rem] text-[1rem] text-lightsteelblue">
              <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                <div className="relative tracking-[0.03em] text-stage-lightGray">
                  Volume:
                </div>
                <div className="relative tracking-[0.03em] font-medium text-stage-primary inline-block min-w-[5.813rem]">
                  $1.3M USDT
                </div>
              </div>
              <div className="relative tracking-[0.03em] font-light text-[#5D5DA1] inline-block min-w-[0.375rem]">
                |
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                  <div className="relative tracking-[0.03em] text-stage-lightGray">
                    Ends in:
                  </div>
                  <div className="relative tracking-[0.03em] font-medium text-stage-primary whitespace-nowrap">
                    19h 24min 43sec
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="predictions" className="self-stretch flex flex-col items-start justify-start gap-[1rem] text-[1.125rem]">
            {mockPredictions.map((prediction) => (
              <div key={prediction.id} className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq450:flex-wrap">
                <div className="flex flex-row items-center justify-start gap-[0.687rem]">
                  <Image
                    className="h-[1.5rem] w-[1.5rem] relative rounded-21xl overflow-hidden shrink-0 object-cover"
                    width={24}
                    height={24}
                    alt={prediction.artist}
                    src={prediction.image}
                  />
                  <div className="relative tracking-[0.03em] font-medium">
                    {prediction.artist}
                  </div>
                </div>
                <div className="w-[9.688rem] flex flex-row items-center justify-start gap-[0.562rem]">
                  <Button
                    className="h-[1.875rem] flex-1"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#2fcfa4",
                      fontSize: "16",
                      background: "rgba(47, 207, 164, 0.15)",
                      borderRadius: "100px",
                      "&:hover": {
                        background: "rgba(47, 207, 164, 0.15)",
                      },
                    }}
                  >
                    Yes
                  </Button>
                  <Button
                    className="h-[1.875rem] flex-1"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fc4a4a",
                      fontSize: "16",
                      background: "rgba(252, 74, 74, 0.15)",
                      borderRadius: "100px",
                      "&:hover": {
                        background: "rgba(252, 74, 74, 0.15)",
                      },
                    }}
                  >
                    No
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPredictions;
