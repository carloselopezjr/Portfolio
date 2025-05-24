"use client";

import { Typewriter } from "react-simple-typewriter";

export default function Experience() {
    return (
        <div className="mt-8 p-4 flex justify-center">
            <h1 className="text-4xl font-cinzel font-bold underline underline-offset-2 decoration-frost">
                <Typewriter words={["Experience"]} loop={1} typeSpeed={85} />
            </h1>
        </div>
    );
}