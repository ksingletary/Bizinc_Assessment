"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { GiBearFace } from "react-icons/gi";
import { PiHeartbeatThin } from "react-icons/pi";
import { MdArrowForwardIos } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

type User = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
} | undefined;

type Props = {
  user: User;
  pagetype: string;
};

export default function Profile({ user }: Props) {
    // simple claim state for simple UI
    const [claim, setClaim] = useState(false);
    const [claimSecond, setClaimSecond] = useState(false);

    const highResImage = user?.image?.replace('_normal', '_400x400');

    const handleClaim = () => {
        setClaim(true);
    }
    const handleClaimSecond = () => {
        setClaimSecond(true);
    }

    useEffect(() => {
        const fixedSection = document.getElementById('fixed-section') as HTMLElement;
        const footer = document.querySelector('footer') as HTMLElement;
        const wrapper = document.getElementById('fixed-section-wrapper') as HTMLElement;
    
        const onScroll = () => {
          const rect = fixedSection.getBoundingClientRect();
          const footerRect = footer.getBoundingClientRect();
    
          if (footerRect.top <= window.innerHeight && footerRect.bottom >= 0) {
            fixedSection.classList.remove('fixed');
            fixedSection.classList.add('sticky');
            fixedSection.style.top = `${window.innerHeight - footerRect.height - rect.height}px`;
          } else {
            fixedSection.classList.remove('sticky');
            fixedSection.classList.add('fixed');
            fixedSection.style.top = '4rem'; // Adjust based on your layout
          }
        };
    
        window.addEventListener('scroll', onScroll);
    
        return () => {
          window.removeEventListener('scroll', onScroll);
        };
      }, []);

    const userImage = highResImage ? (
        <Image
        className="-mt-16 justify-center h-96 w-96 rounded-xl"
        src={highResImage}
        width={400}
        height={400}
        alt={user?.name ?? "Profile Pic"}
        priority
        />
    ) : (
      <div className="flex items-center -mt-16 justify-center h-96 w-96 bg-gray-300">
        <span className="text-gray-500 text-5xl font-apercuBold">BUB</span>
      </div>
    );

  return (
    <div className="flex min-h-screen ml-38 bg-blackDark">
      {/* Fixed Left Section */}
        <div id="fixed-section-wrapper" className="z-0 ml-36 h-auto w-1/3 space-y-7 bg-blackDark p-10">
            <div id="fixed-section" className="flex flex-col mt-7 space-y-5 fixed">
                {userImage}
                <h1 className="text-6xl font-CaeciliaBold text-white">{user?.name ?? "Username"}</h1>
                <Link href='/account/settings' className="primary-btn w-44 h-12 text-xs items-center">ACCOUNT SETTINGS</Link>
                <span className="bg-blackLightest h-1 w-96"></span>
                <div className="relative bg-black bg-opacity-30 flex w-96 h-24">
                <div className="flex flex-col mt-4 ml-4">
                    <h4 className="text-xs text-white">PRIZES</h4>
                    <h1 className="text-5xl text-white">0</h1>
                </div>
                <Link href='#' className="absolute text-center pt-1 text-white mt-8 mr-4 right-0 border border-gray-500 text-sm w-24 h-8 rounded-md hover:border-white">VIEW HERE</Link>
                </div> 
            </div>
        </div>
      

      {/* Scrollable Right Section */}
      <div className="z-10 ml-auto w-[60%] space-y-10 font-apercuBold">
        <section className="p-6 space-y-6">
          <div className="flex flex-col space-y-6">
            <div className="relative">
                <Image src='/profileBG.png' alt="bears img" width={775} height={750} className="ml-12 rounded-lg" />
                <Link href="#" className="absolute primary-btn top-40 right-80 border border-orange-500 text-lg w-52 h-12 rounded-md hover:border-orange-300">
                    BEAT UP BEARS
                </Link>
            </div>
            <div className="relative flex bg-blackDarker  py-4 px-6 text-2xl text-white">
                <h2 className="">COLLECTIONS</h2>
                <button className="absolute right-5 border border-gray-500 text-sm w-24 h-8 rounded-md hover:border-white">SEE ALL</button>
            </div>
            <div className="grid grid-cols-2 text-center gap-4 mt-4">
              <div className="bg-blackLighter cursor-pointer h-44 flex flex-col rounded-lg text-white">
                <div className="relative bg-gray-100 flex justify-center  py-14 rounded-lg ">
                    <GiBearFace className="absolute text-black w-20 h-20 -mt-8"/>
                </div>
                <div className="space-y-0">
                    <h1 className="text-sm font-apercuBold mt-3 text-white">BEAT UP BEARS</h1>
                    <h2 className="text-sm font-apercuBold mt-3 text-white">0</h2>
                </div>
              </div>
              <div className="bg-blackLighter cursor-pointer h-44 flex flex-col rounded-lg text-white">
                    <div className="relative bg-gray-100 flex justify-center  py-14 rounded-lg ">
                        <PiHeartbeatThin className="absolute text-black w-20 h-20 -mt-8"/>
                    </div>
                    <div className="space-y-0">
                        <h1 className="text-sm font-apercuBold mt-3 text-white">WOUNDED WARRIOR BUBS</h1>
                        <h2 className="text-sm font-apercuBold mt-3 text-white">0</h2>
                    </div>
                </div>
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="relative flex bg-blackDarker  py-4 px-6 text-2xl text-white">
                <h2 className="">PERKS</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                {/* <!-- Left Column --> */}
                <Link href='#' className="bg-blackLighter hover:bg-blackLightest space-y-7 bg-opacity-30 flex flex-col cursor-pointer h-44 rounded-lg p-4">
                    <div className="relative flex flex-row">
                        <h1 className="text-3xl text-white">PLUSHIES</h1>
                        <div className="text-right text-white bg-orange-600 rounded-md w-20 h-6 mt-2 ml-3 ">
                            <p className="text-center text-xs mt-1">0 PLUSHIES</p>
                        </div>
                        <MdArrowForwardIos className="absolute right-0 text-white mt-2 w-4 h-4"/>
                    </div>
                    <p className="text-white">Earn your own BUB plushy for each successive NFT you purchase.</p>
                </Link>
                {/* <!-- Right Column with Image --> */}
                <div className="row-span-3 flex items-center justify-center">
                    <Image src='/4488.png' alt="4488 bub" width={300} height={300} className="object-cover rounded-lg w-full h-full" priority />
                </div>
                <Link href='#' className="bg-blackLighter hover:bg-blackLightest space-y-7 bg-opacity-30 flex flex-col cursor-pointer h-44 rounded-lg p-4">
                    <div className="relative flex flex-row">
                        <h1 className="text-3xl text-white">EVENTS</h1>
                        <MdArrowForwardIos className="absolute right-0 text-white mt-2 w-4 h-4"/>
                    </div>
                    <p className="text-white">Attend real-world events and join the community to gain points and other prizes!</p>
                </Link>
                <Link href='#' className="bg-blackLighter hover:bg-blackLightest space-y-7 bg-opacity-30 flex flex-col cursor-pointer h-44 rounded-lg p-4">
                    <div className="relative flex flex-row">
                        <h1 className="text-3xl text-white">SURPRISE DROPS</h1>
                        <MdArrowForwardIos className="absolute right-0 text-white mt-2 w-4 h-4"/>
                    </div>
                    <p className="text-white">Join our discord and be a part of the BUB community to see when our surprise drops occur!</p>
                </Link>

            </div>
          </div>
          <div className="w-full h-full rounded-xl">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                className="rounded-xl"
            >
                <SwiperSlide>
                    <div className="relative w-full h-96 bg-black rounded-lg">
                        <Image
                            src="/newsletter.png"
                            alt="Slide 1"
                            width={300}
                            height={300}
                            className="object-cover brightness-50 w-full h-full rounded-lg"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-4xl font-apercuBold">Newsletter</h2>
                            <button className="mt-4 w-52 h-12 px-6 py-2 border border-gray-400 rounded-lg hover:border-gray-100 hover:bg-blackLight text-white">SIGN UP</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-96 bg-black rounded-lg">
                        <Image
                            src="/Bear.png"
                            alt="Slide 2"
                            width={300}
                            height={300}
                            className="object-cover blur-md brightness-75 w-full h-full rounded-lg"
                        />
                        <div className="absolute inset-0 grid grid-cols-2 justify-center items-center text-white p-10">
                            <div className="flex flex-col space-y-4 ml-10 mb-10">
                                <h3 className="text-sm">BUB EDITIONS</h3>
                                <h1 className="text-3xl">Start Your Collection</h1>
                                <p className="w-72">BUB Editions are digital collectibles that capture the essence of okay. Released in limited drops.</p>
                                <div className="flex space-x-4">
                                    <button 
                                        onClick={handleClaim} 
                                            disabled={claim} 
                                            className={`${claim ? 'mt-4 w-64 h-10 px-6 py-2 rounded-lg bg-blackLightest text-white'
                                                         : 
                                                         'mt-4 rounded-lg w-64 h-10 px-6 py-2 border border-gray-200 hover:border-gray-100 hover:bg-blackLight text-white'}`}>
                                            {claim ? 'CLAIMED' : 'CLAIM THIS BUB'}
                                    </button>
                                    <Link href="#" className="mt-4 text-center w-52 h-10 px-6 py-2 border border-gray-200 hover:border-gray-100 hover:bg-blackLight text-white rounded-lg">DISCOVER</Link>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative bg-black rounded-lg p-2 -mt-6">
                                    <Image
                                        src="/8101.png"
                                        width={200}
                                        height={200}
                                        alt="BUB 8101"
                                        priority
                                        className="relative z-10 rounded-md "
                                    />
                                    <div className="relative z-10 flex items-center font-apercuRegular justify-between w-full px-4 mb-2">
                                        <div className="text-left mt-2">
                                        <h1 className="text-white text-3xl">#8101</h1>
                                        <p className="text-gray-500 text-lg">Beat Up Bears</p>
                                        </div>
                                        <div className="text-right text-white bg-blackLighter rounded-md w-10 h-5 mb-4">
                                        <p className="text-center text-xs mt-1">SOL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-96 bg-black rounded-lg">
                        <Image
                            src="/NYBub.png"
                            alt="Slide 3"
                            width={300}
                            height={300}
                            className="object-cover blur-md brightness-75 w-full h-full rounded-lg"
                        />
                        <div className="absolute inset-0 grid grid-cols-2 justify-center items-center text-white p-10">
                            <div className="flex flex-col space-y-4 ml-10 mb-10">
                                <h3 className="text-sm">BUB EDITIONS</h3>
                                <h1 className="text-3xl">Teamwork makes the dream work</h1>
                                <p className="w-72">Play the game your own way. Beat Up Bears on 3!</p>
                                <div className="flex space-x-4">
                                    <button 
                                        onClick={handleClaimSecond} 
                                            disabled={claimSecond} 
                                            className={`${claimSecond ? 'mt-4 w-64 h-10 px-6 py-2 rounded-lg bg-blackLightest text-white'
                                                         : 
                                                         'mt-4 rounded-lg w-64 h-10 px-6 py-2 border border-gray-200 hover:border-gray-100 hover:bg-blackLight text-white'}`}>
                                            {claimSecond ? 'CLAIMED' : 'CLAIM THIS BUB'}
                                    </button>
                                    <Link href="#" className="mt-4 text-center w-52 h-10 px-6 py-2 border border-gray-200 hover:border-gray-100 hover:bg-blackLight text-white rounded-lg">DISCOVER</Link>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative bg-black rounded-lg p-2 -mt-6">
                                    <Image
                                        src="/6906.png"
                                        width={200}
                                        height={200}
                                        alt="6906 BUB"
                                        priority
                                        className="relative z-10 rounded-md "
                                    />
                                    <div className="relative z-10 flex items-center font-apercuRegular justify-between w-full px-4 mb-2">
                                        <div className="text-left mt-2">
                                        <h1 className="text-white text-3xl">#6906</h1>
                                        <p className="text-gray-500 text-lg">Beat Up Bears</p>
                                        </div>
                                        <div className="text-right text-white bg-blackLighter rounded-md w-10 h-5 mb-4">
                                        <p className="text-center text-xs mt-1">SOL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
           </div>
        </section>
      </div>
    </div>
  );
}