"use client";

import ProjectBox from "../components/projectsbox/pbox";
import { Typewriter } from "react-simple-typewriter";




export default function Projects() {
    return (
        <div className="">
        <div className="text-white mt-8 p-4 justify-center text-center">
            <h1 className="font-cinzel text-4xl font-bold underline underline-offset-4 decoration-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]"> 
                <Typewriter words = {["Projects"]} loop={1} typeSpeed={85} /> 
            </h1>
            <ProjectBox/>
        </div>
        </div>
    
    );
}
