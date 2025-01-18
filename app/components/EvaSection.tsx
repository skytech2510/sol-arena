"use client";

import { useState } from "react";

const EvaSection: React.FC = () => {
  const [mouseover, setMouseOver] = useState(1);
  return (
    <>
      <div
        className={`section w-full h-[928px] md:h-auto relative bg-no-repeat ${mouseover == 1 ? "bg-[right_-200px_top] md:bg-right" : "bg-right"} md:bg-center transition-all duration-300`}
        style={{
          backgroundImage:
            mouseover == 0
              ? "url('/assets/eva/eva-back1.webp')"
              : mouseover == 1
              ? "url('/assets/eva/eva-back2.webp')"
              : "url('/assets/eva/eva-back3.webp')",
        }}
      >
        <div  className=" max-w-[1440px] h-[100%] md:h-auto m-auto px-0 md:px-[30px] lg:px-[99px] pt-[264px] pb-[298px] relative">
          <div className="flex flex-row md:flex-col gap-7 md:gap-12 justify-center absolute md:relative bottom-[66px] md:bottom-0 w-[100%] md:w-auto">
            <div className=" relative">
              <div
                className="w-[80px] h-[80px] md:w-[128px] md:h-[128px] border-2 md:border-4 rounded-[50%] bg-center bg-no-repeat transition-all cursor-pointer"
                style={{
                  backgroundImage: "url('/assets/eva/avatar-1.png')",
                  backgroundSize: "120% 120%",
                  scale: mouseover == 0 ? 1.25 : 1,
                  borderColor: mouseover == 0 ? "#41FFC6" : "#1E7EF4",
                }}
                onClick={() => {
                  setMouseOver(0);
                }}
              ></div>
              <div
                className={` ${mouseover == 0 ? "block" : "hidden"} z-30 bg-[url('/assets/eva/mobile-text-back1.png')] md:bg-[url('/assets/eva/text-back1.png')] w-[343px] md:w-[550px] pt-5 md:pt-10 pb-10 md:pb-10 ps-[20px] pe-[20px] md:ps-[75px] md:pe-[30px] absolute top-[-242px] left-[-20.2px] md:top-[-60px] md:left-[144px] transition-all `}
                style={{
                  backgroundSize: "100% 100%",
                }}
              >
                <div className="">
                  <h1 className=" text-[14px] md:text-[28px] font-[Poppins] font-bold text-[#41FFC6]">
                    Eva, the Host
                  </h1>
                  <div className="w-[224px] md:w-[283px] h-[2px] md:h-1 mt-3 md:mt-6 bg-[#1E7EF4]"></div>
                  <div className="text-[12px] md:text-[16px] font-medium font-[Poppins] text-[#CAD4EF] mt-3 md:mt-8 leading-[150%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </div>
              </div>
            </div>
            <div className=" relative">
              <div
                className="w-[80px] h-[80px] md:w-[128px] md:h-[128px] border-2 md:border-4 rounded-[50%] bg-center bg-no-repeat transition-all cursor-pointer"
                style={{
                  backgroundImage: "url('/assets/eva/avatar-2.png')",
                  backgroundSize: "100% 100%",
                  scale: mouseover == 1 ? 1.25 : 1,
                  borderColor: mouseover == 1 ? "#41FFC6" : "#FF62FC",
                }}
                onClick={() => {
                  setMouseOver(1);
                }}
              ></div>
              <div
                className={` ${mouseover == 1 ? "block" : "hidden"} z-30 bg-[url('/assets/eva/mobile-text-back2.png')] md:bg-[url('/assets/eva/text-back2.png')] w-[343px] md:w-[550px] pt-5 md:pt-10 pb-10 md:pb-10 ps-[20px] pe-[20px] md:ps-[75px] md:pe-[30px] absolute top-[-242px] left-[-129.3px] md:top-[-110px] md:left-[144px] transition-all `}
                style={{
                  backgroundSize: "100% 100%",
                }}
              >
                <h1 className=" text-[14px] md:text-[28px] font-[Poppins] font-bold text-[#41FFC6]">
                  SOL Arena, the Games
                </h1>
                <div className=" w-[224px] md:w-[283px] h-[2px] md:h-1 bg-[#FF62FC] mt-3 md:mt-6"></div>
                <div className="text-[12px] md:text-[16px] font-medium font-[Poppins] text-[#CAD4EF] mt-3 md:mt-8 leading-[150%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
              </div>
            </div>
            <div className=" relative">
              <div
                className="w-[80px] h-[80px] md:w-[128px] md:h-[128px] border-2 md:border-4 rounded-[50%] bg-center bg-no-repeat transition-all cursor-pointer"
                style={{
                  backgroundImage: "url('/assets/eva/avatar-3.png')",
                  backgroundSize: "100% 100%",
                  scale: mouseover == 2 ? 1.25 : 1,
                  borderColor: mouseover == 2 ? "#41FFC6" : "#6F58FF",
                }}
                onClick={() => {
                  setMouseOver(2);
                }}
              ></div>
              <div
                className={` ${mouseover == 2 ? "block" : "hidden"} z-30 bg-[url('/assets/eva/mobile-text-back3.png')] md:bg-[url('/assets/eva/text-back3.png')] w-[343px] md:w-[550px] pt-5 md:pt-10 pb-10 md:pb-10 ps-[20px] pe-[20px] md:ps-[75px] md:pe-[30px] absolute top-[-242px] left-[-238px] md:top-[-154px] md:left-[144px] transition-all `}
                style={{
                  backgroundSize: "100% 100%",
                }}
              >
                <h1 className=" text-[14px] md:text-[28px] font-[Poppins] font-bold text-[#41FFC6]">
                  Spectators, The Draw
                </h1>
                <div className="w-[224px] md:w-[283px] h-[2px] md:h-1 mt-3 md:mt-6 bg-[#6F58FF]"></div>
                <div className="text-[12px] md:text-[16px] font-medium font-[Poppins] text-[#CAD4EF] mt-3 md:mt-8 leading-[150%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EvaSection;
