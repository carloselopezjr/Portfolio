"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Main() {
  return (
    <div className="">
      <div className="font-garamond flex justify-center pt-4  ">
        <h1 className="border-[#3d5caa] border-2 backdrop-blur-lg animation font-semibold p-5 rounded-xl text-5xl hover:bg-gray-900 text-black animation duration-300 ease-in-out hover:scale-105">
          <Typewriter words={["Yo, I'm Carlos."]} cursor loop={1} typeSpeed={80} />
        </h1>
      </div>
      <div className="flex justify-center p-2">
      </div>
      <div className="text-3xl flex justify-center">
        <h2 className="backdrop-blur-md hover:bg-gray-900 text-blackx` animation duration-500 ease-in-out hover:scale-110 border-2 rounded-xl border-[#3d5caa] font-semibold p-5">
          A Freshman at The University of Central Florida
        </h2> 
      </div>
    </div>
  );
}