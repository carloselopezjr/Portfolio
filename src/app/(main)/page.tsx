"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function main() {
  return (
    <>
      <div className="flex justify-center mt-24 p-5 ">
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

      <div className="flex justify-center items-center p-4 ">
        <div className="w-full max-w-3xl border-purple-900 bg-purp p-4 rounded-xl border-2 hover:bg-purple-900 animation duration-500 ease-in-out hover:scale-110">
          <h2 className="font-semibold text-xl">
            Portfolio Progress Reflection:
          </h2>
          <p className="text-lg p-4">
            {`Portfolio progress has been very smooth. I've been using Next.Js and
            Typescript to create it and I'm having fun expanding my knowledge on
            the framework. I'm honestly glad that this was an assignment as I
            started working on my portfolio earlier in Janury, I just never got
            around to completing it. As I've been doing my portfolio I've been
            reflecting on all of the things I've learned this semester,
            reminiscing over the time when I was "lost in the sauce" and had no
            idea how mapping in typescript worked,or the concept of a
            component...`}
          </p> 
          <p className="text-lg p-4">
            {`I like the design I've curated so far. Since this is my first
            attempt at a portfolio it is a bit minimalistic, but I like how it
            is right now, especially the color palette I've decided to go with.
            In my future versions I plan to add more "life" to it and make it
            feel more personal/unique to me. The differing fonts I've been using
            have added to the overall clarity of my page and I'm proud of myself
            for how it is coming out.`}
          </p>
          <p className="text-lg p-4">
            {`Throughout this process, I've strengthened my understanding of HTML,
            CSS, Typescript, and Next.Js. More specifically, I've begun to grasp
            the concept of mapping and overall site structure (padding, margins,
            borders etc.) The most confusing concept has been site structure, as
            it is visual heavy and relies on understanding how elements are
            positioned relative to one another. That being said however, a
            resource I've been taking full advantage of is the developer tools
            on Google Chrome. It allows me to see my site structure in real time
            and locate which element is affecting the layout.`}
          </p>
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
