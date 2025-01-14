"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer: React.FC = () => {
  const navigator = useRouter();
  return (
    <>
      <div
        className="footer w-full h-[607px] bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/assets/footer/footer-back.png')" }}
      >
        <div className="max-w-[1440px] m-auto flex flex-row ">
          <div className="flex flex-col gap-[42px] pt-[94px] pl-[185px] pb-[25px]">
            <div className="flex flex-row gap-0">
              <button
                className="font-[Oswald] text-white text-[18px] font-bold border-2 border-[#6F58FF] w-[77px] h-10 flex justify-center items-center"
                onClick={() => {
                  navigator.push("/");
                }}
              >
                TOP
              </button>
              <button
                className="border-2 border-[#6F58FF] rounded-[50%] w-10 h-10 flex justify-center items-center"
                onClick={() => {
                  navigator.push("/");
                }}
              >
                <Image
                  src={"/assets/footer/top-move.png"}
                  alt="top"
                  width={16}
                  height={16}
                />
              </button>
            </div>
            <div className=" flex flex-col gap-4">
              <div className="font-[Oswald] text-[16px] text-white font-semibold">
                Subscribe to the latest news
              </div>
              <div className=" flex flex-row gap-0">
                <input
                  className="border-2 border-[#41FFC6] w-[290px] h-[60px] bg-[#070733] outline-none ring-0 pl-3 font-[Oswald] text-[#41FFC6] font-bold text-[20px] placeholder:text-[#3e977d]"
                  placeholder="Enter Email"
                ></input>
                <button
                  className="w-[60px] h-[60px] flex justify-center items-center bg-[#41FFC6]"
                  onClick={() => {
                    navigator.push("/");
                  }}
                >
                  <Image
                    src={"/assets/footer/arrow.png"}
                    alt=""
                    width={26}
                    height={20}
                  />
                </button>
              </div>
            </div>
            <div className=" flex flex-row gap-8">
              <button
                className="w-[60px] h-[60px] bg-[#6F58FF] flex justify-center items-center"
                onClick={() => {
                  navigator.push("/");
                }}
              >
                <Image
                  src={"/assets/footer/telegram.png"}
                  alt="telegram"
                  width={32}
                  height={32}
                />
              </button>
              <button
                className="w-[60px] h-[60px] bg-[#6F58FF] flex justify-center items-center"
                onClick={() => {
                  navigator.push("/");
                }}
              >
                <Image
                  src={"/assets/footer/twitter.png"}
                  alt="twitter"
                  width={32}
                  height={32}
                />
              </button>
              <button
                className="w-[60px] h-[60px] bg-[#6F58FF] flex justify-center items-center"
                onClick={() => {
                  navigator.push("/");
                }}
              >
                <Image
                  src={"/assets/footer/discord.png"}
                  alt="discord"
                  width={32}
                  height={32}
                />
              </button>
            </div>
          </div>
          <div className="z-30">
            <div
              className=" max-w-[363px] bg-center bg-no-repeat px-[23px] py-[16px] absolute bottom-[150px] right-[350px]"
              style={{
                backgroundImage: "url('/assets/footer/text-back.png')",
                backgroundSize: "100% 100%",
              }}
            >
              Subscribe to our newsletter for the latest updates and exclusive
              rewards!
            </div>
          </div>
        </div>
        <div className=" absolute right-0 bottom-0">
          <Image
            src={"/assets/footer/footer-girl.webp"}
            alt=""
            width={573}
            height={570}
          />
        </div>
        <div className="max-w-[1440px] m-auto pl-[185px] pt-[58px] pb-[38px] flex flex-col gap-8">
          <Image
            src={"/assets/footer/footer-logo.png"}
            alt="footer logo"
            width={140}
            height={58}
          />
          <div className="flex flex-row gap-6 text-[12px] text-[#99B9FF]">
            <Link href={"/"} prefetch>
              Privacy Policy
            </Link>
            <div className="w-[2px] h-[19px] bg-[#8581FF]"></div>
            <Link href={"/"} prefetch>
              Copyright ____. All Rights Reserved.
            </Link>
            <div className="w-[2px] h-[19px] bg-[#8581FF]"></div>
            <Link href={"/"} prefetch>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
