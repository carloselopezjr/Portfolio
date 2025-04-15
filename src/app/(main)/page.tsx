"use client";

import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function main() {
  return (
    <>
      <div className="flex justify-center mt-24 p-5">
        <h1 className="animation font-bold p-5 bg-Purp rounded-xl text-6xl">
          <Typewriter
            words={["Yo...I'm Carlos!"]}
            loop={1}
            typeSpeed={85}
          />
        </h1>
      </div>
      <div className="m-4 text-4xl flex justify-center">
        <h2 className="font-semibold rounded-xl bg-Purp p-5">
          I&apos;m a first year at twoeufhweufhweiufhweiufhweiuhfiuwehdckwebhkjwhfkjwhefkjwheciuhewiuchwekjfhhe University of Central Florida
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <Image
          className="mb-8 hover:animate-spin"
          src="/testing.jpg"
          width={150}
          height={200}
          alt="ok"
        />
      </div>
      <div className="flex text-xl justify-center">
        <p>Write some stuff about me here</p>
      </div>
      <div className="flex justify-center">
        <Image
          className=""
          src="/tercharry.png"
          width={200}
          height={200}
          alt="Guide Terraria"
        />
      </div>
    </>
  );
}
