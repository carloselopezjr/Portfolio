"use client";

import Skillbox from "../components/skillbox/sbox";
import { Typewriter } from "react-simple-typewriter";


export default function Skills() {
  return (
    <div className="">
    <div className=" justify-center text-center lg:p-4 lg:mt-8">
      <h1 className="m-6 lg:m-0 font-cinzel text-4xl font-bold underline decoration-frost underline-offset-4 drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]">
        <Typewriter words={["Skills"]} loop={1} typeSpeed={85} />
      </h1>
       <Skillbox />
    </div>
    </div>
  );
}
