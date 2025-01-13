"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const navigator = useRouter();
  return (
    <>
      <div className="w-full bg-[#02021D] relative z-50">
        <div className="max-w-[1440px] h-[72px] m-[auto] flex flex-row justify-between items-center">
          <div className="flex flex-1 justify-center">
            <Image
              src={"/assets/logo.svg"}
              width={"150"}
              height={"100"}
              alt="logo"
              className="logo cursor-pointer "
              onClick={() => {
                navigator.push("/");
              }}
            />
          </div>
          <div className="flex flex-[3] font-[Oswald] text-[18px] font-bold gap-4 flex-row items-center flex-wrap">
            <Link
              href={"/"}
              prefetch
              className="text-[#CAD4EF] hover:text-white hover:bg-[#603CDB] px-9 py-[0.4rem] rounded-[50px] transition-all"
            >
              HOME
            </Link>
            <Link
              href={"/"}
              prefetch
              className="text-[#CAD4EF] hover:text-white hover:bg-[#603CDB] px-9 py-[0.4rem] rounded-[50px] transition-all"
            >
              LEADERBOARD
            </Link>
            <Link
              href={"/"}
              prefetch
              className="text-[#CAD4EF] hover:text-white hover:bg-[#603CDB] px-9 py-[0.4rem] rounded-[50px] transition-all"
            >
              HOW TO PLAY
            </Link>
            <Link
              href={"/"}
              prefetch
              className="text-[#CAD4EF] hover:text-white hover:bg-[#603CDB] px-9 py-[0.4rem] rounded-[50px] transition-all"
            >
              SCHILL
            </Link>
          </div>
          <div className="flex flex-1 justify-end items-start">
            <button 
                className="w-[264px] h-[84px] rounded-md mt-[10px] font-bold font-[Oswald] text-[38px] text-[#020215]"
                style={
                    {backgroundImage: "url(./assets/play-now-btn.png)", backgroundSize: "100% 100%", boxShadow: "0px 0px 20px 3px"}
                }
                onClick={()=>{
                    navigator.push("/")
                }}
            >
              PLAY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
