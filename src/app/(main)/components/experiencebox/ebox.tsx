import Image from "next/image";
import { motion } from "motion/react";

const experience = [
  {
    name: "Hackathon Organizer",
    img: "/images/KnightHacks.jpg",
    company: "Knight Hacks",
    date: "July 2025 - Present",
    description: "Over the summer I joined Knight Hacks' team as a Hackathon Organizer! In this role I will be working alongside the Knight Hacks team to help orchestrate Knight Hacks VIII, a hackathon encouraging creativity, community, and growth."
  },
  {
    name: "Undergraduate Research Assistant",
    img: "/images/adc.png",
    company: "UCF ADC Research Lab",
    date: "March 2025 - Present",
    description:
      "Working in the ADC Research Lab at UCF, my research focuses on developing an addon to Microsoft Flight Simulator that integrates real-world flight data to simulate past flight paths within the simulator environment. The goal is to enable accurate visual reconstruction of real flight events, providing a powerful tool for analysis and research into flight behavior. ",
  },
  {
    name: "Project Launch First Place Winner",
    img: "/images/KnightHacks.jpg",
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
    description: "Currently in my first year of undergraduate studies at the University of Central Florida.",
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
            {" "}
            {exp.company} | {exp.date}{" "}
          </h2>
          <h3 className="mt-2 text-gray-800 text-lg lg:text-base"> {exp.description} </h3>
        </motion.div>
      ))}
    </div>
    </div>
  );
}
