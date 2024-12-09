import Image from "next/image";
import Button from "@mui/material/Button";

const mockCompareItems = [
  {
    id: "1",
    title: "Taylor Swift vs Ed Sheeran",
    description: 'Which album will reach 1 billion Spotify streams first: "Midnights" by Taylor Swift or "Subtract" by Ed Sheeran?',
    image: "/images/taylor-swift-ed-sheeran.jpeg",
    btnTag1: "Midnights",
    btnTag2: "Substract",
    volume: "$1.2M USDT",
    endTime: "6d 8h 30min"
  },
  {
    id: "2",
    title: "Cardi B vs Nicki Minaj",
    description: 'Who will gain 500,000 new Spotify followers faster after their album release: Cardi B with "Bardi\'s World" or Nicki Minaj with "Queen of Hearts"?',
    image: "/images/cardi-nicki.jpg",
    btnTag1: "Bardi\'s World",
    btnTag2: "Queen of Hearts",
    volume: "$892.5K USDT",
    endTime: "8d 12h 45min"
  }
];

const Compare = () => {
  return (
    <section>
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-center justify-between">
          <h2 className="h2-title">Compare</h2>
        </div>
        <div className="self-stretch grid grid-cols-2 gap-6">
          {mockCompareItems.map((item) => (
            <div
              id="compare-card"
              key={item.id}
              className="rounded-3xl bg-stage-card-dark overflow-hidden flex flex-col items-start justify-between py-[1.25rem] px-[1rem] min-h-[368px]"
            >          
              <div className="w-full flex flex-col gap-4">
                <div className="w-full flex flex-row items-center justify-between gap-4">
                  <div className="flex-1 aspect-square relative rounded-2xl overflow-hidden h-[13.25rem] mb-[0.625rem]">
                    <Image
                      className="object-cover"
                      fill
                      alt=""
                      src={item.image}
                    />
                  </div>
                </div>
                <div className="text-white leading-[1.125rem] font-medium text-[1rem]">
                  {item.description}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[0.562rem] mt-4">
              <Button
                    className="h-[2.5rem] flex-1"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "white",
                      fontSize: "16",
                      height: 40,
                      background: "var(--stage-primary-20)",
                      borderRadius: "100px",
                      "&:hover": {
                        background: "var(--stage-primary)",
                      },
                    }}
                  >
                 {item.btnTag1}
                </Button>
                <Button
                    className="h-[2.5rem] flex-1"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "white",
                      fontSize: "16",
                      height: 40,
                      background: "var(--stage-primary-20)",
                      borderRadius: "100px",
                      "&:hover": {
                        background: "var(--stage-primary)",
                      },
                    }}
                  >
                  {item.btnTag2}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compare;
