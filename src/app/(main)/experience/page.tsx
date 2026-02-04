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
      </div>
      <ExperienceBox />
    </div>
  );
}
