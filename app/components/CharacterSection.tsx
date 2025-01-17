"use client";

import Image from "next/image";
import { useState } from "react";

const CharacterSection: React.FC = () => {
  const [isScale, setIsScale] = useState(1);
  return (
    <>
      <div
        className="section w-full bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage:
            isScale == 1
              ? "url('/assets/character/character-section-bg1.webp')"
              : "url('/assets/character/character-section-bg2.webp')",
        }}
      >
        <div
          className={` second-section max-w-[1440px] m-auto flex flex-row pl-0 pr-0 xl:pl-[180px] relative bg-no-repeat bg-[left_16px_top_133px] lg:bg-[left_16px_top_120px] xl:bg-[left_180px_top_120px] ${
            isScale == 1
              ? "bg-[length:287px_103px] lg:bg-[length:363px_130px]"
              : "bg-[length:90%] md:bg-[length:550px_103px] lg:bg-[length:814px_145px]"
          }`}
          style={{
            backgroundImage:
              isScale == 1
                ? "url('/assets/character/EVA.png')"
                : " url('/assets/character/BLASTINE.png')",
          }}
        >
          <div className="flex-1 pt-[195px] md:pt-[190px] pb-[72px] md:pb-[140px] flex flex-col">
            <Image
              src={
                isScale == 1
                  ? "/assets/character/Name.png"
                  : "/assets/character/Frame-2279.png"
              }
              alt="text img"
              width={450}
              height={68}
              className={`${
                isScale == 1
                  ? " max-w-[150px] md:max-w-[190px] max-h-[53px] md:max-h-[68px]"
                  : "max-w-[100%] max-h-[53px] md:max-h-[68px] ml-[-7px]"
              } pl-4 md:pl-8 xl:pl-0 `}
            />
            <div className=" flex flex-row gap-4 pl-4 mt-6 md:pl-8 xl:pl-0">
              <div
                className={`flex justify-center items-center px-2 h-[30px] ${
                  isScale == 1
                    ? "bg-[#BF36FF] border-[#41FFC6]"
                    : "bg-[#FF3658] border-[#FFD341]"
                } rounded-sm border-b-2 border-r-2 text-[16px] font-semibold text-white`}
              >
                {isScale == 1 ? "Epic" : "Artifact"}
              </div>
              <div
                className={`flex justify-center items-center w-[32px] h-[32px] text-[9px] font-bold ${
                  isScale == 1 ? "text-[#E8B7FF]" : "text-[#FF898B]"
                } `}
                style={{
                  backgroundImage:
                    isScale == 1
                      ? "url('/assets/character/Tradeable-Icon-1.png')"
                      : "url('/assets/character/Tradeable-Icon-2.png",
                }}
              >
                NFT
              </div>
            </div>
            <div
              className={` z-10 max-w-[253px] md:max-w-[529px] ms-8 xl:ms-0 p-5 md:p-10 mt-12 border-r-4 md:border-r-0 border-l-0 md:border-l-8 absolute bottom-[72px] md:bottom-0 right-4 md:right-0 md:relative ${
                isScale == 1 ? "border-[#38E8FF]" : "border-[#FF3859]"
              } bg-[#070733] bg-opacity-45 bg-[url('/assets/character/Pattern.png')] bg-no-repeat`}
              style={{ backgroundSize: "auto 100%" }}
            >
              <p className="text-[#CAD4EF] font-semibold text-[10px] md:text-[20px] leading-[150%] md:leading-[150%]">
                Lorem ipsum dolor sit amet conser. Rhocus gravida massa posuere
                sed. Pharet lorem facis. Sit laoreet sed pretium fusce nisl dksj
                faucibus lssssp.
              </p>
            </div>
            <div
              className=" absolute top-[50px] md:top-0 left-0 md:relative w-[225px] md:w-[284px] h-[40px] md:h-[52px] mt-0 md:mt-[100px] bg-no-repeat flex justify-center items-center text-[24px] md:text-[32px] font-black text-[#0A164E] pr-3 ms-0 md:ms-8 xl:ms-0"
              style={{
                backgroundImage: "url('/assets/character/Frame-2149.png')",
                backgroundSize: "100% 100%",
              }}
            >
              Challengers
            </div>
            <div className="h-[398px] md:h-[138px] mt-[47px] md:mt-8 relative ps-4 xl:ps-0">
              <div className=" w-[72px] md:w-[594px] z-20 flex flex-col md:flex-row absolute top-0 md:bottom-0 justify-start md:justify-start items-center md:items-end gap-4 md:gap-1">
                <Image
                  src={
                    isScale !== 1
                      ? "/assets/character/avatar-1.png"
                      : "/assets/character/avatar-1-big.png"
                  }
                  alt="avatar"
                  width={130}
                  height={138}
                  className={` transition-all cursor-pointer ${
                    isScale == 1
                      ? " w-[72px] h-[76px] md:w-[130px] md:h-[138px]"
                      : " w-[60px] h-[64px] md:w-[108px] md:h-[116px]"
                  }`}
                  onClick={() => {
                    setIsScale(1);
                  }}
                />
                <Image
                  src={
                    isScale !== 2
                      ? "/assets/character/avatar-2.png"
                      : "/assets/character/avatar-2-big.png"
                  }
                  alt="avatar"
                  width={130}
                  height={138}
                  className={` transition-all cursor-pointer ${
                    isScale == 2
                      ? "w-[72px] h-[76px] md:w-[130px] md:h-[138px]"
                      : " w-[60px] h-[64px] md:w-[108px] md:h-[116px]"
                  }`}
                  onClick={() => {
                    setIsScale(2);
                  }}
                />
                <Image
                  src={
                    isScale !== 3
                      ? "/assets/character/avatar-3.png"
                      : "/assets/character/avatar-3-big.png"
                  }
                  alt="avatar"
                  width={130}
                  height={138}
                  className={` transition-all cursor-pointer ${
                    isScale == 3
                      ? "w-[72px] h-[76px] md:w-[130px] md:h-[138px]"
                      : " w-[60px] h-[64px] md:w-[108px] md:h-[116px]"
                  }`}
                  onClick={() => {
                    setIsScale(3);
                  }}
                />
                <Image
                  src={
                    isScale !== 4
                      ? "/assets/character/avatar-4.png"
                      : "/assets/character/avatar-4-big.png"
                  }
                  alt="avatar"
                  width={130}
                  height={138}
                  className={` transition-all cursor-pointer ${
                    isScale == 4
                      ? "w-[72px] h-[76px] md:w-[130px] md:h-[138px]"
                      : " w-[60px] h-[64px] md:w-[108px] md:h-[116px]"
                  }`}
                  onClick={() => {
                    setIsScale(4);
                  }}
                />
                <Image
                  src={
                    isScale !== 5
                      ? "/assets/character/avatar-5.png"
                      : "/assets/character/avatar-5-big.png"
                  }
                  alt="avatar"
                  width={130}
                  height={138}
                  className={` transition-all cursor-pointer ${
                    isScale == 5
                      ? "w-[72px] h-[76px] md:w-[130px] md:h-[138px]"
                      : " w-[60px] h-[64px] md:w-[108px] md:h-[116px]"
                  }`}
                  onClick={() => {
                    setIsScale(5);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-row justify-start items-center pt-[64px] pb-0 md:pb-[64px] z-0 md:relative absolute right-0 bottom-[153px] md:bottom-0">
            <Image
              src={
                isScale == 1
                  ? "/assets/character/character-girl.png"
                  : "/assets/character/character-boy.png"
              }
              alt="character girl"
              width={580}
              height={730}
              className="max-w-[343px] max-h-[421px] md:max-w-[580px] md:max-h-[730px] mr-[-60px] md:mr-0 z-0"
            />
            <Image
              src={
                isScale == 1
                  ? "/assets/character/character-small-girl.png"
                  : "/assets/character/character-small-boy.png"
              }
              alt="character small girl"
              width={345}
              height={486}
              className=" z-20 max-w-[94px] max-h-[151px] md:max-w-[345px] md:max-h-[486px] absolute bottom-0 md:bottom-[41px] right-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default CharacterSection;
