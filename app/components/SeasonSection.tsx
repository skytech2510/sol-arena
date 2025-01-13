"use client";
import Image from "next/image";

const SeasonSection: React.FC = () => {
  return (
    <>
      <div className="w-[540px] h-[540px] flex justify-center items-center relative hover:cursor-pointer">
        <Image
          src={"/assets/season/rot-circle1.png"}
          alt="rot circle"
          width={540}
          height={540}
          className="absolute transition-transform duration-500 animate-spin-slow"
        />
        <Image
          src={"/assets/season/rot-circle2.png"}
          alt="rot circle"
          width={460}
          height={460}
          className="absolute transition-transform duration-500 animate-spin-slow-reverse"
        />
        <div className="w-[410px] h-[410px] absolute border-[#FFFFFF] border-[10px] rounded-[50%] flex justify-center items-center">
          <div
            className=" w-[390px] h-[390px] border-[8px] border-[#97F9FF] border-opacity-35 rounded-[50%] bg-center bg-no-repeat flex flex-col justify-center items-center"
            style={{
              backgroundImage: "url('/assets/season/inner-circle-back.png')",
              backgroundSize: "115% 115%",
            }}
          >
            <h1 className="text-[#41FFC6] text-[36px] font-[Poppins] font-semibold w-[340px] text-center leading-9 pt-[40px]">
              Season Zero: Extract to Airdrop
            </h1>
            <h2 className="text-[#fff] text-[20px] font-[Poppins] font-semibold w-[340px] text-center mt-[30px]">
              Collect noCHILL to earn your $CHILL Airdrop!
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default SeasonSection;
