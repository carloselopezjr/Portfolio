"use client";

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Main() {
  return (
    <>
      <div className="flex justify-center pt-4 ">
        <h1 className="border-purple-900 border-4 bg-purp animation font-bold p-5 bg-Purp rounded-xl text-6xl hover:bg-purple-900 animation duration-500 ease-in-out hover:scale-110">
          <Typewriter words={["Yo, I'm Carlos."]} loop={1} typeSpeed={85} />
        </h1>
      </div>
      <div className="flex justify-center p-2">
      <Image
        className="border border-purple-900 rounded-xl"
        src="/images/vergil.gif"
        alt="vergil from devil may cry"
        width={625}
        height={700}
        />
      </div>
      <div className="text-3xl flex justify-center">
        <h2 className="hover:bg-purple-900 animation duration-500 ease-in-out hover:scale-110 border-2 rounded-xl border-purple-900 bg-purp font-semibold bg-Purp p-5">
          A Sophomore at The University of Central Florida
        </h2> 
      </div>
      
    </>
  );
}