"use client";

import Skillbox from "../components/skillbox/sbox";
import { Typewriter } from "react-simple-typewriter";


export default function Skills() {
  return (
    <div className="">
    <div className="mt-8 justify-center text-center p-4">
      <h1 className="font-cinzel text-4xl font-bold underline decoration-frost underline-offset-4 ">
        <Typewriter words={["Skills"]} loop={1} typeSpeed={85} />
      </h1>
       <Skillbox />
    </div>
    </div>
  );
}
