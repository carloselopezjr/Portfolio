"use client";

import { Typewriter } from "react-simple-typewriter";
import ExperienceBox from "../components/experiencebox/ebox";

export default function Experience() {
  return (
    <div className="">
      <div className="m-8 p-4 text-center">
        <h1 className="text-[#dfe6f3] text-4xl font-cinzel font-bold underline underline-offset-2 decoration-frost mb-4">
          <Typewriter words={["Experience"]} loop={1} typeSpeed={85} />
        </h1>
      </div>
      <ExperienceBox />
    </div>
  );
}
