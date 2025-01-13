"use client";

import { useState } from "react";

const EvaSection: React.FC = () => {
  const [mouseover, setMouseOver] = useState(1);
  return (
    <>
      <div
        className="section w-full h-[1024px] bg-no-repeat bg-center "
        style={{
          backgroundImage:
            mouseover == 0
              ? "url('/assets/eva/eva-back1.webp')"
              : mouseover == 1
              ? "url('/assets/eva/eva-back2.webp')"
              : "url('/assets/eva/eva-back3.webp')",
        }}
      >
        <div className="max-w-[1440px] m-auto flex justify-left items-center px-[99px] pt-[165px] pb-[206px] ">
          <div className="w-[100%] flex flex-col gap-12 justify-center ">
            <div className=" relative">
              <div
                className="w-[128px] h-[128px] border-4 rounded-[50%] bg-center bg-no-repeat transition-all cursor-pointer"
                style={{
                  backgroundImage: "url('/assets/eva/avatar-1.png')",
                  backgroundSize: "120% 120%",
                  scale: mouseover == 0 ? 1.25 : 1,
                  borderColor: mouseover == 0 ? "#41FFC6" : "#1E7EF4",
                }}
                onMouseOver={() => {
                  setMouseOver(0);
                }}
              ></div>
              <div
                className=" max-w-[606px] h-[420px] pt-[55px] pb-[60px] ps-[103px] pe-[50px] bg-left bg-no-repeat absolute top-[-84px] left-[144px] transition-all"
                style={{
                  backgroundImage: "url('/assets/eva/text-back1.png')",
                  backgroundSize: "100% 100%",
                  display: mouseover == 0 ? "block" : "none",
                }}
              >
                <div className="">
                  <h1 className=" text-[32px] font-[Poppins] font-bold text-[#41FFC6]">
                    Eva, the Host
                  </h1>
                  <div className="w-[283px] h-1 bg-[#1E7EF4] mt-6"></div>
                  <div className="text-[18px] font-medium font-[Poppins] text-[#CAD4EF] mt-12">
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
                className="w-[128px] h-[128px] border-4 rounded-[50%] bg-center bg-no-repeat transition-all cursor-pointer"
                style={{
                  backgroundImage: "url('/assets/eva/avatar-2.png')",
                  backgroundSize: "100% 100%",
                  scale: mouseover == 1 ? 1.25 : 1,
                  borderColor: mouseover == 1 ? "#41FFC6" : "#FF62FC",
                }}
                onMouseOver={() => {
                  setMouseOver(1);
                }}
              ></div>
              <div
                className="max-w-[606px] h-[420px] pt-[55px] pb-[60px] ps-[103px] pe-[50px] bg-left bg-no-repeat absolute top-[-144px] left-[144px] transition-all"
                style={{
                  backgroundImage: "url('/assets/eva/text-back2.png')",
                  backgroundSize: "100% 100%",
                  display: mouseover == 1 ? "block" : "none",
                }}
              >
                <h1 className=" text-[32px] font-[Poppins] font-bold text-[#41FFC6]">
                  SOL Arena, the Games
                </h1>
                <div className="w-[283px] h-1 bg-[#FF62FC] mt-6"></div>
                <div className="text-[18px] font-medium font-[Poppins] text-[#CAD4EF] mt-12">
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
                className="w-[128px] h-[128px] border-4 rounded-[50%] bg-center bg-no-repeat transition-all cursor-pointer"
                style={{
                  backgroundImage: "url('/assets/eva/avatar-3.png')",
                  backgroundSize: "100% 100%",
                  scale: mouseover == 2 ? 1.25 : 1,
                  borderColor: mouseover == 2 ? "#41FFC6" : "#6F58FF",
                }}
                onMouseOver={() => {
                  setMouseOver(2);
                }}
              ></div>
              <div
                className="max-w-[606px] h-[420px] pt-[55px] pb-[60px] ps-[103px] pe-[50px] bg-left bg-no-repeat absolute top-[-204px] left-[144px] transition-all"
                style={{
                  backgroundImage: "url('/assets/eva/text-back3.png')",
                  backgroundSize: "100% 100%",
                  display: mouseover == 2 ? "block" : "none",
                }}
              >
                <h1 className=" text-[32px] font-[Poppins] font-bold text-[#41FFC6]">
                  Spectators, The Draw
                </h1>
                <div className="w-[283px] h-1 bg-[#6F58FF] mt-6"></div>
                <div className="text-[18px] font-medium font-[Poppins] text-[#CAD4EF] mt-12">
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
