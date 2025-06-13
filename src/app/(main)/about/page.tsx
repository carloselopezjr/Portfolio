"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeInOut' }}>
      <div className="text-white lg:mt-8 lg:p-4 justify-center text-center">
        <h1 className="m-6 lg:m-0 font-cinzel text-4xl font-bold underline underline-offset-4 decoration-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]">
          About Me
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 justify-center mx-auto">
        <div className="lg:w-[450] lg:h-[450px] m-4  hover:transition-all hover:duration-300 hover:ease-in-out hover:border-[#292546]">
            <p className="text-2xl">
                {"Hi I'm Carlos, an undergraduate first-year student studying Computer Science at the University of Central Florida. I have a strong passion for software development and web design, and I heavily enjoy creating projects that challenge my skills and expand my knowledge. Reflecting over the last year and thinking back to how I only new python and a little bit of HTML, I can say that I have come a long way. I have learned so much about programming and I am excited to continue learning more. In addition to programming, I also enjoy listening to music, playing games, and getting fitted up."}
            </p>
        </div>
        <div className="w-[400px] h-[450px] m-4">
            <Image
                src="/images/me.jpg"
                alt="Picture of Carlos"
                width={450}
                height={450}
                className=""
                />
        </div>
    </div>
    </motion.div>
  );
}
