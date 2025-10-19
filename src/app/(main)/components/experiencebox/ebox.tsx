import Image from "next/image";
import { motion } from "motion/react";

// Bold keywords
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

export default function ExperienceBox() {
  return (
    <div className="flex pb-8">
    <div className=" lgscale-110 w-[1000px] mx-auto">
      {experience.map((exp, index) => (
        <motion.div
          key={index}
          className="backdrop-blur-md border-[#6d63a8] rounded-xl border-2 p-4 m-4 shadow-lg hover:transition-all hover:duration-300 hover:ease-in-out hover:border-[#9990af]"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 1, ease: "easeInOut" }}
        >
          <div className="flex">
            <Image
              className="rounded-lg mr-2"
              src={exp.img}
              alt={exp.company}
              width={50}
              height={50}
            />
            <h1 className="text-2xl font-bold text-black">{exp.name}</h1>
          </div>
          <h2 className="text-xl lg:text-lg text-gray-900">
            
            {exp.company} | {exp.date}
          </h2>
          <h3 className="mt-2 text-gray-800 text-lg lg:text-base"> {exp.description} </h3>
        </motion.div>
      ))}
    </div>
    </div>
  );
}
