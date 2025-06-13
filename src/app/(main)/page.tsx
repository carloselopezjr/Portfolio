"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Listening from "./components/recently/scrobbles";
import TopAlbums from "./components/albums/tal";
export default function Main() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="font-garamond flex justify-center pt-4  ">
        <h1 className="underline underline-offset-4 animation font-semibold p-5 rounded-xl text-5xl text-white animation duration-300 ease-in-out hover:scale-105 ">
          <Typewriter
            words={["Yo, I'm Carlos."]}
            cursor
            loop={1}
            typeSpeed={80}

          />
        </h1>
      </div>

      <div className=" bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg lg:w-[58%] lg:h-[450px] mx-auto lg:flex gap-2">
        
          <Listening />

        <TopAlbums />
      </div>
    </div>
  );
}
