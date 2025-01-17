"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const navigator = useRouter();
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState(0);
  const [isMenuPlay, setIsMenuPlay] = useState(0);
  const [isMenuChill, setIsMenuChill] = useState(0);
  const [isButton, setIsButton] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.onresize = () => {
      if (window.outerWidth > 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
  }, []);

  const handlHeader = () => {
    if (window.outerWidth < 1024) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  const handleButton = () => {
    setIsButton(true);
    navigator.push("/");

    setTimeout(() => {
      setIsButton(false);
    }, 600);
  };

  return (
    <>
      <div className="w-full bg-[#02021D] fixed top-0 left-0 z-50">
        <div
          className="max-w-[1440px] h-[72px] m-[auto] flex flex-row justify-between items-center bg-no-repeat bg-right-top pl-0 pr-0 relative"
          style={{
            backgroundImage: "url('/assets/navbar-back2.png')",
          }}
        >
          <div className="flex flex-1 pl-4 sm:pl-[20px] lg:pl-[83px] z-50">
            <Image
              src={"/assets/logo.svg"}
              width={"154"}
              height={"62"}
              alt="logo"
              className="logo cursor-pointer hidden lg:block"
              onClick={() => {
                navigator.push("/");
              }}
            />
            <Image
              src={"/assets/logo.svg"}
              width={86}
              height={36}
              alt="logo"
              className="logo cursor-pointer block lg:hidden"
              onClick={() => {
                navigator.push("/");
              }}
            />
          </div>
          <div
            className={` flex-[3] flex-wrap flex-col lg:flex-row justify-start lg:justify-start items-center absolute pt-[116px] lg:pt-0 top-0 lg:top-0 h-[100vh] lg:h-auto lg:relative w-[100%] gap-8 lg:gap-4 font-[Oswald] text-[18px] font-bold bg-cover bg-no-repeat bg-right bg-[url('/assets/mobile-header-bck.png')] lg:bg-none transition-opacity duration-500 ease-in-out ${
              isOpen ? "opacity-100 flex" : "opacity-0 hidden"
            } `}
          >
            <Link
              href={"/"}
              prefetch
              className="text-[#CAD4EF] w-[192px] lg:w-[140px] h-11 lg:h-10 flex flex-row justify-center items-center rounded-[50px] transition-all"
              style={{
                backgroundColor:
                  pathname == "/"
                    ? "#603CDB"
                    : isMenu == 2
                    ? "#3B258F"
                    : isMenu == 1
                    ? "#41FFC6"
                    : "#02021D",
                color:
                  pathname == "/"
                    ? "#fff"
                    : isMenu == 1 || isMenu == 2
                    ? "#fff"
                    : "#CAD4EF",
              }}
              onMouseDown={() => {
                setIsMenu(1);
              }}
              onMouseOver={() => {
                setIsMenu(2);
              }}
              onMouseUp={() => {
                setIsMenu(2);
              }}
              onMouseLeave={() => {
                setIsMenu(0);
              }}
              onClick={() => {
                handlHeader();
              }}
            >
              HOME
            </Link>
            <Link
              href={"/play"}
              prefetch
              className="text-[#CAD4EF] w-[192px] lg:w-[140px] h-11 lg:h-10 flex flex-row justify-center items-center rounded-[50px] transition-all"
              style={{
                backgroundColor:
                  pathname == "/play"
                    ? "#603CDB"
                    : isMenuPlay == 2
                    ? "#3B258F"
                    : isMenuPlay == 1
                    ? "#41FFC6"
                    : "#02021D",
                color:
                  pathname == "/play"
                    ? "#fff"
                    : isMenuPlay == 1 || isMenuPlay == 2
                    ? "#fff"
                    : "#CAD4EF",
              }}
              onMouseDown={() => {
                setIsMenuPlay(1);
              }}
              onMouseOver={() => {
                setIsMenuPlay(2);
              }}
              onMouseUp={() => {
                setIsMenuPlay(2);
              }}
              onMouseLeave={() => {
                setIsMenuPlay(0);
              }}
              onClick={() => {
                handlHeader();
              }}
            >
              HOW TO PLAY
            </Link>
            <Link
              href={"/chill"}
              prefetch
              className="text-[#CAD4EF] w-[192px] lg:w-[140px] h-11 lg:h-10 flex flex-row justify-center items-center rounded-[50px] transition-all"
              style={{
                backgroundColor:
                  pathname == "/chill"
                    ? "#603CDB"
                    : isMenuChill == 2
                    ? "#3B258F"
                    : isMenuChill == 1
                    ? "#41FFC6"
                    : "#02021D",
                color:
                  pathname == "/chill"
                    ? "#fff"
                    : isMenuChill == 1 || isMenuChill == 2
                    ? "#fff"
                    : "#CAD4EF",
              }}
              onMouseDown={() => {
                setIsMenuChill(1);
              }}
              onMouseOver={() => {
                setIsMenuChill(2);
              }}
              onMouseUp={() => {
                setIsMenuChill(2);
              }}
              onMouseLeave={() => {
                setIsMenuChill(0);
              }}
              onClick={() => {
                handlHeader();
              }}
            >
              $CHILL
            </Link>
          </div>
          <div
            className={`flex-1 justify-center lg:justify-end items-center lg:items-start w-[100%] absolute top-[684px] lg:top-0 lg:relative transition-opacity duration-500 ease-in-out ${
              isOpen ? "opacity-100 flex" : "opacity-0 hidden"
            } `}
          >
            <button
              className=" w-[163px] lg:w-[264px] h-[52px] lg:h-[84px] rounded-md font-bold font-[Oswald] text-[28px] lg:text-[38px] text-[#020215]"
              style={{
                backgroundImage: "url(./assets/play-now-btn.png)",
                backgroundSize: "100% 100%",
                boxShadow: "0px 0px 20px 3px",
              }}
              onClick={() => {
                handleButton();
              }}
            >
              PLAY NOW
            </button>
            <Image
              src={"/assets/play-spark.png"}
              alt="spark"
              width={264}
              height={264}
              className=" absolute top-[-40px] left-[50%] lg:top-[-70px] lg:left-[-30px] transition-all duration-300 w-[160px] lg:w-[264px] h-[160px] lg:h-[264px]"
              style={{ display: isButton ? "block" : "none" }}
            />
          </div>
          <div className="pr-4 lg:pr-0 flex-1 text-white flex flex-row justify-end items-center lg:hidden z-50">
            <button
              className=" w-9 h-9 bg-center bg-no-repeat"
              style={{
                backgroundImage: !isOpen
                  ? "url('/assets/menu-open.png')"
                  : "url('/assets/menu-close.png')",
                backgroundSize: "24px 24px",
              }}
              onClick={() => {
                handleMenu();
              }}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
