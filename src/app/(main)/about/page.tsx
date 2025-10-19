"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-white text-center mb-8 p-4">
        <h1 className="m-4 font-cinzel text-4xl font-bold underline underline-offset-4 decoration-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]">
          <Typewriter
            words={["About Me"]}
            loop={1}
            typeSpeed={80}
          >
          </Typewriter>
        </h1>
      </div>
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative overflow-hidden shadow-lg hover: ">
          <Image
            src="/images/Me2.jpg"
            alt="Picture of Carlos"
            width={350}
            height={350}
            className="mt-8"
          />
        </div>
        <div className="lg:w-1/2 text-white border-2 border-[#232234] backdrop-blur-md p-4 mb-4 rounded-lg">
          <p className="text-xl leading-relaxed">
            {
              "Hi, I'm Carlos, an undergraduate student studying Computer Science at the University of Central Florida. I have a strong passion for web development and creative software projects, which I view as a form of art! Reflecting over my journey and thinking back to when I didn't know what a div was, I can proudly say that I have come a long way. I have learned so much about programming and I am excited to continue learning more. Beyond coding, I also really enjoy listening to music, playing games, and getting fitted up."
            }
          </p>
        </div>
        
      </div>
    </motion.div>
    </div>
  );
}
