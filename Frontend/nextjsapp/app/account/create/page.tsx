"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import { useSession } from "next-auth/react";


// this page reflects the account creation page that logs you in through twitter
export default function CreateAccount() {
  const { data: session, status } = useSession();
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (status === "authenticated") {
      setStep(2); // move to step 2 after logging in
    }
  }, [status]);


  const handleCompleteSetupClick = () => {
    setStep(3); // move to step 4 when Complete Account Setup is clicked
  };

  const calculateProgressHeight = (step: number) => {
    switch (step) {
      case 1:
        return "33%";
      case 2:
        return "66%";
      case 3:
        return "100%";
      default:
        return "0%";
    }
  };

  return (
    <>  
        <div className="flex lg:min-h-[93vh]">
            <div className="w-1/3 bg-blackDark">
                <div className="relative flex flex-col justify-center gap-6 text-white ml-10 mt-24">
                    <h1 className="text-3xl font-apercuBold ml-32">CREATE MOCK ACCOUNT</h1>
                    <HiOutlineBarsArrowDown className="ml-40 w-12 h-12" />
                    <div className="flex items-center space-x-4 ml-32">
                        <div className="h-20 w-1 bg-gray-600 relative rounded-lg overflow-hidden">
                            <div
                            className="bg-blue-200 absolute top-0 left-0 rounded-lg"
                            style={{ height: calculateProgressHeight(step), width: "100%" }}
                            >
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className={`text-md font-CaeciliaSemi ${step >= 1 ? 'text-blue-200' : 'text-gray-600'}`}>X / TWITTER SIGN UP</p>
                            <p className={`text-md font-CaeciliaSemi ${step > 3 ? 'text-blue-200' : 'text-gray-600'}`}>WELCOME TO YOUR ACCOUNT</p>
                        </div>                  
                    </div>
                    
                    {step === 3 && (
                      <button 
                        className="primary-btn bg-blackLight w-72 text-white border border-white hover:bg-black hover:text-white font-CaeciliaSemi absolute -bottom-56 ml-28" 
                        onClick={handleCompleteSetupClick}
                      >
                        COMPLETE ACCOUNT SETUP
                      </button>
                    )}
                </div>
            </div>
            <div className="w-3/4 bg-blue-200">
                <div className="grid grid-cols-2 gap-3">
                    {/* Text content section */}
                    <div className="flex flex-col justify-center gap-6 text-black ml-10 z-0">
                        {step === 1 && (
                          <>
                            <h1 className="text-5xl font-bold text-black font-apercuBold">NextJs Mock Account Creation</h1>
                            <h2 className="text-3xl font-apercuBold">X / TWITTER SIGN UP</h2>
                            <p className="text-lg font-apercuRegular">This small site's purpose is to demonstrate my skills with Nextjs and to create a mock NFT account.</p>
                            <ol className="list-decimal list-inside font-apercuRegular">
                                <li>An X(Twitter) account</li>
                            </ol>
                            <Link href="/login" className="primary-btn font-CaeciliaBold w-48">
                                SIGN UP WITH X
                            </Link>
                          </>
                        )}
                        {step === 2 && (
                          <>
                            <h1 className="text-5xl font-apercuBold">X / TWITTER SIGN UP</h1>
                            <p className="text-lg font-apercuRegular">For the full BUB experience, you&apos;ll need two things to create an account.</p>
                            <ol className="list-decimal list-inside font-apercuRegular">
                                <li>An X(Twitter) account</li>
                                <li>A wallet on Ethereum, Solana or Bitcoin (optional)</li>
                            </ol>
                            <div className="-mb-6 mt-4">
                                <h1 className="text-lg font-CaeciliaBold">ACCOUNT LINKED</h1>
                            </div>
                            <div className="flex flex-col gap-2 mt-4 ml-4">
                                {session?.user?.image && (
                                <Image
                                    src={session?.user?.image?.replace('_normal', '_400x400')}
                                    alt="Profile Image"
                                    width={100}
                                    height={100}
                                    className="rounded-full"
                                />
                                )}
                                <div>
                                <h2 className="text-4xl font-apercuBold uppercase">{session?.user?.name}</h2>
                                <p className="text-xl font-apercuRegular">@{session?.user?.name}</p>
                                </div>
                            </div>
                          </>
                        )}
                        
                        {step === 3 && (
                          <>
                            <h1 className="text-5xl font-apercuBold">WELCOME TO YOUR ACCOUNT</h1>
                            <p className=" font-apercuMedium text-lg">The ultimate web3 NFT experience awaits you!</p>
                            <Link 
                              href="/account"
                              className="primary-btn bg-blackLight h-12 w-72 text-white border border-white hover:bg-blackDark hover:text-white font-CaeciliaSemi "
                            >
                              EXPLORE YOUR ACCOUNT
                            </Link>
                          </>
                        )}
                    </div>
                    {/*  Image section */}
                    <div className="flex justify-center items-center relative z-0">
                        <div className="relative w-[80vh] h-[80vh]">
                            <Image
                            src="/nextlogo.png"
                            fill
                            sizes="auto"
                            style={{ objectFit: "cover" }}
                            alt="Bub Image"
                            priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}