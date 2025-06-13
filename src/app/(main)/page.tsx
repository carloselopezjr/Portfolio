"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Listening from "./components/recently/scrobbles";
import TopAlbums from "./components/albums/tal";
import Link from "next/link";

export default function Main() {
  return (
    <div>
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

      {/*  ? "border-[#5148a4] hover:border-[#9990af] hover:shadow-[0_0_12px_#9990af]" */}

      <div className="lg:hidden grid grid-cols-2 text-center text-2xl pt-2 pb-6 place-items-center ">
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-36 border-2 rounded-xl backdrop-blur-md border-[#5148a4] hover:border-[#9990af] hover:shadow-[0_0_12px_#9990af] animation duration-300 ease-in-out"
        >
          Resume
        </a>

        <Link
          href="/projects"
          className="w-36 border-2 rounded-xl backdrop-blur-md border-[#5148a4] hover:border-[#9990af] hover:shadow-[0_0_12px_#9990af]"
        >
          Projects
        </Link>
      </div>

      <div className=" bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg lg:w-[58%] 2xl:w-[38%] lg:h-[450px] mx-auto lg:flex">
        <Listening />

        <TopAlbums />
      </div>
    </div>
  );
}
