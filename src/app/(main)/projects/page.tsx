"use client";

import ProjectBox from "../components/projectsbox/pbox";
import { Typewriter } from "react-simple-typewriter";
import {motion} from "motion/react";




export default function Projects() {
    return (
        <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}>
        <div className="text-white lg:mt-8 lg:p-4 justify-center text-center">
            <h1 className="m-6 lg:m-0 font-cinzel text-4xl font-bold underline underline-offset-4 decoration-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]"> 
                <Typewriter words = {["Projects"]} loop={1} typeSpeed={85} /> 
            </h1>
            <ProjectBox/>
        </div>
        </motion.div>
    
    );
}
