import {options} from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
import Profile from "./profile"
import Image from "next/image";

export default async function AccountHome() {
    const session = await getServerSession(options);
    return (
        <>
            {session ? (
                <Profile user={session?.user} pagetype={"AccountHome"} />
            ) : (
                <div className="min-h-[750px] bg-blackLight flex flex-col items-center ">
                    <h1 className="text-5xl font-apercuBold text-white mt-36 ml-28">Something went wrong... </h1>
                    <Image src='/HoneyTeddyBear.png' width={600} height={600} alt="beat up bear" className="ml-28 -mt-28"/>
                </div>
            )
            }
        </>
    )
}