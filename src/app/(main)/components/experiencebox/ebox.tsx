import Image from "next/image";
import { motion } from "motion/react";

// Bold keywords in the future
const experience = [
  {
    name: "Research Assistant",
    img: "/images/ucf.webp",
    company: "UCF S.A.G.E Lab",
    date: "September 2025 - Present",
    description: "As part of my research, I’ve been exploring how AI coding agents are used in open-source software development by analyzing over 20,000 pull requests across 500+ repositories. Through data analysis and hands-on review of commits, I’ve found it really interesting to see how developers actually collaborate with AI tools in real projects!",
  },
  {
    name: "Hackathon Organizer",
    img: "/images/knighthacks.jpg",
    company: "Knight Hacks",
    date: "July 2025 - Present",
    description: "Over the summer, I joined the Knight Hacks team as a Hackathon Organizer, becoming the Collaborations Liaison where I serve as the main point of contact for RSOs and help plan Knight Hacks VIII — a hackathon that brings together over 1,000 participants. In this role, I work closely with officers across 10+ student organizations to organize workshops, manage logistics, and foster collaboration within the CECS community, building connections that strengthen UCF’s growing tech ecosystem."
  },
  {
    name: "Research Assistant",
    img: "/images/adc.png",
    company: "UCF Analytics, Decision, and Control Research Lab",
    date: "March 2025 - August 2025",
    description:
      "At the ADC Research Lab at UCF, I developed an addon for Microsoft Flight Simulator that integrated real-world flight data to simulate past flight paths for analysis and research into flight behavior. The project involved building a Windows application in C# using the SimConnect API to interface with the simulator, enabling aircraft repositioning, AI plane spawning, and dynamic coordinate updates for accurate visual replay of flight events.",
  },
  {
    name: "Project Launch First Place Winner",
    img: "/images/knighthacks.jpg",
    company: "Knight Hacks Project Launch",
    date: "January 2025 - April 2025",
    description: "During spring semester I participated in Knight Hack's Project Launch, a program designed to help students develop their own projects. Here, my team won for our project Kmodo, a platform that aims to streamline hackathon organization and participation.",
  },
  {
    name: "Best App Dev Award Winner",
    img: "/images/bitcamp.png",
    company: "Bitcamp",
    date: "April 2025",
    description: "This April, I traveled to Maryland to participate in Bitcamp, a hackathon at the University of Maryland. I was awarded Best App Dev for my team project Riffs, a creative music app that allows users to hum a melody, convert it into guitar tabs, edit it, and jam out in a Guitar Hero-style game-play experience.",
  },
  {
    name: "Undergraduate Student",
    img: "/images/ucf.webp",
    company: "University of Central Florida",
    date: "August 2024 - Present",
    description: "Currently in my second year of undergraduate studies at the University of Central Florida.",
  },
];

// To test out new layout, i am lazy right now
const temp = [
  {
    name: "Software Engineer Intern",
    img: "/images/ucf.webp",
    company: "UCF College Of Sciences",
    date: "Jan 2025 - Present",
    sentenceOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sentenceTwo: "Vestibulum  rutrum egestas interdum.",
    sentenceThree: "Morbi sem tortor, accumsan id pellentesque in,  dignissim in urna.",
  }
]

export default function ExperienceBox() {
  return (
    <div className="justify-center items-center text-center ">
      {temp.map((temp) => (
        <div key={temp.name} className="border-t-2 border-b-2 w-[650px] border-[#616E93] transition-all duration-300 ease-in-out text-left">
          <div className="bg-white/5 backdrop-blur-sm p-4 w-[635px] ml-2">
            <div className="grid grid-cols-2 w-48">
              <Image
                src={temp.img}
                alt={temp.name}
                width={75}
                height={75}
                className=""
              />
              <div className="min-w-[500px] mt-4">
                <h1 className="font-semibold text-[24px]">{temp.name}</h1>
                <h2 className="text-[13px] opacity-80">{temp.company} | {temp.date}</h2>
              </div>
              <div />
            </div>
            <ul className="list-outside list-disc ml-24 w-[400px]">
              <li className="text-sm">{temp.sentenceOne}</li>
              <li className="text-sm">{temp.sentenceTwo}</li>
              <li className="text-sm">{temp.sentenceThree}</li>
            </ul>
          </div>
        </div>
      ))}
      <div className="w-[50vw]">

      </div>
    </div>
  );
}
