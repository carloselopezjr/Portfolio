"use client";

import ProjectBox from "../components/projectsbox/pbox";
import { Typewriter } from "react-simple-typewriter";




export default function Projects() {
    return (
        <div>
        <div className="m-8 text-white justify-center text-center ">
            <h1 className="m-6 lg:m-0 text-4xl font-bold underline underline-offset-4"> 
                <Typewriter words = {["projects"]} loop={1} typeSpeed={85} /> 
            </h1>
            <ProjectBox/>
        </div>
        </div>
    
    );
}
