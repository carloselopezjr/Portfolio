"use client";

import { Typewriter } from "react-simple-typewriter";
import ExperienceBox from "../components/experiencebox/page";

export default function Experience() {
    return (
    <>
        <div className="mt-8 p-4 text-center">
            <h1 className="text-[#dfe6f3] text-4xl font-cinzel font-bold underline underline-offset-2 decoration-frost">
                <Typewriter words={["Experience"]} loop={1} typeSpeed={85} />
            </h1>
            <h2 className="text-xl m-4"> I have experience </h2>
        </div>
        <ExperienceBox />
    </>
    );
}