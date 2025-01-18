"use client";
import Image from "next/image";

const SeasonSection: React.FC = () => {
  return (
    <>
      <div className="w-[540px] h-[540px] border flex justify-center items-center relative hover:cursor-pointer">
        <Image
          src={"/assets/season/rot-circle1.png"}
          alt="rot circle"
          width={540}
          height={540}
          className=" absolute transition-transform duration-500 animate-spin-slow"
        />
        <Image
          src={"/assets/season/rot-circle2.png"}
          alt="rot circle"
          width={285}
          height={285}
          className="  absolute transition-transform duration-500 animate-spin-slow-reverse"
        />
        <div className=" w-[235px] md:w-[410px] h-[235px] md:h-[410px] absolute border-[#FFFFFF] border-[8px] md:border-[10px] rounded-[50%] flex justify-center items-center">
          <div
            className=" w-[219px] md:w-[390px] h-[219px] md:h-[390px] border-[4px] md:border-[8px] border-[#97F9FF] border-opacity-35 rounded-[50%] bg-center bg-no-repeat flex flex-col justify-center items-center"
            style={{
              backgroundImage: "url('/assets/season/inner-circle-back.png')",
              backgroundSize: "115% 115%",
            }}
          >
            <h1 className="text-[#41FFC6] text-[20px] md:text-[36px] font-[Poppins] font-semibold w-[190px] md:w-[340px] text-center leading-[100%] md:leading-9 pt-[14px] md:pt-[40px]">
              Season Zero: Extract to Airdrop
            </h1>
            <h2 className="text-[#fff] text-[12px] md:text-[20px] font-[Poppins] font-semibold w-[190px] md:w-[340px] leading-[150%] text-center mt-[15px] md:mt-[30px]">
              Collect noCHILL to earn your $CHILL Airdrop!
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default SeasonSection;
