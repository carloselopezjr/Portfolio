"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Skillbox from "../components/skillbox/sbox";
import { Typewriter } from "react-simple-typewriter";
import Listening from "../components/recently/scrobbles";
import Image from "next/image";

export default function About() {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div>
    <div className=" justify-center text-center lg:px-4 lg:pt-4 lg:mt-8">
      <h1 className="m-6 lg:m-0 text-4xl font-bold underline underline-offset-4">
        <Typewriter words = {["about me"]} loop={1} typeSpeed={85} /> 
      </h1>
      <div className="mt-8 grid grid-cols-3 gap-8 items-center px-8">
        <div className="flex justify-center items-center relative">
          <div
            className="relative hover:scale-105 hover:transition-transform duration-300 ease-in-out"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <Image
              src="/images/Me2.jpg"
              alt="Pic of Me!"
              width={256}
              height={256}
              className="rounded-xl shadow-lg"
            />
            <div className={`absolute rounded-xl -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-2 text-sm whitespace-nowrap shadow-lg transition-opacity duration-300 ${showTooltip ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              That's me! Welcome to my page!
              
            </div>
          </div>
        </div>
        <div className="text-left min-w-[500px] w-full justify-self-center leading-relaxed">
          <p>
            Hi! I'm Carlos, a sophomore studying Computer Science at the <span className="font-semibold text-yellow-500 underline decoration-yellow-500">University of Central Florida</span>! I'm very passionate about web development, and I am currently working on building <span className="font-semibold text-red-500 underline decoration-red-500">Knights Records</span>' website, a student-run record label at UCF.
          </p>
          <p>
            <br/>I view web development as a form of art, where I'm able to blend my creativity with functionality. I love crafting visually appealing websites that provide a seamless user experience!
          </p>
        </div>
        <div className="ml-8">
          <Listening/>
        </div>
        
      </div>
      <h1 className="m-6 lg:m-10 text-4xl font-bold underline underline-offset-4 drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]">
          skills
        </h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        
        <div>
          <Skillbox/>
        </div>
      </motion.div>
    </div>
    </div>
  );
}
