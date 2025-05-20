"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function main() {
  return (
    <>
      <div className="flex justify-center mt-8 p-4 ">
        <h1 className="border-purple-900 border-4 bg-purp animation font-bold p-5 bg-Purp rounded-xl text-6xl hover:bg-purple-900 animation duration-500 ease-in-out hover:scale-110">
          <Typewriter words={["Hi I'm Carlos!"]} loop={1} typeSpeed={85} />
        </h1>
      </div>
      <div className="text-3xl flex justify-center">
        <h2 className="hover:bg-purple-900 animation duration-500 ease-in-out hover:scale-110 border-2 rounded-xl border-purple-900 bg-purp font-semibold bg-Purp p-5">
          I&apos;m a first year at The University of Central Florida
        </h2> 
      </div>

      <div className="flex justify-center items-center p-4">
        <div className="border-purple-900 bg-purp p-4 rounded-xl border-2 hover:bg-purple-900 animation duration-500 ease-in-out hover:scale-110">
          <h3 className="font-bold text-2xl"> About me: </h3>
          <ul className="text-lg p-4">
            <li className="p-1"> Computer Science Major </li>
            <li className="p-1"> Relevant classes: Programming with Python, Programming with C, Calculus I, Calculus II </li>
            <li className="p-1">
              Undergraduate Research Assistant under the Analytics, Decisions,
              and Control Lab at UCF
            </li>
            <li className="p-1">Currently working on: My Portfolio!</li>
          </ul>
        </div>
      </div>

     <div className="flex justify-center mt-2">
        <div className="border-purple-900 bg-purp p-5 rounded-xl border-2 hover:bg-purple-900 animation duration-500 ease-in-out hover:scale-110">
          <h3 className="text-2xl font-bold mb-4 text-center">Technical Skills</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Programming Languages:</strong> Python, C, C#, HTML, CSS, JavaScript, TypeScript</li>
            <li><strong>Libraries/Frameworks:</strong> Tkinter, React, Next, Tailwind, Uploadthing, ClerkAuth</li>
            <li><strong>Tools/Platforms:</strong> Command Prompt, Windows, VS Code, IDLE, Vercel, Railway, Github, Git, CodeBlocks</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center p-4 ">
        <div className="border-purple-900 bg-purp p-4 rounded-xl border-2 hover:bg-purple-900 animation duration-500 ease-in-out">
          <p>
            As I continue my journey in UCF, I am looking forward to learning
            more about software development and computer science. I am also
            looking forward to meeting new people and making new friends!
          </p>
        </div>
      </div>
    </>
  );
}
