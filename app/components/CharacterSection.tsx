"use client";

import Image from "next/image";
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
  return (
    <>
      <div
        className="section w-full h-auto bg-center bg-no-repeat border "
        style={{ backgroundImage: `url(${backImage})` }}
      >
        <div className="max-w-[1440px] m-auto flex flex-row pl-[96px] pr-[24px] flex-wrap border">
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
            <div className="mt-[54px] flex flex-row gap-3 flex-wrap">
              <Image
                src={"/assets/character/avatar-1.png"}
                alt="avatar1"
                width={108}
                height={116}
                className="hover:scale-125 transition-all cursor-pointer"
              />
              <Image
                src={"/assets/character/avatar-2.png"}
                alt="avatar1"
                width={108}
                height={116}
                className="hover:scale-125 transition-all cursor-pointer"
              />
              <Image
                src={"/assets/character/avatar-3.png"}
                alt="avatar1"
                width={108}
                height={116}
                className="hover:scale-125 transition-all cursor-pointer"
              />
              <Image
                src={"/assets/character/avatar-4.png"}
                alt="avatar1"
                width={108}
                height={116}
                className="hover:scale-125 transition-all cursor-pointer"
              />
              <Image
                src={"/assets/character/avatar-5.png"}
                alt="avatar1"
                width={108}
                height={116}
                className="hover:scale-125 transition-all cursor-pointer"
              />
            </div>
          </div>
          <div className=" h-[977px] flex-1 flex justify-center pt-[78px] relative">
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
