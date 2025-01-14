"use client";
import Image from "next/image";
import CharacterSection from "./components/CharacterSection";
import FeaturesSection from "./components/FeaturesSection";
import EvaSection from "./components/EvaSection";
import SeasonSection from "./components/SeasonSection";

import { useRouter } from "next/navigation";

export default function Home() {
  const navigator = useRouter();
  return (
    <div className="relative z-[0]">
      <main className="w-full">
        <div
          className="hero-section w-full bg-center bg-no-repeat mb-[-2px]"
          style={{ backgroundImage: "url('./assets/hero-img.webp')" }}
        ></div>

        <CharacterSection
          backImage="/assets/character/character-section-bg1.webp"
          bigGuy="/assets/character/character-girl.png"
          smallGuy="/assets/character/character-small-girl.png"
        />
        {/* <CharacterSection
          backImage="/assets/character/character-section-bg2.webp"
          bigGuy="/assets/character/character-boy.png"
          smallGuy="/assets/character/character-small-boy.png"
        /> */}

        <div
          className="section w-full h-auto bg-center"
          style={{ backgroundImage: "url('/assets/features/Features.webp')" }}
        >
          <div className="max-w-[1440px] m-auto py-[101px] px-[64px]">
            <div className="flex flex-row justify-center items-center bg-center bg-opacity-20 bg-[#1919AD] bg-[url('/assets/features/Mask-group.png')] w-full h-[837px] border-8 border-[#41FFC6] rounded-[56px] shadow-[0_0_41px_3px_#2600A8] shadow-inner-[0_0_50px_3px_#0095FF] relative">
              <div
                className="flex justify-center items-center w-[283px] h-[76px] absolute top-0 right-[-1px] bg-cover bg-center text-[32px] font-black text-[#0A164E]"
                style={{
                  backgroundImage: "url('/assets/features/text-back.png')",
                }}
              >
                <h1 className="pl-[25px] pb-[8px]">Features</h1>
              </div>
              <div className="">
                <Image
                  src={"/assets/features/frog.png"}
                  alt="frog"
                  width={238}
                  height={240}
                  className="absolute bottom-[-75px] right-[-30px] z-20"
                />
              </div>
              <div className="flex flex-row justify-center items-center gap-5 flex-wrap">
                <FeaturesSection
                  featurestext={true}
                  featurescolor="#8C46FF"
                  featureswidth={360}
                  featuresborder="#EAD4FF"
                  featurestop="/assets/features/feature-image-top1.png"
                  featuresbottom="/assets/features/feature-image-bottom1.png"
                />
                <FeaturesSection
                  featurestext={false}
                  featurescolor="#EF821D"
                  featureswidth={180}
                  featuresborder="#FFFBD4"
                  featurestop="/assets/features/feature-image-top2.png"
                  featuresbottom="/assets/features/feature-image-bottom2.png"
                />
                <FeaturesSection
                  featurestext={false}
                  featurescolor="#E6D11D"
                  featureswidth={180}
                  featuresborder="#FFFACC"
                  featurestop="/assets/features/feature-image-top3.png"
                  featuresbottom="/assets/features/feature-image-bottom3.png"
                />
                <FeaturesSection
                  featurestext={false}
                  featurescolor="#21E6AB"
                  featureswidth={180}
                  featuresborder="#B3FFE8"
                  featurestop="/assets/features/feature-image-top4.png"
                  featuresbottom="/assets/features/feature-image-bottom4.png"
                />
                <FeaturesSection
                  featurestext={false}
                  featurescolor="#2AD0F4"
                  featureswidth={180}
                  featuresborder="#B3F1FF"
                  featurestop="/assets/features/feature-image-top5.png"
                  featuresbottom="/assets/features/feature-image-bottom5.png"
                />
              </div>
            </div>
          </div>
        </div>

        <EvaSection />
        
        <div
          className="section w-full h-[1024px] bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/season/season_back.webp')" }}
        >
          <div className="max-w-[1440px] m-auto flex flex-col justify-center items-center pt-[50px] pb-[162px]">
            <Image
              src={"/assets/season/season-logo.png"}
              alt="logo"
              width={288}
              height={120}
            />
            <div className="mt-[51px]">
              <SeasonSection />
            </div>
            <button
              className="w-[264px] h-[84px] rounded-md mt-[55px] font-bold font-[Oswald] text-[38px] text-[#020215]"
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
