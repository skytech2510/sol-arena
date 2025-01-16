"use client";

import Image from "next/image";
import { useState } from "react";
interface CharacterSectionPropsType {
  backImage: string;
  bigGuy: string;
  smallGuy: string;
}

const CharacterSection: React.FC<CharacterSectionPropsType> = ({
  backImage,
  bigGuy,
  smallGuy,
}) => {
  const [isScale, setIsScale] = useState(1)
  return (
    <>
      <div
        className="section w-full bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backImage})` }}
      >
        <div className="max-w-[1440px] m-auto flex flex-row pl-[96px] pr-[24px] relative">
          <div className="flex-1 pt-[120px] pb-[140px]">
            <Image
              src={"/assets/character/text-img1.png"}
              alt="text img"
              width={373}
              height={135}
            />
            <div className="flex flex-row gap-4 mt-[24px]">
              <div className="flex justify-center items-center w-[50px] h-[30px] bg-[url('/assets/character/Tag.png')] text-[16px] font-semibold text-white">
                Epic
              </div>
              <div className="flex justify-center items-center w-[32px] h-[32px] bg-[url('/assets/character/Tradeable-Icon.png')] text-[9px] font-bold text-[#E8B7FF]">
                NFT
              </div>
            </div>
            <div
              className="max-w-[529px] p-10 mt-[50px] border-l-8 border-[#38E8FF] bg-[#070733] bg-opacity-45 bg-[url('/assets/character/Pattern.png')] bg-no-repeat"
              style={{ backgroundSize: "auto 100%" }}
            >
              <p className="text-[#CAD4EF] font-semibold text-xl leading-9 tracking-wider">
                Lorem ipsum dolor sit amet conser. Rhocus gravida massa posuere
                sed. Pharet lorem facis. Sit laoreet sed pretium fusce nisl dksj
                faucibus lssssp.
              </p>
            </div>
            <div
              className="w-[284px] h-[52px] mt-[100px] bg-no-repeat flex justify-center items-center text-[32px] font-black text-[#0A164E]"
              style={{
                backgroundImage: "url('/assets/character/Frame-2149.png')",
              }}
            >
              Challengers
            </div>
            <div className=" h-[165px] mt-[54px] flex flex-row justify-start items-end gap-1 ">
              <Image
                src={isScale !== 1 ? "/assets/character/avatar-1.png" : "/assets/character/avatar-1-big.png"}
                alt="avatar"
                width={145}
                height={162}
                className={` transition-all cursor-pointer ${isScale !== 1 ? "w-[126px] h-[141px]" : "w-[145px] h-[162px]"}`}
                onClick={() => {setIsScale(1)}}
              />
              <Image
                src={isScale !== 2 ? "/assets/character/avatar-2.png" : "/assets/character/avatar-2-big.png"}
                alt="avatar"
                width={145}
                height={162}
                className={` transition-all cursor-pointer ${isScale !== 2 ? "w-[126px] h-[141px]" : "w-[145px] h-[162px]"}`}
                onClick={() => {setIsScale(2)}}
              />
              <Image
                src={isScale !== 3 ? "/assets/character/avatar-3.png" : "/assets/character/avatar-3-big.png"}
                alt="avatar"
                width={145}
                height={162}
                className={` transition-all cursor-pointer ${isScale !== 3 ? "w-[126px] h-[141px]" : "w-[145px] h-[162px]"}`}
                onClick={() => {setIsScale(3)}}
              />
              <Image
                src={isScale !== 4 ? "/assets/character/avatar-4.png" : "/assets/character/avatar-4-big.png"}
                alt="avatar"
                width={145}
                height={162}
                className={` transition-all cursor-pointer ${isScale !== 4 ? "w-[126px] h-[141px]" : "w-[145px] h-[162px]"}`}
                onClick={() => {setIsScale(4)}}
              />
              <Image
                src={isScale !== 5 ? "/assets/character/avatar-5.png" : "/assets/character/avatar-5-big.png"}
                alt="avatar"
                width={145}
                height={162}
                className={` transition-all cursor-pointer ${isScale !== 5 ? "w-[126px] h-[141px]" : "w-[145px] h-[162px]"}`}
                onClick={() => {setIsScale(5)}}
              />
            </div>
          </div>
          <div className=" h-[977px] flex-1 justify-center pt-[78px] relative hidden lg:flex">
            <Image
              src={`${bigGuy}`}
              alt="character girl"
              width={580}
              height={730}
              className="max-w-[580px] max-h-[730px]"
            />
            <Image
              src={`${smallGuy}`}
              alt="character smal girl"
              width={302}
              height={484}
              className="max-w-[302px] max-h-[484px] absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default CharacterSection;
