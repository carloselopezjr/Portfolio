"use client";

import ProjectBox from "../components/projectsbox/page";
import { Typewriter } from "react-simple-typewriter";




export default function Projects() {
    return (
        <div className="text-[#dfe6f3] mt-8 p-4 justify-center text-center">
            <h1 className="font-cinzel text-4xl font-bold underline underline-offset-4 decoration-frost"> 
                <Typewriter words = {["Projects"]} loop={1} typeSpeed={85} /> 
            </h1>
            <h2 className="text-lg m-4 opacity-90"> 
                {"Here are some projects i've worked on."}
            </h2>
            <ProjectBox/>
        </div>
    
    );
}
