"use client";

import { Typewriter } from "react-simple-typewriter";
import ExperienceBox from "../components/experiencebox/ebox";

export default function Experience() {
  return (
    <div>
      <div className="lg:m-8 lg:p-4 text-center">
        <h1 className="m-6 lg:m-0 text-4xl text-black font-bold underline underline-offset-2  mb-4">
          <Typewriter words={["leadership and experience"]} loop={1} typeSpeed={85} />
        </h1>
        <h2 className="mt-4 text-xs text-center text-black "> {/* Uhhh maybe */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </h2>
      </div>
      <ExperienceBox />
    </div>
  );
}
