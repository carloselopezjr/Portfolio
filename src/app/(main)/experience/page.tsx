"use client";

import { Typewriter } from "react-simple-typewriter";
import ExperienceBox from "../components/experiencebox/ebox";

export default function Experience() {
  return (
    <div>
      <div className="lg:m-8 lg:p-4 text-center">
        <h1 className="m-6 lg:m-0 text-[#e0eef8] text-4xl font-cinzel font-bold underline underline-offset-2 decoration-[#e0eef8] mb-4 drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]">
          <Typewriter words={["Experience"]} loop={1} typeSpeed={85} />
        </h1>
      </div>
      <ExperienceBox />
    </div>
  );
}
