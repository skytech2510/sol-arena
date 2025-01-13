"use client";

import Image from "next/image";
interface FeaturesSection {
  featurestop: string;
  featuresbottom: string;
  featurescolor: string;
  featuresborder: string;
  featureswidth: number;
  featurestext: boolean;
}

const FeaturesSection: React.FC<FeaturesSection> = ({
  featurestop,
  featuresbottom,
  featurescolor,
  featuresborder,
  featureswidth,
  featurestext,
}) => {
  const topLeftPosition = featureswidth / 2 - 58;
  const bottomLeftPosition = featureswidth / 2 - 35;
  return (
    <>
      <div className=" relative">
        <div
          className="h-[600px] border-2 rounded-3xl p-5 bg-black bg-opacity-55 relative"
          style={{
            boxShadow: `inset 0 0 20px 15px ${featurescolor}`,
            width: `${featureswidth}px`,
            borderColor: `${featuresborder}`
          }}
        >
          <div
            className=" flex justify-center items-center bg-white"
            style={{
              boxShadow: `inset 0 0 15px 2px ${featurescolor}`,
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={"/assets/features/alt-img.png"}
              alt="alt"
              width={48}
              height={40}
            />
          </div>
          <Image
            src={`${featurestop}`}
            alt="alt"
            width={115}
            height={6}
            style={{
              position: "absolute",
              left: `${topLeftPosition}px`,
              top: "-2px",
            }}
          />
          <Image
            src={`${featuresbottom}`}
            alt="alt"
            width={70}
            height={6}
            style={{
              position: "absolute",
              left: `${bottomLeftPosition}px`,
              bottom: "-2.3px",
            }}
          />
        </div>
        <div
          className="z-10 text-white flex flex-col absolute bottom-[45px] left-[-71px]"
          style={{ display: featurestext ? "block" : "none" }}
        >
          <div
            className="w-[154px] h-[42px] flex justify-center items-center bg-center bg-no-repeat font-[Montserrat] font-semibold text-[20px]"
            style={{
              backgroundImage: "url('/assets/features/text-back2.png')",
            }}
          >
            <h1 className="pr-5">Feature 1</h1>
          </div>
          <div className="text-[16px] font-[Montserrat] text-white font-medium px-4 py-3 border-[2px] border-[#130C51] rounded-[20px] rounded-ss-[0] max-w-[366px] bg-[#603CDB]">
            Lorem ipsum dolor sit amet conser. Rhoncus gravida massa posuere
            sed. Pharet lorem facis. Sit laoreet sed pretm fusce nisl faucibus.
          </div>
        </div>
      </div>
    </>
  );
};
export default FeaturesSection;
