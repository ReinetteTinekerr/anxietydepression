'use client'
import Lottie from "lottie-react";
import bearAnimation from "../../../public/bear.json";
import { Pacifico } from 'next/font/google';

const rubik = Pacifico({ subsets: ['latin'], weight: "400" });

export default function ThankYou() {
    return <>
        <main className="h-screen flex items-center justify-center ">

            <div className="">
                <div className={rubik.className}>
                    <div className="animate-pulse text-xl md:text-3xl font-bold mb-4 text-center text-gray-600 uppercase">We have successfully received <br /> the information you provided.</div>
                </div>

                <Lottie animationData={bearAnimation} />
            </div>
        </main>
    </>
}