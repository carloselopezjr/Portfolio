"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Listening from "./components/recently/scrobbles";
import TopAlbums from "./components/albums/tal";

export default function Main() {
  return (
    <div className="">
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

      <div className="scale-90 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg w-fit mx-auto flex">
        <div className="">
          <Listening />
        </div>
        <TopAlbums />
      </div>
    </div>
  );
}
