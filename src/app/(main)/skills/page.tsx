"use client";

import Skillbox from "../components/skillbox/page";
import { Typewriter } from "react-simple-typewriter";


export default function Skills() {
  return (
    <div className="mt-8 justify-center text-center p-4">
      <h1 className="font-cinzel text-4xl font-bold underline decoration-frost underline-offset-4 ">
        <Typewriter words={["Skills"]} loop={1} typeSpeed={85} />
      </h1>
      <h2 className="text-xl mt-4">
        {"Throughout my journey as a Student Engineer, I've learned quite a few skills! Here are a few of them:"}
      </h2>
       <Skillbox />
    </div>
  );
}
