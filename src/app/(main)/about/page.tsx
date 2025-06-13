"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-white text-center mb-8 p-4">
        <h1 className="font-cinzel text-4xl font-bold underline underline-offset-4 decoration-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]">
          About Me
        </h1>
      </div>
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="lg:w-1/2 text-white border-2 border-[#232234] backdrop-blur-md p-6 rounded-lg shadow-lg">
          <p className="text-xl leading-relaxed">
            {
              "Hi, I'm Carlos, an undergraduate first-year student studying Computer Science at the University of Central Florida. I have a strong passion for software development and web design, and I enjoy creating projects that challenge my skills and expand my knowledge. Reflecting over the last year and thinking back to how I only knew Python and a little bit of HTML, I can say that I have come a long way. I have learned so much about programming and I am excited to continue learning more. In addition to programming, I also enjoy listening to music, playing games, and getting fitted up."
            }
          </p>
        </div>

        <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative overflow-hidden shadow-lg">
          <Image
            src="/images/me.jpg"
            alt="Picture of Carlos"
            width={350}
            height={350}
            className="mt-4"
          />
        </div>
      </div>
    </motion.div>
    </div>
  );
}
