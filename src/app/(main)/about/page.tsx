"use client";

import Skillbox from "../components/skillbox/sbox";
import { Typewriter } from "react-simple-typewriter";
import Listening from "../components/recently/scrobbles";

export default function About() {
  return (
    <div>
    <div className=" justify-center text-center lg:p-4 lg:mt-8">
      <h1 className="m-6 lg:m-0 text-4xl font-bold underline underline-offset-4">
        about me
      </h1>
      <div className="grid grid-cols-3">
        <div className="grid grid-rows-2 place-items-center">
          <h1 className="border w-32 h-32">
            hi
          </h1>
          <h1 className="border w-32 h-32">
            hi
          </h1>
        </div>
        <div className="text-left max-w-[460px] w-full justify-self-center leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum  rutrum egestas interdum. Morbi sem tortor, accumsan id pellentesque in,  dignissim in urna. 
          </p>
          <p>
            <br/>Quisque finibus, mauris vel egestas iaculis, urna  magna faucibus felis, ac lobortis quam quam nec quam. Phasellus  tincidunt lectus at mi elementum, eget luctus odio tincidunt.
          </p>
        </div>
        <Listening/>
      </div>
      <h1 className="m-6 lg:m-0 text-4xl font-bold underline underline-offset-4 drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]">
        skills
      </h1>
      <div>
        <Skillbox/>
      </div>
    </div>
    </div>
  );
}
