"use client";

import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function main() {
  return (
    <>
      <div className="flex justify-center mt-24 p-5 ">
        <h1 className="border-purple-900 border-4 bg-purp animation font-bold p-5 bg-Purp rounded-xl text-6xl hover:bg-purple-900 animation duration-500 ease-in-out hover:scale-110">
          <Typewriter words={["Yo...I'm Carlos!"]} loop={1} typeSpeed={85} />
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
            <li className=""> Computer Science Major </li>
            <li>
              Undergraduate Research Assistant under the Analytics, Decisions,
              and Control Lab at UCF
            </li>
            <li>
              Currently working on "Kmodo", a project for Knight Hacks' Project
              Launch Event!{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center p-4 ">
        <div className="border-purple-900 bg-purp p-4 rounded-xl border-2 hover:bg-purple-900 animation duration-500 ease-in-out hover:scale-110">
          <h2 className="font-semibold text-lg">
            {" "}
            Throughout my first year at UCF, I've learned a good amount of
            skills. Here are a few!
          </h2>
          <ul className="p-2">
            {" "}
            Coding Languages:
            <li> Python, C#, C, HTML, CSS, JavaScript, TypeScript</li>
          </ul>
          <ul className="p-2">
            {" "}
            Frameworks:
            <li> React, Next.js, Tailwind CSS</li>
          </ul>
          <ul className="p-2">
            {" "}
            Tools:
            <li> Git, GitHub, Visual Studio, Visual Studio Code, Figma</li>
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
