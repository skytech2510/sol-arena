"use client";
import Image from "next/image";
import CharacterSection from "./components/CharacterSection";
import FeaturesSection from "./components/FeaturesSection";
import EvaSection from "./components/EvaSection";
import SeasonSection from "./components/SeasonSection";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const navigator = useRouter();
  const [isButton, setIsButton] = useState(false);
  const [activeCardID, setActiveCardID] = useState(0);

  const handlePlayButton = () => {
    setIsButton(true);
    setTimeout(() => {
      setIsButton(false);
    }, 600);
  };

  return (
    <div className="relative z-0 mt-[72px]">
      <main className="w-full">
        <div
          className="hero-section w-full bg-center bg-no-repeat mb-[-2px]"
          style={{ backgroundImage: "url('./assets/hero-img.webp')" }}
        >
          <div className="flex lg:hidden justify-center items-center w-[100%] absolute top-[525px]">
            <button
              className=" w-[163px] h-[52px] rounded-md font-bold font-[Oswald] text-[28px] text-[#020215]"
              style={{
                backgroundImage: "url(./assets/play-now-btn.png)",
                backgroundSize: "100% 100%",
                boxShadow: "0px 0px 20px 3px",
              }}
              onClick={() => {
                handlePlayButton();
              }}
            >
              PLAY NOW
            </button>
            <Image
              src={"/assets/play-spark.png"}
              alt="spark"
              width={264}
              height={264}
              className=" absolute top-[-40px] left-[50%] w-[160px] h-[160px]"
              style={{ display: isButton ? "block" : "none" }}
            />
          </div>
        </div>

        <CharacterSection />

        <div
          className="section w-full bg-center"
          style={{ backgroundImage: "url('/assets/features/Features.webp')" }}
        >
          <div className="max-w-[1440px] m-auto py-0 md:py-[101px] px-0 md:px-[64px] ">
            <div className=" px-2 overflow-hidden flex flex-row justify-center items-center bg-center bg-opacity-20 bg-[#1919AD] bg-[url('/assets/features/Mask-group.png')] w-full h-[837px] border-0 md:border-8 border-[#41FFC6] rounded-none md:rounded-[56px] shadow-none md:shadow-[0_0_41px_3px_#2600A8] shadow-inner-[0_0_50px_3px_#0095FF] relative">
              <div
                className="flex justify-center mr-[-15px] md:mr-0 items-center w-[210px] md:w-[283px] h-10 md:h-[76px] absolute top-[38px] md:top-0 right-[-1px] bg-cover bg-center text-[24px] md:text-[32px] font-black text-[#0A164E] "
                style={{
                  backgroundImage: "url('/assets/features/text-back.png')",
                }}
              >
                <h1 className="pl-[25px] pb-0 md:pb-[8px]">Features</h1>
              </div>
              <div className=" hidden md:block">
                <Image
                  src={"/assets/features/frog.png"}
                  alt="frog"
                  width={238}
                  height={240}
                  className="absolute bottom-[-75px] right-[-30px] z-20"
                />
              </div>
              <div className=" overflow-auto pl-[70px] hidden md:block">
                <div className="flex flex-row items-center gap-5 ">
                  <FeaturesSection
                    setCardID={setActiveCardID}
                    id={0}
                    isActive={activeCardID === 0 ? true : false}
                    featurescolor="#8C46FF"
                    featuresborder="#EAD4FF"
                    featurestop="/assets/features/feature-image-top1.png"
                    featuresbottom="/assets/features/feature-image-bottom1.png"
                  />
                  <FeaturesSection
                    setCardID={setActiveCardID}
                    id={1}
                    isActive={activeCardID === 1 ? true : false}
                    featurescolor="#EF821D"
                    featuresborder="#FFFBD4"
                    featurestop="/assets/features/feature-image-top2.png"
                    featuresbottom="/assets/features/feature-image-bottom2.png"
                  />
                  <FeaturesSection
                    setCardID={setActiveCardID}
                    id={2}
                    isActive={activeCardID === 2 ? true : false}
                    featurescolor="#E6D11D"
                    featuresborder="#FFFACC"
                    featurestop="/assets/features/feature-image-top3.png"
                    featuresbottom="/assets/features/feature-image-bottom3.png"
                  />
                  <FeaturesSection
                    setCardID={setActiveCardID}
                    id={3}
                    isActive={activeCardID === 3 ? true : false}
                    featurescolor="#21E6AB"
                    featuresborder="#B3FFE8"
                    featurestop="/assets/features/feature-image-top4.png"
                    featuresbottom="/assets/features/feature-image-bottom4.png"
                  />
                  <FeaturesSection
                    setCardID={setActiveCardID}
                    id={4}
                    isActive={activeCardID === 4 ? true : false}
                    featurescolor="#2AD0F4"
                    featuresborder="#B3F1FF"
                    featurestop="/assets/features/feature-image-top5.png"
                    featuresbottom="/assets/features/feature-image-bottom5.png"
                  />
                </div>
              </div>

              <div className=" block md:hidden">
                <FeaturesSection
                  setCardID={setActiveCardID}
                  id={0}
                  isActive={true}
                  featurescolor={
                    activeCardID === 0
                      ? "#8C46FF"
                      : activeCardID === 1
                      ? "#EF821D"
                      : activeCardID === 2
                      ? "#E6D11D"
                      : activeCardID === 3
                      ? "#21E6AB"
                      : "#2AD0F4"
                  }
                  featuresborder={
                    activeCardID === 0
                      ? "#EAD4FF"
                      : activeCardID === 1
                      ? "#FFFBD4"
                      : activeCardID === 2
                      ? "#FFFACC"
                      : activeCardID === 3
                      ? "#B3FFE8"
                      : "#B3F1FF"
                  }
                  featurestop={
                    activeCardID === 0
                      ? "/assets/features/feature-image-top1.png"
                      : activeCardID === 1
                      ? "/assets/features/feature-image-top2.png"
                      : activeCardID === 2
                      ? "/assets/features/feature-image-top3.png"
                      : activeCardID === 3
                      ? "/assets/features/feature-image-top4.png"
                      : "/assets/features/feature-image-top5.png"
                  }
                  featuresbottom={
                    activeCardID === 0
                      ? "/assets/features/feature-image-bottom1.png"
                      : activeCardID === 1
                      ? "/assets/features/feature-image-bottom2.png"
                      : activeCardID === 2
                      ? "/assets/features/feature-image-bottom3.png"
                      : activeCardID === 3
                      ? "/assets/features/feature-image-bottom4.png"
                      : "/assets/features/feature-image-bottom5.png"
                  }
                />
                <div className="mt-[51px] w-[100%] flex flex-row justify-center items-center">
                  <div className="border-2 rounded-[20px] p-2 flex gap-3">
                    <div
                      className={`w-[12px] h-[12px] rounded-[50%] ${
                        activeCardID == 0 ? "bg-[#5CFFE2]" : "bg-[#8998DD]"
                      }  cursor-pointer`}
                      onClick={() => {
                        setActiveCardID(0);
                      }}
                    ></div>
                    <div
                      className={`w-[12px] h-[12px] rounded-[50%] ${
                        activeCardID == 1 ? "bg-[#5CFFE2]" : "bg-[#8998DD]"
                      }  cursor-pointer`}
                      onClick={() => {
                        setActiveCardID(1);
                      }}
                    ></div>
                    <div
                      className={`w-[12px] h-[12px] rounded-[50%] ${
                        activeCardID == 2 ? "bg-[#5CFFE2]" : "bg-[#8998DD]"
                      }  cursor-pointer`}
                      onClick={() => {
                        setActiveCardID(2);
                      }}
                    ></div>
                    <div
                      className={`w-[12px] h-[12px] rounded-[50%] ${
                        activeCardID == 3 ? "bg-[#5CFFE2]" : "bg-[#8998DD]"
                      }  cursor-pointer`}
                      onClick={() => {
                        setActiveCardID(3);
                      }}
                    ></div>
                    <div
                      className={`w-[12px] h-[12px] rounded-[50%] ${
                        activeCardID == 4 ? "bg-[#5CFFE2]" : "bg-[#8998DD]"
                      }  cursor-pointer`}
                      onClick={() => {
                        setActiveCardID(4);
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <EvaSection />

        <div
          className="section w-full bg-right bg-no-repeat border"
          style={{ backgroundImage: "url('/assets/season/season_back.webp')" }}
        >
          <div className="max-w-[1440px] m-auto flex flex-col gap-14 justify-center items-center pt-[40px] md:pt-[50px] pb-[162px]">
            <Image
              src={"/assets/season/season-logo.png"}
              alt="logo"
              width={288}
              height={120}
              className="w-[163px] h-[67px] md:w-[288px] md:h-[120px]"
            />
            <div className="">
              <SeasonSection />
            </div>
            <button
              className="w-[264px] h-[84px] rounded-md font-bold font-[Oswald] text-[38px] text-[#020215]"
              style={{
                backgroundImage: "url(./assets/play-now-btn.png)",
                backgroundSize: "100% 100%",
                boxShadow: "0px 0px 20px 3px",
              }}
              onClick={() => {
                navigator.push("/");
              }}
            >
              PLAY NOW
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
