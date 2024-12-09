import type { NextPage } from "next";
import Image from "next/image";
import { Button } from "@mui/material";

interface TrendingQuestion {
  id: string;
  question: string;
  image: string;
  volume: string;
  endTime: string;
}

const mockTrendingQuestions: TrendingQuestion[] = [
  {
    id: "1",
    question: "Will Beyoncé's \"Cowboy Carter\" win Album of the Year at the 2024 Grammys?",
    image: "/images/beyonce.jpeg",
    volume: "$892.2K USDT",
    endTime: "4d 12h 54min"
  },
  {
    id: "2",
    question: "Can Miley Cyrus's Something Beautiful debut at #1 on Billboard 200 chart?",
    image: "/images/miley.jpg",
    volume: "$654.1K USDT",
    endTime: "2d 8h 30min"
  },
  {
    id: "3",
    question: "100B Streams within the next 2 years?",
    image: "/images/bruce.jpg",
    volume: "$1.2M USDT",
    endTime: "15d 6h 12min"
  }
];

const TrendingPredictions: NextPage = () => {
  return (
    <section>
      <h2 className="h2-title">Trending</h2>
      <div className="grid grid-cols-3 gap-6">
        {mockTrendingQuestions.map((question) => (
          <div
            key={question.id}
            className="rounded-3xl bg-stage-card-dark overflow-hidden flex flex-col items-start justify-between px-[1rem] py-[1.25rem] "
          >
            <Image
              className="w-full h-[13.2531rem] relative rounded-2xl overflow-hidden object-cover pb-[0.625rem]"
              width={212}
              height={212}
              alt={question.question}
              src={question.image}
            />
            <div className="flex flex-col gap-4 w-full flex-grow">
              <div className="font-medium text-white leading-tight">
                {question.question}
              </div>              
              <div className="mt-auto self-stretch flex flex-row items-start justify-start gap-[0.562rem]">
                <Button
                  className="h-[2.375rem] flex-1"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#2fcfa4",
                    fontSize: "16",
                    background: "rgba(47, 207, 164, 0.15)",
                    borderRadius: "100px",
                    "&:hover": { background: "rgba(47, 207, 164, 0.25)" },
                    height: 38,
                  }}
                >
                  Yes
                </Button>
                <Button
                  className="h-[2.375rem] flex-1"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fc4a4a",
                    fontSize: "16",
                    background: "rgba(252, 74, 74, 0.15)",
                    borderRadius: "100px",
                    "&:hover": { background: "rgba(252, 74, 74, 0.25)" },
                    height: 38,
                  }}
                >
                  No
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingPredictions;
