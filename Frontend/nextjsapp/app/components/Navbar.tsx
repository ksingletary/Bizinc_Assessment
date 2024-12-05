"use client";

import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { FcSettings } from "react-icons/fc";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { data: session } = useSession();

  const handleToggle = () => {
    if (open) {
      setIsAnimating(true);
      setTimeout(() => {
        setOpen(false);
        setIsAnimating(false);
      }, 200);
    } else {
      setOpen(true);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const target = e.relatedTarget as HTMLElement | null;
    if (target && typeof target.closest === "function" && !target.closest(".navbar") && !target.closest(".expanded-navbar")) {
      setIsAnimating(true);
      setTimeout(() => {
        setOpen(false);
        setIsAnimating(false);
      }, 200);
    }
  };

  return (
    <nav className="navbar bg-blackLighter fixed top-0 left-0 h-full w-36 p-4 bg-opacity-95 z-10">
      <div className="flex flex-col items-start h-full relative">
        <div className="text-white font-bold">
          <Link href="/">
            <Image
              src="/me.jpg"
              alt="my picture"
              width={200}
              height={200}
              priority
              className="absolute rounded-full"
            />
          </Link>
          <div className="flex ml-10 font-CaeciliaSemi text-3xl h-[93vh] w-8 items-center justify-center overflow-hidden">
            <div className="">
              <h1 className="self-center whitespace-nowrap -rotate-90 ">Keith Singletary</h1>
            </div>
          </div>
        </div>

        <button onClick={handleToggle} className="mt-auto text-white w-full">
          <FaBarsStaggered className="w-8 h-8 ml-8" />
        </button>

        {(open || isAnimating) && (
          <div
            onMouseLeave={handleMouseLeave}
            className={`expanded-navbar fixed left-36 outline outline-black top-0 h-full w-[calc(33.000%-60px)] p-0 bg-blackLight font-CaeciliaSemi text-white bg-opacity-75 backdrop-blur-md ${
              open && !isAnimating ? "navbar-open" : "navbar-close"
            }`}
          >
            <div className="flex flex-col justify-center h-full text-lg -space-y-5 -mt-20 ">
              <Link href="/" className="hover:bg-orange-500 block px-4 py-8 w-full text-right">
                HOME
              </Link>
              <Link href="https://keithsingletary.me" className="hover:bg-orange-500 block px-4 py-8 w-full text-right">
                MY PORTFOLIO
              </Link>
            </div>
            <div className="flex flex-col -mt-24 -space-y-5">
              {!session ? (
                <>
                  <Link href="/login" className="hover:bg-orange-500 block px-4 py-8 w-full text-right">
                    LOGIN
                  </Link>
                  <Link href="/account/create" className="hover:bg-orange-500 block px-4 py-8 w-full text-right">
                    CREATE ACCOUNT
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/account/settings" className="hover:bg-orange-500 text-lg  block px-4 py-10 w-full text-right bg-black">
                    <FcSettings className="absolute left-3 w-12 h-12 -mt-4 " />
                    ACCOUNT SETTINGS
                  </Link>
                  <Link href="/account" className="relative hover:bg-orange-500 px-4 py-8 w-full text-right bg-black flex items-center justify-end space-x-2">
                    <Image src="/logobub.png" alt="bublogo" width={50} height={50} className="absolute left-3" />
                    <span className="text-2xl font-CaeciliaSemi">{session?.user?.name}</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}