"use client";

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Main() {
  return (
    <>
      <div className="font-garamond flex justify-center pt-4 ">
        <h1 className="border-[#3d5caa] border-2 bg-[#2e1f47] animation font-semibold p-5 rounded-xl text-5xl hover:bg-gray-900 text-[#dfe6f3] animation duration-300 ease-in-out hover:scale-105">
          <Typewriter words={["Yo, I'm Carlos."]} cursor loop={1} typeSpeed={80} />
        </h1>
      </div>
      <div className="flex justify-center p-2">
      <Image
        className="border border-black rounded-xl"
        src="/images/vergil.gif"
        alt="vergil from devil may cry"
        width={625}
        height={700}
        unoptimized
        />
      </div>
      <div className="text-3xl flex justify-center">
        <h2 className="text-[#8eb6d8] hover:bg-gray-900 animation duration-500 ease-in-out hover:scale-110 border-2 rounded-xl border-[#3d5caa] bg-[#2e1f47] font-semibold bg-Purp p-5">
          A Freshman at The University of Central Florida
        </h2> 
      </div>
      
    </>
  );
}