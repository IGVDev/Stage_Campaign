import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/header";
import SpHome from "../components/super-camp-home";


  

  const Home: NextPage = () => {
    const [activeCompareButtons, setActiveCompareButtons] = useState<{ [key: string]: string | null }>({});

    return (
      <div className="relative bg-whitesmoke w-full min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-row w-full max-w-[90rem] mx-auto text-white pt-6 px-[2.5rem]">          
            <section className="flex-1 flex">
              <SpHome />
            </section>
        </main>
      </div>
    );
  };

export default Home;